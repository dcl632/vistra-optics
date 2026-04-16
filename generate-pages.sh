#!/bin/bash
# Generate all subpages for OWNDAYS clone

DIR="/Users/alan_dingchaoliao/owndays-clone"

HEAD='<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TITLE_HERE | OWNDAYS 台灣</title>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/pages.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>'

FOOT='<script src="js/components.js"></script>
</body>
</html>'

# Helper function
make_page() {
    local file="$1"
    local title="$2"
    local page_id="$3"
    local body="$4"
    local h="${HEAD//TITLE_HERE/$title}"
    echo "$h" > "$DIR/$file"
    echo "<body data-page=\"$page_id\">" >> "$DIR/$file"
    echo '<div id="shared-header"></div>' >> "$DIR/$file"
    echo '<main class="main-content">' >> "$DIR/$file"
    echo "$body" >> "$DIR/$file"
    echo '</main>' >> "$DIR/$file"
    echo '<div id="shared-footer"></div>' >> "$DIR/$file"
    echo "$FOOT" >> "$DIR/$file"
}

# ========== EYEGLASSES ==========
PRODUCTS_EYEGLASSES='
<div class="page-banner">
    <div class="breadcrumb"><a href="index.html">首頁</a> / CRUMB_HERE</div>
    <h1>HEADING_HERE</h1>
    <p>DESC_HERE</p>
</div>
<div class="container">
    <div class="filters-bar">
        <div class="filters-left">
            <button class="filter-btn active">全部</button>
            <button class="filter-btn">方框</button>
            <button class="filter-btn">圓框</button>
            <button class="filter-btn">橢圓</button>
            <button class="filter-btn">多角形</button>
            <button class="filter-btn">飛行員</button>
            <button class="filter-btn">威靈頓</button>
        </div>
        <div class="filters-right">
            排序：<select class="sort-select"><option>推薦排序</option><option>價格低到高</option><option>價格高到低</option><option>最新上架</option></select>
        </div>
    </div>
    <div class="product-grid">'

PRODUCT_ITEMS='
        <a href="product-nc3019n.html" class="product-card">
            <div class="product-card-img"><div class="tag">60%OFF</div><i class="fa-solid fa-glasses"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS</div>
                <div class="product-card-name">NC3019N-1A</div>
                <div class="product-card-color">Matte Black</div>
                <div class="product-card-price">NT$7,190</div>
            </div>
        </a>
        <a href="product-of2072t.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-glasses"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">AIR FIT</div>
                <div class="product-card-name">OF2072T-1A</div>
                <div class="product-card-color">Brown Demi</div>
                <div class="product-card-price">NT$7,380</div>
            </div>
        </a>
        <a href="product-lb1009g.html" class="product-card">
            <div class="product-card-img"><div class="tag tag-new">NEW</div><i class="fa-solid fa-glasses"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">LILLYBELL</div>
                <div class="product-card-name">LB1009G-1A</div>
                <div class="product-card-color">Rose Gold</div>
                <div class="product-card-price">NT$7,380</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-glasses"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS</div>
                <div class="product-card-name">OG2025B-1S</div>
                <div class="product-card-color">Navy Blue</div>
                <div class="product-card-price">NT$7,190</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><div class="tag">60%OFF</div><i class="fa-solid fa-glasses"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SNAP</div>
                <div class="product-card-name">SNP1020X-2A</div>
                <div class="product-card-color">Gunmetal</div>
                <div class="product-card-price">NT$7,480 <span class="original">NT$7,980</span></div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-glasses"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">AIR FIT</div>
                <div class="product-card-name">AF2088T-0S</div>
                <div class="product-card-color">Clear Gray</div>
                <div class="product-card-price">NT$7,380</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><div class="tag tag-new">NEW</div><i class="fa-solid fa-glasses"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS</div>
                <div class="product-card-name">MG3031N-2S</div>
                <div class="product-card-color">Tortoise</div>
                <div class="product-card-price">NT$7,190</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-glasses"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS</div>
                <div class="product-card-name">PL3050N-0A</div>
                <div class="product-card-color">Burgundy</div>
                <div class="product-card-price">NT$7,190</div>
            </div>
        </a>'

PRODUCTS_END='
    </div>
    <div style="text-align:center;padding:40px 0;">
        <button class="btn btn-outline" onclick="alert('"'"'更多商品即將上架'"'"')">載入更多</button>
    </div>
</div>'

# Eyeglasses All
B="${PRODUCTS_EYEGLASSES//CRUMB_HERE/眼鏡}"
B="${B//HEADING_HERE/全部眼鏡}"
B="${B//DESC_HERE/找到最適合你的鏡框，配鏡含標準鏡片 NT\$1,790 起}"
make_page "eyeglasses.html" "眼鏡" "eyeglasses" "$B$PRODUCT_ITEMS$PRODUCTS_END"

# Eyeglasses Men
B="${PRODUCTS_EYEGLASSES//CRUMB_HERE/眼鏡 \/ 男性}"
B="${B//HEADING_HERE/男性眼鏡}"
B="${B//DESC_HERE/專為男性設計的鏡框系列}"
make_page "eyeglasses-men.html" "男性眼鏡" "eyeglasses" "$B$PRODUCT_ITEMS$PRODUCTS_END"

