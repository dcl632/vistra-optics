const fs = require('fs');
const glob = require('glob');

const jsMapping = `
        var imgUrl = '';
        if(item.name.indexOf('LUCENT')>-1 || item.name.indexOf('AURA ICE')>-1) imgUrl = 'images/owndays/aura-ice.png';
        else if(item.name.indexOf('NC3019N')>-1 || item.name.indexOf('OR2071N')>-1) imgUrl = 'images/owndays/eyeglasses_01.webp';
        else if(item.name.indexOf('OF2072T')>-1) imgUrl = 'images/owndays/eyeglasses_02.webp';
        else if(item.name.indexOf('LB1009G')>-1) imgUrl = 'images/owndays/eyeglasses_03.webp';
        else if(item.name.indexOf('OG2025B')>-1) imgUrl = 'images/owndays/eyeglasses_04.webp';
        else if(item.name.indexOf('SNP1020X')>-1) imgUrl = 'images/owndays/eyeglasses_05.webp';
        else if(item.name.indexOf('AF2088T')>-1) imgUrl = 'images/owndays/eyeglasses_06.webp';
        else if(item.name.indexOf('MG3031N')>-1) imgUrl = 'images/owndays/eyeglasses_07.webp';
        else if(item.name.indexOf('PL3050N')>-1) imgUrl = 'images/owndays/eyeglasses_08.webp';
        else if(item.name.indexOf('AURA')>-1 || item.name.indexOf('LUMINA')>-1) imgUrl = 'images/owndays/aura-ice.png';
        var imgHtml = imgUrl ? '<img src="'+imgUrl+'" style="width:100%;height:100%;object-fit:cover;background:transparent;border-radius:4px;">' : '<i class="fa-solid fa-glasses"></i>';
`;

