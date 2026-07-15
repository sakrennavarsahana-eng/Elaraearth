(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();function Mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hs={exports:{}},wo={},gs={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dn=Symbol.for("react.element"),Ic=Symbol.for("react.portal"),Ac=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),Hc=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Qc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),ia=Symbol.iterator;function Yc(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ys=Object.assign,xs={};function kr(e,t,r){this.props=e,this.context=t,this.refs=xs,this.updater=r||vs}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ws(){}ws.prototype=kr.prototype;function li(e,t,r){this.props=e,this.context=t,this.refs=xs,this.updater=r||vs}var ii=li.prototype=new ws;ii.constructor=li;ys(ii,kr.prototype);ii.isPureReactComponent=!0;var aa=Array.isArray,ks=Object.prototype.hasOwnProperty,ai={current:null},Ss={key:!0,ref:!0,__self:!0,__source:!0};function js(e,t,r){var n,o={},l=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)ks.call(t,n)&&!Ss.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:dn,type:e,key:l,ref:i,props:o,_owner:ai.current}}function Xc(e,t){return{$$typeof:dn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function si(e){return typeof e=="object"&&e!==null&&e.$$typeof===dn}function Gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var sa=/\/+/g;function Uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gc(""+e.key):t.toString(36)}function Mn(e,t,r,n,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case dn:case Ic:i=!0}}if(i)return i=e,o=o(i),e=n===""?"."+Uo(i,0):n,aa(o)?(r="",e!=null&&(r=e.replace(sa,"$&/")+"/"),Mn(o,t,r,"",function(f){return f})):o!=null&&(si(o)&&(o=Xc(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(sa,"$&/")+"/")+e)),t.push(o)),1;if(i=0,n=n===""?".":n+":",aa(e))for(var s=0;s<e.length;s++){l=e[s];var u=n+Uo(l,s);i+=Mn(l,t,r,u,o)}else if(u=Yc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=n+Uo(l,s++),i+=Mn(l,t,r,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function wn(e,t,r){if(e==null)return e;var n=[],o=0;return Mn(e,n,"","",function(l){return t.call(r,l,o++)}),n}function qc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},In={transition:null},Zc={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:In,ReactCurrentOwner:ai};function Ns(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:wn,forEach:function(e,t,r){wn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return wn(e,function(){t++}),t},toArray:function(e){return wn(e,function(t){return t})||[]},only:function(e){if(!si(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=kr;F.Fragment=Ac;F.Profiler=$c;F.PureComponent=li;F.StrictMode=Uc;F.Suspense=Wc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zc;F.act=Ns;F.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ys({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ai.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ks.call(t,u)&&!Ss.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];n.children=s}return{$$typeof:dn,type:e.type,key:o,ref:l,props:n,_owner:i}};F.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bc,_context:e},e.Consumer=e};F.createElement=js;F.createFactory=function(e){var t=js.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Hc,render:e}};F.isValidElement=si;F.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:qc}};F.memo=function(e,t){return{$$typeof:Qc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=In.transition;In.transition={};try{e()}finally{In.transition=t}};F.unstable_act=Ns;F.useCallback=function(e,t){return he.current.useCallback(e,t)};F.useContext=function(e){return he.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return he.current.useDeferredValue(e)};F.useEffect=function(e,t){return he.current.useEffect(e,t)};F.useId=function(){return he.current.useId()};F.useImperativeHandle=function(e,t,r){return he.current.useImperativeHandle(e,t,r)};F.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return he.current.useMemo(e,t)};F.useReducer=function(e,t,r){return he.current.useReducer(e,t,r)};F.useRef=function(e){return he.current.useRef(e)};F.useState=function(e){return he.current.useState(e)};F.useSyncExternalStore=function(e,t,r){return he.current.useSyncExternalStore(e,t,r)};F.useTransition=function(){return he.current.useTransition()};F.version="18.3.1";gs.exports=F;var M=gs.exports;const Jc=Mc(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=M,td=Symbol.for("react.element"),rd=Symbol.for("react.fragment"),nd=Object.prototype.hasOwnProperty,od=ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function Es(e,t,r){var n,o={},l=null,i=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)nd.call(t,n)&&!ld.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:td,type:e,key:l,ref:i,props:o,_owner:od.current}}wo.Fragment=rd;wo.jsx=Es;wo.jsxs=Es;hs.exports=wo;var a=hs.exports,fl={},Cs={exports:{}},_e={},zs={exports:{}},Ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,R){var T=S.length;S.push(R);e:for(;0<T;){var V=T-1>>>1,$=S[V];if(0<o($,R))S[V]=R,S[T]=$,T=V;else break e}}function r(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var R=S[0],T=S.pop();if(T!==R){S[0]=T;e:for(var V=0,$=S.length,Tt=$>>>1;V<Tt;){var Ie=2*(V+1)-1,Qt=S[Ie],Ze=Ie+1,Kt=S[Ze];if(0>o(Qt,T))Ze<$&&0>o(Kt,Qt)?(S[V]=Kt,S[Ze]=T,V=Ze):(S[V]=Qt,S[Ie]=T,V=Ie);else if(Ze<$&&0>o(Kt,T))S[V]=Kt,S[Ze]=T,V=Ze;else break e}}return R}function o(S,R){var T=S.sortIndex-R.sortIndex;return T!==0?T:S.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],f=[],g=1,v=null,h=3,j=!1,w=!1,E=!1,B=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var R=r(f);R!==null;){if(R.callback===null)n(f);else if(R.startTime<=S)n(f),R.sortIndex=R.expirationTime,t(u,R);else break;R=r(f)}}function y(S){if(E=!1,m(S),!w)if(r(u)!==null)w=!0,A(C);else{var R=r(f);R!==null&&je(y,R.startTime-S)}}function C(S,R){w=!1,E&&(E=!1,p(_),_=-1),j=!0;var T=h;try{for(m(R),v=r(u);v!==null&&(!(v.expirationTime>R)||S&&!ne());){var V=v.callback;if(typeof V=="function"){v.callback=null,h=v.priorityLevel;var $=V(v.expirationTime<=R);R=e.unstable_now(),typeof $=="function"?v.callback=$:v===r(u)&&n(u),m(R)}else n(u);v=r(u)}if(v!==null)var Tt=!0;else{var Ie=r(f);Ie!==null&&je(y,Ie.startTime-R),Tt=!1}return Tt}finally{v=null,h=T,j=!1}}var P=!1,k=null,_=-1,O=5,L=-1;function ne(){return!(e.unstable_now()-L<O)}function ve(){if(k!==null){var S=e.unstable_now();L=S;var R=!0;try{R=k(!0,S)}finally{R?Me():(P=!1,k=null)}}else P=!1}var Me;if(typeof d=="function")Me=function(){d(ve)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,gn=Qe.port2;Qe.port1.onmessage=ve,Me=function(){gn.postMessage(null)}}else Me=function(){B(ve,0)};function A(S){k=S,P||(P=!0,Me())}function je(S,R){_=B(function(){S(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||j||(w=!0,A(C))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var T=h;h=R;try{return S()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,R){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=h;h=S;try{return R()}finally{h=T}},e.unstable_scheduleCallback=function(S,R,T){var V=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?V+T:V):T=V,S){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=T+$,S={id:g++,callback:R,priorityLevel:S,startTime:T,expirationTime:$,sortIndex:-1},T>V?(S.sortIndex=T,t(f,S),r(u)===null&&S===r(f)&&(E?(p(_),_=-1):E=!0,je(y,T-V))):(S.sortIndex=$,t(u,S),w||j||(w=!0,A(C))),S},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(S){var R=h;return function(){var T=h;h=R;try{return S.apply(this,arguments)}finally{h=T}}}})(Ps);zs.exports=Ps;var id=zs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=M,Pe=id;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _s=new Set,Kr={};function Ht(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(Kr[e]=t,e=0;e<t.length;e++)_s.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,sd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ua={},ca={};function ud(e){return pl.call(ca,e)?!0:pl.call(ua,e)?!1:sd.test(e)?ca[e]=!0:(ua[e]=!0,!1)}function cd(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dd(e,t,r,n){if(t===null||typeof t>"u"||cd(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,r,n,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ui=/[\-:]([a-z])/g;function ci(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ui,ci);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ui,ci);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ui,ci);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function di(e,t,r,n){var o=se.hasOwnProperty(t)?se[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dd(t,r,o,n)&&(r=null),n||o===null?ud(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ut=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kn=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),fi=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),Ts=Symbol.for("react.provider"),Ls=Symbol.for("react.context"),pi=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),mi=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Rs=Symbol.for("react.offscreen"),da=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,$o;function Dr(e){if($o===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||""}return`
`+$o+e}var Bo=!1;function Vo(e,t){if(!e||Bo)return"";Bo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var n=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){n=f}e.call(t.prototype)}else{try{throw Error()}catch(f){n=f}e()}}catch(f){if(f&&n&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),l=n.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Bo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Dr(e):""}function fd(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Vo(e.type,!1),e;case 11:return e=Vo(e.type.render,!1),e;case 1:return e=Vo(e.type,!0),e;default:return""}}function vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Gt:return"Portal";case ml:return"Profiler";case fi:return"StrictMode";case hl:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ls:return(e.displayName||"Context")+".Consumer";case Ts:return(e._context.displayName||"Context")+".Provider";case pi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mi:return t=e.displayName||null,t!==null?t:vl(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return vl(e(t))}catch{}}return null}function pd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vl(t);case 8:return t===fi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function md(e){var t=bs(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){n=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sn(e){e._valueTracker||(e._valueTracker=md(e))}function Ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=bs(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yl(e,t){var r=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function fa(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Et(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Os(e,t){t=t.checked,t!=null&&di(e,"checked",t,!1)}function xl(e,t){Os(e,t);var r=Et(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,r):t.hasOwnProperty("defaultValue")&&wl(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pa(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function wl(e,t,r){(t!=="number"||Xn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Or=Array.isArray;function sr(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Et(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(x(92));if(Or(r)){if(1<r.length)throw Error(x(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Et(r)}}function Fs(e,t){var r=Et(t.value),n=Et(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jn,Is=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jn=jn||document.createElement("div"),jn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function As(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Us(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=As(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var gd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(gd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,ur=null,cr=null;function ga(e){if(e=mn(e)){if(typeof Cl!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Eo(t),Cl(e.stateNode,e.type,t))}}function $s(e){ur?cr?cr.push(e):cr=[e]:ur=e}function Bs(){if(ur){var e=ur,t=cr;if(cr=ur=null,ga(e),t)for(e=0;e<t.length;e++)ga(t[e])}}function Vs(e,t){return e(t)}function Hs(){}var Ho=!1;function Ws(e,t,r){if(Ho)return e(t,r);Ho=!0;try{return Vs(e,t,r)}finally{Ho=!1,(ur!==null||cr!==null)&&(Hs(),Bs())}}function Xr(e,t){var r=e.stateNode;if(r===null)return null;var n=Eo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(x(231,t,typeof r));return r}var zl=!1;if(lt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){zl=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{zl=!1}function vd(e,t,r,n,o,l,i,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(r,f)}catch(g){this.onError(g)}}var Ar=!1,Gn=null,qn=!1,Pl=null,yd={onError:function(e){Ar=!0,Gn=e}};function xd(e,t,r,n,o,l,i,s,u){Ar=!1,Gn=null,vd.apply(yd,arguments)}function wd(e,t,r,n,o,l,i,s,u){if(xd.apply(this,arguments),Ar){if(Ar){var f=Gn;Ar=!1,Gn=null}else throw Error(x(198));qn||(qn=!0,Pl=f)}}function Wt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function va(e){if(Wt(e)!==e)throw Error(x(188))}function kd(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var l=o.alternate;if(l===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===r)return va(o),e;if(l===n)return va(o),t;l=l.sibling}throw Error(x(188))}if(r.return!==n.return)r=o,n=l;else{for(var i=!1,s=o.child;s;){if(s===r){i=!0,r=o,n=l;break}if(s===n){i=!0,n=o,r=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===r){i=!0,r=l,n=o;break}if(s===n){i=!0,n=l,r=o;break}s=s.sibling}if(!i)throw Error(x(189))}}if(r.alternate!==n)throw Error(x(190))}if(r.tag!==3)throw Error(x(188));return r.stateNode.current===r?e:t}function Ks(e){return e=kd(e),e!==null?Ys(e):null}function Ys(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ys(e);if(t!==null)return t;e=e.sibling}return null}var Xs=Pe.unstable_scheduleCallback,ya=Pe.unstable_cancelCallback,Sd=Pe.unstable_shouldYield,jd=Pe.unstable_requestPaint,J=Pe.unstable_now,Nd=Pe.unstable_getCurrentPriorityLevel,gi=Pe.unstable_ImmediatePriority,Gs=Pe.unstable_UserBlockingPriority,Zn=Pe.unstable_NormalPriority,Ed=Pe.unstable_LowPriority,qs=Pe.unstable_IdlePriority,ko=null,Ge=null;function Cd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:_d,zd=Math.log,Pd=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(zd(e)/Pd|0)|0}var Nn=64,En=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jn(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,l=e.pingedLanes,i=r&268435455;if(i!==0){var s=i&~o;s!==0?n=Fr(s):(l&=i,l!==0&&(n=Fr(l)))}else i=r&~o,i!==0?n=Fr(i):l!==0&&(n=Fr(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ve(t),o=1<<r,n|=e[r],t&=~o;return n}function Td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ld(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ve(l),s=1<<i,u=o[i];u===-1?(!(s&r)||s&n)&&(o[i]=Td(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zs(){var e=Nn;return Nn<<=1,!(Nn&4194240)&&(Nn=64),e}function Wo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function fn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=r}function Rd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Ve(r),l=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~l}}function vi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ve(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var U=0;function Js(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eu,yi,tu,ru,nu,Tl=!1,Cn=[],vt=null,yt=null,xt=null,Gr=new Map,qr=new Map,pt=[],bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xa(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function Pr(e,t,r,n,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[o]},t!==null&&(t=mn(t),t!==null&&yi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Dd(e,t,r,n,o){switch(t){case"focusin":return vt=Pr(vt,e,t,r,n,o),!0;case"dragenter":return yt=Pr(yt,e,t,r,n,o),!0;case"mouseover":return xt=Pr(xt,e,t,r,n,o),!0;case"pointerover":var l=o.pointerId;return Gr.set(l,Pr(Gr.get(l)||null,e,t,r,n,o)),!0;case"gotpointercapture":return l=o.pointerId,qr.set(l,Pr(qr.get(l)||null,e,t,r,n,o)),!0}return!1}function ou(e){var t=Dt(e.target);if(t!==null){var r=Wt(t);if(r!==null){if(t=r.tag,t===13){if(t=Qs(r),t!==null){e.blockedOn=t,nu(e.priority,function(){tu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function An(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);El=n,r.target.dispatchEvent(n),El=null}else return t=mn(r),t!==null&&yi(t),e.blockedOn=r,!1;t.shift()}return!0}function wa(e,t,r){An(e)&&r.delete(t)}function Od(){Tl=!1,vt!==null&&An(vt)&&(vt=null),yt!==null&&An(yt)&&(yt=null),xt!==null&&An(xt)&&(xt=null),Gr.forEach(wa),qr.forEach(wa)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Od)))}function Zr(e){function t(o){return _r(o,e)}if(0<Cn.length){_r(Cn[0],e);for(var r=1;r<Cn.length;r++){var n=Cn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(vt!==null&&_r(vt,e),yt!==null&&_r(yt,e),xt!==null&&_r(xt,e),Gr.forEach(t),qr.forEach(t),r=0;r<pt.length;r++)n=pt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(r=pt[0],r.blockedOn===null);)ou(r),r.blockedOn===null&&pt.shift()}var dr=ut.ReactCurrentBatchConfig,eo=!0;function Fd(e,t,r,n){var o=U,l=dr.transition;dr.transition=null;try{U=1,xi(e,t,r,n)}finally{U=o,dr.transition=l}}function Md(e,t,r,n){var o=U,l=dr.transition;dr.transition=null;try{U=4,xi(e,t,r,n)}finally{U=o,dr.transition=l}}function xi(e,t,r,n){if(eo){var o=Ll(e,t,r,n);if(o===null)tl(e,t,n,to,r),xa(e,n);else if(Dd(o,e,t,r,n))n.stopPropagation();else if(xa(e,n),t&4&&-1<bd.indexOf(e)){for(;o!==null;){var l=mn(o);if(l!==null&&eu(l),l=Ll(e,t,r,n),l===null&&tl(e,t,n,to,r),l===o)break;o=l}o!==null&&n.stopPropagation()}else tl(e,t,n,null,r)}}var to=null;function Ll(e,t,r,n){if(to=null,e=hi(n),e=Dt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Qs(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nd()){case gi:return 1;case Gs:return 4;case Zn:case Ed:return 16;case qs:return 536870912;default:return 16}default:return 16}}var ht=null,wi=null,Un=null;function iu(){if(Un)return Un;var e,t=wi,r=t.length,n,o="value"in ht?ht.value:ht.textContent,l=o.length;for(e=0;e<r&&t[e]===o[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===o[l-n];n++);return Un=o.slice(e,1<n?1-n:void 0)}function $n(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zn(){return!0}function ka(){return!1}function Te(e){function t(r,n,o,l,i){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zn:ka,this.isPropagationStopped=ka,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=Te(Sr),pn=G({},Sr,{view:0,detail:0}),Id=Te(pn),Qo,Ko,Tr,So=G({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(Qo=e.screenX-Tr.screenX,Ko=e.screenY-Tr.screenY):Ko=Qo=0,Tr=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Sa=Te(So),Ad=G({},So,{dataTransfer:0}),Ud=Te(Ad),$d=G({},pn,{relatedTarget:0}),Yo=Te($d),Bd=G({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vd=Te(Bd),Hd=G({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=Te(Hd),Qd=G({},Sr,{data:0}),ja=Te(Qd),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xd[e])?!!t[e]:!1}function Si(){return Gd}var qd=G({},pn,{key:function(e){if(e.key){var t=Kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Si,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Te(qd),Jd=G({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=Te(Jd),ef=G({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Si}),tf=Te(ef),rf=G({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Te(rf),of=G({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Te(of),af=[9,13,27,32],ji=lt&&"CompositionEvent"in window,Ur=null;lt&&"documentMode"in document&&(Ur=document.documentMode);var sf=lt&&"TextEvent"in window&&!Ur,au=lt&&(!ji||Ur&&8<Ur&&11>=Ur),Ea=" ",Ca=!1;function su(e,t){switch(e){case"keyup":return af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function uf(e,t){switch(e){case"compositionend":return uu(t);case"keypress":return t.which!==32?null:(Ca=!0,Ea);case"textInput":return e=t.data,e===Ea&&Ca?null:e;default:return null}}function cf(e,t){if(Zt)return e==="compositionend"||!ji&&su(e,t)?(e=iu(),Un=wi=ht=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return au&&t.locale!=="ko"?null:t.data;default:return null}}var df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!df[e.type]:t==="textarea"}function cu(e,t,r,n){$s(n),t=ro(t,"onChange"),0<t.length&&(r=new ki("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var $r=null,Jr=null;function ff(e){ku(e,0)}function jo(e){var t=tr(e);if(Ds(t))return e}function pf(e,t){if(e==="change")return t}var du=!1;if(lt){var Xo;if(lt){var Go="oninput"in document;if(!Go){var Pa=document.createElement("div");Pa.setAttribute("oninput","return;"),Go=typeof Pa.oninput=="function"}Xo=Go}else Xo=!1;du=Xo&&(!document.documentMode||9<document.documentMode)}function _a(){$r&&($r.detachEvent("onpropertychange",fu),Jr=$r=null)}function fu(e){if(e.propertyName==="value"&&jo(Jr)){var t=[];cu(t,Jr,e,hi(e)),Ws(ff,t)}}function mf(e,t,r){e==="focusin"?(_a(),$r=t,Jr=r,$r.attachEvent("onpropertychange",fu)):e==="focusout"&&_a()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Jr)}function gf(e,t){if(e==="click")return jo(t)}function vf(e,t){if(e==="input"||e==="change")return jo(t)}function yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:yf;function en(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!pl.call(t,o)||!We(e[o],t[o]))return!1}return!0}function Ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function La(e,t){var r=Ta(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ta(r)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mu(){for(var e=window,t=Xn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Xn(e.document)}return t}function Ni(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xf(e){var t=mu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&pu(r.ownerDocument.documentElement,r)){if(n!==null&&Ni(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,l=Math.min(n.start,o);n=n.end===void 0?l:Math.min(n.end,o),!e.extend&&l>n&&(o=n,n=l,l=o),o=La(r,l);var i=La(r,n);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wf=lt&&"documentMode"in document&&11>=document.documentMode,Jt=null,Rl=null,Br=null,bl=!1;function Ra(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;bl||Jt==null||Jt!==Xn(n)||(n=Jt,"selectionStart"in n&&Ni(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Br&&en(Br,n)||(Br=n,n=ro(Rl,"onSelect"),0<n.length&&(t=new ki("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Jt)))}function Pn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},qo={},hu={};lt&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function No(e){if(qo[e])return qo[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in hu)return qo[e]=t[r];return e}var gu=No("animationend"),vu=No("animationiteration"),yu=No("animationstart"),xu=No("transitionend"),wu=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){wu.set(e,t),Ht(t,[e])}for(var Zo=0;Zo<ba.length;Zo++){var Jo=ba[Zo],kf=Jo.toLowerCase(),Sf=Jo[0].toUpperCase()+Jo.slice(1);zt(kf,"on"+Sf)}zt(gu,"onAnimationEnd");zt(vu,"onAnimationIteration");zt(yu,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(xu,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Da(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,wd(n,t,void 0,e),e.currentTarget=null}function ku(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;Da(o,s,f),l=u}else for(i=0;i<n.length;i++){if(s=n[i],u=s.instance,f=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;Da(o,s,f),l=u}}}if(qn)throw e=Pl,qn=!1,Pl=null,e}function W(e,t){var r=t[Il];r===void 0&&(r=t[Il]=new Set);var n=e+"__bubble";r.has(n)||(Su(t,e,2,!1),r.add(n))}function el(e,t,r){var n=0;t&&(n|=4),Su(r,e,n,t)}var _n="_reactListening"+Math.random().toString(36).slice(2);function tn(e){if(!e[_n]){e[_n]=!0,_s.forEach(function(r){r!=="selectionchange"&&(jf.has(r)||el(r,!1,e),el(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_n]||(t[_n]=!0,el("selectionchange",!1,t))}}function Su(e,t,r,n){switch(lu(t)){case 1:var o=Fd;break;case 4:o=Md;break;default:o=xi}r=o.bind(null,t,r,e),o=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function tl(e,t,r,n,o){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=n.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Dt(s),i===null)return;if(u=i.tag,u===5||u===6){n=l=i;continue e}s=s.parentNode}}n=n.return}Ws(function(){var f=l,g=hi(r),v=[];e:{var h=wu.get(e);if(h!==void 0){var j=ki,w=e;switch(e){case"keypress":if($n(r)===0)break e;case"keydown":case"keyup":j=Zd;break;case"focusin":w="focus",j=Yo;break;case"focusout":w="blur",j=Yo;break;case"beforeblur":case"afterblur":j=Yo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=tf;break;case gu:case vu:case yu:j=Vd;break;case xu:j=nf;break;case"scroll":j=Id;break;case"wheel":j=lf;break;case"copy":case"cut":case"paste":j=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Na}var E=(t&4)!==0,B=!E&&e==="scroll",p=E?h!==null?h+"Capture":null:h;E=[];for(var d=f,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Xr(d,p),y!=null&&E.push(rn(d,y,m)))),B)break;d=d.return}0<E.length&&(h=new j(h,w,null,r,g),v.push({event:h,listeners:E}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",h&&r!==El&&(w=r.relatedTarget||r.fromElement)&&(Dt(w)||w[it]))break e;if((j||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,j?(w=r.relatedTarget||r.toElement,j=f,w=w?Dt(w):null,w!==null&&(B=Wt(w),w!==B||w.tag!==5&&w.tag!==6)&&(w=null)):(j=null,w=f),j!==w)){if(E=Sa,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=Na,y="onPointerLeave",p="onPointerEnter",d="pointer"),B=j==null?h:tr(j),m=w==null?h:tr(w),h=new E(y,d+"leave",j,r,g),h.target=B,h.relatedTarget=m,y=null,Dt(g)===f&&(E=new E(p,d+"enter",w,r,g),E.target=m,E.relatedTarget=B,y=E),B=y,j&&w)t:{for(E=j,p=w,d=0,m=E;m;m=Xt(m))d++;for(m=0,y=p;y;y=Xt(y))m++;for(;0<d-m;)E=Xt(E),d--;for(;0<m-d;)p=Xt(p),m--;for(;d--;){if(E===p||p!==null&&E===p.alternate)break t;E=Xt(E),p=Xt(p)}E=null}else E=null;j!==null&&Oa(v,h,j,E,!1),w!==null&&B!==null&&Oa(v,B,w,E,!0)}}e:{if(h=f?tr(f):window,j=h.nodeName&&h.nodeName.toLowerCase(),j==="select"||j==="input"&&h.type==="file")var C=pf;else if(za(h))if(du)C=vf;else{C=hf;var P=mf}else(j=h.nodeName)&&j.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=gf);if(C&&(C=C(e,f))){cu(v,C,r,g);break e}P&&P(e,h,f),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&wl(h,"number",h.value)}switch(P=f?tr(f):window,e){case"focusin":(za(P)||P.contentEditable==="true")&&(Jt=P,Rl=f,Br=null);break;case"focusout":Br=Rl=Jt=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,Ra(v,r,g);break;case"selectionchange":if(wf)break;case"keydown":case"keyup":Ra(v,r,g)}var k;if(ji)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Zt?su(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(au&&r.locale!=="ko"&&(Zt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Zt&&(k=iu()):(ht=g,wi="value"in ht?ht.value:ht.textContent,Zt=!0)),P=ro(f,_),0<P.length&&(_=new ja(_,e,null,r,g),v.push({event:_,listeners:P}),k?_.data=k:(k=uu(r),k!==null&&(_.data=k)))),(k=sf?uf(e,r):cf(e,r))&&(f=ro(f,"onBeforeInput"),0<f.length&&(g=new ja("onBeforeInput","beforeinput",null,r,g),v.push({event:g,listeners:f}),g.data=k))}ku(v,t)})}function rn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ro(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Xr(e,r),l!=null&&n.unshift(rn(e,l,o)),l=Xr(e,t),l!=null&&n.push(rn(e,l,o))),e=e.return}return n}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oa(e,t,r,n,o){for(var l=t._reactName,i=[];r!==null&&r!==n;){var s=r,u=s.alternate,f=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&f!==null&&(s=f,o?(u=Xr(r,l),u!=null&&i.unshift(rn(r,u,s))):o||(u=Xr(r,l),u!=null&&i.push(rn(r,u,s)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Nf=/\r\n?/g,Ef=/\u0000|\uFFFD/g;function Fa(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(Ef,"")}function Tn(e,t,r){if(t=Fa(t),Fa(e)!==t&&r)throw Error(x(425))}function no(){}var Dl=null,Ol=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,Ma=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ma<"u"?function(e){return Ma.resolve(null).then(e).catch(Pf)}:Ml;function Pf(e){setTimeout(function(){throw e})}function rl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Zr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Zr(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ia(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Xe="__reactFiber$"+jr,nn="__reactProps$"+jr,it="__reactContainer$"+jr,Il="__reactEvents$"+jr,_f="__reactListeners$"+jr,Tf="__reactHandles$"+jr;function Dt(e){var t=e[Xe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[it]||r[Xe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ia(e);e!==null;){if(r=e[Xe])return r;e=Ia(e)}return t}e=r,r=e.parentNode}return null}function mn(e){return e=e[Xe]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Eo(e){return e[nn]||null}var Al=[],rr=-1;function Pt(e){return{current:e}}function Q(e){0>rr||(e.current=Al[rr],Al[rr]=null,rr--)}function H(e,t){rr++,Al[rr]=e.current,e.current=t}var Ct={},fe=Pt(Ct),we=Pt(!1),At=Ct;function hr(e,t){var r=e.type.contextTypes;if(!r)return Ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in r)o[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function oo(){Q(we),Q(fe)}function Aa(e,t,r){if(fe.current!==Ct)throw Error(x(168));H(fe,t),H(we,r)}function ju(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(x(108,pd(e)||"Unknown",o));return G({},r,n)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,At=fe.current,H(fe,e),H(we,we.current),!0}function Ua(e,t,r){var n=e.stateNode;if(!n)throw Error(x(169));r?(e=ju(e,t,At),n.__reactInternalMemoizedMergedChildContext=e,Q(we),Q(fe),H(fe,e)):Q(we),H(we,r)}var tt=null,Co=!1,nl=!1;function Nu(e){tt===null?tt=[e]:tt.push(e)}function Lf(e){Co=!0,Nu(e)}function _t(){if(!nl&&tt!==null){nl=!0;var e=0,t=U;try{var r=tt;for(U=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}tt=null,Co=!1}catch(o){throw tt!==null&&(tt=tt.slice(e+1)),Xs(gi,_t),o}finally{U=t,nl=!1}}return null}var nr=[],or=0,io=null,ao=0,Le=[],Re=0,Ut=null,rt=1,nt="";function Rt(e,t){nr[or++]=ao,nr[or++]=io,io=e,ao=t}function Eu(e,t,r){Le[Re++]=rt,Le[Re++]=nt,Le[Re++]=Ut,Ut=e;var n=rt;e=nt;var o=32-Ve(n)-1;n&=~(1<<o),r+=1;var l=32-Ve(t)+o;if(30<l){var i=o-o%5;l=(n&(1<<i)-1).toString(32),n>>=i,o-=i,rt=1<<32-Ve(t)+o|r<<o|n,nt=l+e}else rt=1<<l|r<<o|n,nt=e}function Ei(e){e.return!==null&&(Rt(e,1),Eu(e,1,0))}function Ci(e){for(;e===io;)io=nr[--or],nr[or]=null,ao=nr[--or],nr[or]=null;for(;e===Ut;)Ut=Le[--Re],Le[Re]=null,nt=Le[--Re],Le[Re]=null,rt=Le[--Re],Le[Re]=null}var ze=null,Ce=null,K=!1,Be=null;function Cu(e,t){var r=be(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function $a(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ce=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ut!==null?{id:rt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=be(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ze=e,Ce=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(K){var t=Ce;if(t){var r=t;if(!$a(e,t)){if(Ul(e))throw Error(x(418));t=wt(r.nextSibling);var n=ze;t&&$a(e,t)?Cu(n,r):(e.flags=e.flags&-4097|2,K=!1,ze=e)}}else{if(Ul(e))throw Error(x(418));e.flags=e.flags&-4097|2,K=!1,ze=e}}}function Ba(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ln(e){if(e!==ze)return!1;if(!K)return Ba(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=Ce)){if(Ul(e))throw zu(),Error(x(418));for(;t;)Cu(e,t),t=wt(t.nextSibling)}if(Ba(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ce=wt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=ze?wt(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=Ce;e;)e=wt(e.nextSibling)}function gr(){Ce=ze=null,K=!1}function zi(e){Be===null?Be=[e]:Be.push(e)}var Rf=ut.ReactCurrentBatchConfig;function Lr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(x(309));var n=r.stateNode}if(!n)throw Error(x(147,e));var o=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(x(284));if(!r._owner)throw Error(x(290,e))}return e}function Rn(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Va(e){var t=e._init;return t(e._payload)}function Pu(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Nt(p,d),p.index=0,p.sibling=null,p}function l(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,y){return d===null||d.tag!==6?(d=cl(m,p.mode,y),d.return=p,d):(d=o(d,m),d.return=p,d)}function u(p,d,m,y){var C=m.type;return C===qt?g(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&Va(C)===d.type)?(y=o(d,m.props),y.ref=Lr(p,d,m),y.return=p,y):(y=Yn(m.type,m.key,m.props,null,p.mode,y),y.ref=Lr(p,d,m),y.return=p,y)}function f(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=dl(m,p.mode,y),d.return=p,d):(d=o(d,m.children||[]),d.return=p,d)}function g(p,d,m,y,C){return d===null||d.tag!==7?(d=It(m,p.mode,y,C),d.return=p,d):(d=o(d,m),d.return=p,d)}function v(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=cl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case kn:return m=Yn(d.type,d.key,d.props,null,p.mode,m),m.ref=Lr(p,null,d),m.return=p,m;case Gt:return d=dl(d,p.mode,m),d.return=p,d;case dt:var y=d._init;return v(p,y(d._payload),m)}if(Or(d)||Cr(d))return d=It(d,p.mode,m,null),d.return=p,d;Rn(p,d)}return null}function h(p,d,m,y){var C=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:s(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case kn:return m.key===C?u(p,d,m,y):null;case Gt:return m.key===C?f(p,d,m,y):null;case dt:return C=m._init,h(p,d,C(m._payload),y)}if(Or(m)||Cr(m))return C!==null?null:g(p,d,m,y,null);Rn(p,m)}return null}function j(p,d,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,s(d,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case kn:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,C);case Gt:return p=p.get(y.key===null?m:y.key)||null,f(d,p,y,C);case dt:var P=y._init;return j(p,d,m,P(y._payload),C)}if(Or(y)||Cr(y))return p=p.get(m)||null,g(d,p,y,C,null);Rn(d,y)}return null}function w(p,d,m,y){for(var C=null,P=null,k=d,_=d=0,O=null;k!==null&&_<m.length;_++){k.index>_?(O=k,k=null):O=k.sibling;var L=h(p,k,m[_],y);if(L===null){k===null&&(k=O);break}e&&k&&L.alternate===null&&t(p,k),d=l(L,d,_),P===null?C=L:P.sibling=L,P=L,k=O}if(_===m.length)return r(p,k),K&&Rt(p,_),C;if(k===null){for(;_<m.length;_++)k=v(p,m[_],y),k!==null&&(d=l(k,d,_),P===null?C=k:P.sibling=k,P=k);return K&&Rt(p,_),C}for(k=n(p,k);_<m.length;_++)O=j(k,p,_,m[_],y),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?_:O.key),d=l(O,d,_),P===null?C=O:P.sibling=O,P=O);return e&&k.forEach(function(ne){return t(p,ne)}),K&&Rt(p,_),C}function E(p,d,m,y){var C=Cr(m);if(typeof C!="function")throw Error(x(150));if(m=C.call(m),m==null)throw Error(x(151));for(var P=C=null,k=d,_=d=0,O=null,L=m.next();k!==null&&!L.done;_++,L=m.next()){k.index>_?(O=k,k=null):O=k.sibling;var ne=h(p,k,L.value,y);if(ne===null){k===null&&(k=O);break}e&&k&&ne.alternate===null&&t(p,k),d=l(ne,d,_),P===null?C=ne:P.sibling=ne,P=ne,k=O}if(L.done)return r(p,k),K&&Rt(p,_),C;if(k===null){for(;!L.done;_++,L=m.next())L=v(p,L.value,y),L!==null&&(d=l(L,d,_),P===null?C=L:P.sibling=L,P=L);return K&&Rt(p,_),C}for(k=n(p,k);!L.done;_++,L=m.next())L=j(k,p,_,L.value,y),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?_:L.key),d=l(L,d,_),P===null?C=L:P.sibling=L,P=L);return e&&k.forEach(function(ve){return t(p,ve)}),K&&Rt(p,_),C}function B(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===qt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case kn:e:{for(var C=m.key,P=d;P!==null;){if(P.key===C){if(C=m.type,C===qt){if(P.tag===7){r(p,P.sibling),d=o(P,m.props.children),d.return=p,p=d;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&Va(C)===P.type){r(p,P.sibling),d=o(P,m.props),d.ref=Lr(p,P,m),d.return=p,p=d;break e}r(p,P);break}else t(p,P);P=P.sibling}m.type===qt?(d=It(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=Yn(m.type,m.key,m.props,null,p.mode,y),y.ref=Lr(p,d,m),y.return=p,p=y)}return i(p);case Gt:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(p,d.sibling),d=o(d,m.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=dl(m,p.mode,y),d.return=p,p=d}return i(p);case dt:return P=m._init,B(p,d,P(m._payload),y)}if(Or(m))return w(p,d,m,y);if(Cr(m))return E(p,d,m,y);Rn(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(p,d.sibling),d=o(d,m),d.return=p,p=d):(r(p,d),d=cl(m,p.mode,y),d.return=p,p=d),i(p)):r(p,d)}return B}var vr=Pu(!0),_u=Pu(!1),so=Pt(null),uo=null,lr=null,Pi=null;function _i(){Pi=lr=uo=null}function Ti(e){var t=so.current;Q(so),e._currentValue=t}function Bl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function fr(e,t){uo=e,Pi=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(Pi!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(uo===null)throw Error(x(308));lr=e,uo.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Ot=null;function Li(e){Ot===null?Ot=[e]:Ot.push(e)}function Tu(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Li(t)):(r.next=o.next,o.next=r),t.interleaved=r,at(e,n)}function at(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ft=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,I&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,at(e,r)}return o=n.interleaved,o===null?(t.next=t,Li(n)):(t.next=o.next,o.next=t),n.interleaved=t,at(e,r)}function Bn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,vi(e,r)}}function Ha(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?o=l=i:l=l.next=i,r=r.next}while(r!==null);l===null?o=l=t:l=l.next=t}else o=l=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function co(e,t,r,n){var o=e.updateQueue;ft=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,f=u.next;u.next=null,i===null?l=f:i.next=f,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=f:s.next=f,g.lastBaseUpdate=u))}if(l!==null){var v=o.baseState;i=0,g=f=u=null,s=l;do{var h=s.lane,j=s.eventTime;if((n&h)===h){g!==null&&(g=g.next={eventTime:j,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,E=s;switch(h=t,j=r,E.tag){case 1:if(w=E.payload,typeof w=="function"){v=w.call(j,v,h);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=E.payload,h=typeof w=="function"?w.call(j,v,h):w,h==null)break e;v=G({},v,h);break e;case 2:ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else j={eventTime:j,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(f=g=j,u=v):g=g.next=j,i|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(g===null&&(u=v),o.baseState=u,o.firstBaseUpdate=f,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Bt|=i,e.lanes=i,e.memoizedState=v}}function Wa(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(x(191,o));o.call(n)}}}var hn={},qe=Pt(hn),on=Pt(hn),ln=Pt(hn);function Ft(e){if(e===hn)throw Error(x(174));return e}function bi(e,t){switch(H(ln,t),H(on,e),H(qe,hn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}Q(qe),H(qe,t)}function yr(){Q(qe),Q(on),Q(ln)}function Ru(e){Ft(ln.current);var t=Ft(qe.current),r=Sl(t,e.type);t!==r&&(H(on,e),H(qe,r))}function Di(e){on.current===e&&(Q(qe),Q(on))}var Y=Pt(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ol=[];function Oi(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var Vn=ut.ReactCurrentDispatcher,ll=ut.ReactCurrentBatchConfig,$t=0,X=null,te=null,oe=null,po=!1,Vr=!1,an=0,bf=0;function ue(){throw Error(x(321))}function Fi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!We(e[r],t[r]))return!1;return!0}function Mi(e,t,r,n,o,l){if($t=l,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vn.current=e===null||e.memoizedState===null?Mf:If,e=r(n,o),Vr){l=0;do{if(Vr=!1,an=0,25<=l)throw Error(x(301));l+=1,oe=te=null,t.updateQueue=null,Vn.current=Af,e=r(n,o)}while(Vr)}if(Vn.current=mo,t=te!==null&&te.next!==null,$t=0,oe=te=X=null,po=!1,t)throw Error(x(300));return e}function Ii(){var e=an!==0;return an=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Fe(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(x(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function sn(e,t){return typeof t=="function"?t(e):t}function il(e){var t=Fe(),r=t.queue;if(r===null)throw Error(x(311));r.lastRenderedReducer=e;var n=te,o=n.baseQueue,l=r.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}n.baseQueue=o=l,r.pending=null}if(o!==null){l=o.next,n=n.baseState;var s=i=null,u=null,f=l;do{var g=f.lane;if(($t&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),n=f.hasEagerState?f.eagerState:e(n,f.action);else{var v={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=v,i=n):u=u.next=v,X.lanes|=g,Bt|=g}f=f.next}while(f!==null&&f!==l);u===null?i=n:u.next=s,We(n,t.memoizedState)||(xe=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do l=o.lane,X.lanes|=l,Bt|=l,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function al(e){var t=Fe(),r=t.queue;if(r===null)throw Error(x(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,l=t.memoizedState;if(o!==null){r.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);We(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function bu(){}function Du(e,t){var r=X,n=Fe(),o=t(),l=!We(n.memoizedState,o);if(l&&(n.memoizedState=o,xe=!0),n=n.queue,Ai(Mu.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||oe!==null&&oe.memoizedState.tag&1){if(r.flags|=2048,un(9,Fu.bind(null,r,n,o,t),void 0,null),le===null)throw Error(x(349));$t&30||Ou(r,t,o)}return o}function Ou(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Fu(e,t,r,n){t.value=r,t.getSnapshot=n,Iu(t)&&Au(e)}function Mu(e,t,r){return r(function(){Iu(t)&&Au(e)})}function Iu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!We(e,r)}catch{return!0}}function Au(e){var t=at(e,1);t!==null&&He(t,e,1,-1)}function Qa(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,X,e),[t.memoizedState,e]}function un(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Uu(){return Fe().memoizedState}function Hn(e,t,r,n){var o=Ye();X.flags|=e,o.memoizedState=un(1|t,r,void 0,n===void 0?null:n)}function zo(e,t,r,n){var o=Fe();n=n===void 0?null:n;var l=void 0;if(te!==null){var i=te.memoizedState;if(l=i.destroy,n!==null&&Fi(n,i.deps)){o.memoizedState=un(t,r,l,n);return}}X.flags|=e,o.memoizedState=un(1|t,r,l,n)}function Ka(e,t){return Hn(8390656,8,e,t)}function Ai(e,t){return zo(2048,8,e,t)}function $u(e,t){return zo(4,2,e,t)}function Bu(e,t){return zo(4,4,e,t)}function Vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hu(e,t,r){return r=r!=null?r.concat([e]):null,zo(4,4,Vu.bind(null,t,e),r)}function Ui(){}function Wu(e,t){var r=Fe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Qu(e,t){var r=Fe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ku(e,t,r){return $t&21?(We(r,t)||(r=Zs(),X.lanes|=r,Bt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=r)}function Df(e,t){var r=U;U=r!==0&&4>r?r:4,e(!0);var n=ll.transition;ll.transition={};try{e(!1),t()}finally{U=r,ll.transition=n}}function Yu(){return Fe().memoizedState}function Of(e,t,r){var n=jt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Xu(e))Gu(t,r);else if(r=Tu(e,t,r,n),r!==null){var o=me();He(r,e,n,o),qu(r,t,n)}}function Ff(e,t,r){var n=jt(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xu(e))Gu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,r);if(o.hasEagerState=!0,o.eagerState=s,We(s,i)){var u=t.interleaved;u===null?(o.next=o,Li(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}r=Tu(e,t,o,n),r!==null&&(o=me(),He(r,e,n,o),qu(r,t,n))}}function Xu(e){var t=e.alternate;return e===X||t!==null&&t===X}function Gu(e,t){Vr=po=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function qu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,vi(e,r)}}var mo={readContext:Oe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Mf={readContext:Oe,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:Ka,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Hn(4194308,4,Vu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Hn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hn(4,2,e,t)},useMemo:function(e,t){var r=Ye();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ye();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Of.bind(null,X,e),[n.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:Qa,useDebugValue:Ui,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=Qa(!1),t=e[0];return e=Df.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=X,o=Ye();if(K){if(r===void 0)throw Error(x(407));r=r()}else{if(r=t(),le===null)throw Error(x(349));$t&30||Ou(n,t,r)}o.memoizedState=r;var l={value:r,getSnapshot:t};return o.queue=l,Ka(Mu.bind(null,n,l,e),[e]),n.flags|=2048,un(9,Fu.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Ye(),t=le.identifierPrefix;if(K){var r=nt,n=rt;r=(n&~(1<<32-Ve(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=an++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=bf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},If={readContext:Oe,useCallback:Wu,useContext:Oe,useEffect:Ai,useImperativeHandle:Hu,useInsertionEffect:$u,useLayoutEffect:Bu,useMemo:Qu,useReducer:il,useRef:Uu,useState:function(){return il(sn)},useDebugValue:Ui,useDeferredValue:function(e){var t=Fe();return Ku(t,te.memoizedState,e)},useTransition:function(){var e=il(sn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Du,useId:Yu,unstable_isNewReconciler:!1},Af={readContext:Oe,useCallback:Wu,useContext:Oe,useEffect:Ai,useImperativeHandle:Hu,useInsertionEffect:$u,useLayoutEffect:Bu,useMemo:Qu,useReducer:al,useRef:Uu,useState:function(){return al(sn)},useDebugValue:Ui,useDeferredValue:function(e){var t=Fe();return te===null?t.memoizedState=e:Ku(t,te.memoizedState,e)},useTransition:function(){var e=al(sn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Du,useId:Yu,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Vl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:G({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Po={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=me(),o=jt(e),l=ot(n,o);l.payload=t,r!=null&&(l.callback=r),t=kt(e,l,o),t!==null&&(He(t,e,o,n),Bn(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=me(),o=jt(e),l=ot(n,o);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=kt(e,l,o),t!==null&&(He(t,e,o,n),Bn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=me(),n=jt(e),o=ot(r,n);o.tag=2,t!=null&&(o.callback=t),t=kt(e,o,n),t!==null&&(He(t,e,n,r),Bn(t,e,n))}};function Ya(e,t,r,n,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,i):t.prototype&&t.prototype.isPureReactComponent?!en(r,n)||!en(o,l):!0}function Zu(e,t,r){var n=!1,o=Ct,l=t.contextType;return typeof l=="object"&&l!==null?l=Oe(l):(o=ke(t)?At:fe.current,n=t.contextTypes,l=(n=n!=null)?hr(e,o):Ct),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Xa(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function Hl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Ri(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Oe(l):(l=ke(t)?At:fe.current,o.context=hr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Vl(e,t,l,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Po.enqueueReplaceState(o,o.state,null),co(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var r="",n=t;do r+=fd(n),n=n.return;while(n);var o=r}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Wl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function Ju(e,t,r){r=ot(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){go||(go=!0,ti=n),Wl(e,t)},r}function ec(e,t,r){r=ot(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Wl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Wl(e,t),typeof n!="function"&&(St===null?St=new Set([this]):St.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function Ga(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Uf;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=ep.bind(null,e,t,r),t.then(e,e))}function qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Za(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ot(-1,1),t.tag=2,kt(r,t,1))),r.lanes|=1),e)}var $f=ut.ReactCurrentOwner,xe=!1;function pe(e,t,r,n){t.child=e===null?_u(t,null,r,n):vr(t,e.child,r,n)}function Ja(e,t,r,n,o){r=r.render;var l=t.ref;return fr(t,o),n=Mi(e,t,r,n,l,o),r=Ii(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):(K&&r&&Ei(t),t.flags|=1,pe(e,t,n,o),t.child)}function es(e,t,r,n,o){if(e===null){var l=r.type;return typeof l=="function"&&!Yi(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,tc(e,t,l,n,o)):(e=Yn(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(r=r.compare,r=r!==null?r:en,r(i,n)&&e.ref===t.ref)return st(e,t,o)}return t.flags|=1,e=Nt(l,n),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,r,n,o){if(e!==null){var l=e.memoizedProps;if(en(l,n)&&e.ref===t.ref)if(xe=!1,t.pendingProps=n=l,(e.lanes&o)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,st(e,t,o)}return Ql(e,t,r,n,o)}function rc(e,t,r){var n=t.pendingProps,o=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(ar,Ee),Ee|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(ar,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,H(ar,Ee),Ee|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,H(ar,Ee),Ee|=n;return pe(e,t,o,r),t.child}function nc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,r,n,o){var l=ke(r)?At:fe.current;return l=hr(t,l),fr(t,o),r=Mi(e,t,r,n,l,o),n=Ii(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):(K&&n&&Ei(t),t.flags|=1,pe(e,t,r,o),t.child)}function ts(e,t,r,n,o){if(ke(r)){var l=!0;lo(t)}else l=!1;if(fr(t,o),t.stateNode===null)Wn(e,t),Zu(t,r,n),Hl(t,r,n,o),n=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,f=r.contextType;typeof f=="object"&&f!==null?f=Oe(f):(f=ke(r)?At:fe.current,f=hr(t,f));var g=r.getDerivedStateFromProps,v=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==n||u!==f)&&Xa(t,i,n,f),ft=!1;var h=t.memoizedState;i.state=h,co(t,n,i,o),u=t.memoizedState,s!==n||h!==u||we.current||ft?(typeof g=="function"&&(Vl(t,r,g,n),u=t.memoizedState),(s=ft||Ya(t,r,s,n,h,u,f))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=f,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Lu(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Ue(t.type,s),i.props=f,v=t.pendingProps,h=i.context,u=r.contextType,typeof u=="object"&&u!==null?u=Oe(u):(u=ke(r)?At:fe.current,u=hr(t,u));var j=r.getDerivedStateFromProps;(g=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==v||h!==u)&&Xa(t,i,n,u),ft=!1,h=t.memoizedState,i.state=h,co(t,n,i,o);var w=t.memoizedState;s!==v||h!==w||we.current||ft?(typeof j=="function"&&(Vl(t,r,j,n),w=t.memoizedState),(f=ft||Ya(t,r,f,n,h,w,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,w,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,w,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),i.props=n,i.state=w,i.context=u,n=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Kl(e,t,r,n,l,o)}function Kl(e,t,r,n,o,l){nc(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return o&&Ua(t,r,!1),st(e,t,l);n=t.stateNode,$f.current=t;var s=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=vr(t,e.child,null,l),t.child=vr(t,null,s,l)):pe(e,t,s,l),t.memoizedState=n.state,o&&Ua(t,r,!0),t.child}function oc(e){var t=e.stateNode;t.pendingContext?Aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Aa(e,t.context,!1),bi(e,t.containerInfo)}function rs(e,t,r,n,o){return gr(),zi(o),t.flags|=256,pe(e,t,r,n),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function lc(e,t,r){var n=t.pendingProps,o=Y.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(Y,o&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,l?(n=t.mode,l=t.child,i={mode:"hidden",children:i},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Lo(i,n,0,null),e=It(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Xl(r),t.memoizedState=Yl,e):$i(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Bf(e,t,i,n,s,o,r);if(l){l=n.fallback,i=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:n.children};return!(i&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Nt(o,u),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Nt(s,l):(l=It(l,i,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,i=e.child.memoizedState,i=i===null?Xl(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~r,t.memoizedState=Yl,n}return l=e.child,e=l.sibling,n=Nt(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function $i(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bn(e,t,r,n){return n!==null&&zi(n),vr(t,e.child,null,r),e=$i(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,r,n,o,l,i){if(r)return t.flags&256?(t.flags&=-257,n=sl(Error(x(422))),bn(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,o=t.mode,n=Lo({mode:"visible",children:n.children},o,0,null),l=It(l,o,i,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&vr(t,e.child,null,i),t.child.memoizedState=Xl(i),t.memoizedState=Yl,l);if(!(t.mode&1))return bn(e,t,i,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,l=Error(x(419)),n=sl(l,n,void 0),bn(e,t,i,n)}if(s=(i&e.childLanes)!==0,xe||s){if(n=le,n!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,at(e,o),He(n,e,o,-1))}return Ki(),n=sl(Error(x(421))),bn(e,t,i,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=tp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ce=wt(o.nextSibling),ze=t,K=!0,Be=null,e!==null&&(Le[Re++]=rt,Le[Re++]=nt,Le[Re++]=Ut,rt=e.id,nt=e.overflow,Ut=t),t=$i(t,n.children),t.flags|=4096,t)}function ns(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Bl(e.return,t,r)}function ul(e,t,r,n,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=o)}function ic(e,t,r){var n=t.pendingProps,o=n.revealOrder,l=n.tail;if(pe(e,t,n.children,r),n=Y.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ns(e,r,t);else if(e.tag===19)ns(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(H(Y,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&fo(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ul(t,!1,o,r,l);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fo(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ul(t,!0,r,null,l);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,r=Nt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Nt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Vf(e,t,r){switch(t.tag){case 3:oc(t),gr();break;case 5:Ru(t);break;case 1:ke(t.type)&&lo(t);break;case 4:bi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;H(so,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(H(Y,Y.current&1),t.flags|=128,null):r&t.child.childLanes?lc(e,t,r):(H(Y,Y.current&1),e=st(e,t,r),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return ic(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(Y,Y.current),n)break;return null;case 22:case 23:return t.lanes=0,rc(e,t,r)}return st(e,t,r)}var ac,Gl,sc,uc;ac=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Gl=function(){};sc=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Ft(qe.current);var l=null;switch(r){case"input":o=yl(e,o),n=yl(e,n),l=[];break;case"select":o=G({},o,{value:void 0}),n=G({},n,{value:void 0}),l=[];break;case"textarea":o=kl(e,o),n=kl(e,n),l=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=no)}jl(r,n);var i;r=null;for(f in o)if(!n.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var s=o[f];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Kr.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in n){var u=n[f];if(s=o!=null?o[f]:void 0,n.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(l||(l=[]),l.push(f,r)),r=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&W("scroll",e),l||s===u||(l=[])):(l=l||[]).push(f,u))}r&&(l=l||[]).push("style",r);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};uc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Rr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Hf(e,t,r){var n=t.pendingProps;switch(Ci(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&oo(),ce(t),null;case 3:return n=t.stateNode,yr(),Q(we),Q(fe),Oi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ln(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(oi(Be),Be=null))),Gl(e,t),ce(t),null;case 5:Di(t);var o=Ft(ln.current);if(r=t.type,e!==null&&t.stateNode!=null)sc(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(x(166));return ce(t),null}if(e=Ft(qe.current),Ln(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Xe]=t,n[nn]=l,e=(t.mode&1)!==0,r){case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":case"embed":W("load",n);break;case"video":case"audio":for(o=0;o<Mr.length;o++)W(Mr[o],n);break;case"source":W("error",n);break;case"img":case"image":case"link":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"input":fa(n,l),W("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},W("invalid",n);break;case"textarea":ma(n,l),W("invalid",n)}jl(r,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?n.textContent!==s&&(l.suppressHydrationWarning!==!0&&Tn(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Tn(n.textContent,s,e),o=["children",""+s]):Kr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&W("scroll",n)}switch(r){case"input":Sn(n),pa(n,l,!0);break;case"textarea":Sn(n),ha(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=no)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ms(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[Xe]=t,e[nn]=n,ac(e,t,!1,!1),t.stateNode=e;e:{switch(i=Nl(r,n),r){case"dialog":W("cancel",e),W("close",e),o=n;break;case"iframe":case"object":case"embed":W("load",e),o=n;break;case"video":case"audio":for(o=0;o<Mr.length;o++)W(Mr[o],e);o=n;break;case"source":W("error",e),o=n;break;case"img":case"image":case"link":W("error",e),W("load",e),o=n;break;case"details":W("toggle",e),o=n;break;case"input":fa(e,n),o=yl(e,n),W("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=G({},n,{value:void 0}),W("invalid",e);break;case"textarea":ma(e,n),o=kl(e,n),W("invalid",e);break;default:o=n}jl(r,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Us(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Is(e,u)):l==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Kr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&W("scroll",e):u!=null&&di(e,l,u,i))}switch(r){case"input":Sn(e),pa(e,n,!1);break;case"textarea":Sn(e),ha(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Et(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?sr(e,!!n.multiple,l,!1):n.defaultValue!=null&&sr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=no)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(x(166));if(r=Ft(ln.current),Ft(qe.current),Ln(t)){if(n=t.stateNode,r=t.memoizedProps,n[Xe]=t,(l=n.nodeValue!==r)&&(e=ze,e!==null))switch(e.tag){case 3:Tn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tn(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Xe]=t,t.stateNode=n}return ce(t),null;case 13:if(Q(Y),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ce!==null&&t.mode&1&&!(t.flags&128))zu(),gr(),t.flags|=98560,l=!1;else if(l=Ln(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[Xe]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),l=!1}else Be!==null&&(oi(Be),Be=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?re===0&&(re=3):Ki())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return yr(),Gl(e,t),e===null&&tn(t.stateNode.containerInfo),ce(t),null;case 10:return Ti(t.type._context),ce(t),null;case 17:return ke(t.type)&&oo(),ce(t),null;case 19:if(Q(Y),l=t.memoizedState,l===null)return ce(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Rr(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=fo(e),i!==null){for(t.flags|=128,Rr(l,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return H(Y,Y.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>wr&&(t.flags|=128,n=!0,Rr(l,!1),t.lanes=4194304)}else{if(!n)if(e=fo(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Rr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return ce(t),null}else 2*J()-l.renderingStartTime>wr&&r!==1073741824&&(t.flags|=128,n=!0,Rr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(r=l.last,r!==null?r.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,r=Y.current,H(Y,n?r&1|2:r&1),t):(ce(t),null);case 22:case 23:return Qi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ee&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Wf(e,t){switch(Ci(t),t.tag){case 1:return ke(t.type)&&oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),Q(we),Q(fe),Oi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Di(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return yr(),null;case 10:return Ti(t.type._context),null;case 22:case 23:return Qi(),null;case 24:return null;default:return null}}var Dn=!1,de=!1,Qf=typeof WeakSet=="function"?WeakSet:Set,z=null;function ir(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Z(e,t,n)}else r.current=null}function ql(e,t,r){try{r()}catch(n){Z(e,t,n)}}var os=!1;function Kf(e,t){if(Dl=eo,e=mu(),Ni(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var i=0,s=-1,u=-1,f=0,g=0,v=e,h=null;t:for(;;){for(var j;v!==r||o!==0&&v.nodeType!==3||(s=i+o),v!==l||n!==0&&v.nodeType!==3||(u=i+n),v.nodeType===3&&(i+=v.nodeValue.length),(j=v.firstChild)!==null;)h=v,v=j;for(;;){if(v===e)break t;if(h===r&&++f===o&&(s=i),h===l&&++g===n&&(u=i),(j=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=j}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ol={focusedElem:e,selectionRange:r},eo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var E=w.memoizedProps,B=w.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:Ue(t.type,E),B);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){Z(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return w=os,os=!1,w}function Hr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ql(t,r,l)}o=o.next}while(o!==n)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Zl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function cc(e){var t=e.alternate;t!==null&&(e.alternate=null,cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[nn],delete t[Il],delete t[_f],delete t[Tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dc(e){return e.tag===5||e.tag===3||e.tag===4}function ls(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=no));else if(n!==4&&(e=e.child,e!==null))for(Jl(e,t,r),e=e.sibling;e!==null;)Jl(e,t,r),e=e.sibling}function ei(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ei(e,t,r),e=e.sibling;e!==null;)ei(e,t,r),e=e.sibling}var ie=null,$e=!1;function ct(e,t,r){for(r=r.child;r!==null;)fc(e,t,r),r=r.sibling}function fc(e,t,r){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ko,r)}catch{}switch(r.tag){case 5:de||ir(r,t);case 6:var n=ie,o=$e;ie=null,ct(e,t,r),ie=n,$e=o,ie!==null&&($e?(e=ie,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ie.removeChild(r.stateNode));break;case 18:ie!==null&&($e?(e=ie,r=r.stateNode,e.nodeType===8?rl(e.parentNode,r):e.nodeType===1&&rl(e,r),Zr(e)):rl(ie,r.stateNode));break;case 4:n=ie,o=$e,ie=r.stateNode.containerInfo,$e=!0,ct(e,t,r),ie=n,$e=o;break;case 0:case 11:case 14:case 15:if(!de&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ql(r,t,i),o=o.next}while(o!==n)}ct(e,t,r);break;case 1:if(!de&&(ir(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Z(r,t,s)}ct(e,t,r);break;case 21:ct(e,t,r);break;case 22:r.mode&1?(de=(n=de)||r.memoizedState!==null,ct(e,t,r),de=n):ct(e,t,r);break;default:ct(e,t,r)}}function is(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qf),t.forEach(function(n){var o=rp.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Ae(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,$e=!1;break e;case 3:ie=s.stateNode.containerInfo,$e=!0;break e;case 4:ie=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(ie===null)throw Error(x(160));fc(l,i,o),ie=null,$e=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(f){Z(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pc(t,e),t=t.sibling}function pc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ke(e),n&4){try{Hr(3,e,e.return),_o(3,e)}catch(E){Z(e,e.return,E)}try{Hr(5,e,e.return)}catch(E){Z(e,e.return,E)}}break;case 1:Ae(t,e),Ke(e),n&512&&r!==null&&ir(r,r.return);break;case 5:if(Ae(t,e),Ke(e),n&512&&r!==null&&ir(r,r.return),e.flags&32){var o=e.stateNode;try{Yr(o,"")}catch(E){Z(e,e.return,E)}}if(n&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=r!==null?r.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Os(o,l),Nl(s,i);var f=Nl(s,l);for(i=0;i<u.length;i+=2){var g=u[i],v=u[i+1];g==="style"?Us(o,v):g==="dangerouslySetInnerHTML"?Is(o,v):g==="children"?Yr(o,v):di(o,g,v,f)}switch(s){case"input":xl(o,l);break;case"textarea":Fs(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?sr(o,!!l.multiple,j,!1):h!==!!l.multiple&&(l.defaultValue!=null?sr(o,!!l.multiple,l.defaultValue,!0):sr(o,!!l.multiple,l.multiple?[]:"",!1))}o[nn]=l}catch(E){Z(e,e.return,E)}}break;case 6:if(Ae(t,e),Ke(e),n&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(E){Z(e,e.return,E)}}break;case 3:if(Ae(t,e),Ke(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(E){Z(e,e.return,E)}break;case 4:Ae(t,e),Ke(e);break;case 13:Ae(t,e),Ke(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Hi=J())),n&4&&is(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(de=(f=de)||g,Ae(t,e),de=f):Ae(t,e),Ke(e),n&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(v=z=g;z!==null;){switch(h=z,j=h.child,h.tag){case 0:case 11:case 14:case 15:Hr(4,h,h.return);break;case 1:ir(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(E){Z(n,r,E)}}break;case 5:ir(h,h.return);break;case 22:if(h.memoizedState!==null){ss(v);continue}}j!==null?(j.return=h,z=j):ss(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{o=v.stateNode,f?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=v.stateNode,u=v.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=As("display",i))}catch(E){Z(e,e.return,E)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(E){Z(e,e.return,E)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ae(t,e),Ke(e),n&4&&is(e);break;case 21:break;default:Ae(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(dc(r)){var n=r;break e}r=r.return}throw Error(x(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Yr(o,""),n.flags&=-33);var l=ls(e);ei(e,l,o);break;case 3:case 4:var i=n.stateNode.containerInfo,s=ls(e);Jl(e,s,i);break;default:throw Error(x(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yf(e,t,r){z=e,mc(e)}function mc(e,t,r){for(var n=(e.mode&1)!==0;z!==null;){var o=z,l=o.child;if(o.tag===22&&n){var i=o.memoizedState!==null||Dn;if(!i){var s=o.alternate,u=s!==null&&s.memoizedState!==null||de;s=Dn;var f=de;if(Dn=i,(de=u)&&!f)for(z=o;z!==null;)i=z,u=i.child,i.tag===22&&i.memoizedState!==null?us(o):u!==null?(u.return=i,z=u):us(o);for(;l!==null;)z=l,mc(l),l=l.sibling;z=o,Dn=s,de=f}as(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,z=l):as(e)}}function as(e){for(;z!==null;){var t=z;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||_o(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!de)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Ue(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Wa(t,l,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wa(t,i,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Zr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}de||t.flags&512&&Zl(t)}catch(h){Z(t,t.return,h)}}if(t===e){z=null;break}if(r=t.sibling,r!==null){r.return=t.return,z=r;break}z=t.return}}function ss(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,z=r;break}z=t.return}}function us(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{_o(4,t)}catch(u){Z(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(u){Z(t,o,u)}}var l=t.return;try{Zl(t)}catch(u){Z(t,l,u)}break;case 5:var i=t.return;try{Zl(t)}catch(u){Z(t,i,u)}}}catch(u){Z(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Xf=Math.ceil,ho=ut.ReactCurrentDispatcher,Bi=ut.ReactCurrentOwner,De=ut.ReactCurrentBatchConfig,I=0,le=null,ee=null,ae=0,Ee=0,ar=Pt(0),re=0,cn=null,Bt=0,To=0,Vi=0,Wr=null,ye=null,Hi=0,wr=1/0,et=null,go=!1,ti=null,St=null,On=!1,gt=null,vo=0,Qr=0,ri=null,Qn=-1,Kn=0;function me(){return I&6?J():Qn!==-1?Qn:Qn=J()}function jt(e){return e.mode&1?I&2&&ae!==0?ae&-ae:Rf.transition!==null?(Kn===0&&(Kn=Zs()),Kn):(e=U,e!==0||(e=window.event,e=e===void 0?16:lu(e.type)),e):1}function He(e,t,r,n){if(50<Qr)throw Qr=0,ri=null,Error(x(185));fn(e,r,n),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(To|=r),re===4&&mt(e,ae)),Se(e,n),r===1&&I===0&&!(t.mode&1)&&(wr=J()+500,Co&&_t()))}function Se(e,t){var r=e.callbackNode;Ld(e,t);var n=Jn(e,e===le?ae:0);if(n===0)r!==null&&ya(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ya(r),t===1)e.tag===0?Lf(cs.bind(null,e)):Nu(cs.bind(null,e)),zf(function(){!(I&6)&&_t()}),r=null;else{switch(Js(n)){case 1:r=gi;break;case 4:r=Gs;break;case 16:r=Zn;break;case 536870912:r=qs;break;default:r=Zn}r=Sc(r,hc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function hc(e,t){if(Qn=-1,Kn=0,I&6)throw Error(x(327));var r=e.callbackNode;if(pr()&&e.callbackNode!==r)return null;var n=Jn(e,e===le?ae:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=yo(e,n);else{t=n;var o=I;I|=2;var l=vc();(le!==e||ae!==t)&&(et=null,wr=J()+500,Mt(e,t));do try{Zf();break}catch(s){gc(e,s)}while(!0);_i(),ho.current=l,I=o,ee!==null?t=0:(le=null,ae=0,t=re)}if(t!==0){if(t===2&&(o=_l(e),o!==0&&(n=o,t=ni(e,o))),t===1)throw r=cn,Mt(e,0),mt(e,n),Se(e,J()),r;if(t===6)mt(e,n);else{if(o=e.current.alternate,!(n&30)&&!Gf(o)&&(t=yo(e,n),t===2&&(l=_l(e),l!==0&&(n=l,t=ni(e,l))),t===1))throw r=cn,Mt(e,0),mt(e,n),Se(e,J()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(x(345));case 2:bt(e,ye,et);break;case 3:if(mt(e,n),(n&130023424)===n&&(t=Hi+500-J(),10<t)){if(Jn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ml(bt.bind(null,e,ye,et),t);break}bt(e,ye,et);break;case 4:if(mt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var i=31-Ve(n);l=1<<i,i=t[i],i>o&&(o=i),n&=~l}if(n=o,n=J()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Xf(n/1960))-n,10<n){e.timeoutHandle=Ml(bt.bind(null,e,ye,et),n);break}bt(e,ye,et);break;case 5:bt(e,ye,et);break;default:throw Error(x(329))}}}return Se(e,J()),e.callbackNode===r?hc.bind(null,e):null}function ni(e,t){var r=Wr;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=yo(e,t),e!==2&&(t=ye,ye=r,t!==null&&oi(t)),e}function oi(e){ye===null?ye=e:ye.push.apply(ye,e)}function Gf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],l=o.getSnapshot;o=o.value;try{if(!We(l(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~Vi,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ve(t),n=1<<r;e[r]=-1,t&=~n}}function cs(e){if(I&6)throw Error(x(327));pr();var t=Jn(e,0);if(!(t&1))return Se(e,J()),null;var r=yo(e,t);if(e.tag!==0&&r===2){var n=_l(e);n!==0&&(t=n,r=ni(e,n))}if(r===1)throw r=cn,Mt(e,0),mt(e,t),Se(e,J()),r;if(r===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,ye,et),Se(e,J()),null}function Wi(e,t){var r=I;I|=1;try{return e(t)}finally{I=r,I===0&&(wr=J()+500,Co&&_t())}}function Vt(e){gt!==null&&gt.tag===0&&!(I&6)&&pr();var t=I;I|=1;var r=De.transition,n=U;try{if(De.transition=null,U=1,e)return e()}finally{U=n,De.transition=r,I=t,!(I&6)&&_t()}}function Qi(){Ee=ar.current,Q(ar)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Cf(r)),ee!==null)for(r=ee.return;r!==null;){var n=r;switch(Ci(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&oo();break;case 3:yr(),Q(we),Q(fe),Oi();break;case 5:Di(n);break;case 4:yr();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:Ti(n.type._context);break;case 22:case 23:Qi()}r=r.return}if(le=e,ee=e=Nt(e.current,null),ae=Ee=t,re=0,cn=null,Vi=To=Bt=0,ye=Wr=null,Ot!==null){for(t=0;t<Ot.length;t++)if(r=Ot[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,l=r.pending;if(l!==null){var i=l.next;l.next=o,n.next=i}r.pending=n}Ot=null}return e}function gc(e,t){do{var r=ee;try{if(_i(),Vn.current=mo,po){for(var n=X.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}po=!1}if($t=0,oe=te=X=null,Vr=!1,an=0,Bi.current=null,r===null||r.return===null){re=1,cn=t,ee=null;break}e:{var l=e,i=r.return,s=r,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=s,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var j=qa(i);if(j!==null){j.flags&=-257,Za(j,i,s,l,t),j.mode&1&&Ga(l,f,t),t=j,u=f;var w=t.updateQueue;if(w===null){var E=new Set;E.add(u),t.updateQueue=E}else w.add(u);break e}else{if(!(t&1)){Ga(l,f,t),Ki();break e}u=Error(x(426))}}else if(K&&s.mode&1){var B=qa(i);if(B!==null){!(B.flags&65536)&&(B.flags|=256),Za(B,i,s,l,t),zi(xr(u,s));break e}}l=u=xr(u,s),re!==4&&(re=2),Wr===null?Wr=[l]:Wr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Ju(l,u,t);Ha(l,p);break e;case 1:s=u;var d=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(St===null||!St.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=ec(l,s,t);Ha(l,y);break e}}l=l.return}while(l!==null)}xc(r)}catch(C){t=C,ee===r&&r!==null&&(ee=r=r.return);continue}break}while(!0)}function vc(){var e=ho.current;return ho.current=mo,e===null?mo:e}function Ki(){(re===0||re===3||re===2)&&(re=4),le===null||!(Bt&268435455)&&!(To&268435455)||mt(le,ae)}function yo(e,t){var r=I;I|=2;var n=vc();(le!==e||ae!==t)&&(et=null,Mt(e,t));do try{qf();break}catch(o){gc(e,o)}while(!0);if(_i(),I=r,ho.current=n,ee!==null)throw Error(x(261));return le=null,ae=0,re}function qf(){for(;ee!==null;)yc(ee)}function Zf(){for(;ee!==null&&!Sd();)yc(ee)}function yc(e){var t=kc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?xc(e):ee=t,Bi.current=null}function xc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Wf(r,t),r!==null){r.flags&=32767,ee=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(r=Hf(r,t,Ee),r!==null){ee=r;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function bt(e,t,r){var n=U,o=De.transition;try{De.transition=null,U=1,Jf(e,t,r,n)}finally{De.transition=o,U=n}return null}function Jf(e,t,r,n){do pr();while(gt!==null);if(I&6)throw Error(x(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Rd(e,l),e===le&&(ee=le=null,ae=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||On||(On=!0,Sc(Zn,function(){return pr(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=De.transition,De.transition=null;var i=U;U=1;var s=I;I|=4,Bi.current=null,Kf(e,r),pc(r,e),xf(Ol),eo=!!Dl,Ol=Dl=null,e.current=r,Yf(r),jd(),I=s,U=i,De.transition=l}else e.current=r;if(On&&(On=!1,gt=e,vo=o),l=e.pendingLanes,l===0&&(St=null),Cd(r.stateNode),Se(e,J()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(go)throw go=!1,e=ti,ti=null,e;return vo&1&&e.tag!==0&&pr(),l=e.pendingLanes,l&1?e===ri?Qr++:(Qr=0,ri=e):Qr=0,_t(),null}function pr(){if(gt!==null){var e=Js(vo),t=De.transition,r=U;try{if(De.transition=null,U=16>e?16:e,gt===null)var n=!1;else{if(e=gt,gt=null,vo=0,I&6)throw Error(x(331));var o=I;for(I|=4,z=e.current;z!==null;){var l=z,i=l.child;if(z.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(z=f;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Hr(8,g,l)}var v=g.child;if(v!==null)v.return=g,z=v;else for(;z!==null;){g=z;var h=g.sibling,j=g.return;if(cc(g),g===f){z=null;break}if(h!==null){h.return=j,z=h;break}z=j}}}var w=l.alternate;if(w!==null){var E=w.child;if(E!==null){w.child=null;do{var B=E.sibling;E.sibling=null,E=B}while(E!==null)}}z=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,z=i;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Hr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,z=p;break e}z=l.return}}var d=e.current;for(z=d;z!==null;){i=z;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,z=m;else e:for(i=d;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_o(9,s)}}catch(C){Z(s,s.return,C)}if(s===i){z=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,z=y;break e}z=s.return}}if(I=o,_t(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ko,e)}catch{}n=!0}return n}finally{U=r,De.transition=t}}return!1}function ds(e,t,r){t=xr(r,t),t=Ju(e,t,1),e=kt(e,t,1),t=me(),e!==null&&(fn(e,1,t),Se(e,t))}function Z(e,t,r){if(e.tag===3)ds(e,e,r);else for(;t!==null;){if(t.tag===3){ds(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(St===null||!St.has(n))){e=xr(r,e),e=ec(t,e,1),t=kt(t,e,1),e=me(),t!==null&&(fn(t,1,e),Se(t,e));break}}t=t.return}}function ep(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&r,le===e&&(ae&r)===r&&(re===4||re===3&&(ae&130023424)===ae&&500>J()-Hi?Mt(e,0):Vi|=r),Se(e,t)}function wc(e,t){t===0&&(e.mode&1?(t=En,En<<=1,!(En&130023424)&&(En=4194304)):t=1);var r=me();e=at(e,t),e!==null&&(fn(e,t,r),Se(e,r))}function tp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),wc(e,r)}function rp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(x(314))}n!==null&&n.delete(t),wc(e,r)}var kc;kc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)xe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return xe=!1,Vf(e,t,r);xe=!!(e.flags&131072)}else xe=!1,K&&t.flags&1048576&&Eu(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Wn(e,t),e=t.pendingProps;var o=hr(t,fe.current);fr(t,r),o=Mi(null,t,n,e,o,r);var l=Ii();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(n)?(l=!0,lo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ri(t),o.updater=Po,t.stateNode=o,o._reactInternals=t,Hl(t,n,e,r),t=Kl(null,t,n,!0,l,r)):(t.tag=0,K&&l&&Ei(t),pe(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Wn(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=op(n),e=Ue(n,e),o){case 0:t=Ql(null,t,n,e,r);break e;case 1:t=ts(null,t,n,e,r);break e;case 11:t=Ja(null,t,n,e,r);break e;case 14:t=es(null,t,n,Ue(n.type,e),r);break e}throw Error(x(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ue(n,o),Ql(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ue(n,o),ts(e,t,n,o,r);case 3:e:{if(oc(t),e===null)throw Error(x(387));n=t.pendingProps,l=t.memoizedState,o=l.element,Lu(e,t),co(t,n,null,r);var i=t.memoizedState;if(n=i.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=xr(Error(x(423)),t),t=rs(e,t,n,r,o);break e}else if(n!==o){o=xr(Error(x(424)),t),t=rs(e,t,n,r,o);break e}else for(Ce=wt(t.stateNode.containerInfo.firstChild),ze=t,K=!0,Be=null,r=_u(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),n===o){t=st(e,t,r);break e}pe(e,t,n,r)}t=t.child}return t;case 5:return Ru(t),e===null&&$l(t),n=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Fl(n,o)?i=null:l!==null&&Fl(n,l)&&(t.flags|=32),nc(e,t),pe(e,t,i,r),t.child;case 6:return e===null&&$l(t),null;case 13:return lc(e,t,r);case 4:return bi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=vr(t,null,n,r):pe(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ue(n,o),Ja(e,t,n,o,r);case 7:return pe(e,t,t.pendingProps,r),t.child;case 8:return pe(e,t,t.pendingProps.children,r),t.child;case 12:return pe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,H(so,n._currentValue),n._currentValue=i,l!==null)if(We(l.value,i)){if(l.children===o.children&&!we.current){t=st(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(l.tag===1){u=ot(-1,r&-r),u.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}l.lanes|=r,u=l.alternate,u!==null&&(u.lanes|=r),Bl(l.return,r,t),s.lanes|=r;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(x(341));i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),Bl(i,r,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}pe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,fr(t,r),o=Oe(o),n=n(o),t.flags|=1,pe(e,t,n,r),t.child;case 14:return n=t.type,o=Ue(n,t.pendingProps),o=Ue(n.type,o),es(e,t,n,o,r);case 15:return tc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ue(n,o),Wn(e,t),t.tag=1,ke(n)?(e=!0,lo(t)):e=!1,fr(t,r),Zu(t,n,o),Hl(t,n,o,r),Kl(null,t,n,!0,e,r);case 19:return ic(e,t,r);case 22:return rc(e,t,r)}throw Error(x(156,t.tag))};function Sc(e,t){return Xs(e,t)}function np(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,r,n){return new np(e,t,r,n)}function Yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function op(e){if(typeof e=="function")return Yi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pi)return 11;if(e===mi)return 14}return 2}function Nt(e,t){var r=e.alternate;return r===null?(r=be(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Yn(e,t,r,n,o,l){var i=2;if(n=e,typeof e=="function")Yi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case qt:return It(r.children,o,l,t);case fi:i=8,o|=8;break;case ml:return e=be(12,r,t,o|2),e.elementType=ml,e.lanes=l,e;case hl:return e=be(13,r,t,o),e.elementType=hl,e.lanes=l,e;case gl:return e=be(19,r,t,o),e.elementType=gl,e.lanes=l,e;case Rs:return Lo(r,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ts:i=10;break e;case Ls:i=9;break e;case pi:i=11;break e;case mi:i=14;break e;case dt:i=16,n=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=be(i,r,t,o),t.elementType=e,t.type=n,t.lanes=l,t}function It(e,t,r,n){return e=be(7,e,n,t),e.lanes=r,e}function Lo(e,t,r,n){return e=be(22,e,n,t),e.elementType=Rs,e.lanes=r,e.stateNode={isHidden:!1},e}function cl(e,t,r){return e=be(6,e,null,t),e.lanes=r,e}function dl(e,t,r){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Xi(e,t,r,n,o,l,i,s,u){return e=new lp(e,t,r,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=be(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(l),e}function ip(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function jc(e){if(!e)return Ct;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var r=e.type;if(ke(r))return ju(e,r,t)}return t}function Nc(e,t,r,n,o,l,i,s,u){return e=Xi(r,n,!0,e,o,l,i,s,u),e.context=jc(null),r=e.current,n=me(),o=jt(r),l=ot(n,o),l.callback=t??null,kt(r,l,o),e.current.lanes=o,fn(e,o,n),Se(e,n),e}function Ro(e,t,r,n){var o=t.current,l=me(),i=jt(o);return r=jc(r),t.context===null?t.context=r:t.pendingContext=r,t=ot(l,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=kt(o,t,i),e!==null&&(He(e,o,i,l),Bn(e,o,i)),i}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Gi(e,t){fs(e,t),(e=e.alternate)&&fs(e,t)}function ap(){return null}var Ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function qi(e){this._internalRoot=e}bo.prototype.render=qi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Ro(e,t,null,null)};bo.prototype.unmount=qi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Ro(null,e,null,null)}),t[it]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ru();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pt.length&&t!==0&&t<pt[r].priority;r++);pt.splice(r,0,e),r===0&&ou(e)}};function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ps(){}function sp(e,t,r,n,o){if(o){if(typeof n=="function"){var l=n;n=function(){var f=xo(i);l.call(f)}}var i=Nc(t,n,e,0,null,!1,!1,"",ps);return e._reactRootContainer=i,e[it]=i.current,tn(e.nodeType===8?e.parentNode:e),Vt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var f=xo(u);s.call(f)}}var u=Xi(e,0,!1,null,null,!1,!1,"",ps);return e._reactRootContainer=u,e[it]=u.current,tn(e.nodeType===8?e.parentNode:e),Vt(function(){Ro(t,u,r,n)}),u}function Oo(e,t,r,n,o){var l=r._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var u=xo(i);s.call(u)}}Ro(t,i,e,o)}else i=sp(r,t,e,o,n);return xo(i)}eu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Fr(t.pendingLanes);r!==0&&(vi(t,r|1),Se(t,J()),!(I&6)&&(wr=J()+500,_t()))}break;case 13:Vt(function(){var n=at(e,1);if(n!==null){var o=me();He(n,e,1,o)}}),Gi(e,1)}};yi=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var r=me();He(t,e,134217728,r)}Gi(e,134217728)}};tu=function(e){if(e.tag===13){var t=jt(e),r=at(e,t);if(r!==null){var n=me();He(r,e,t,n)}Gi(e,t)}};ru=function(){return U};nu=function(e,t){var r=U;try{return U=e,t()}finally{U=r}};Cl=function(e,t,r){switch(t){case"input":if(xl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Eo(n);if(!o)throw Error(x(90));Ds(n),xl(n,o)}}}break;case"textarea":Fs(e,r);break;case"select":t=r.value,t!=null&&sr(e,!!r.multiple,t,!1)}};Vs=Wi;Hs=Vt;var up={usingClientEntryPoint:!1,Events:[mn,tr,Eo,$s,Bs,Wi]},br={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cp={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ks(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fn.isDisabled&&Fn.supportsFiber)try{ko=Fn.inject(cp),Ge=Fn}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up;_e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(t))throw Error(x(200));return ip(e,t,null,r)};_e.createRoot=function(e,t){if(!Zi(e))throw Error(x(299));var r=!1,n="",o=Ec;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xi(e,1,!1,null,null,r,!1,n,o),e[it]=t.current,tn(e.nodeType===8?e.parentNode:e),new qi(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Ks(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Vt(e)};_e.hydrate=function(e,t,r){if(!Do(t))throw Error(x(200));return Oo(null,e,t,!0,r)};_e.hydrateRoot=function(e,t,r){if(!Zi(e))throw Error(x(405));var n=r!=null&&r.hydratedSources||null,o=!1,l="",i=Ec;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Nc(t,null,e,1,r??null,o,!1,l,i),e[it]=t.current,tn(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new bo(t)};_e.render=function(e,t,r){if(!Do(t))throw Error(x(200));return Oo(null,e,t,!1,r)};_e.unmountComponentAtNode=function(e){if(!Do(e))throw Error(x(40));return e._reactRootContainer?(Vt(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};_e.unstable_batchedUpdates=Wi;_e.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Do(r))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Oo(e,t,r,!1,n)};_e.version="18.3.1-next-f1338f8080-20240426";function Cc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cc)}catch(e){console.error(e)}}Cc(),Cs.exports=_e;var dp=Cs.exports,ms=dp;fl.createRoot=ms.createRoot,fl.hydrateRoot=ms.hydrateRoot;const fp="/assets/logo-CdogePm9.png",Je={CART:"elara-earth-cart",ADMIN_TOKEN:"elara-earth-admin-token",EXPLORED_PRODUCTS:"elara-earth-explored"};function pp(){var oa,la;const[e,t]=M.useState("shop"),[r,n]=M.useState(""),[o,l]=M.useState("All"),[i,s]=M.useState([]),[u,f]=M.useState([]),[g,v]=M.useState([]),[h,j]=M.useState([]),[w,E]=M.useState(""),[B,p]=M.useState(""),[d,m]=M.useState(""),[y,C]=M.useState(""),[P,k]=M.useState(""),[_,O]=M.useState(""),[L,ne]=M.useState({name:"",email:"",phone:"",address:"",pincode:"",state:"Karnataka"}),[ve,Me]=M.useState("dashboard"),[Qe,gn]=M.useState(null),[A,je]=M.useState({title:"",category:"",price:"",image:"",description:"",ingredients:"",benefits:""}),[S,R]=M.useState(null),[T,V]=M.useState({customerName:"",rating:5,title:"",comment:""}),[$,Tt]=M.useState([]);M.useEffect(()=>{const c=JSON.parse(localStorage.getItem(Je.CART)||"[]"),N=localStorage.getItem(Je.ADMIN_TOKEN)||"",b=JSON.parse(localStorage.getItem(Je.EXPLORED_PRODUCTS)||"[]");f(Array.isArray(c)?c:[]),E(N),Tt(Array.isArray(b)?b:[]),Ie(),Qt();const D=window.location.pathname;t(D==="/admin"?N?"admin":"adminLogin":D==="/cart"?"cart":D==="/checkout"?"checkout":"shop");const q=()=>{const Ne=window.location.pathname;t(Ne==="/admin"?localStorage.getItem(Je.ADMIN_TOKEN)?"admin":"adminLogin":Ne==="/cart"?"cart":Ne==="/checkout"?"checkout":"shop")};return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[]),M.useEffect(()=>{localStorage.setItem(Je.CART,JSON.stringify(u))},[u]),M.useEffect(()=>{localStorage.setItem(Je.EXPLORED_PRODUCTS,JSON.stringify($))},[$]),M.useEffect(()=>{w?localStorage.setItem(Je.ADMIN_TOKEN,w):localStorage.removeItem(Je.ADMIN_TOKEN)},[w]),M.useEffect(()=>{e==="adminLogin"||e==="admin"?window.history.replaceState(null,"","/admin"):e==="cart"?window.history.replaceState(null,"","/cart"):e==="checkout"?window.history.replaceState(null,"","/checkout"):window.history.replaceState(null,"","/"),window.scrollTo({top:0,behavior:"smooth"})},[e]),M.useEffect(()=>{w&&e==="admin"&&Ze()},[w,e]);const Ie=async()=>{try{const c=await fetch("/api/products");if(c.ok){const N=await c.json();s(N)}}catch(c){console.error("Error fetching products:",c)}},Qt=async()=>{try{const c=await fetch("/api/reviews");if(c.ok){const N=await c.json();j(N)}}catch(c){console.error("Error fetching reviews:",c)}},Ze=async()=>{try{const c=await fetch("/api/admin/orders",{headers:{Authorization:`Bearer ${w}`}});if(c.ok){const N=await c.json();v(N)}else c.status===401&&ra()}catch(c){console.error("Error fetching orders:",c)}},Kt=M.useMemo(()=>["All",...Array.from(new Set(i.map(N=>N.category)))],[i]),vn=M.useMemo(()=>{const c={};return i.forEach(N=>{const b=h.filter(D=>D.productId===N.id);if(b.length===0)c[N.id]={avg:5,count:0};else{const D=b.reduce((q,Ne)=>q+Ne.rating,0);c[N.id]={avg:Number((D/b.length).toFixed(1)),count:b.length}}}),c},[i,h]),Ji=M.useMemo(()=>i.filter(c=>{var D;const N=o==="All"||c.category===o,b=c.title.toLowerCase().includes(r.toLowerCase())||c.description.toLowerCase().includes(r.toLowerCase())||((D=c.ingredients)==null?void 0:D.toLowerCase().includes(r.toLowerCase()));return N&&b}),[o,i,r]),Lt=u.reduce((c,N)=>c+N.price*N.qty,0),Nr=M.useMemo(()=>i.length>0&&$.length>=i.length,[$,i]),yn=M.useMemo(()=>Nr?Math.round(Lt*.1):0,[Lt,Nr]),Yt=Lt-yn>500?0:u.length>0?75:0,xn=Lt-yn+Yt,ea=(c,N=!1)=>{f(b=>b.find(q=>q.id===c.id)?b.map(q=>q.id===c.id?{...q,qty:q.qty+1}:q):[...b,{...c,qty:1}]),N||(C(`Added ${c.title} to your bathing ritual bag!`),setTimeout(()=>C(""),2500))},ta=(c,N)=>{f(b=>b.map(D=>D.id===c?{...D,qty:Math.max(1,D.qty+N)}:D).filter(D=>D.qty>0))},zc=c=>{f(N=>N.filter(b=>b.id!==c))},Fo=c=>{if(R(c),!$.includes(c.id)){const N=[...$,c.id];Tt(N),N.length===i.length&&(O("🎉 Ritual Explorer Reward Unlocked! You've learned about all our soaps. A 10% discount has been applied to your cart!"),setTimeout(()=>O(""),6e3))}},Pc=async c=>{if(c.preventDefault(),!T.customerName.trim()||!T.title.trim()||!T.comment.trim()){k("Please fill in all review fields."),setTimeout(()=>k(""),3e3);return}const N={productId:S.id,customerName:T.customerName,rating:T.rating,title:T.title,comment:T.comment};try{const b=await fetch("/api/reviews",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(b.ok){const D=await b.json();j(q=>[...q,D]),V({customerName:"",rating:5,title:"",comment:""}),O("Thank you! Your verified customer review has been added."),setTimeout(()=>O(""),3500)}else{const D=await b.json();k(D.error||"Failed to submit review."),setTimeout(()=>k(""),3e3)}}catch{k("Network error, review could not be posted."),setTimeout(()=>k(""),3e3)}},_c=async c=>{c.preventDefault(),k("");const{name:N,email:b,phone:D,address:q,pincode:Ne,state:Mo}=L;if(!N.trim())return k("Please enter your full name.");if(!b.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b))return k("Please enter a valid email address.");if(!D.trim()||!/^\d{10}$/.test(D))return k("Please enter a valid 10-digit mobile number.");if(!q.trim())return k("Please enter your complete delivery address.");if(Mo!=="Karnataka")return k("We currently ship exclusively within Karnataka state.");if(!Ne.trim()||!/^(56|57|58|59)\d{4}$/.test(Ne))return k("Delivery restricted to Karnataka. Pincode must start with 56, 57, 58, or 59.");const Fc={customer:{name:N,email:b,phone:D,address:q,pincode:Ne,state:"Karnataka"},items:u,subtotal:Lt,shipping:Yt,total:xn};try{const Io=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Fc)}),Ao=await Io.json();Io.ok&&Ao.success?(f([]),ne({name:"",email:"",phone:"",address:"",pincode:"",state:"Karnataka"}),t("shop"),O(`✨ Order confirmed! Order ID: ${Ao.orderId}. Your soaps are preparing for dispatch via Cash on Delivery.`),window.scrollTo({top:0,behavior:"smooth"})):k(Ao.error||"Checkout failed. Please try again.")}catch{k("Network error. Failed to place order.")}},Tc=async c=>{c.preventDefault(),k("");try{const N=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:B,password:d})}),b=await N.json();N.ok&&b.success?(E(b.token),p(""),m(""),t("admin"),Me("dashboard"),O("Welcome, Admin. Session secure."),setTimeout(()=>O(""),3e3)):k(b.error||"Invalid credentials.")}catch{k("Error logging in.")}},ra=async()=>{try{await fetch("/api/admin/logout",{method:"POST",headers:{Authorization:`Bearer ${w}`}})}catch(c){console.error(c)}E(""),localStorage.removeItem(Je.ADMIN_TOKEN),t("shop")},Lc=async(c,N)=>{try{const b=await fetch(`/api/admin/orders/${c}/status`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},body:JSON.stringify({status:N})});if(b.ok)v(D=>D.map(q=>q.id===c?{...q,status:N}:q)),O("Order status updated successfully."),setTimeout(()=>O(""),2e3);else{const D=await b.json();k(D.error||"Failed to update order status.")}}catch{k("Error updating order.")}},Rc=async c=>{if(window.confirm("Delete this customer review?"))try{(await fetch(`/api/admin/reviews/${c}`,{method:"DELETE",headers:{Authorization:`Bearer ${w}`}})).ok?(j(b=>b.filter(D=>D.id!==c)),O("Review deleted successfully."),setTimeout(()=>O(""),2e3)):k("Failed to delete review.")}catch{k("Network error.")}},bc=async c=>{c.preventDefault();const N=Number(A.price);if(!A.title||!A.category||!A.image||!A.description||!A.ingredients||!A.benefits||isNaN(N)||N<=0){k("Please fill in all product fields with valid values.");return}const b={title:A.title,category:A.category,price:N,image:A.image,description:A.description,ingredients:A.ingredients,benefits:A.benefits},D=Qe?`/api/admin/products/${Qe}`:"/api/admin/products",q=Qe?"PUT":"POST";try{const Ne=await fetch(D,{method:q,headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},body:JSON.stringify(b)});if(Ne.ok)O(Qe?"Product updated successfully.":"Product added successfully."),Ie(),na(),setTimeout(()=>O(""),3e3);else{const Mo=await Ne.json();k(Mo.error||"Failed to save product.")}}catch{k("Error saving product.")}},Dc=async c=>{if(window.confirm("Delete this soap product and its reviews?"))try{(await fetch(`/api/admin/products/${c}`,{method:"DELETE",headers:{Authorization:`Bearer ${w}`}})).ok?(O("Product removed."),Ie(),Qt(),setTimeout(()=>O(""),2e3)):k("Failed to delete product.")}catch{k("Network error.")}},Oc=c=>{gn(c.id),je({title:c.title,category:c.category,price:c.price,image:c.image,description:c.description,ingredients:c.ingredients||"",benefits:c.benefits||""}),window.scrollTo({top:0,behavior:"smooth"})},na=()=>{gn(null),je({title:"",category:"",price:"",image:"",description:"",ingredients:"",benefits:""})},Er=c=>{const N=[],b=Math.floor(c);for(let D=1;D<=5;D++)D<=b?N.push(a.jsx("span",{className:"star-icon full",children:"★"},D)):D-c<1?N.push(a.jsx("span",{className:"star-icon half",children:"★"},D)):N.push(a.jsx("span",{className:"star-icon empty",children:"☆"},D));return N};return a.jsxs("div",{className:"elara-container",children:[y&&a.jsx("div",{className:"toast success-toast",children:y}),_&&a.jsx("div",{className:"toast success-toast banner-toast",children:_}),P&&a.jsx("div",{className:"toast error-toast",children:P}),a.jsxs("header",{className:"elara-header",children:[a.jsxs("div",{className:"header-logo-section",onClick:()=>t("shop"),children:[a.jsx("img",{src:fp,className:"brand-logo",alt:"Elara Earth Logo",onError:c=>{c.target.style.display="none"}}),a.jsxs("div",{className:"brand-text-block",children:[a.jsx("span",{className:"brand-main",children:"Elara Earth"}),a.jsx("span",{className:"brand-tagline",children:"PURE BY NATURE"})]})]}),a.jsxs("nav",{className:"elara-nav",children:[a.jsx("button",{className:e==="shop"?"nav-link active":"nav-link",onClick:()=>t("shop"),children:"Soaps"}),a.jsxs("button",{className:e==="cart"?"nav-link active":"nav-link",onClick:()=>t("cart"),children:["Ritual Bag",u.length>0&&a.jsx("span",{className:"cart-badge",children:u.reduce((c,N)=>c+N.qty,0)})]}),w?a.jsx("button",{className:e==="admin"?"nav-link active":"nav-link",onClick:()=>t("admin"),children:"Dashboard"}):a.jsx("button",{className:e==="adminLogin"?"nav-link active":"nav-link",onClick:()=>t("adminLogin"),children:"Admin"}),w&&a.jsx("button",{className:"nav-btn-logout",onClick:ra,children:"Logout"})]})]}),e==="shop"&&i.length>0&&a.jsxs("section",{className:"explorer-progress-bar",children:[a.jsxs("div",{className:"explorer-info",children:[a.jsxs("div",{className:"explorer-text",children:[a.jsx("h4",{children:"🍃 Mindful Bathing Ritual Journey"}),a.jsxs("p",{children:["Explore every single soap product to unlock the ",a.jsx("strong",{children:"Ritual Explorer 10% Discount"})," on your order!"]})]}),a.jsxs("span",{className:"explorer-counter",children:[$.length," / ",i.length," Soaps Learnt"]})]}),a.jsx("div",{className:"progress-track",children:a.jsx("div",{className:"progress-fill",style:{width:`${$.length/i.length*100}%`}})}),Nr&&a.jsxs("div",{className:"explorer-reward-banner",children:["✨ ",a.jsx("strong",{children:"10% Ritual Explorer Discount"})," is active on your checkout!"]})]}),e==="shop"&&a.jsxs("main",{className:"shop-layout",children:[a.jsx("section",{className:"hero-banner",children:a.jsxs("div",{className:"hero-overlay",children:[a.jsx("span",{className:"hero-label",children:"Handcrafted Wellness"}),a.jsx("h1",{children:"Pure Soap. Clear Conscious."}),a.jsx("p",{children:"Experience deep, skin-clarifying nourishment with our collection of 100% natural, cold-processed bathing soaps. Made locally, delivered exclusively across Karnataka."}),a.jsxs("div",{className:"hero-benefits",children:[a.jsx("span",{children:"✓ Pure Essential Oils"}),a.jsx("span",{children:"✓ Zero Synthetic Colors"}),a.jsx("span",{children:"✓ Local Karnataka Shipping (COD)"})]})]})}),a.jsxs("section",{className:"catalog-controls",children:[a.jsxs("div",{className:"search-box",children:[a.jsx("span",{className:"search-icon",children:"🔍"}),a.jsx("input",{type:"search",placeholder:"Search ingredients, benefits, or soaps...",value:r,onChange:c=>n(c.target.value)})]}),a.jsx("div",{className:"category-scroll",children:Kt.map(c=>a.jsx("button",{className:o===c?"cat-button active":"cat-button",onClick:()=>l(c),children:c},c))})]}),a.jsx("section",{className:"catalog-grid",children:Ji.length===0?a.jsx("div",{className:"no-results",children:a.jsx("p",{children:"No soaps match your current filters. Try searching for other therapeutic herbs."})}):Ji.map(c=>{const N=vn[c.id]||{avg:5,count:0},b=$.includes(c.id);return a.jsxs("article",{className:`product-card ${b?"explored-card":""}`,children:[b&&a.jsx("span",{className:"explored-badge",children:"✓ Explored"}),a.jsx("div",{className:"card-image-box",style:{backgroundImage:`url(${c.image})`},onClick:()=>Fo(c),children:a.jsx("div",{className:"image-hover-overlay",children:a.jsx("span",{children:"Reveal Ritual Secrets"})})}),a.jsxs("div",{className:"card-details",children:[a.jsxs("div",{className:"card-header-row",children:[a.jsx("span",{className:"card-category",children:c.category}),a.jsxs("div",{className:"card-stars",children:[Er(N.avg),a.jsxs("span",{className:"rating-count",children:["(",N.count,")"]})]})]}),a.jsx("h3",{onClick:()=>Fo(c),children:c.title}),a.jsx("p",{className:"card-desc",children:c.description}),a.jsxs("div",{className:"card-footer",children:[a.jsxs("span",{className:"card-price",children:["₹",c.price]}),a.jsxs("div",{className:"card-actions",children:[a.jsx("button",{className:"btn-explore",onClick:()=>Fo(c),children:"Details"}),a.jsx("button",{className:"btn-add-cart",onClick:()=>ea(c),children:"Add Bag"})]})]})]})]},c.id)})})]}),e==="cart"&&a.jsxs("main",{className:"cart-view-container",children:[a.jsxs("h2",{children:["Your Selection (",u.length," unique soaps)"]}),u.length===0?a.jsxs("div",{className:"empty-cart-state",children:[a.jsx("span",{className:"leaf-icon-big",children:"🍃"}),a.jsx("h3",{children:"Your ritual bag is empty"}),a.jsx("p",{children:"Begin your wellness journey by exploring our chemical-free herbal bathing bars."}),a.jsx("button",{className:"btn-primary",onClick:()=>t("shop"),children:"Browse Soap Catalog"})]}):a.jsxs("div",{className:"cart-grid-layout",children:[a.jsx("div",{className:"cart-items-list",children:u.map(c=>a.jsxs("div",{className:"cart-list-item",children:[a.jsx("div",{className:"item-thumbnail",style:{backgroundImage:`url(${c.image})`}}),a.jsxs("div",{className:"item-details-column",children:[a.jsx("span",{className:"item-cat",children:c.category}),a.jsx("h3",{children:c.title}),a.jsxs("span",{className:"item-unit-price",children:["₹",c.price," per soap bar"]})]}),a.jsxs("div",{className:"item-controls-column",children:[a.jsxs("div",{className:"qty-picker",children:[a.jsx("button",{onClick:()=>ta(c.id,-1),children:"-"}),a.jsx("span",{children:c.qty}),a.jsx("button",{onClick:()=>ta(c.id,1),children:"+"})]}),a.jsxs("span",{className:"item-total-price",children:["₹",c.price*c.qty]}),a.jsx("button",{className:"btn-remove-item",onClick:()=>zc(c.id),children:"✕ Remove"})]})]},c.id))}),a.jsxs("aside",{className:"order-summary-sidebar",children:[a.jsx("h3",{children:"Bathing Ritual Summary"}),a.jsxs("div",{className:"summary-row-item",children:[a.jsx("span",{children:"Cart Subtotal"}),a.jsxs("span",{children:["₹",Lt]})]}),Nr&&a.jsxs("div",{className:"summary-row-item discount-row",children:[a.jsx("span",{children:"Explorer Reward (10%)"}),a.jsxs("span",{children:["- ₹",yn]})]}),a.jsxs("div",{className:"summary-row-item",children:[a.jsx("span",{children:"Shipping Cost"}),a.jsx("span",{children:Yt===0?"FREE":`₹${Yt}`})]}),a.jsx("div",{className:"summary-divider"}),a.jsxs("div",{className:"summary-total-row",children:[a.jsx("span",{children:"Grand Total (COD)"}),a.jsxs("span",{children:["₹",xn]})]}),a.jsx("p",{className:"shipping-note-badge",children:"🚀 Free shipping unlocked on order totals above ₹500"}),a.jsx("button",{className:"btn-primary checkout-btn-action",onClick:()=>t("checkout"),children:"Proceed to Secure Checkout"}),a.jsx("button",{className:"btn-secondary back-shopping-action",onClick:()=>t("shop"),children:"← Continue Exploring Soaps"})]})]})]}),e==="checkout"&&a.jsxs("main",{className:"checkout-container",children:[a.jsx("h2",{children:"Secure COD Checkout"}),a.jsx("p",{className:"checkout-intro",children:"All orders are shipped exclusively within Karnataka and fulfilled via Cash on Delivery (COD). No online payment details required."}),a.jsxs("div",{className:"checkout-split-layout",children:[a.jsxs("form",{className:"checkout-details-form",onSubmit:_c,children:[a.jsx("h3",{children:"Shipping Information"}),a.jsxs("div",{className:"form-double-row",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"name-input",children:"Receiver's Full Name *"}),a.jsx("input",{id:"name-input",type:"text",placeholder:"Enter full name",required:!0,value:L.name,onChange:c=>ne({...L,name:c.target.value})})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"email-input",children:"Email Address *"}),a.jsx("input",{id:"email-input",type:"email",placeholder:"name@example.com",required:!0,value:L.email,onChange:c=>ne({...L,email:c.target.value})})]})]}),a.jsxs("div",{className:"form-double-row",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"phone-input",children:"Mobile Contact Number (10 digits) *"}),a.jsx("input",{id:"phone-input",type:"tel",placeholder:"e.g. 9876543210",pattern:"\\d{10}",required:!0,value:L.phone,onChange:c=>ne({...L,phone:c.target.value})})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"state-input",children:"Shipping State (Fixed) *"}),a.jsx("input",{id:"state-input",type:"text",value:"Karnataka",disabled:!0,className:"disabled-input"}),a.jsx("small",{className:"help-text",children:"We currently ship only within Karnataka."})]})]}),a.jsx("div",{className:"form-double-row",children:a.jsxs("div",{className:"input-group full-width-field",children:[a.jsx("label",{htmlFor:"address-input",children:"Complete Shipping Address *"}),a.jsx("textarea",{id:"address-input",rows:"3",placeholder:"Flat/House no, Street name, City, Landmark",required:!0,value:L.address,onChange:c=>ne({...L,address:c.target.value})})]})}),a.jsx("div",{className:"form-double-row",children:a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"pincode-input",children:"Karnataka Postal Pincode *"}),a.jsx("input",{id:"pincode-input",type:"text",placeholder:"6-digit (e.g. 560001)",pattern:"^(56|57|58|59)\\d{4}$",required:!0,value:L.pincode,onChange:c=>ne({...L,pincode:c.target.value})}),a.jsx("small",{className:"help-text",children:"Must start with 56, 57, 58, or 59."})]})}),a.jsxs("button",{type:"submit",className:"btn-primary place-order-btn",children:["Confirm Cash on Delivery Order (₹",xn,")"]})]}),a.jsxs("aside",{className:"checkout-summary-box",children:[a.jsx("h3",{children:"Order Summary"}),a.jsx("div",{className:"checkout-products-list",children:u.map(c=>a.jsxs("div",{className:"checkout-summary-item",children:[a.jsxs("span",{children:[c.qty," × ",c.title]}),a.jsxs("span",{children:["₹",c.price*c.qty]})]},c.id))}),a.jsx("div",{className:"summary-divider"}),a.jsxs("div",{className:"summary-row-item",children:[a.jsx("span",{children:"Subtotal"}),a.jsxs("span",{children:["₹",Lt]})]}),Nr&&a.jsxs("div",{className:"summary-row-item discount-row",children:[a.jsx("span",{children:"Ritual Explorer Discount"}),a.jsxs("span",{children:["- ₹",yn]})]}),a.jsxs("div",{className:"summary-row-item",children:[a.jsx("span",{children:"Shipping"}),a.jsx("span",{children:Yt===0?"FREE":`₹${Yt}`})]}),a.jsx("div",{className:"summary-divider"}),a.jsxs("div",{className:"summary-total-row",children:[a.jsx("span",{children:"Total Amount to Pay"}),a.jsxs("span",{children:["₹",xn]})]}),a.jsxs("div",{className:"payment-security-notice",children:["🔒 ",a.jsx("strong",{children:"100% Secure Checkout:"})," The order details will be validated against Karnataka shipping boundaries. Pay cash when the parcel is delivered to your doorstep."]})]})]})]}),e==="adminLogin"&&!w&&a.jsx("main",{className:"admin-login-container",children:a.jsxs("div",{className:"login-card",children:[a.jsx("h2",{children:"Admin Portal"}),a.jsx("p",{children:"Access the Elara Earth backend console to moderate orders, reviews, and manage catalog soaps."}),a.jsxs("form",{onSubmit:Tc,children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"admin-user-input",children:"Username"}),a.jsx("input",{id:"admin-user-input",type:"text",required:!0,value:B,onChange:c=>p(c.target.value)})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"admin-pass-input",children:"Password"}),a.jsx("input",{id:"admin-pass-input",type:"password",required:!0,value:d,onChange:c=>m(c.target.value)})]}),a.jsx("button",{type:"submit",className:"btn-primary login-btn",children:"Secure Admin Login"})]})]})}),e==="admin"&&w&&a.jsxs("main",{className:"admin-dashboard-container",children:[a.jsxs("div",{className:"admin-dashboard-header",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Admin Dashboard Console"}),a.jsx("p",{children:"Manage catalog products, dispatch orders, and moderate reviews."})]}),a.jsxs("div",{className:"admin-navigation-tabs",children:[a.jsx("button",{className:ve==="dashboard"?"tab-btn active":"tab-btn",onClick:()=>Me("dashboard"),children:"Overview"}),a.jsxs("button",{className:ve==="products"?"tab-btn active":"tab-btn",onClick:()=>Me("products"),children:["Manage Soaps (",i.length,")"]}),a.jsxs("button",{className:ve==="orders"?"tab-btn active":"tab-btn",onClick:()=>Me("orders"),children:["Orders Queue (",g.length,")"]}),a.jsxs("button",{className:ve==="reviews"?"tab-btn active":"tab-btn",onClick:()=>Me("reviews"),children:["Review Moderation (",h.length,")"]})]})]}),ve==="dashboard"&&a.jsxs("section",{className:"overview-tab-content",children:[a.jsxs("div",{className:"metrics-grid",children:[a.jsxs("div",{className:"metric-card",children:[a.jsxs("h3",{children:["₹",g.filter(c=>c.status==="Delivered").reduce((c,N)=>c+N.total,0)]}),a.jsx("p",{children:"Delivered Sales (COD)"})]}),a.jsxs("div",{className:"metric-card",children:[a.jsxs("h3",{children:["₹",g.filter(c=>c.status!=="Cancelled").reduce((c,N)=>c+N.total,0)]}),a.jsx("p",{children:"Projected Sales (Excl. Cancelled)"})]}),a.jsxs("div",{className:"metric-card",children:[a.jsx("h3",{children:g.filter(c=>c.status==="Pending").length}),a.jsx("p",{children:"Pending COD Deliveries"})]}),a.jsxs("div",{className:"metric-card",children:[a.jsx("h3",{children:h.length}),a.jsx("p",{children:"Verified Product Reviews"})]})]}),a.jsxs("div",{className:"dashboard-lists-split",children:[a.jsxs("div",{className:"recent-activity-box",children:[a.jsx("h3",{children:"Recent Order Dispatches"}),g.length===0?a.jsx("p",{children:"No orders logged in database yet."}):a.jsx("div",{className:"overview-mini-list",children:g.slice(0,5).map(c=>a.jsxs("div",{className:"mini-list-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:c.customer.name})," (",c.customer.pincode,")",a.jsx("br",{}),a.jsx("small",{children:c.items.map(N=>`${N.qty}x ${N.title}`).join(", ")})]}),a.jsxs("div",{children:[a.jsx("span",{className:`status-badge-inline ${c.status.toLowerCase()}`,children:c.status}),a.jsx("br",{}),a.jsxs("strong",{children:["₹",c.total]})]})]},c.id))})]}),a.jsxs("div",{className:"recent-activity-box",children:[a.jsx("h3",{children:"Soap Catalog Rankings"}),a.jsx("div",{className:"soap-ranking-list",children:i.map(c=>{const N=vn[c.id]||{avg:5,count:0};return a.jsxs("div",{className:"ranking-item",children:[a.jsx("span",{children:c.title}),a.jsxs("div",{className:"ranking-stars",children:[Er(N.avg),a.jsxs("small",{children:["(",N.count," reviews)"]})]})]},c.id)})})]})]})]}),ve==="products"&&a.jsx("section",{className:"products-tab-content",children:a.jsxs("div",{className:"product-manager-layout",children:[a.jsxs("form",{className:"product-manager-form",onSubmit:bc,children:[a.jsx("h3",{children:Qe?"Edit Soap Details":"Add New Soap to Catalog"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"form-title",children:"Soap Name *"}),a.jsx("input",{id:"form-title",type:"text",required:!0,value:A.title,onChange:c=>je({...A,title:c.target.value})})]}),a.jsxs("div",{className:"form-double-row",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"form-category",children:"Category *"}),a.jsxs("select",{id:"form-category",required:!0,value:A.category,onChange:c=>je({...A,category:c.target.value}),children:[a.jsx("option",{value:"",children:"Select Category"}),a.jsx("option",{value:"Ayurvedic Rituals",children:"Ayurvedic Rituals"}),a.jsx("option",{value:"Natural Scrubs",children:"Natural Scrubs"}),a.jsx("option",{value:"Skincare",children:"Skincare"}),a.jsx("option",{value:"Luxury Rituals",children:"Luxury Rituals"})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"form-price",children:"Price (₹) *"}),a.jsx("input",{id:"form-price",type:"number",required:!0,min:"1",value:A.price,onChange:c=>je({...A,price:c.target.value})})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"form-image",children:"Product Image URL *"}),a.jsx("input",{id:"form-image",type:"url",required:!0,placeholder:"https://images.unsplash.com/...",value:A.image,onChange:c=>je({...A,image:c.target.value})})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"form-desc",children:"Sensory Description *"}),a.jsx("textarea",{id:"form-desc",rows:"2",required:!0,value:A.description,onChange:c=>je({...A,description:c.target.value})})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"form-ingredients",children:"Key Botanical Ingredients *"}),a.jsx("input",{id:"form-ingredients",type:"text",required:!0,placeholder:"e.g. Saffron, Neem Extracts, Goat Milk",value:A.ingredients,onChange:c=>je({...A,ingredients:c.target.value})})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"form-benefits",children:"Therapeutic Skin Benefits *"}),a.jsx("input",{id:"form-benefits",type:"text",required:!0,placeholder:"e.g. Fades blemishes, controls excess oils",value:A.benefits,onChange:c=>je({...A,benefits:c.target.value})})]}),a.jsxs("div",{className:"form-action-row",children:[a.jsx("button",{type:"submit",className:"btn-primary",children:Qe?"Save Updates":"Publish Product"}),Qe&&a.jsx("button",{type:"button",className:"btn-secondary",onClick:na,children:"Cancel"})]})]}),a.jsxs("div",{className:"product-manager-list",children:[a.jsx("h3",{children:"Live Catalog Items"}),i.length===0?a.jsx("p",{children:"No soaps in catalog yet."}):a.jsx("div",{className:"admin-product-cards-grid",children:i.map(c=>a.jsxs("div",{className:"admin-product-list-card",children:[a.jsx("div",{className:"admin-prod-thumb",style:{backgroundImage:`url(${c.image})`}}),a.jsxs("div",{className:"admin-prod-info",children:[a.jsx("span",{children:c.category}),a.jsx("h4",{children:c.title}),a.jsxs("strong",{children:["₹",c.price]})]}),a.jsxs("div",{className:"admin-prod-actions",children:[a.jsx("button",{className:"btn-edit-action",onClick:()=>Oc(c),children:"Edit"}),a.jsx("button",{className:"btn-delete-action",onClick:()=>Dc(c.id),children:"Delete"})]})]},c.id))})]})]})}),ve==="orders"&&a.jsxs("section",{className:"orders-tab-content",children:[a.jsx("h3",{children:"Customer Orders Registry"}),g.length===0?a.jsx("div",{className:"no-orders-state",children:a.jsx("p",{children:"The orders queue is currently empty."})}):a.jsx("div",{className:"orders-table-wrapper",children:a.jsxs("table",{className:"orders-admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Order Details"}),a.jsx("th",{children:"Customer Shipping Details"}),a.jsx("th",{children:"Bathing Soaps Ordered"}),a.jsx("th",{children:"Financials"}),a.jsx("th",{children:"Status Dispatch Control"})]})}),a.jsx("tbody",{children:g.map(c=>a.jsxs("tr",{children:[a.jsxs("td",{children:[a.jsx("strong",{children:"ID:"})," ",c.id,a.jsx("br",{}),a.jsx("small",{children:new Date(c.createdAt).toLocaleString()})]}),a.jsxs("td",{children:[a.jsx("strong",{children:"Name:"})," ",c.customer.name,a.jsx("br",{}),a.jsx("strong",{children:"Mob:"})," ",c.customer.phone,a.jsx("br",{}),a.jsx("strong",{children:"Email:"})," ",c.customer.email,a.jsx("br",{}),a.jsx("strong",{children:"Add:"})," ",c.customer.address,", ",c.customer.pincode,", ",c.customer.state]}),a.jsx("td",{children:a.jsx("ul",{className:"admin-table-item-list",children:c.items.map(N=>a.jsxs("li",{children:[N.qty," × ",N.title," (₹",N.price,")"]},N.id))})}),a.jsxs("td",{children:[a.jsx("strong",{children:"Total:"})," ₹",c.total,a.jsx("br",{}),a.jsx("small",{className:"cod-label-badge",children:"COD Only"})]}),a.jsx("td",{children:a.jsxs("select",{value:c.status,className:`status-dropdown-select ${c.status.toLowerCase()}`,onChange:N=>Lc(c.id,N.target.value),children:[a.jsx("option",{value:"Pending",children:"Pending Delivery"}),a.jsx("option",{value:"Shipped",children:"Dispatched / Shipped"}),a.jsx("option",{value:"Delivered",children:"Delivered Successfully"}),a.jsx("option",{value:"Cancelled",children:"Cancelled Order"})]})})]},c.id))})]})})]}),ve==="reviews"&&a.jsxs("section",{className:"reviews-tab-content",children:[a.jsx("h3",{children:"Verified Reviews Moderation Queue"}),h.length===0?a.jsx("p",{children:"No customer reviews logged in system database."}):a.jsx("div",{className:"reviews-moderation-grid",children:h.map(c=>{const N=i.find(b=>b.id===c.productId)||{title:"Unknown Soap"};return a.jsxs("div",{className:"moderation-card",children:[a.jsxs("div",{className:"moderation-card-header",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Soap Product:"})," ",N.title,a.jsx("br",{}),a.jsx("strong",{children:"Author:"})," ",c.customerName]}),a.jsx("span",{className:"moderation-date",children:new Date(c.createdAt).toLocaleDateString()})]}),a.jsx("div",{className:"moderation-card-stars",children:Er(c.rating)}),a.jsx("h4",{children:c.title}),a.jsxs("p",{children:['"',c.comment,'"']}),a.jsx("button",{className:"btn-delete-action",onClick:()=>Rc(c.id),children:"Delete & Moderate Review"})]},c.id)})})]})]}),S&&a.jsx("div",{className:"modal-overlay-backdrop",onClick:()=>R(null),children:a.jsxs("div",{className:"modal-window-content",onClick:c=>c.stopPropagation(),children:[a.jsx("button",{className:"btn-close-modal",onClick:()=>R(null),children:"✕"}),a.jsxs("div",{className:"modal-split-layout",children:[a.jsx("div",{className:"modal-image-panel",style:{backgroundImage:`url(${S.image})`}}),a.jsxs("div",{className:"modal-info-panel",children:[a.jsx("span",{className:"modal-cat-tag",children:S.category}),a.jsx("h2",{children:S.title}),a.jsxs("div",{className:"modal-stars-row",children:[Er(((oa=vn[S.id])==null?void 0:oa.avg)||5),a.jsxs("span",{children:["(",((la=vn[S.id])==null?void 0:la.count)||0," reviews)"]})]}),a.jsxs("div",{className:"modal-price-tag",children:["₹",S.price]}),a.jsx("div",{className:"modal-divider"}),a.jsxs("div",{className:"modal-tab-desc",children:[a.jsx("h3",{children:"Sensory Experience"}),a.jsx("p",{children:S.description}),a.jsxs("div",{className:"modal-details-grid",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"🍃 Key Ingredients:"}),a.jsx("p",{children:S.ingredients||"Natural Herbs"})]}),a.jsxs("div",{children:[a.jsx("strong",{children:"✨ Skin Benefits:"}),a.jsx("p",{children:S.benefits||"Pure hydration"})]})]})]}),a.jsx("div",{className:"modal-action-row-buttons",children:a.jsxs("button",{className:"btn-primary",onClick:()=>{ea(S),R(null)},children:["Add to Ritual Bag (₹",S.price,")"]})}),a.jsx("div",{className:"modal-divider"}),a.jsxs("div",{className:"modal-reviews-section",children:[a.jsx("h3",{children:"Customer Reviews"}),a.jsx("div",{className:"modal-reviews-list",children:h.filter(c=>c.productId===S.id).length===0?a.jsx("p",{className:"no-reviews-note",children:"No reviews for this soap yet. Be the first to share your bathing experience!"}):h.filter(c=>c.productId===S.id).map(c=>a.jsxs("div",{className:"individual-review-item",children:[a.jsxs("div",{className:"review-item-header",children:[a.jsx("strong",{children:c.customerName}),a.jsx("span",{className:"review-date",children:new Date(c.createdAt).toLocaleDateString()})]}),a.jsx("div",{className:"review-stars-row",children:Er(c.rating)}),a.jsx("h5",{children:c.title}),a.jsxs("p",{children:['"',c.comment,'"']})]},c.id))}),a.jsxs("form",{className:"modal-add-review-form",onSubmit:Pc,children:[a.jsx("h4",{children:"Leave a Review"}),a.jsxs("div",{className:"form-double-row",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"review-name",children:"Your Name *"}),a.jsx("input",{id:"review-name",type:"text",required:!0,placeholder:"Enter your name",value:T.customerName,onChange:c=>V({...T,customerName:c.target.value})})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"review-rating",children:"Rating (1-5 Stars) *"}),a.jsxs("select",{id:"review-rating",value:T.rating,onChange:c=>V({...T,rating:Number(c.target.value)}),children:[a.jsx("option",{value:"5",children:"5 Stars - Perfect"}),a.jsx("option",{value:"4",children:"4 Stars - Very Good"}),a.jsx("option",{value:"3",children:"3 Stars - Good"}),a.jsx("option",{value:"2",children:"2 Stars - Fair"}),a.jsx("option",{value:"1",children:"1 Star - Poor"})]})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"review-title",children:"Review Headline *"}),a.jsx("input",{id:"review-title",type:"text",required:!0,placeholder:"e.g. Extremely Hydrating!",value:T.title,onChange:c=>V({...T,title:c.target.value})})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"review-comment",children:"Review Details *"}),a.jsx("textarea",{id:"review-comment",rows:"2",required:!0,placeholder:"Share your experience using this soap...",value:T.comment,onChange:c=>V({...T,comment:c.target.value})})]}),a.jsx("button",{type:"submit",className:"btn-secondary",children:"Submit Verified Review"})]})]})]})]})]})}),a.jsxs("footer",{className:"elara-footer",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("h2",{children:"Elara Earth"}),a.jsx("p",{children:"Handcrafted, organic, and toxin-free bathing rituals. Restoring pure wellness to your daily skin routine."})]}),a.jsxs("div",{className:"footer-shipping-notice",children:[a.jsx("h4",{children:"🚚 Local Karnataka Shipping"}),a.jsx("p",{children:"We deliver exclusively to addresses across Karnataka (COD available). Standard delivery takes 2-4 business days."})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("p",{children:["© ",new Date().getFullYear()," Elara Earth. All rights reserved. Natural skin health, handcrafted with love."]}),a.jsxs("div",{className:"footer-locks",children:[a.jsx("span",{children:"🛡 Secure Checkout"}),a.jsx("span",{children:"✓ Anti-XSS Protected"}),a.jsx("span",{children:"✓ Locked Boundaries"})]})]})]}),a.jsx("style",{children:`
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
      `})]})}fl.createRoot(document.getElementById("root")).render(a.jsx(Jc.StrictMode,{children:a.jsx(pp,{})}));
