/* ========================================
   Shared Components - Header & Footer
   ======================================== */

function getHeader(currentPage) {
    return `
    <div class="announcement-bar">
        <div class="announcement-inner">
            <a href="index.html" style="color:white;">春日祭好評延長 🌸 精選鏡框優惠4折起 | 官網限定</a>
        </div>
    </div>
    <header class="header" id="header">
        <div class="header-inner">
            <button class="hamburger" id="hamburgerBtn" aria-label="選單">
                <span></span><span></span><span></span>
            </button>
            <a href="index.html" class="logo" style="display:flex;align-items:center;gap:10px;text-decoration:none;">
                <svg viewBox="0 0 36 24" width="36" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Left lens -->
                    <ellipse cx="9" cy="12" rx="8" ry="10" stroke="#e83e6c" stroke-width="2.2" fill="none"/>
                    <!-- Right lens -->
                    <ellipse cx="27" cy="12" rx="8" ry="10" stroke="#e83e6c" stroke-width="2.2" fill="none"/>
                    <!-- Bridge -->
                    <path d="M17 12 L19 12" stroke="#e83e6c" stroke-width="2.2" stroke-linecap="round"/>
                    <!-- Left temple -->
                    <path d="M1 12 L0 10" stroke="#e83e6c" stroke-width="1.8" stroke-linecap="round"/>
                    <!-- Right temple -->
                    <path d="M35 12 L36 10" stroke="#e83e6c" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
                <div style="display:flex;flex-direction:column;line-height:1;">
                    <span style="font-family:'Noto Sans TC',sans-serif;font-weight:900;font-size:18px;letter-spacing:4px;color:#1a1a1a;text-transform:uppercase;">VISTRA</span>
                    <span style="font-family:'Noto Sans TC',sans-serif;font-size:8px;letter-spacing:2px;color:#999;font-weight:300;">OPTICS</span>
                </div>
            </a>

            <nav class="main-nav" id="mainNav">
                <ul class="nav-list">
                    <li class="nav-item has-dropdown">
                        <a href="eyeglasses.html" class="${currentPage==='eyeglasses'?'active':''}">眼鏡</a>
                        <div class="dropdown">
                            <ul>
                                <li><a href="eyeglasses.html">全部眼鏡</a></li>
                                <li><a href="eyeglasses-men.html">男性</a></li>
                                <li><a href="eyeglasses-women.html">女性</a></li>
                                <li><a href="eyeglasses-kids.html">兒童</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="sunglasses.html" class="${currentPage==='sunglasses'?'active':''}">太陽眼鏡</a>
                        <div class="dropdown">
                            <ul>
                                <li><a href="sunglasses.html">全部太陽眼鏡</a></li>
                                <li><a href="sunglasses-men.html">男性</a></li>
                                <li><a href="sunglasses-women.html">女性</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="lenses.html" class="${currentPage==='lenses'?'active':''}">鏡片</a>
                        <div class="dropdown">
                            <ul>
                                <li><a href="lenses.html">標準鏡片</a></li>
                                <li><a href="lenses-functional.html">機能鏡片</a></li>
                                <li><a href="lenses-exchange.html">換鏡片方案</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item"><a href="contact-lenses.html" class="${currentPage==='contact-lenses'?'active':''}">隱形眼鏡</a></li>
                    <li class="nav-item has-dropdown">
                        <a href="services.html" class="${currentPage==='services'?'active':''}">服務</a>
                        <div class="dropdown">
                            <ul>
                                <li><a href="services-frame.html">鏡框調整</a></li>
                                <li><a href="services-cleaning.html">清洗服務</a></li>
                                <li><a href="services-warranty.html">保固服務</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item"><a href="stores.html" class="${currentPage==='stores'?'active':''}">搜尋門市</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <a href="search.html" class="action-btn" aria-label="搜尋"><i class="fa-solid fa-magnifying-glass"></i></a>
                <a href="wishlist.html" class="action-btn" aria-label="收藏"><i class="fa-regular fa-heart"></i></a>
                <a href="cart.html" class="action-btn" aria-label="購物車"><i class="fa-solid fa-bag-shopping"></i><span class="cart-badge">0</span></a>
                <a href="login.html" class="action-btn" aria-label="會員"><i class="fa-regular fa-user"></i></a>
            </div>
        </div>
    </header>
    <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>`;
}

function getFooter() {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-col">
                    <h4>關於 VISTRA</h4>
                    <ul>
                        <li><a href="about.html">品牌故事</a></li>
                        <li><a href="news.html">最新消息</a></li>
                        <li><a href="stores.html">門市資訊</a></li>
                        <li><a href="careers.html">人才招募</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>顧客服務</h4>
                    <ul>
                        <li><a href="faq.html">常見問題</a></li>
                        <li><a href="shipping.html">配送說明</a></li>
                        <li><a href="returns.html">退換貨政策</a></li>
                        <li><a href="services-warranty.html">保固服務</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>會員中心</h4>
                    <ul>
                        <li><a href="login.html">會員登入</a></li>
                        <li><a href="register.html">會員註冊</a></li>
                        <li><a href="orders.html">訂單查詢</a></li>
                        <li><a href="wishlist.html">收藏清單</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>聯絡我們</h4>
                    <div class="footer-contact">
                        <p><i class="fa-solid fa-phone"></i> 0800-002-118</p>
                        <p><i class="fa-regular fa-clock"></i> 服務時間 11:00 - 21:00</p>
                        <p><i class="fa-regular fa-comment"></i> <a href="faq.html">線上客服</a></p>
                    </div>
                    <div class="footer-social">
                        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" aria-label="LINE"><i class="fa-brands fa-line"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-countries">
                <span class="footer-country-label">其他國家/地區：</span>
                <div class="footer-country-list">
                    <a href="#">日本</a><a href="#">新加坡</a><a href="#" class="active">台灣</a>
                    <a href="#">泰國</a><a href="#">柬埔寨</a><a href="#">菲律賓</a>
                    <a href="#">澳洲</a><a href="#">馬來西亞</a><a href="#">越南</a>
                    <a href="#">印尼</a><a href="#">香港</a><a href="#">阿聯酋</a>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-legal">
                    <a href="privacy.html">隱私權政策</a>
                    <a href="membership-terms.html">會員條款</a>
                    <a href="terms.html">網站使用條款</a>
                </div>
                <p class="footer-copy">&copy; 2026 VISTRA Co., Ltd. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    <button class="back-to-top" id="backToTop" aria-label="回到頂部"><i class="fa-solid fa-chevron-up"></i></button>`;
}

function initComponents() {
    const headerEl = document.getElementById('shared-header');
    const footerEl = document.getElementById('shared-footer');
    const page = document.body.dataset.page || '';
    if (headerEl) headerEl.innerHTML = getHeader(page);
    if (footerEl) footerEl.innerHTML = getFooter();

    // Header scroll
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    // Mobile nav
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('mobileNavOverlay');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });
        overlay.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Back to top
    const btt = document.getElementById('backToTop');
    if (btt) {
        window.addEventListener('scroll', function() {
            btt.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
        btt.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

document.addEventListener('DOMContentLoaded', initComponents);