// Update wishlist.html
let wishlist = fs.readFileSync('wishlist.html', 'utf8');
wishlist = wishlist.replace(
    /cart\.forEach\(function\(item\) \{/,
    `cart.forEach(function(item) {${jsMapping}`
).replace(
    /'<div class="wishlist-card">.*?<div class="wish-icon"><i class="fa-solid fa-glasses"><\/i><\/div>/,
    `'<div class="wishlist-card"><button class="remove-wish" onclick="removeFromWishlist('+item.id+')"><i class="fa-solid fa-xmark"></i></button><div class="wish-icon" style="padding:0;overflow:hidden;">'+imgHtml+'</div>'`
);
// For wishlist, it uses `wishlist.forEach`, not `cart.forEach`. Let's fix carefully:
wishlist = fs.readFileSync('wishlist.html', 'utf8');
wishlist = wishlist.replace(
    /wishlist\.forEach\(function\(item\) \{([\s\S]*?)var html = '';\s*wishlist\.forEach\(function\(item\) \{/,
    `wishlist.forEach(function(item) {`
); // just a safety reset
wishlist = wishlist.replace(
    /wishlist\.forEach\(function\(item\) \{\s*html \+= '<div class="wishlist-card".*?;/,
    `wishlist.forEach(function(item) {${jsMapping.replace(/item\.name/g, 'item.name')}\n        html += '<div class="wishlist-card"><button class="remove-wish" onclick="removeFromWishlist('+item.id+')"><i class="fa-solid fa-xmark"></i></button><div class="wish-icon" style="padding:0;overflow:hidden;display:flex;align-items:center;justify-content:center;">'+imgHtml+'</div><div class="wish-name">'+item.name+'</div><div class="wish-price">'+item.price+'</div><button class="btn btn-sm" onclick="addToCart(\\''+item.name+'\\',\\''+item.price+'\\')">加入購物車</button></div>';`
);
fs.writeFileSync('wishlist.html', wishlist);

// Update orders.html
let orders = fs.readFileSync('orders.html', 'utf8');
orders = orders.replace(
    /order\.items\.forEach\(function\(item\) \{\s*html \+= '<div class="order-card-item".*?;/,
    `order.items.forEach(function(item) {${jsMapping}\n            html += '<div class="order-card-item"><div class="item-icon" style="padding:0;overflow:hidden;display:flex;align-items:center;justify-content:center;">'+imgHtml+'</div><div><div class="item-name">'+item.name+'</div><div class="item-meta">'+item.lens+' &times; '+item.qty+'</div></div><div class="item-price">'+item.price+'</div></div>';`
);
fs.writeFileSync('orders.html', orders);

// Update order-detail.html
let orderDetail = fs.readFileSync('order-detail.html', 'utf8');
orderDetail = orderDetail.replace(
    /order\.items\.forEach\(function\(item\) \{\s*html \+= '<div class="item-row">.*?;/,
    `order.items.forEach(function(item) {${jsMapping}\n        html += '<div class="item-row"><div class="item-icon" style="padding:0;overflow:hidden;display:flex;align-items:center;justify-content:center;">'+imgHtml+'</div><div style="flex:1;"><div style="font-weight:700;font-size:14px;">'+item.name+'</div><div style="font-size:12px;color:var(--text-light);">'+item.lens+' &times; '+item.qty+'</div></div><div style="font-weight:700;color:var(--pink-primary);">'+item.price+'</div></div>';`
);
fs.writeFileSync('order-detail.html', orderDetail);

// Update search.html
let searchHtml = fs.readFileSync('search.html', 'utf8');
searchHtml = searchHtml.replace(
    /results\.forEach\(function\(p\) \{\s*html \+= '<a href.*?;/,
    `results.forEach(function(p) {
        var item = {name: p.name};
        ${jsMapping}
        html += '<a href="'+p.url+'" class="product-card"><div class="product-card-img" style="padding:0;overflow:hidden;">'+imgHtml+'</div><div class="product-card-body"><div class="product-card-brand">'+p.brand+'</div><div class="product-card-name">'+p.name+'</div><div class="product-card-color">'+p.color+'</div><div class="product-card-price">'+p.price+'</div></div></a>';`
);
fs.writeFileSync('search.html', searchHtml);

// Fix index.html placeholders
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/<div class="product-placeholder">\s*<i class="fa-solid fa-glasses"><\/i>\s*<\/div>\s*<\/div>\s*<div class="style-product-info">\s*<p class="product-model">VISTRA AIR 2 OF2072T-1A<\/p>/g,
    `<div class="product-placeholder" style="background:#f7f7f7;padding:0;"><img src="images/owndays/eyeglasses_02.webp" style="width:100%;height:100%;object-fit:cover;"></div></div><div class="style-product-info"><p class="product-model">VISTRA AIR 2 OF2072T-1A</p>`
);
indexHtml = indexHtml.replace(/<div class="product-placeholder">\s*<i class="fa-solid fa-glasses"><\/i>\s*<\/div>\s*<\/div>\s*<div class="style-product-info">\s*<p class="product-model">SUN OPC2051N-1A<\/p>/g,
    `<div class="product-placeholder" style="background:#f7f7f7;padding:0;"><img src="images/owndays/eyeglasses_01.webp" style="width:100%;height:100%;object-fit:cover;"></div></div><div class="style-product-info"><p class="product-model">SUN OPC2051N-1A</p>`
);
indexHtml = indexHtml.replace(/<div class="product-placeholder">\s*<i class="fa-solid fa-glasses"><\/i>\s*<\/div>\s*<\/div>\s*<div class="style-product-info">\s*<p class="product-model">BELLARA LB1009G-1A<\/p>/g,
    `<div class="product-placeholder" style="background:#f7f7f7;padding:0;"><img src="images/owndays/eyeglasses_03.webp" style="width:100%;height:100%;object-fit:cover;"></div></div><div class="style-product-info"><p class="product-model">BELLARA LB1009G-1A</p>`
);
fs.writeFileSync('index.html', indexHtml);
