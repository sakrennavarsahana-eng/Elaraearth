import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'data', 'db.json');
const PORT = process.env.PORT || 4000;

const app = express();

// Enable secure HTTP headers using Helmet
app.use(helmet());

// Configure CORS - restrict origins and support essential headers
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Vite dev servers
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Memory store for active admin session tokens
const activeSessions = new Set();

const ADMIN_CREDENTIALS = {
  username: 'elara@2810',
  password: 'ElaraEarth@2810',
};

// Rate Limiters
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 300 requests per window
  message: { error: 'Too many requests from this IP, please try again later.' }
});

const checkoutLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 orders per hour to prevent order spamming
  message: { error: 'Order limit exceeded. Please try again after an hour.' }
});

const adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 admin login attempts per 15 minutes
  message: { error: 'Too many login attempts. Please try again after 15 minutes.' }
});

app.use(globalLimiter);

// File system helper functions
const loadDB = async () => {
  try {
    const content = await readFile(DB_PATH, 'utf8');
    const data = JSON.parse(content);
    return {
      products: data.products || [],
      orders: data.orders || [],
      reviews: data.reviews || []
    };
  } catch (error) {
    return { products: [], orders: [], reviews: [] };
  }
};

const saveDB = async (data) => {
  await writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
};

// Security Helper: Sanitize string inputs to prevent XSS
const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
};

const generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Secure Authentication Middleware
const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access denied: No token provided' });
  }
  const token = authHeader.split(' ')[1];
  if (!activeSessions.has(token)) {
    return res.status(401).json({ error: 'Access denied: Session invalid or expired' });
  }
  next();
};

// Public Routes

// Get all products
app.get('/api/products', async (req, res) => {
  const db = await loadDB();
  res.json(db.products);
});

// Get reviews (with optional productId filter)
app.get('/api/reviews', async (req, res) => {
  const db = await loadDB();
  const { productId } = req.query;
  if (productId) {
    const filtered = db.reviews.filter(r => r.productId === productId);
    return res.json(filtered);
  }
  res.json(db.reviews);
});

// Submit a customer review (rate-limited and sanitized)
app.post('/api/reviews', async (req, res) => {
  const db = await loadDB();
  const { productId, customerName, rating, title, comment } = req.body;

  if (!productId || !customerName || typeof rating !== 'number' || !title || !comment) {
    return res.status(400).json({ error: 'Please provide all required review fields.' });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be between 1 and 5.' });
  }

  // Ensure product exists
  const productExists = db.products.some(p => p.id === productId);
  if (!productExists) {
    return res.status(404).json({ error: 'Product not found.' });
  }

  const newReview = {
    id: `review-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`,
    productId: sanitizeString(productId),
    customerName: sanitizeString(customerName),
    rating: Math.floor(rating),
    title: sanitizeString(title),
    comment: sanitizeString(comment),
    createdAt: new Date().toISOString()
  };

  db.reviews.push(newReview);
  await saveDB(db);
  res.status(201).json(newReview);
});

// Submit a purchase order (COD, Karnataka restricted, rate-limited, fully validated)
app.post('/api/orders', checkoutLimiter, async (req, res) => {
  const db = await loadDB();
  const { customer, items, subtotal, shipping, total } = req.body;

  if (!customer || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Invalid order structure or empty cart.' });
  }

  const { name, email, phone, address, pincode, state } = customer;

  // Enforce required fields
  if (!name || !name.trim()) return res.status(400).json({ error: 'Name is required.' });
  if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }
  if (!phone || !phone.trim() || !/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: 'A valid 10-digit contact number is required.' });
  }
  if (!address || !address.trim()) return res.status(400).json({ error: 'Shipping address is required.' });

  // Karnataka state validation
  if (!state || state.trim().toLowerCase() !== 'karnataka') {
    return res.status(400).json({ error: 'Delivery is strictly limited to Karnataka state.' });
  }

  // Karnataka pincode validation (Indian pincodes in Karnataka start with 56, 57, 58, 59)
  if (!pincode || !pincode.trim() || !/^(56|57|58|59)\d{4}$/.test(pincode)) {
    return res.status(400).json({ error: 'Shipping is restricted to Karnataka. Pincode must start with 56, 57, 58, or 59.' });
  }

  // Sanitize input values before saving
  const sanitizedCustomer = {
    name: sanitizeString(name),
    email: sanitizeString(email),
    phone: sanitizeString(phone),
    address: sanitizeString(address),
    pincode: sanitizeString(pincode),
    state: 'Karnataka'
  };

  const newOrder = {
    id: `order-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`,
    customer: sanitizedCustomer,
    items: items.map(item => ({
      id: sanitizeString(item.id),
      title: sanitizeString(item.title),
      price: Number(item.price),
      qty: Math.max(1, Number(item.qty))
    })),
    subtotal: Number(subtotal),
    shipping: Number(shipping),
    total: Number(total),
    status: 'Pending', // Default status for new orders
    createdAt: new Date().toISOString()
  };

  db.orders = [newOrder, ...(db.orders || [])];
  await saveDB(db);

  res.status(201).json({ success: true, orderId: newOrder.id });
});

