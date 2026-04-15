/* ========================================
   Cart, Wishlist, Order System
   ======================================== */

// ── Demo account seed (always available) ──
(function seedDemoAccount() {
    var users = JSON.parse(localStorage.getItem('vistra_users') || '[]');
    var hasdemo = users.some(function(u) { return u.email === 'demo@vistra.tw'; });
    if (!hasdemo) {
        users.unshift({ name: 'Demo 用戶', email: 'demo@vistra.tw', phone: '0912-000-000', password: 'demo1234' });
        localStorage.setItem('vistra_users', JSON.stringify(users));
    }
})();

// Initialize from localStorage
let cart = JSON.parse(localStorage.getItem('vistra_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('vistra_wishlist') || '[]');
let orders = JSON.parse(localStorage.getItem('vistra_orders') || '[]');
let currentUser = JSON.parse(localStorage.getItem('vistra_user') || 'null');

function saveCart() {
    localStorage.setItem('vistra_cart', JSON.stringify(cart));
    updateCartBadge();
}
function saveWishlist() {
    localStorage.setItem('vistra_wishlist', JSON.stringify(wishlist));
}
function saveOrders() {
    localStorage.setItem('vistra_orders', JSON.stringify(orders));
}
function saveUser() {
    localStorage.setItem('vistra_user', JSON.stringify(currentUser));
}

function updateCartBadge() {
    document.querySelectorAll('.cart-badge').forEach(function(el) {
        el.textContent = cart.length;
    });
}

// Add to cart
function addToCart(name, price, lens) {
    lens = lens || '標準非球面鏡片';
    const item = {
        id: Date.now(),
        name: name,
        price: price,
        lens: lens,
        qty: 1,
        addedAt: new Date().toISOString()
    };
    cart.push(item);
    saveCart();
    showToast('已加入購物車！');
}

// Remove from cart
function removeFromCart(id) {
    cart = cart.filter(function(item) { return item.id !== id; });
    saveCart();
    if (typeof renderCart === 'function') renderCart();
}

// Update qty
function updateQty(id, delta) {
    cart = cart.map(function(item) {
        if (item.id === id) {
            item.qty = Math.max(1, item.qty + delta);
        }
        return item;
    });
    saveCart();
    if (typeof renderCart === 'function') renderCart();
}

// Add to wishlist
function addToWishlist(btn) {
    const card = btn.closest('.product-info-detail') || btn.closest('.product-card');
    if (!card) { showToast('已加入收藏！'); return; }
    const name = card.querySelector('h1, .product-card-name');
    const price = card.querySelector('.product-detail-price, .product-card-price');
    const item = {
        id: Date.now(),
        name: name ? name.textContent : '商品',
        price: price ? price.textContent.replace(/\s/g,'') : '',
        addedAt: new Date().toISOString()
    };
    wishlist.push(item);
    saveWishlist();
    btn.innerHTML = '<i class="fa-solid fa-heart" style="color:var(--pink-primary)"></i>';
    showToast('已加入收藏清單！');
}

function removeFromWishlist(id) {
    wishlist = wishlist.filter(function(item) { return item.id !== id; });
    saveWishlist();
    if (typeof renderWishlist === 'function') renderWishlist();
}

// Parse price string to number
function parsePrice(str) {
    return parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
}

// Calculate cart total
function getCartTotal() {
    let total = 0;
    cart.forEach(function(item) {
        total += parsePrice(item.price) * item.qty;
    });
    return total;
}

// Calculate discount
function getDiscount(total) {
    if (total >= 8000) return 600;
    if (total >= 5000) return 400;
    return 0;
}



// Login
function doLogin(email, password) {
    if (!email || !password) {
        showToast('請輸入帳號密碼', 'error');
        return false;
    }
    // Check stored users
    let users = JSON.parse(localStorage.getItem('vistra_users') || '[]');
    let user = users.find(function(u) { return u.email === email; });
    if (user) {
        if (user.password !== password) {
            showToast('密碼錯誤', 'error');
            return false;
        }
    } else {
        // For demo, auto-create
        showToast('帳號不存在，請先註冊', 'error');
        return false;
    }
    currentUser = { email: user.email, name: user.name, phone: user.phone };
    saveUser();
    showToast('登入成功！');
    return true;
}

// Register
function doRegister(name, email, phone, password) {
    if (!name || !email || !password) {
        showToast('請填寫所有必填欄位', 'error');
        return false;
    }
    let users = JSON.parse(localStorage.getItem('vistra_users') || '[]');
    if (users.find(function(u) { return u.email === email; })) {
        showToast('此信箱已被註冊', 'error');
        return false;
    }
    users.push({ name: name, email: email, phone: phone || '', password: password });
    localStorage.setItem('vistra_users', JSON.stringify(users));
    currentUser = { email: email, name: name, phone: phone || '' };
    saveUser();
    showToast('註冊成功！');
    return true;
}

function doLogout() {
    currentUser = null;
    saveUser();
    showToast('已登出');
    setTimeout(function() { location.href = 'login.html'; }, 800);
}

// Place order
function placeOrder(shippingInfo) {
    if (cart.length === 0) {
        showToast('購物車是空的', 'error');
        return null;
    }
    let total = getCartTotal();
    let discount = getDiscount(total);
    let order = {
        id: 'OD' + Date.now().toString(36).toUpperCase(),
        items: JSON.parse(JSON.stringify(cart)),
        subtotal: total,
        discount: discount,
        total: total - discount,
        shipping: shippingInfo,
        status: '處理中',
        createdAt: new Date().toISOString(),
        user: currentUser ? currentUser.email : 'guest'
    };
    orders.push(order);
    saveOrders();
    cart = [];
    saveCart();
    return order;
}

// Toast notification
function showToast(msg, type) {
    type = type || 'success';
    let existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    let toast = document.createElement('div');
    toast.className = 'toast-notification toast-' + type;
    toast.innerHTML = '<span>' + (type === 'success' ? '<i class="fa-solid fa-check-circle"></i> ' : '<i class="fa-solid fa-exclamation-circle"></i> ') + msg + '</span>';
    toast.style.cssText = 'position:fixed;top:80px;right:20px;z-index:9999;padding:14px 24px;border-radius:12px;font-size:14px;font-weight:600;color:white;box-shadow:0 4px 20px rgba(0,0,0,0.15);animation:slideIn 0.3s ease;font-family:inherit;';
    toast.style.background = type === 'success' ? '#4CAF50' : '#e53935';
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(function() { toast.remove(); }, 300);
    }, 2500);
}

// On page load, update badge
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateCartBadge, 100);
});

// Add CSS animation for toast
(function() {
    var s = document.createElement('style');
    s.textContent = '@keyframes slideIn{from{transform:translateX(100px);opacity:0}to{transform:translateX(0);opacity:1}}';
    document.head.appendChild(s);
})();
