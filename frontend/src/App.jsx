import { useEffect, useMemo, useState } from 'react';
import logoImage from './assets/logo.png';

const STORAGE_KEYS = {
  CART: 'elara-earth-cart',
  ADMIN_TOKEN: 'elara-earth-admin-token',
  EXPLORED_PRODUCTS: 'elara-earth-explored',
};

function App() {
  const [view, setView] = useState('shop');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [adminToken, setAdminToken] = useState('');
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Checkout Form State
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    state: 'Karnataka'
  });

  // Admin Tab & Form States
  const [adminTab, setAdminTab] = useState('dashboard');
  const [editProduct, setEditProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    title: '',
    category: '',
    price: '',
    image: '',
    description: '',
    ingredients: '',
    benefits: ''
  });

  // Immersive Product Drawer State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviewForm, setReviewForm] = useState({
    customerName: '',
    rating: 5,
    title: '',
    comment: ''
  });

  // Gamified "Ritual Explorer" tracking
  const [exploredProducts, setExploredProducts] = useState([]);

  // Fetch initial data
  useEffect(() => {
    // Load local storage states
    const storedCart = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || '[]');
    const storedToken = localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN) || '';
    const storedExplored = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXPLORED_PRODUCTS) || '[]');

    setCart(Array.isArray(storedCart) ? storedCart : []);
    setAdminToken(storedToken);
    setExploredProducts(Array.isArray(storedExplored) ? storedExplored : []);

    fetchProducts();
    fetchReviews();

    // Browser navigation routing
    const path = window.location.pathname;
    if (path === '/admin') {
      setView(storedToken ? 'admin' : 'adminLogin');
    } else if (path === '/cart') {
      setView('cart');
    } else if (path === '/checkout') {
      setView('checkout');
    } else {
      setView('shop');
    }

    const handlePopState = () => {
      const newPath = window.location.pathname;
      if (newPath === '/admin') {
        setView(localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN) ? 'admin' : 'adminLogin');
      } else if (newPath === '/cart') {
        setView('cart');
      } else if (newPath === '/checkout') {
        setView('checkout');
      } else {
        setView('shop');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update localStorage and browser history on state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EXPLORED_PRODUCTS, JSON.stringify(exploredProducts));
  }, [exploredProducts]);

  useEffect(() => {
    if (adminToken) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_TOKEN, adminToken);
    } else {
      localStorage.removeItem(STORAGE_KEYS.ADMIN_TOKEN);
    }
  }, [adminToken]);

  useEffect(() => {
    if (view === 'adminLogin' || view === 'admin') {
      window.history.replaceState(null, '', '/admin');
    } else if (view === 'cart') {
      window.history.replaceState(null, '', '/cart');
    } else if (view === 'checkout') {
      window.history.replaceState(null, '', '/checkout');
    } else {
      window.history.replaceState(null, '', '/');
    }
    // Scroll to top on view changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Load orders only if admin token is present
  useEffect(() => {
    if (adminToken && (view === 'admin')) {
      fetchOrders();
    }
  }, [adminToken, view]);

  // Fetch functions
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/admin/orders', {
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      } else if (res.status === 401) {
        handleAdminLogout();
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  // Product categories list
  const categories = useMemo(() => {
    const list = Array.from(new Set(products.map((p) => p.category)));
    return ['All', ...list];
  }, [products]);

  // Calculate review stats for products
  const productRatingStats = useMemo(() => {
    const stats = {};
    products.forEach(p => {
      const prodReviews = reviews.filter(r => r.productId === p.id);
      if (prodReviews.length === 0) {
        stats[p.id] = { avg: 5.0, count: 0 }; // Default to 5 stars for new products
      } else {
        const sum = prodReviews.reduce((acc, r) => acc + r.rating, 0);
        stats[p.id] = {
          avg: Number((sum / prodReviews.length).toFixed(1)),
          count: prodReviews.length
        };
      }
    });
    return stats;
  }, [products, reviews]);

  // Exclude or include products matching category and search queries
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                            p.description.toLowerCase().includes(search.toLowerCase()) ||
                            p.ingredients?.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, products, search]);

  // Cart total calculations
  const cartTotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  
  // Gamified explorer discount: 10% off order subtotal if all 12 soaps have been explored
  const isExplorerRewardUnlocked = useMemo(() => {
    return products.length > 0 && exploredProducts.length >= products.length;
  }, [exploredProducts, products]);

  const discountAmount = useMemo(() => {
    return isExplorerRewardUnlocked ? Math.round(cartTotal * 0.1) : 0;
  }, [cartTotal, isExplorerRewardUnlocked]);

  const shipping = (cartTotal - discountAmount) > 500 ? 0 : cart.length > 0 ? 75 : 0;
  const orderTotal = cartTotal - discountAmount + shipping;

  // Event handlers
  const handleAddToCart = (product, quiet = false) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    if (!quiet) {
      setMessage(`Added ${product.title} to your bathing ritual bag!`);
      setTimeout(() => setMessage(''), 2500);
    }
  };

  const handleQuantityChange = (productId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => (item.id === productId ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
        .filter((item) => item.qty > 0);
    });
  };

  const handleRemoveItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Open product detail drawer & log exploration
  const handleExploreProduct = (product) => {
    setSelectedProduct(product);
    if (!exploredProducts.includes(product.id)) {
      const updatedExplored = [...exploredProducts, product.id];
      setExploredProducts(updatedExplored);
      // Give a tiny hint when they progress
      if (updatedExplored.length === products.length) {
        setSuccess("🎉 Ritual Explorer Reward Unlocked! You've learned about all our soaps. A 10% discount has been applied to your cart!");
        setTimeout(() => setSuccess(''), 6000);
      }
    }
  };

  // Submit customer review
  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!reviewForm.customerName.trim() || !reviewForm.title.trim() || !reviewForm.comment.trim()) {
      setError('Please fill in all review fields.');
      setTimeout(() => setError(''), 3000);
      return;
    }

    const payload = {
      productId: selectedProduct.id,
      customerName: reviewForm.customerName,
      rating: reviewForm.rating,
      title: reviewForm.title,
      comment: reviewForm.comment
    };

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const newReview = await res.json();
        setReviews(prev => [...prev, newReview]);
        setReviewForm({ customerName: '', rating: 5, title: '', comment: '' });
        setSuccess('Thank you! Your verified customer review has been added.');
        setTimeout(() => setSuccess(''), 3500);
      } else {
        const errData = await res.json();
        setError(errData.error || 'Failed to submit review.');
        setTimeout(() => setError(''), 3000);
      }
    } catch (err) {
      setError('Network error, review could not be posted.');
      setTimeout(() => setError(''), 3000);
    }
  };

  // Submit checkout order
  const handleCheckout = async (e) => {
    e.preventDefault();
    setError('');

    const { name, email, phone, address, pincode, state } = checkoutForm;

    // Frontend Validations (Matches Backend Checks for Maximum Security)
    if (!name.trim()) return setError('Please enter your full name.');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setError('Please enter a valid email address.');
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      return setError('Please enter a valid 10-digit mobile number.');
    }
    if (!address.trim()) return setError('Please enter your complete delivery address.');
    if (state !== 'Karnataka') {
      return setError('We currently ship exclusively within Karnataka state.');
    }
    if (!pincode.trim() || !/^(56|57|58|59)\d{4}$/.test(pincode)) {
      return setError('Delivery restricted to Karnataka. Pincode must start with 56, 57, 58, or 59.');
    }

    const orderPayload = {
      customer: { name, email, phone, address, pincode, state: 'Karnataka' },
      items: cart,
      subtotal: cartTotal,
      shipping,
      total: orderTotal
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
      
      const data = await res.json();
      if (res.ok && data.success) {
        setCart([]);
        setCheckoutForm({ name: '', email: '', phone: '', address: '', pincode: '', state: 'Karnataka' });
        setView('shop');
        setSuccess(`✨ Order confirmed! Order ID: ${data.orderId}. Your soaps are preparing for dispatch via Cash on Delivery.`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError(data.error || 'Checkout failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Failed to place order.');
    }
  };

  // Admin authenticate
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUser, password: loginPass })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAdminToken(data.token);
        setLoginUser('');
        setLoginPass('');
        setView('admin');
        setAdminTab('dashboard');
        setSuccess('Welcome, Admin. Session secure.');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Invalid credentials.');
      }
    } catch (err) {
      setError('Error logging in.');
    }
  };

  const handleAdminLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });
    } catch (err) {
      console.error(err);
    }
    setAdminToken('');
    localStorage.removeItem(STORAGE_KEYS.ADMIN_TOKEN);
    setView('shop');
  };

  // Update order status on backend
  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
        setSuccess('Order status updated successfully.');
        setTimeout(() => setSuccess(''), 2000);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to update order status.');
      }
    } catch (err) {
      setError('Error updating order.');
    }
  };

  // Moderate reviews (Delete)
  const handleDeleteReview = async (reviewId) => {
    if (!window.confirm('Delete this customer review?')) return;
    try {
      const res = await fetch(`/api/admin/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });
      if (res.ok) {
        setReviews(prev => prev.filter(r => r.id !== reviewId));
        setSuccess('Review deleted successfully.');
        setTimeout(() => setSuccess(''), 2000);
      } else {
        setError('Failed to delete review.');
      }
    } catch (err) {
      setError('Network error.');
    }
  };

  // Add/Edit Soap Product
  const handleProductSave = async (e) => {
    e.preventDefault();
    const priceNum = Number(productForm.price);
    if (!productForm.title || !productForm.category || !productForm.image || !productForm.description || !productForm.ingredients || !productForm.benefits || isNaN(priceNum) || priceNum <= 0) {
      setError('Please fill in all product fields with valid values.');
      return;
    }

    const payload = {
      title: productForm.title,
      category: productForm.category,
      price: priceNum,
      image: productForm.image,
      description: productForm.description,
      ingredients: productForm.ingredients,
      benefits: productForm.benefits
    };

    const url = editProduct ? `/api/admin/products/${editProduct}` : '/api/admin/products';
    const method = editProduct ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSuccess(editProduct ? 'Product updated successfully.' : 'Product added successfully.');
        fetchProducts();
        resetProductForm();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const errData = await res.json();
        setError(errData.error || 'Failed to save product.');
      }
    } catch (err) {
      setError('Error saving product.');
    }
  };

  const handleProductDelete = async (productId) => {
    if (!window.confirm('Delete this soap product and its reviews?')) return;
    try {
      const res = await fetch(`/api/admin/products/${productId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });
      if (res.ok) {
        setSuccess('Product removed.');
        fetchProducts();
        fetchReviews();
        setTimeout(() => setSuccess(''), 2000);
      } else {
        setError('Failed to delete product.');
      }
    } catch (err) {
      setError('Network error.');
    }
  };

  const openEditProduct = (product) => {
    setEditProduct(product.id);
    setProductForm({
      title: product.title,
      category: product.category,
      price: product.price,
      image: product.image,
      description: product.description,
      ingredients: product.ingredients || '',
      benefits: product.benefits || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetProductForm = () => {
    setEditProduct(null);
    setProductForm({ title: '', category: '', price: '', image: '', description: '', ingredients: '', benefits: '' });
  };

  // Rendering Helper: Stars
  const renderStars = (rating) => {
    const stars = [];
    const floor = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floor) {
        stars.push(<span key={i} className="star-icon full">★</span>);
      } else if (i - rating < 1) {
        stars.push(<span key={i} className="star-icon half">★</span>);
      } else {
        stars.push(<span key={i} className="star-icon empty">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="elara-container">
      
      {/* Toast Notifications */}
      {message && <div className="toast success-toast">{message}</div>}
      {success && <div className="toast success-toast banner-toast">{success}</div>}
      {error && <div className="toast error-toast">{error}</div>}

      {/* Main Header */}
      <header className="elara-header">
        <div className="header-logo-section" onClick={() => setView('shop')}>
          <img src={logoImage} className="brand-logo" alt="Elara Earth Logo" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className="brand-text-block">
            <span className="brand-main">Elara Earth</span>
            <span className="brand-tagline">PURE BY NATURE</span>
          </div>
        </div>
        
        <nav className="elara-nav">
          <button className={view === 'shop' ? 'nav-link active' : 'nav-link'} onClick={() => setView('shop')}>
            Soaps
          </button>
          <button className={view === 'cart' ? 'nav-link active' : 'nav-link'} onClick={() => setView('cart')}>
            Ritual Bag
            {cart.length > 0 && <span className="cart-badge">{cart.reduce((sum, i) => sum + i.qty, 0)}</span>}
          </button>
          {adminToken ? (
            <button className={view === 'admin' ? 'nav-link active' : 'nav-link'} onClick={() => setView('admin')}>
              Dashboard
            </button>
          ) : (
            <button className={view === 'adminLogin' ? 'nav-link active' : 'nav-link'} onClick={() => setView('adminLogin')}>
              Admin
            </button>
          )}
          {adminToken && (
            <button className="nav-btn-logout" onClick={handleAdminLogout}>
              Logout
            </button>
          )}
        </nav>
      </header>

      {/* Gamified Product Explorer Progress Bar for Customers */}
      {view === 'shop' && products.length > 0 && (
        <section className="explorer-progress-bar">
          <div className="explorer-info">
            <div className="explorer-text">
              <h4>🍃 Mindful Bathing Ritual Journey</h4>
              <p>Explore every single soap product to unlock the <strong>Ritual Explorer 10% Discount</strong> on your order!</p>
            </div>
            <span className="explorer-counter">
              {exploredProducts.length} / {products.length} Soaps Learnt
            </span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${(exploredProducts.length / products.length) * 100}%` }}
            />
          </div>
          {isExplorerRewardUnlocked && (
            <div className="explorer-reward-banner">
              ✨ <strong>10% Ritual Explorer Discount</strong> is active on your checkout!
            </div>
          )}
        </section>
      )}

      {/* Shop View */}
      {view === 'shop' && (
        <main className="shop-layout">
          {/* Hero Banner */}
          <section className="hero-banner">
            <div className="hero-overlay">
              <span className="hero-label">Handcrafted Wellness</span>
              <h1>Pure Soap. Clear Conscious.</h1>
              <p>Experience deep, skin-clarifying nourishment with our collection of 100% natural, cold-processed bathing soaps. Made locally, delivered exclusively across Karnataka.</p>
              <div className="hero-benefits">
                <span>✓ Pure Essential Oils</span>
                <span>✓ Zero Synthetic Colors</span>
                <span>✓ Local Karnataka Shipping (COD)</span>
              </div>
            </div>
          </section>

          {/* Filtering and Search Controls */}
          <section className="catalog-controls">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input 
                type="search" 
                placeholder="Search ingredients, benefits, or soaps..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
              />
            </div>
            <div className="category-scroll">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  className={category === cat ? 'cat-button active' : 'cat-button'} 
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Product Grid */}
          <section className="catalog-grid">
            {filteredProducts.length === 0 ? (
              <div className="no-results">
                <p>No soaps match your current filters. Try searching for other therapeutic herbs.</p>
              </div>
            ) : (
              filteredProducts.map((p) => {
                const rating = productRatingStats[p.id] || { avg: 5.0, count: 0 };
                const isExplored = exploredProducts.includes(p.id);
                return (
                  <article key={p.id} className={`product-card ${isExplored ? 'explored-card' : ''}`}>
                    {isExplored && <span className="explored-badge">✓ Explored</span>}
                    <div 
                      className="card-image-box" 
                      style={{ backgroundImage: `url(${p.image})` }} 
                      onClick={() => handleExploreProduct(p)}
                    >
                      <div className="image-hover-overlay">
                        <span>Reveal Ritual Secrets</span>
                      </div>
                    </div>
                    <div className="card-details">
                      <div className="card-header-row">
                        <span className="card-category">{p.category}</span>
                        <div className="card-stars">
                          {renderStars(rating.avg)}
                          <span className="rating-count">({rating.count})</span>
                        </div>
                      </div>
                      <h3 onClick={() => handleExploreProduct(p)}>{p.title}</h3>
                      <p className="card-desc">{p.description}</p>
                      <div className="card-footer">
                        <span className="card-price">₹{p.price}</span>
                        <div className="card-actions">
                          <button className="btn-explore" onClick={() => handleExploreProduct(p)}>
                            Details
                          </button>
                          <button className="btn-add-cart" onClick={() => handleAddToCart(p)}>
                            Add Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </section>
        </main>
      )}

      {/* Cart View */}
      {view === 'cart' && (
        <main className="cart-view-container">
          <h2>Your Selection ({cart.length} unique soaps)</h2>
          
          {cart.length === 0 ? (
            <div className="empty-cart-state">
              <span className="leaf-icon-big">🍃</span>
              <h3>Your ritual bag is empty</h3>
              <p>Begin your wellness journey by exploring our chemical-free herbal bathing bars.</p>
              <button className="btn-primary" onClick={() => setView('shop')}>Browse Soap Catalog</button>
            </div>
          ) : (
            <div className="cart-grid-layout">
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-list-item">
                    <div className="item-thumbnail" style={{ backgroundImage: `url(${item.image})` }} />
                    <div className="item-details-column">
                      <span className="item-cat">{item.category}</span>
                      <h3>{item.title}</h3>
                      <span className="item-unit-price">₹{item.price} per soap bar</span>
                    </div>
                    <div className="item-controls-column">
                      <div className="qty-picker">
                        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                      </div>
                      <span className="item-total-price">₹{item.price * item.qty}</span>
                      <button className="btn-remove-item" onClick={() => handleRemoveItem(item.id)}>✕ Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="order-summary-sidebar">
                <h3>Bathing Ritual Summary</h3>
                <div className="summary-row-item">
                  <span>Cart Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                {isExplorerRewardUnlocked && (
                  <div className="summary-row-item discount-row">
                    <span>Explorer Reward (10%)</span>
                    <span>- ₹{discountAmount}</span>
                  </div>
                )}
                <div className="summary-row-item">
                  <span>Shipping Cost</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="summary-divider" />
                <div className="summary-total-row">
                  <span>Grand Total (COD)</span>
                  <span>₹{orderTotal}</span>
                </div>
                <p className="shipping-note-badge">
                  🚀 Free shipping unlocked on order totals above ₹500
                </p>
                <button className="btn-primary checkout-btn-action" onClick={() => setView('checkout')}>
                  Proceed to Secure Checkout
                </button>
                <button className="btn-secondary back-shopping-action" onClick={() => setView('shop')}>
                  ← Continue Exploring Soaps
                </button>
              </aside>
            </div>
          )}
        </main>
      )}

      {/* Checkout View */}
      {view === 'checkout' && (
        <main className="checkout-container">
          <h2>Secure COD Checkout</h2>
          <p className="checkout-intro">All orders are shipped exclusively within Karnataka and fulfilled via Cash on Delivery (COD). No online payment details required.</p>
          
          <div className="checkout-split-layout">
            <form className="checkout-details-form" onSubmit={handleCheckout}>
              <h3>Shipping Information</h3>
              <div className="form-double-row">
                <div className="input-group">
                  <label htmlFor="name-input">Receiver's Full Name *</label>
                  <input 
                    id="name-input"
                    type="text" 
                    placeholder="Enter full name" 
                    required 
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email-input">Email Address *</label>
                  <input 
                    id="email-input"
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    value={checkoutForm.email}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-double-row">
                <div className="input-group">
                  <label htmlFor="phone-input">Mobile Contact Number (10 digits) *</label>
                  <input 
                    id="phone-input"
                    type="tel" 
                    placeholder="e.g. 9876543210" 
                    pattern="\d{10}"
                    required 
                    value={checkoutForm.phone}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="state-input">Shipping State (Fixed) *</label>
                  <input 
                    id="state-input"
                    type="text" 
                    value="Karnataka" 
                    disabled 
                    className="disabled-input"
                  />
                  <small className="help-text">We currently ship only within Karnataka.</small>
                </div>
              </div>

              <div className="form-double-row">
                <div className="input-group full-width-field">
                  <label htmlFor="address-input">Complete Shipping Address *</label>
                  <textarea 
                    id="address-input"
                    rows="3" 
                    placeholder="Flat/House no, Street name, City, Landmark" 
                    required
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-double-row">
                <div className="input-group">
                  <label htmlFor="pincode-input">Karnataka Postal Pincode *</label>
                  <input 
                    id="pincode-input"
                    type="text" 
                    placeholder="6-digit (e.g. 560001)" 
                    pattern="^(56|57|58|59)\d{4}$"
                    required
                    value={checkoutForm.pincode}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
                  />
                  <small className="help-text">Must start with 56, 57, 58, or 59.</small>
                </div>
              </div>

              <button type="submit" className="btn-primary place-order-btn">
                Confirm Cash on Delivery Order (₹{orderTotal})
              </button>
            </form>

            <aside className="checkout-summary-box">
              <h3>Order Summary</h3>
              <div className="checkout-products-list">
                {cart.map((item) => (
                  <div key={item.id} className="checkout-summary-item">
                    <span>{item.qty} × {item.title}</span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>
              <div className="summary-divider" />
              <div className="summary-row-item">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              {isExplorerRewardUnlocked && (
                <div className="summary-row-item discount-row">
                  <span>Ritual Explorer Discount</span>
                  <span>- ₹{discountAmount}</span>
                </div>
              )}
              <div className="summary-row-item">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-total-row">
                <span>Total Amount to Pay</span>
                <span>₹{orderTotal}</span>
              </div>
              <div className="payment-security-notice">
                🔒 <strong>100% Secure Checkout:</strong> The order details will be validated against Karnataka shipping boundaries. Pay cash when the parcel is delivered to your doorstep.
              </div>
            </aside>
          </div>
        </main>
      )}

      {/* Admin Login View */}
      {view === 'adminLogin' && !adminToken && (
        <main className="admin-login-container">
          <div className="login-card">
            <h2>Admin Portal</h2>
            <p>Access the Elara Earth backend console to moderate orders, reviews, and manage catalog soaps.</p>
            <form onSubmit={handleAdminLogin}>
              <div className="input-group">
                <label htmlFor="admin-user-input">Username</label>
                <input 
                  id="admin-user-input"
                  type="text" 
                  required 
                  value={loginUser}
                  onChange={(e) => setLoginUser(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="admin-pass-input">Password</label>
                <input 
                  id="admin-pass-input"
                  type="password" 
                  required 
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary login-btn">Secure Admin Login</button>
            </form>
          </div>
        </main>
      )}

      {/* Admin Dashboard View */}
      {view === 'admin' && adminToken && (
        <main className="admin-dashboard-container">
          <div className="admin-dashboard-header">
            <div>
              <h2>Admin Dashboard Console</h2>
              <p>Manage catalog products, dispatch orders, and moderate reviews.</p>
            </div>
            
            <div className="admin-navigation-tabs">
              <button 
                className={adminTab === 'dashboard' ? 'tab-btn active' : 'tab-btn'} 
                onClick={() => setAdminTab('dashboard')}
              >
                Overview
              </button>
              <button 
                className={adminTab === 'products' ? 'tab-btn active' : 'tab-btn'} 
                onClick={() => setAdminTab('products')}
              >
                Manage Soaps ({products.length})
              </button>
              <button 
                className={adminTab === 'orders' ? 'tab-btn active' : 'tab-btn'} 
                onClick={() => setAdminTab('orders')}
              >
                Orders Queue ({orders.length})
              </button>
              <button 
                className={adminTab === 'reviews' ? 'tab-btn active' : 'tab-btn'} 
                onClick={() => setAdminTab('reviews')}
              >
                Review Moderation ({reviews.length})
              </button>
            </div>
          </div>

          {/* Tab Content: Dashboard Overview */}
          {adminTab === 'dashboard' && (
            <section className="overview-tab-content">
              <div className="metrics-grid">
                <div className="metric-card">
                  <h3>₹{orders.filter(o => o.status === 'Delivered').reduce((sum, o) => sum + o.total, 0)}</h3>
                  <p>Delivered Sales (COD)</p>
                </div>
                <div className="metric-card">
                  <h3>₹{orders.filter(o => o.status !== 'Cancelled').reduce((sum, o) => sum + o.total, 0)}</h3>
                  <p>Projected Sales (Excl. Cancelled)</p>
                </div>
                <div className="metric-card">
                  <h3>{orders.filter(o => o.status === 'Pending').length}</h3>
                  <p>Pending COD Deliveries</p>
                </div>
                <div className="metric-card">
                  <h3>{reviews.length}</h3>
                  <p>Verified Product Reviews</p>
                </div>
              </div>

              <div className="dashboard-lists-split">
                <div className="recent-activity-box">
                  <h3>Recent Order Dispatches</h3>
                  {orders.length === 0 ? (
                    <p>No orders logged in database yet.</p>
                  ) : (
                    <div className="overview-mini-list">
                      {orders.slice(0, 5).map(o => (
                        <div key={o.id} className="mini-list-item">
                          <div>
                            <strong>{o.customer.name}</strong> ({o.customer.pincode})
                            <br />
                            <small>{o.items.map(item => `${item.qty}x ${item.title}`).join(', ')}</small>
                          </div>
                          <div>
                            <span className={`status-badge-inline ${o.status.toLowerCase()}`}>{o.status}</span>
                            <br />
                            <strong>₹{o.total}</strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="recent-activity-box">
                  <h3>Soap Catalog Rankings</h3>
                  <div className="soap-ranking-list">
                    {products.map(p => {
                      const stats = productRatingStats[p.id] || { avg: 5.0, count: 0 };
                      return (
                        <div key={p.id} className="ranking-item">
                          <span>{p.title}</span>
                          <div className="ranking-stars">
                            {renderStars(stats.avg)}
                            <small>({stats.count} reviews)</small>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Tab Content: Products Manager */}
          {adminTab === 'products' && (
            <section className="products-tab-content">
              <div className="product-manager-layout">
                {/* Form column */}
                <form className="product-manager-form" onSubmit={handleProductSave}>
                  <h3>{editProduct ? 'Edit Soap Details' : 'Add New Soap to Catalog'}</h3>
                  <div className="input-group">
                    <label htmlFor="form-title">Soap Name *</label>
                    <input 
                      id="form-title"
                      type="text" 
                      required 
                      value={productForm.title}
                      onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                    />
                  </div>
                  
                  <div className="form-double-row">
                    <div className="input-group">
                      <label htmlFor="form-category">Category *</label>
                      <select 
                        id="form-category"
                        required
                        value={productForm.category}
                        onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                      >
                        <option value="">Select Category</option>
                        <option value="Ayurvedic Rituals">Ayurvedic Rituals</option>
                        <option value="Natural Scrubs">Natural Scrubs</option>
                        <option value="Skincare">Skincare</option>
                        <option value="Luxury Rituals">Luxury Rituals</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label htmlFor="form-price">Price (₹) *</label>
                      <input 
                        id="form-price"
                        type="number" 
                        required 
                        min="1"
                        value={productForm.price}
                        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="form-image">Product Image URL *</label>
                    <input 
                      id="form-image"
                      type="url" 
                      required 
                      placeholder="https://images.unsplash.com/..."
                      value={productForm.image}
                      onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="form-desc">Sensory Description *</label>
                    <textarea 
                      id="form-desc"
                      rows="2" 
                      required
                      value={productForm.description}
                      onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="form-ingredients">Key Botanical Ingredients *</label>
                    <input 
                      id="form-ingredients"
                      type="text" 
                      required 
                      placeholder="e.g. Saffron, Neem Extracts, Goat Milk"
                      value={productForm.ingredients}
                      onChange={(e) => setProductForm({ ...productForm, ingredients: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="form-benefits">Therapeutic Skin Benefits *</label>
                    <input 
                      id="form-benefits"
                      type="text" 
                      required 
                      placeholder="e.g. Fades blemishes, controls excess oils"
                      value={productForm.benefits}
                      onChange={(e) => setProductForm({ ...productForm, benefits: e.target.value })}
                    />
                  </div>

                  <div className="form-action-row">
                    <button type="submit" className="btn-primary">
                      {editProduct ? 'Save Updates' : 'Publish Product'}
                    </button>
                    {editProduct && (
                      <button type="button" className="btn-secondary" onClick={resetProductForm}>
                        Cancel
                      </button>
                    )}
                  </div>
                </form>

                {/* List column */}
                <div className="product-manager-list">
                  <h3>Live Catalog Items</h3>
                  {products.length === 0 ? (
                    <p>No soaps in catalog yet.</p>
                  ) : (
                    <div className="admin-product-cards-grid">
                      {products.map(p => (
                        <div key={p.id} className="admin-product-list-card">
                          <div className="admin-prod-thumb" style={{ backgroundImage: `url(${p.image})` }} />
                          <div className="admin-prod-info">
                            <span>{p.category}</span>
                            <h4>{p.title}</h4>
                            <strong>₹{p.price}</strong>
                          </div>
                          <div className="admin-prod-actions">
                            <button className="btn-edit-action" onClick={() => openEditProduct(p)}>Edit</button>
                            <button className="btn-delete-action" onClick={() => handleProductDelete(p.id)}>Delete</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Tab Content: Orders Queue */}
          {adminTab === 'orders' && (
            <section className="orders-tab-content">
              <h3>Customer Orders Registry</h3>
              {orders.length === 0 ? (
                <div className="no-orders-state">
                  <p>The orders queue is currently empty.</p>
                </div>
              ) : (
                <div className="orders-table-wrapper">
                  <table className="orders-admin-table">
                    <thead>
                      <tr>
                        <th>Order Details</th>
                        <th>Customer Shipping Details</th>
                        <th>Bathing Soaps Ordered</th>
                        <th>Financials</th>
                        <th>Status Dispatch Control</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(o => (
                        <tr key={o.id}>
                          <td>
                            <strong>ID:</strong> {o.id}
                            <br />
                            <small>{new Date(o.createdAt).toLocaleString()}</small>
                          </td>
                          <td>
                            <strong>Name:</strong> {o.customer.name}
                            <br />
                            <strong>Mob:</strong> {o.customer.phone}
                            <br />
                            <strong>Email:</strong> {o.customer.email}
                            <br />
                            <strong>Add:</strong> {o.customer.address}, {o.customer.pincode}, {o.customer.state}
                          </td>
                          <td>
                            <ul className="admin-table-item-list">
                              {o.items.map(item => (
                                <li key={item.id}>
                                  {item.qty} × {item.title} (₹{item.price})
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td>
                            <strong>Total:</strong> ₹{o.total}
                            <br />
                            <small className="cod-label-badge">COD Only</small>
                          </td>
                          <td>
                            <select 
                              value={o.status} 
                              className={`status-dropdown-select ${o.status.toLowerCase()}`}
                              onChange={(e) => handleUpdateOrderStatus(o.id, e.target.value)}
                            >
                              <option value="Pending">Pending Delivery</option>
                              <option value="Shipped">Dispatched / Shipped</option>
                              <option value="Delivered">Delivered Successfully</option>
                              <option value="Cancelled">Cancelled Order</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {/* Tab Content: Review Moderation */}
          {adminTab === 'reviews' && (
            <section className="reviews-tab-content">
              <h3>Verified Reviews Moderation Queue</h3>
              {reviews.length === 0 ? (
                <p>No customer reviews logged in system database.</p>
              ) : (
                <div className="reviews-moderation-grid">
                  {reviews.map(r => {
                    const soap = products.find(p => p.id === r.productId) || { title: 'Unknown Soap' };
                    return (
                      <div key={r.id} className="moderation-card">
                        <div className="moderation-card-header">
                          <div>
                            <strong>Soap Product:</strong> {soap.title}
                            <br />
                            <strong>Author:</strong> {r.customerName}
                          </div>
                          <span className="moderation-date">{new Date(r.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="moderation-card-stars">
                          {renderStars(r.rating)}
                        </div>
                        <h4>{r.title}</h4>
                        <p>"{r.comment}"</p>
                        <button className="btn-delete-action" onClick={() => handleDeleteReview(r.id)}>
                          Delete & Moderate Review
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          )}
        </main>
      )}

      {/* Immersive Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="modal-window-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={() => setSelectedProduct(null)}>✕</button>
            
            <div className="modal-split-layout">
              {/* Product Image Panel */}
              <div 
                className="modal-image-panel" 
                style={{ backgroundImage: `url(${selectedProduct.image})` }}
              />
              
              {/* Product Info Panel */}
              <div className="modal-info-panel">
                <span className="modal-cat-tag">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <div className="modal-stars-row">
                  {renderStars(productRatingStats[selectedProduct.id]?.avg || 5.0)}
                  <span>({productRatingStats[selectedProduct.id]?.count || 0} reviews)</span>
                </div>
                <div className="modal-price-tag">₹{selectedProduct.price}</div>
                
                <div className="modal-divider" />
                
                <div className="modal-tab-desc">
                  <h3>Sensory Experience</h3>
                  <p>{selectedProduct.description}</p>
                  
                  <div className="modal-details-grid">
                    <div>
                      <strong>🍃 Key Ingredients:</strong>
                      <p>{selectedProduct.ingredients || 'Natural Herbs'}</p>
                    </div>
                    <div>
                      <strong>✨ Skin Benefits:</strong>
                      <p>{selectedProduct.benefits || 'Pure hydration'}</p>
                    </div>
                  </div>
                </div>

                <div className="modal-action-row-buttons">
                  <button 
                    className="btn-primary" 
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    Add to Ritual Bag (₹{selectedProduct.price})
                  </button>
                </div>

                <div className="modal-divider" />

                {/* Reviews Section inside Modal */}
                <div className="modal-reviews-section">
                  <h3>Customer Reviews</h3>
                  
                  {/* Reviews List */}
                  <div className="modal-reviews-list">
                    {reviews.filter(r => r.productId === selectedProduct.id).length === 0 ? (
                      <p className="no-reviews-note">No reviews for this soap yet. Be the first to share your bathing experience!</p>
                    ) : (
                      reviews
                        .filter(r => r.productId === selectedProduct.id)
                        .map(r => (
                          <div key={r.id} className="individual-review-item">
                            <div className="review-item-header">
                              <strong>{r.customerName}</strong>
                              <span className="review-date">{new Date(r.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="review-stars-row">
                              {renderStars(r.rating)}
                            </div>
                            <h5>{r.title}</h5>
                            <p>"{r.comment}"</p>
                          </div>
                        ))
                    )}
                  </div>

                  {/* Add Review Form */}
                  <form className="modal-add-review-form" onSubmit={handleAddReview}>
                    <h4>Leave a Review</h4>
                    <div className="form-double-row">
                      <div className="input-group">
                        <label htmlFor="review-name">Your Name *</label>
                        <input 
                          id="review-name"
                          type="text" 
                          required 
                          placeholder="Enter your name" 
                          value={reviewForm.customerName}
                          onChange={(e) => setReviewForm({ ...reviewForm, customerName: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="review-rating">Rating (1-5 Stars) *</label>
                        <select 
                          id="review-rating"
                          value={reviewForm.rating}
                          onChange={(e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                        >
                          <option value="5">5 Stars - Perfect</option>
                          <option value="4">4 Stars - Very Good</option>
                          <option value="3">3 Stars - Good</option>
                          <option value="2">2 Stars - Fair</option>
                          <option value="1">1 Star - Poor</option>
                        </select>
                      </div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="review-title">Review Headline *</label>
                      <input 
                        id="review-title"
                        type="text" 
                        required 
                        placeholder="e.g. Extremely Hydrating!"
                        value={reviewForm.title}
                        onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}
                      />
                    </div>

                    <div className="input-group">
                      <label htmlFor="review-comment">Review Details *</label>
                      <textarea 
                        id="review-comment"
                        rows="2" 
                        required 
                        placeholder="Share your experience using this soap..."
                        value={reviewForm.comment}
                        onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-secondary">Submit Verified Review</button>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* Page Footer */}
      <footer className="elara-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Elara Earth</h2>
            <p>Handcrafted, organic, and toxin-free bathing rituals. Restoring pure wellness to your daily skin routine.</p>
          </div>
          <div className="footer-shipping-notice">
            <h4>🚚 Local Karnataka Shipping</h4>
            <p>We deliver exclusively to addresses across Karnataka (COD available). Standard delivery takes 2-4 business days.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Elara Earth. All rights reserved. Natural skin health, handcrafted with love.</p>
          <div className="footer-locks">
            <span>🛡 Secure Checkout</span>
            <span>✓ Anti-XSS Protected</span>
            <span>✓ Locked Boundaries</span>
          </div>
        </div>
      </footer>

      {/* Inline styling implementing premium, nature-touch glassmorphism UI */}
      <style>{`
        :root {
          color-scheme: light;
          --font-headers: 'Playfair Display', Georgia, serif;
          --font-body: 'Outfit', sans-serif;
          --color-bg: #f9f6f0;         /* Natural handmade paper Warm White */
          --color-surface: #ffffff;
          --color-primary: #123321;     /* Rich Forest Green */
          --color-primary-light: #1c4d33;
          --color-accent: #c49948;      /* Warm Gold Leaf Accent */
          --color-accent-light: #e4c483;
          --color-text: #2c2d2c;        /* Charcoal Text */
          --color-muted: #5e615e;       /* Sage/Muted gray */
          --color-border: #e2dac8;      /* Cream sand border */
          --color-badge-bg: #e6eee7;
          --color-badge-text: #2f5d3b;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .elara-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Toast Notifications */
        .toast {
          position: fixed;
          top: 24px;
          right: 24px;
          padding: 16px 24px;
          border-radius: 12px;
          z-index: 10000;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          animation: slideInRight 0.3s ease-out;
          font-weight: 500;
          max-width: 450px;
        }

        @keyframes slideInRight {
          from { transform: translateX(110%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .success-toast {
          background-color: var(--color-primary);
          color: white;
          border-left: 4px solid var(--color-accent);
        }

        .banner-toast {
          top: auto;
          bottom: 24px;
          right: 24px;
          background-color: #2b5138;
          border-left: 4px solid #efc97c;
        }

        .error-toast {
          background-color: #792b2b;
          color: white;
          border-left: 4px solid #ff7b7b;
        }

        /* Header Style */
        .elara-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          border-bottom: 1px solid var(--color-border);
        }

        .header-logo-section {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
        }

        .brand-logo {
          height: 60px;
          width: 60px;
          object-fit: contain;
        }

        .brand-text-block {
          display: flex;
          flex-direction: column;
        }

        .brand-main {
          font-family: var(--font-headers);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.1;
        }

        .brand-tagline {
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          color: var(--color-accent);
          font-weight: 600;
        }

        .elara-nav {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-link {
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          font-size: 1rem;
          padding: 8px 16px;
          border-radius: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-primary);
          background-color: rgba(18, 51, 33, 0.05);
        }

        .nav-link.active {
          color: white;
          background-color: var(--color-primary);
        }

        .cart-badge {
          background-color: var(--color-accent);
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 99px;
          margin-left: 6px;
          display: inline-block;
        }

        .nav-btn-logout {
          background: transparent;
          border: 1px solid rgba(121, 43, 43, 0.4);
          color: #792b2b;
          border-radius: 20px;
          padding: 8px 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .nav-btn-logout:hover {
          background-color: #792b2b;
          color: white;
        }

        /* Mindful progress tracker */
        .explorer-progress-bar {
          background-color: #eae3d2;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 16px 20px;
          margin-top: 24px;
        }

        .explorer-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 12px;
        }

        .explorer-text h4 {
          font-family: var(--font-headers);
          color: var(--color-primary);
          font-size: 1.1rem;
        }

        .explorer-text p {
          font-size: 0.88rem;
          color: var(--color-muted);
        }

        .explorer-counter {
          font-weight: 700;
          font-size: 0.95rem;
          background-color: var(--color-primary);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .progress-track {
          background-color: rgba(18, 51, 33, 0.1);
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          background-color: var(--color-primary);
          height: 100%;
          border-radius: 4px;
          transition: width 0.4s ease;
        }

        .explorer-reward-banner {
          background-color: #d1e2d3;
          border: 1px solid #a3c4a9;
          color: var(--color-primary);
          font-size: 0.92rem;
          text-align: center;
          padding: 8px;
          border-radius: 8px;
          margin-top: 12px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(47, 93, 59, 0.3); }
          70% { box-shadow: 0 0 0 10px rgba(47, 93, 59, 0); }
          100% { box-shadow: 0 0 0 0 rgba(47, 93, 59, 0); }
        }

        /* Hero Banner */
        .hero-banner {
          background: linear-gradient(135deg, rgba(18, 51, 33, 0.95) 40%, rgba(28, 77, 51, 0.75)), url('https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          border-radius: 24px;
          overflow: hidden;
          margin-top: 24px;
          color: white;
        }

        .hero-overlay {
          padding: 60px 48px;
          max-width: 780px;
        }

        .hero-label {
          color: var(--color-accent);
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          display: inline-block;
          margin-bottom: 12px;
        }

        .hero-banner h1 {
          font-family: var(--font-headers);
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 18px;
        }

        .hero-banner p {
          font-size: 1.08rem;
          line-height: 1.6;
          color: #dbe4de;
          margin-bottom: 24px;
        }

        .hero-benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 24px;
        }

        .hero-benefits span {
          font-weight: 500;
          font-size: 0.92rem;
          color: var(--color-accent-light);
        }

        /* Filtering & Search Controls */
        .catalog-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 36px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .search-box {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          width: 320px;
        }

        .search-box input {
          border: none;
          background: transparent;
          font: inherit;
          width: 100%;
          outline: none;
          color: var(--color-text);
        }

        .category-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 6px;
          max-width: 100%;
        }

        .category-scroll::-webkit-scrollbar {
          height: 4px;
        }

        .category-scroll::-webkit-scrollbar-thumb {
          background-color: var(--color-border);
          border-radius: 2px;
        }

        .cat-button {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 8px 16px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          white-space: nowrap;
          color: var(--color-text);
          transition: all 0.2s;
        }

        .cat-button:hover,
        .cat-button.active {
          border-color: var(--color-primary);
          background-color: var(--color-primary);
          color: white;
        }

        /* Catalog Grid */
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 28px;
          margin-top: 28px;
          margin-bottom: 60px;
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 40px;
          color: var(--color-muted);
          background: var(--color-surface);
          border-radius: 16px;
          border: 1px solid var(--color-border);
        }

        .product-card {
          background-color: var(--color-surface);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(18, 51, 33, 0.08);
          border-color: var(--color-accent);
        }

        .product-card.explored-card {
          border-color: rgba(47, 93, 59, 0.4);
        }

        .explored-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: rgba(18, 51, 33, 0.85);
          color: white;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 10px;
          backdrop-filter: blur(4px);
          z-index: 10;
        }

        .card-image-box {
          height: 240px;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .image-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(18, 51, 33, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: 500;
          font-size: 0.95rem;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .card-image-box:hover .image-hover-overlay {
          opacity: 1;
        }

        .card-details {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .card-category {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .card-stars {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .star-icon {
          font-size: 0.85rem;
        }

        .star-icon.full { color: #f3a847; }
        .star-icon.half { color: #f3a847; }
        .star-icon.empty { color: #ccc; }

        .rating-count {
          font-size: 0.75rem;
          color: var(--color-muted);
          margin-left: 4px;
        }

        .card-details h3 {
          font-family: var(--font-headers);
          font-size: 1.4rem;
          color: var(--color-primary);
          margin-bottom: 10px;
          cursor: pointer;
          transition: color 0.2s;
        }

        .card-details h3:hover {
          color: var(--color-accent);
        }

        .card-desc {
          font-size: 0.9rem;
          color: var(--color-muted);
          line-height: 1.5;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .card-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .card-actions {
          display: flex;
          gap: 8px;
        }

        .btn-explore {
          border: 1px solid var(--color-border);
          background: transparent;
          color: var(--color-primary);
          padding: 8px 14px;
          font-weight: 500;
          font-size: 0.85rem;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-explore:hover {
          border-color: var(--color-primary);
          background-color: rgba(18, 51, 33, 0.04);
        }

        .btn-add-cart {
          background-color: var(--color-primary);
          color: white;
          border: none;
          padding: 8px 14px;
          font-weight: 500;
          font-size: 0.85rem;
          border-radius: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .btn-add-cart:hover {
          background-color: var(--color-primary-light);
        }

        /* Cart Page Container */
        .cart-view-container {
          margin-top: 36px;
          margin-bottom: 60px;
        }

        .cart-view-container h2 {
          font-family: var(--font-headers);
          font-size: 2rem;
          color: var(--color-primary);
          margin-bottom: 24px;
        }

        .empty-cart-state {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          max-width: 600px;
          margin: 40px auto;
        }

        .leaf-icon-big {
          font-size: 3rem;
          display: inline-block;
          margin-bottom: 16px;
        }

        .empty-cart-state h3 {
          font-family: var(--font-headers);
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: var(--color-primary);
        }

        .empty-cart-state p {
          color: var(--color-muted);
          margin-bottom: 24px;
        }

        .btn-primary {
          background-color: var(--color-primary);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 24px;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background-color 0.2s;
          display: inline-block;
          text-align: center;
        }

        .btn-primary:hover {
          background-color: var(--color-primary-light);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
          padding: 12px 28px;
          border-radius: 24px;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.95rem;
          transition: all 0.2s;
          display: inline-block;
          text-align: center;
        }

        .btn-secondary:hover {
          background-color: rgba(18, 51, 33, 0.05);
        }

        .cart-grid-layout {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 28px;
          align-items: start;
        }

        .cart-items-list {
          display: grid;
          gap: 16px;
        }

        .cart-list-item {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .item-thumbnail {
          height: 100px;
          width: 100px;
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .item-details-column {
          flex-grow: 1;
        }

        .item-cat {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
        }

        .item-details-column h3 {
          font-family: var(--font-headers);
          font-size: 1.25rem;
          color: var(--color-primary);
          margin-top: 4px;
          margin-bottom: 6px;
        }

        .item-unit-price {
          font-size: 0.85rem;
          color: var(--color-muted);
        }

        .item-controls-column {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-shrink: 0;
        }

        .qty-picker {
          display: flex;
          align-items: center;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          overflow: hidden;
          background: var(--color-bg);
        }

        .qty-picker button {
          border: none;
          background: transparent;
          height: 36px;
          width: 36px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-primary);
        }

        .qty-picker button:hover {
          background-color: rgba(18, 51, 33, 0.05);
        }

        .qty-picker span {
          width: 32px;
          text-align: center;
          font-weight: 600;
        }

        .item-total-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-primary);
          width: 70px;
          text-align: right;
        }

        .btn-remove-item {
          background: transparent;
          border: none;
          color: #792b2b;
          font-weight: 500;
          font-size: 0.82rem;
          cursor: pointer;
          padding: 6px;
        }

        .btn-remove-item:hover {
          text-decoration: underline;
        }

        .order-summary-sidebar {
          background-color: #fcf9f2;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 24px;
        }

        .order-summary-sidebar h3 {
          font-family: var(--font-headers);
          font-size: 1.4rem;
          color: var(--color-primary);
          margin-bottom: 20px;
        }

        .summary-row-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--color-muted);
          margin-bottom: 12px;
        }

        .discount-row {
          color: #2f5d3b;
          font-weight: 600;
        }

        .summary-divider {
          border-top: 1px solid var(--color-border);
          margin: 16px 0;
        }

        .summary-total-row {
          display: flex;
          justify-content: space-between;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        .shipping-note-badge {
          font-size: 0.78rem;
          color: var(--color-primary);
          background-color: var(--color-badge-bg);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
          font-weight: 500;
        }

        .checkout-btn-action {
          width: 100%;
          margin-bottom: 10px;
        }

        .back-shopping-action {
          width: 100%;
        }

        /* Checkout Container */
        .checkout-container {
          margin-top: 36px;
          margin-bottom: 60px;
        }

        .checkout-container h2 {
          font-family: var(--font-headers);
          font-size: 2rem;
          color: var(--color-primary);
          margin-bottom: 6px;
        }

        .checkout-intro {
          font-size: 0.95rem;
          color: var(--color-muted);
          margin-bottom: 28px;
        }

        .checkout-split-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
          align-items: start;
        }

        .checkout-details-form {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 28px;
        }

        .checkout-details-form h3 {
          font-family: var(--font-headers);
          font-size: 1.35rem;
          margin-bottom: 20px;
          color: var(--color-primary);
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 10px;
        }

        .form-double-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .full-width-field {
          grid-column: 1 / -1;
        }

        .input-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-muted);
        }

        .input-group input,
        .input-group select,
        .input-group textarea {
          border: 1px solid var(--color-border);
          border-radius: 10px;
          padding: 10px 14px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          outline: none;
          color: var(--color-text);
          background-color: var(--color-bg);
          transition: border-color 0.2s;
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus {
          border-color: var(--color-primary);
          background-color: white;
        }

        .disabled-input {
          background-color: #e9e5db !important;
          color: #7a7566 !important;
          cursor: not-allowed;
        }

        .help-text {
          font-size: 0.72rem;
          color: var(--color-muted);
        }

        .place-order-btn {
          width: 100%;
          padding: 14px;
          font-size: 1.05rem;
          margin-top: 16px;
        }

        .checkout-summary-box {
          background-color: #f7f3e8;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 24px;
        }

        .checkout-summary-box h3 {
          font-family: var(--font-headers);
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: var(--color-primary);
        }

        .checkout-products-list {
          display: grid;
          gap: 8px;
          max-height: 240px;
          overflow-y: auto;
          margin-bottom: 16px;
        }

        .checkout-summary-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--color-text);
        }

        .payment-security-notice {
          background-color: rgba(18, 51, 33, 0.05);
          border: 1px solid rgba(18, 51, 33, 0.1);
          border-radius: 10px;
          padding: 12px;
          font-size: 0.8rem;
          color: var(--color-primary);
          margin-top: 20px;
          line-height: 1.4;
        }

        /* Immersive Product Detail Modal Drawer */
        .modal-overlay-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(18, 51, 33, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 24px;
          animation: fadeIn 0.25s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-window-content {
          background-color: var(--color-surface);
          border-radius: 24px;
          overflow: hidden;
          width: 1000px;
          max-width: 100%;
          max-height: 90vh;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          position: relative;
          animation: slideUp 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid var(--color-accent);
          display: flex;
          flex-direction: column;
        }

        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .btn-close-modal {
          position: absolute;
          top: 16px;
          right: 20px;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: 50%;
          height: 36px;
          width: 36px;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          color: var(--color-primary);
          transition: all 0.2s;
        }

        .btn-close-modal:hover {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .modal-split-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          max-height: 90vh;
          overflow: hidden;
          flex-grow: 1;
        }

        .modal-image-panel {
          background-size: cover;
          background-position: center;
          height: 100%;
          min-height: 480px;
        }

        .modal-info-panel {
          padding: 40px;
          overflow-y: auto;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .modal-cat-tag {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: inline-block;
          margin-bottom: 8px;
        }

        .modal-info-panel h2 {
          font-family: var(--font-headers);
          font-size: 2.2rem;
          color: var(--color-primary);
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .modal-stars-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: var(--color-muted);
          margin-bottom: 16px;
        }

        .modal-price-tag {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 20px;
        }

        .modal-divider {
          border-top: 1px solid var(--color-border);
          margin: 20px 0;
        }

        .modal-tab-desc h3 {
          font-family: var(--font-headers);
          font-size: 1.15rem;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .modal-tab-desc p {
          font-size: 0.95rem;
          color: var(--color-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .modal-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 16px;
        }

        .modal-details-grid div strong {
          font-size: 0.82rem;
          text-transform: uppercase;
          color: var(--color-accent);
          letter-spacing: 0.05em;
        }

        .modal-details-grid div p {
          font-size: 0.88rem;
          color: var(--color-text);
          margin-top: 4px;
        }

        .modal-action-row-buttons {
          margin-top: 10px;
        }

        .modal-action-row-buttons button {
          width: 100%;
          padding: 14px;
        }

        /* Reviews inside Modal */
        .modal-reviews-section {
          margin-top: 10px;
        }

        .modal-reviews-section h3 {
          font-family: var(--font-headers);
          font-size: 1.3rem;
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        .modal-reviews-list {
          display: grid;
          gap: 16px;
          max-height: 350px;
          overflow-y: auto;
          margin-bottom: 24px;
          padding-right: 8px;
        }

        .modal-reviews-list::-webkit-scrollbar {
          width: 4px;
        }

        .modal-reviews-list::-webkit-scrollbar-thumb {
          background-color: var(--color-border);
          border-radius: 2px;
        }

        .no-reviews-note {
          font-size: 0.9rem;
          color: var(--color-muted);
          font-style: italic;
        }

        .individual-review-item {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 14px;
        }

        .review-item-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          margin-bottom: 6px;
        }

        .review-date {
          color: var(--color-muted);
        }

        .review-stars-row {
          margin-bottom: 8px;
        }

        .individual-review-item h5 {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--color-primary);
          margin-bottom: 4px;
        }

        .individual-review-item p {
          font-size: 0.88rem;
          color: var(--color-muted);
          line-height: 1.4;
        }

        .modal-add-review-form {
          background-color: #f9f6f0;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 20px;
          margin-top: 16px;
        }

        .modal-add-review-form h4 {
          font-family: var(--font-headers);
          font-size: 1.1rem;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        .modal-add-review-form button {
          width: 100%;
          margin-top: 12px;
        }

        /* Admin Login */
        .admin-login-container {
          padding: 80px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-card {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          padding: 40px;
          width: 440px;
          max-width: 100%;
          box-shadow: 0 10px 40px rgba(18,51,33,0.06);
        }

        .login-card h2 {
          font-family: var(--font-headers);
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .login-card p {
          font-size: 0.88rem;
          color: var(--color-muted);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .login-card .input-group {
          margin-bottom: 16px;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          margin-top: 12px;
        }

        /* Admin Dashboard Layout */
        .admin-dashboard-container {
          margin-top: 36px;
          margin-bottom: 60px;
        }

        .admin-dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 24px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 20px;
          margin-bottom: 28px;
        }

        .admin-dashboard-header h2 {
          font-family: var(--font-headers);
          font-size: 2rem;
          color: var(--color-primary);
        }

        .admin-dashboard-header p {
          font-size: 0.9rem;
          color: var(--color-muted);
        }

        .admin-navigation-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tab-btn {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 8px 16px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          color: var(--color-muted);
          transition: all 0.2s;
        }

        .tab-btn:hover,
        .tab-btn.active {
          border-color: var(--color-primary);
          background-color: var(--color-primary);
          color: white;
        }

        /* Overview metrics */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }

        .metric-card {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
        }

        .metric-card h3 {
          font-size: 2.2rem;
          color: var(--color-primary);
          font-family: var(--font-headers);
          margin-bottom: 6px;
        }

        .metric-card p {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--color-muted);
        }

        .dashboard-lists-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .recent-activity-box {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 24px;
        }

        .recent-activity-box h3 {
          font-family: var(--font-headers);
          color: var(--color-primary);
          margin-bottom: 16px;
          font-size: 1.25rem;
        }

        .overview-mini-list {
          display: grid;
          gap: 12px;
        }

        .mini-list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-bg);
          font-size: 0.9rem;
        }

        .mini-list-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .status-badge-inline {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 10px;
          text-transform: uppercase;
        }

        .status-badge-inline.pending { background-color: #f7e6c4; color: #865507; }
        .status-badge-inline.shipped { background-color: #c4d7f7; color: #1a4f86; }
        .status-badge-inline.delivered { background-color: #d1e9d2; color: #1e5922; }
        .status-badge-inline.cancelled { background-color: #f7d2d2; color: #861a1a; }

        .soap-ranking-list {
          display: grid;
          gap: 12px;
        }

        .ranking-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }

        .ranking-stars {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Products manager page */
        .product-manager-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }

        .product-manager-form {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 24px;
        }

        .product-manager-form h3 {
          font-family: var(--font-headers);
          color: var(--color-primary);
          margin-bottom: 20px;
        }

        .product-manager-form .input-group {
          margin-bottom: 16px;
        }

        .form-action-row {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .product-manager-list {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 24px;
        }

        .product-manager-list h3 {
          font-family: var(--font-headers);
          color: var(--color-primary);
          margin-bottom: 20px;
        }

        .admin-product-cards-grid {
          display: grid;
          gap: 14px;
          max-height: 600px;
          overflow-y: auto;
          padding-right: 8px;
        }

        .admin-product-list-card {
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: var(--color-bg);
        }

        .admin-prod-thumb {
          height: 60px;
          width: 60px;
          background-size: cover;
          background-position: center;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .admin-prod-info {
          flex-grow: 1;
        }

        .admin-prod-info span {
          font-size: 0.68rem;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 700;
        }

        .admin-prod-info h4 {
          font-size: 0.95rem;
          color: var(--color-primary);
          margin: 2px 0;
        }

        .admin-prod-info strong {
          font-size: 0.88rem;
        }

        .admin-prod-actions {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .admin-prod-actions button {
          border: none;
          background: transparent;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .btn-edit-action {
          color: var(--color-primary);
          background-color: rgba(18, 51, 33, 0.05) !important;
        }

        .btn-delete-action {
          color: #792b2b;
          background-color: rgba(121, 43, 43, 0.05) !important;
        }

        .btn-edit-action:hover { background-color: var(--color-primary) !important; color: white !important; }
        .btn-delete-action:hover { background-color: #792b2b !important; color: white !important; }

        /* Orders table registry */
        .orders-table-wrapper {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          overflow: hidden;
          margin-top: 16px;
        }

        .orders-admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
        }

        .orders-admin-table th,
        .orders-admin-table td {
          padding: 16px 20px;
          border-bottom: 1px solid var(--color-border);
        }

        .orders-admin-table th {
          background-color: #eae3d2;
          color: var(--color-primary);
          font-weight: 700;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .orders-admin-table tbody tr:last-child td {
          border-bottom: none;
        }

        .orders-admin-table tbody tr:hover {
          background-color: rgba(18, 51, 33, 0.01);
        }

        .admin-table-item-list {
          padding-left: 14px;
          font-size: 0.85rem;
        }

        .cod-label-badge {
          background-color: #eae3d2;
          color: var(--color-primary);
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.72rem;
          display: inline-block;
          margin-top: 4px;
        }

        .status-dropdown-select {
          border: 1px solid var(--color-border);
          border-radius: 10px;
          padding: 8px 12px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          outline: none;
          cursor: pointer;
        }

        .status-dropdown-select.pending { background-color: #f7e6c4; color: #865507; border-color: #e4c58e; }
        .status-dropdown-select.shipped { background-color: #c4d7f7; color: #1a4f86; border-color: #9abbed; }
        .status-dropdown-select.delivered { background-color: #d1e9d2; color: #1e5922; border-color: #add0af; }
        .status-dropdown-select.cancelled { background-color: #f7d2d2; color: #861a1a; border-color: #e4a7a7; }

        /* Moderation Reviews */
        .reviews-moderation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          margin-top: 16px;
        }

        .moderation-card {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .moderation-card-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--color-muted);
          margin-bottom: 8px;
        }

        .moderation-date {
          color: var(--color-muted);
        }

        .moderation-card-stars {
          margin-bottom: 10px;
        }

        .moderation-card h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 6px;
        }

        .moderation-card p {
          font-size: 0.88rem;
          color: var(--color-muted);
          line-height: 1.4;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .moderation-card button {
          align-self: flex-start;
          width: 100%;
        }

        /* Footer Style */
        .elara-footer {
          border-top: 1px solid var(--color-border);
          padding: 48px 0 36px;
          margin-top: 60px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 36px;
          margin-bottom: 36px;
        }

        .footer-brand {
          max-width: 440px;
        }

        .footer-brand h2 {
          font-family: var(--font-headers);
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        .footer-brand p {
          font-size: 0.92rem;
          color: var(--color-muted);
          line-height: 1.6;
        }

        .footer-shipping-notice {
          max-width: 400px;
        }

        .footer-shipping-notice h4 {
          font-family: var(--font-headers);
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        .footer-shipping-notice p {
          font-size: 0.9rem;
          color: var(--color-muted);
          line-height: 1.5;
        }

        .footer-bottom {
          border-top: 1px solid var(--color-border);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-bottom p {
          font-size: 0.8rem;
          color: var(--color-muted);
        }

        .footer-locks {
          display: flex;
          gap: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-primary);
        }

        /* Responsiveness Media Queries */
        @media (max-width: 980px) {
          .cart-grid-layout,
          .checkout-split-layout,
          .product-manager-layout,
          .dashboard-lists-split,
          .modal-split-layout {
            grid-template-columns: 1fr;
          }

          .modal-image-panel {
            height: 280px;
            min-height: auto;
          }

          .modal-window-content {
            max-height: 95vh;
          }

          .modal-split-layout {
            overflow-y: auto;
          }

          .modal-info-panel {
            padding: 24px;
            max-height: none;
          }

          .search-box {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .elara-header {
            flex-direction: column;
            gap: 16px;
            padding: 16px 0;
          }

          .form-double-row {
            grid-template-columns: 1fr;
          }

          .hero-overlay {
            padding: 36px 20px;
          }

          .catalog-grid {
            grid-template-columns: 1fr;
          }

          .orders-admin-table {
            font-size: 0.82rem;
          }

          .orders-admin-table th,
          .orders-admin-table td {
            padding: 10px;
          }
        }
      `}</style>

    </div>
  );
}

export default App;