// Admin Authentication Route
app.post('/api/admin/login', adminLoginLimiter, (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    const token = generateToken();
    activeSessions.add(token);
    res.json({ success: true, token });
  } else {
    res.status(401).json({ error: 'Invalid admin credentials' });
  }
});

// Secured Administrative Routes

// Logout
app.post('/api/admin/logout', requireAdmin, (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  activeSessions.delete(token);
  res.json({ success: true });
});

// Get orders list
app.get('/api/admin/orders', requireAdmin, async (req, res) => {
  const db = await loadDB();
  res.json(db.orders);
});

// Update order status
app.put('/api/admin/orders/:id/status', requireAdmin, async (req, res) => {
  const db = await loadDB();
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid order status value.' });
  }

  let updated = false;
  db.orders = db.orders.map(order => {
    if (order.id === id) {
      updated = true;
      return { ...order, status };
    }
    return order;
  });

  if (!updated) {
    return res.status(404).json({ error: 'Order not found.' });
  }

  await saveDB(db);
  res.json({ success: true });
});

// Add a soap product
app.post('/api/admin/products', requireAdmin, async (req, res) => {
  const db = await loadDB();
  const { title, category, price, image, description, ingredients, benefits } = req.body;

  if (!title || !category || typeof price !== 'number' || !image || !description || !ingredients || !benefits) {
    return res.status(400).json({ error: 'All fields (title, category, price, image, description, ingredients, benefits) are required.' });
  }

  const newProduct = {
    id: `soap-${Date.now()}`,
    title: sanitizeString(title),
    category: sanitizeString(category),
    price: Number(price),
    image: sanitizeString(image),
    description: sanitizeString(description),
    ingredients: sanitizeString(ingredients),
    benefits: sanitizeString(benefits)
  };

  db.products = [newProduct, ...(db.products || [])];
  await saveDB(db);
  res.status(201).json(newProduct);
});

// Edit a soap product
app.put('/api/admin/products/:id', requireAdmin, async (req, res) => {
  const db = await loadDB();
  const { id } = req.params;
  const { title, category, price, image, description, ingredients, benefits } = req.body;

  let exists = db.products.some(p => p.id === id);
  if (!exists) {
    return res.status(404).json({ error: 'Product not found' });
  }

  db.products = db.products.map(product => {
    if (product.id === id) {
      return {
        ...product,
        title: title ? sanitizeString(title) : product.title,
        category: category ? sanitizeString(category) : product.category,
        price: typeof price === 'number' ? price : product.price,
        image: image ? sanitizeString(image) : product.image,
        description: description ? sanitizeString(description) : product.description,
        ingredients: ingredients ? sanitizeString(ingredients) : product.ingredients,
        benefits: benefits ? sanitizeString(benefits) : product.benefits
      };
    }
    return product;
  });

  await saveDB(db);
  res.json({ success: true });
});

// Delete a soap product
app.delete('/api/admin/products/:id', requireAdmin, async (req, res) => {
  const db = await loadDB();
  const { id } = req.params;

  const originalLength = db.products.length;
  db.products = db.products.filter(product => product.id !== id);

  if (db.products.length === originalLength) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Clean up reviews associated with this product as well
  db.reviews = db.reviews.filter(review => review.productId !== id);

  await saveDB(db);
  res.json({ success: true });
});

// Delete/moderate a customer review
app.delete('/api/admin/reviews/:id', requireAdmin, async (req, res) => {
  const db = await loadDB();
  const { id } = req.params;

  const originalLength = db.reviews.length;
  db.reviews = db.reviews.filter(review => review.id !== id);

  if (db.reviews.length === originalLength) {
    return res.status(404).json({ error: 'Review not found' });
  }

  await saveDB(db);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Elara Earth backend running securely on http://localhost:${PORT}`);
});