# Eyeglasses Women
B="${PRODUCTS_EYEGLASSES//CRUMB_HERE/眼鏡 \/ 女性}"
B="${B//HEADING_HERE/女性眼鏡}"
B="${B//DESC_HERE/優雅時尚的女性鏡框系列}"
make_page "eyeglasses-women.html" "女性眼鏡" "eyeglasses" "$B$PRODUCT_ITEMS$PRODUCTS_END"

# Eyeglasses Kids
B="${PRODUCTS_EYEGLASSES//CRUMB_HERE/眼鏡 \/ 兒童}"
B="${B//HEADING_HERE/兒童眼鏡}"
B="${B//DESC_HERE/安全舒適的兒童鏡框系列}"
make_page "eyeglasses-kids.html" "兒童眼鏡" "eyeglasses" "$B$PRODUCT_ITEMS$PRODUCTS_END"

# ========== SUNGLASSES ==========
SUN_ITEMS='
        <a href="product-opc2051n.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-sun"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SUN</div>
                <div class="product-card-name">OPC2051N-1A</div>
                <div class="product-card-color">Clear Gray</div>
                <div class="product-card-price">NT$7,480</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-sun"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SUN</div>
                <div class="product-card-name">SG1022B-1S</div>
                <div class="product-card-color">Black</div>
                <div class="product-card-price">NT$7,480</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><div class="tag tag-new">NEW</div><i class="fa-solid fa-sun"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SUN</div>
                <div class="product-card-name">SG2055T-0A</div>
                <div class="product-card-color">Havana Brown</div>
                <div class="product-card-price">NT$7,580</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-sun"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SUN</div>
                <div class="product-card-name">SG3080N-2S</div>
                <div class="product-card-color">Gold</div>
                <div class="product-card-price">NT$7,480</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-sun"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SUN</div>
                <div class="product-card-name">SG4010K-1A</div>
                <div class="product-card-color">Pink Mirror</div>
                <div class="product-card-price">NT$7,480</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><div class="tag">60%OFF</div><i class="fa-solid fa-sun"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SUN</div>
                <div class="product-card-name">SG5090N-0S</div>
                <div class="product-card-color">Matte Navy</div>
                <div class="product-card-price">NT$7,190 <span class="original">NT$7,480</span></div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-sun"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SUN</div>
                <div class="product-card-name">SG6020X-2A</div>
                <div class="product-card-color">Tortoise</div>
                <div class="product-card-price">NT$7,580</div>
            </div>
        </a>
        <a href="product-detail.html" class="product-card">
            <div class="product-card-img"><i class="fa-solid fa-sun"></i></div>
            <div class="product-card-body">
                <div class="product-card-brand">OWNDAYS SUN</div>
                <div class="product-card-name">SG7015B-1A</div>
                <div class="product-card-color">Crystal Blue</div>
                <div class="product-card-price">NT$7,480</div>
            </div>
        </a>'

SUN_FILTERS='
<div class="page-banner">
    <div class="breadcrumb"><a href="index.html">首頁</a> / CRUMB_HERE</div>
    <h1>HEADING_HERE</h1>
    <p>DESC_HERE</p>
</div>
<div class="container">
    <div class="filters-bar">
        <div class="filters-left">
            <button class="filter-btn active">全部</button>
            <button class="filter-btn">飛行員</button>
            <button class="filter-btn">方框</button>
            <button class="filter-btn">圓框</button>
            <button class="filter-btn">貓眼</button>
            <button class="filter-btn">運動</button>
        </div>
        <div class="filters-right">
            排序：<select class="sort-select"><option>推薦排序</option><option>價格低到高</option><option>價格高到低</option><option>最新上架</option></select>
        </div>
    </div>
    <div class="product-grid">'

# Sunglasses All
B="${SUN_FILTERS//CRUMB_HERE/太陽眼鏡}"
B="${B//HEADING_HERE/全部太陽眼鏡}"
B="${B//DESC_HERE/時尚與防護兼具的太陽眼鏡系列}"
make_page "sunglasses.html" "太陽眼鏡" "sunglasses" "$B$SUN_ITEMS$PRODUCTS_END"

# Sunglasses Men
B="${SUN_FILTERS//CRUMB_HERE/太陽眼鏡 \/ 男性}"
B="${B//HEADING_HERE/男性太陽眼鏡}"
B="${B//DESC_HERE/帥氣有型的男性太陽眼鏡}"
make_page "sunglasses-men.html" "男性太陽眼鏡" "sunglasses" "$B$SUN_ITEMS$PRODUCTS_END"

# Sunglasses Women
B="${SUN_FILTERS//CRUMB_HERE/太陽眼鏡 \/ 女性}"
B="${B//HEADING_HERE/女性太陽眼鏡}"
B="${B//DESC_HERE/優雅迷人的女性太陽眼鏡}"
make_page "sunglasses-women.html" "女性太陽眼鏡" "sunglasses" "$B$SUN_ITEMS$PRODUCTS_END"

echo "Product pages done."
