/* ================================================
   Product Filter & Sort System — VISTRA OPTICS
   ================================================ */

(function() {
  'use strict';

  function initFilter() {
    const grid = document.querySelector('.product-grid');
    if (!grid) return;

    const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const sortSelect = document.querySelector('.sort-select');
    const cards = Array.from(grid.querySelectorAll('.product-card'));

    if (!filterBtns.length || !cards.length) return;

    /* ── Store original order for reset ── */
    cards.forEach((card, i) => card.dataset.index = i);

    /* ── Active filter state ── */
    let activeFilter = 'all';

    /* ── Filter logic ── */
    function applyFilter(tag) {
      activeFilter = tag;
      let visible = 0;
      cards.forEach(card => {
        const tags = (card.dataset.tags || '').split(',');
        const show = tag === 'all' || tags.includes(tag);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
        // Smooth fade
        if (show) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        }
      });

      // Show empty state if no results
      let emptyEl = grid.querySelector('.filter-empty');
      if (!emptyEl) {
        emptyEl = document.createElement('div');
        emptyEl.className = 'filter-empty';
        emptyEl.style.cssText = 'grid-column:1/-1;text-align:center;padding:60px 20px;color:#999;font-size:15px;';
        emptyEl.innerHTML = '<i class="fa-regular fa-face-sad-tear" style="font-size:40px;display:block;margin-bottom:16px;"></i>此篩選條件目前無商品，敬請期待';
        grid.appendChild(emptyEl);
      }
      emptyEl.style.display = visible === 0 ? '' : 'none';

      // Update result count if exists
      const countEl = document.querySelector('.result-count');
      if (countEl) countEl.textContent = visible + ' 件';
    }

    /* ── Sort logic ── */
    function applySort(mode) {
      const visibleCards = cards.filter(c => c.style.display !== 'none');
      const sorted = [...visibleCards];

      const getPrice = card => {
        const t = card.querySelector('.product-card-price');
        if (!t) return 0;
        return parseInt((t.textContent.match(/[\d,]+/) || ['0'])[0].replace(/,/g, ''));
      };

      if (mode === '價格低到高') sorted.sort((a, b) => getPrice(a) - getPrice(b));
      else if (mode === '價格高到低') sorted.sort((a, b) => getPrice(b) - getPrice(a));
      else if (mode === '最新上架') {
        sorted.sort((a, b) => {
          const aNew = a.querySelector('.tag-new') ? 1 : 0;
          const bNew = b.querySelector('.tag-new') ? 1 : 0;
          return bNew - aNew;
        });
      } else {
        // 推薦排序 — original order
        sorted.sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));
      }

      // Re-append in sorted order
      sorted.forEach(card => grid.appendChild(card));
    }

    /* ── Bind filter buttons ── */
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        applyFilter(this.dataset.filter);
        if (sortSelect) applySort(sortSelect.value);
      });
    });

    /* ── Bind sort ── */
    if (sortSelect) {
      sortSelect.addEventListener('change', function() {
        applySort(this.value);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initFilter);
})();
