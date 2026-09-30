/*
 * Isale Atelier - catalog behavior.
 * Plain JavaScript, no dependencies. Reads window.SITE_CONFIG (js/config.js)
 * and window.PRODUCTOS (js/productos.js).
 */
(function () {
  'use strict';

  var CONFIG = window.SITE_CONFIG || {};
  var PRODUCTS = Array.isArray(window.PRODUCTOS) ? window.PRODUCTOS : [];

  var BUSINESS_NAME = CONFIG.BUSINESS_NAME || 'Isale Atelier';
  var CURRENCY_SYMBOL = CONFIG.CURRENCY_SYMBOL || 'L';
  var CURRENCY_NAME = CONFIG.CURRENCY_NAME || ''; // spoken by screen readers after each price
  var WHATSAPP_DIGITS = String(CONFIG.WHATSAPP_NUMBER || '').replace(/\D/g, '');
  var PLACEHOLDER_NUMBER = '50400000000'; // the old placeholder value; never treated as a real number
  var INSTAGRAM_URL = String(CONFIG.INSTAGRAM_URL || '').trim();
  var SVG_NS = 'http://www.w3.org/2000/svg';

  // Fail safe: a missing or placeholder contact is never turned into a live-looking link.
  var WA_READY = WHATSAPP_DIGITS.length >= 8 && WHATSAPP_DIGITS !== PLACEHOLDER_NUMBER;
  var IG_READY = /^https?:\/\//i.test(INSTAGRAM_URL) && !/TODO/i.test(INSTAGRAM_URL);
  // The "configure js/config.js" banner is only shown while developing (file: or localhost),
  // never to customers on the published site.
  var IS_DEV_HOST = location.protocol === 'file:' ||
    /^(localhost|127\.0\.0\.1|\[::1\]|.+\.localhost)$/i.test(location.hostname);

  var CATEGORY_LABELS = { bouquets: 'Ramos', gifts: 'Regalos y cajas' };
  var GENERIC_MESSAGE = 'Hola, vi el catálogo de ' + BUSINESS_NAME + ' y me gustaría hacer un pedido.';

  /* ---------- Helpers ---------- */

  function createEl(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function createIcon(symbolId, className) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', className || 'icon');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    var use = document.createElementNS(SVG_NS, 'use');
    use.setAttribute('href', '#' + symbolId);
    svg.appendChild(use);
    return svg;
  }

  function formatPrice(price) {
    return CURRENCY_SYMBOL + ' ' + Number(price).toLocaleString('en-US');
  }

  function whatsappUrl(message) {
    return 'https://wa.me/' + WHATSAPP_DIGITS + '?text=' + encodeURIComponent(message);
  }

  // Points a WhatsApp button at the chat, or disables it when the number is not configured
  // (no href, so it cannot open a fake chat).
  function setWhatsappLink(link, message) {
    if (WA_READY) {
      link.setAttribute('href', whatsappUrl(message));
      link.removeAttribute('aria-disabled');
      link.classList.remove('is-disabled');
      return;
    }
    link.removeAttribute('href');
    link.removeAttribute('target');
    link.setAttribute('role', 'link');
    link.setAttribute('aria-disabled', 'true');
    link.classList.add('is-disabled');
  }

  function productMessage(product) {
    if (typeof product.price === 'number') {
      return 'Hola, vi el catálogo de ' + BUSINESS_NAME + ' y me interesa «' + product.name + '» (' +
        formatPrice(product.price) + '). ¿Me das más información?';
    }
    return 'Hola, vi el catálogo de ' + BUSINESS_NAME + ' y quiero consultar el precio de «' +
      product.name + '». ¿Me das más información?';
  }

  /* ---------- Configuration warnings (never hidden from the developer) ---------- */

  function warnAboutPlaceholders() {
    var problems = []; // short Spanish notes for the development banner

    if (!WA_READY) {
      console.warn('[' + BUSINESS_NAME + '] WHATSAPP_NUMBER in js/config.js is missing, too short or still the ' +
        'placeholder. Every WhatsApp button is disabled (no link) until a real number is set ' +
        '(country code + number, digits only).');
      problems.push('falta el número de WhatsApp (WHATSAPP_NUMBER); los botones de pedido están desactivados');
    }
    if (!IG_READY) {
      console.warn('[' + BUSINESS_NAME + '] INSTAGRAM_URL in js/config.js is empty or still a placeholder. ' +
        'The Instagram link is hidden until the real profile URL is set.');
      problems.push('falta la URL de Instagram (INSTAGRAM_URL); el enlace de Instagram está oculto');
    }
    if (!PRODUCTS.length) {
      console.warn('[' + BUSINESS_NAME + '] window.PRODUCTOS is empty or missing. Check js/productos.js.');
      problems.push('js/productos.js está vacío');
    }

    if (problems.length && IS_DEV_HOST) {
      var banner = createEl('div', 'dev-banner',
        'Configura js/config.js: ' + problems.join('; ') + '. Este aviso solo aparece en tu computadora, no en el sitio publicado.');
      banner.setAttribute('role', 'status');
      document.body.insertBefore(banner, document.body.firstChild);
    }
  }

  /* ---------- Static links (header, hero, floating button, footer) ---------- */

  function wireStaticLinks() {
    var waLinks = document.querySelectorAll('[data-wa]');
    for (var i = 0; i < waLinks.length; i++) {
      setWhatsappLink(waLinks[i], GENERIC_MESSAGE);
    }
    var igLinks = document.querySelectorAll('[data-instagram]');
    for (var j = 0; j < igLinks.length; j++) {
      if (IG_READY) {
        igLinks[j].setAttribute('href', INSTAGRAM_URL);
      } else {
        // Hide the whole footer list item so no empty bullet or fake profile link remains.
        var host = igLinks[j].closest('li') || igLinks[j];
        host.hidden = true;
      }
    }
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ---------- Catalog ---------- */

  var grid = document.getElementById('product-grid');
  var countEl = document.getElementById('results-count');
  var chips = document.querySelectorAll('.filters .chip');
  var cards = [];
  var visible = PRODUCTS.slice();
  var activeFilter = 'all';

  function buildCard(product) {
    var card = createEl('article', 'card');
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-id', product.id);

    var photoBtn = createEl('button', 'card__photo');
    photoBtn.type = 'button';
    photoBtn.setAttribute('aria-haspopup', 'dialog');
    photoBtn.setAttribute('data-open', product.id);

    var img = document.createElement('img');
    img.src = product.thumb || product.image;
    if (product.thumb && product.thumbWidth && product.width) {
      img.srcset = product.thumb + ' ' + product.thumbWidth + 'w, ' + product.image + ' ' + product.width + 'w';
      // Matches the real card widths of the grid in css/styles.css: 4 columns (277px at most) from 1100px,
      // 3 columns from 720px, 2 columns on phones. Keeps phones on the small thumbnails.
      img.sizes = '(min-width: 1100px) 277px, (min-width: 720px) 30vw, 46vw';
    }
    img.alt = product.alt || product.name;
    img.loading = 'lazy';
    img.decoding = 'async';
    var w = product.thumbWidth || product.width;
    var h = product.thumbHeight || product.height;
    if (w && h) {
      img.width = w;
      img.height = h;
    }
    photoBtn.appendChild(img);

    // The button's accessible name is the photo description (img alt) plus this action hint.
    // The product name is not repeated here: it is the heading right below the photo.
    photoBtn.appendChild(createEl('span', 'sr-only', '. Ampliar foto'));
    var zoom = createEl('span', 'card__zoom');
    zoom.appendChild(createIcon('i-zoom'));
    photoBtn.appendChild(zoom);
    card.appendChild(photoBtn);

    var body = createEl('div', 'card__body');
    body.appendChild(createEl('p', 'card__eyebrow', CATEGORY_LABELS[product.category] || ''));
    body.appendChild(createEl('h3', 'card__name', product.name));
    if (product.personalizable) body.appendChild(createEl('p', 'card__tag', 'Personalizable a tu gusto'));
    body.appendChild(createEl('p', 'card__desc', product.description));

    var price = createEl('p', 'card__price');
    if (typeof product.price === 'number') {
      var symbol = createEl('small', '', CURRENCY_SYMBOL);
      // Screen readers would say "L" as a letter, so they get the currency name instead.
      if (CURRENCY_NAME) symbol.setAttribute('aria-hidden', 'true');
      price.appendChild(symbol);
      price.appendChild(document.createTextNode(' ' + Number(product.price).toLocaleString('en-US')));
      if (CURRENCY_NAME) price.appendChild(createEl('span', 'sr-only', ' ' + CURRENCY_NAME));
    } else {
      price.className += ' card__price--ask';
      price.textContent = 'Consultar precio';
    }
    body.appendChild(price);

    var cta = createEl('a', 'btn btn--wa card__cta');
    cta.target = '_blank';
    cta.rel = 'noopener noreferrer';
    setWhatsappLink(cta, productMessage(product)); // disables the button when no real number is set
    cta.setAttribute('aria-label', 'Pedir por WhatsApp: ' + product.name);
    cta.appendChild(createIcon('i-whatsapp'));
    var ctaLabel = createEl('span', '', 'Pedir');
    ctaLabel.appendChild(createEl('span', 'card__cta-more', ' por WhatsApp'));
    cta.appendChild(ctaLabel);
    body.appendChild(cta);

    card.appendChild(body);
    return card;
  }

  function renderCatalog() {
    if (!grid) return;
    var frag = document.createDocumentFragment();
    PRODUCTS.forEach(function (product) {
      var card = buildCard(product);
      cards.push({ product: product, node: card });
      frag.appendChild(card);
    });
    grid.appendChild(frag);
    applyFilter('all');
  }

  function applyFilter(filter) {
    activeFilter = filter;
    visible = [];
    cards.forEach(function (entry) {
      var show = filter === 'all' || entry.product.category === filter;
      entry.node.hidden = !show;
      if (show) visible.push(entry.product);
    });
    for (var i = 0; i < chips.length; i++) {
      chips[i].setAttribute('aria-pressed', String(chips[i].getAttribute('data-filter') === filter));
    }
    if (countEl) {
      var n = visible.length;
      countEl.textContent = 'Mostrando ' + n + (n === 1 ? ' producto' : ' productos');
    }
    if (masonryOn) relayout();
  }

  /* Masonry: give every card a grid-row span equal to its height, so the grid stacks
     cards into the shortest column while keeping the product order left to right. */
  var MASONRY_ROW = 4;   // must match grid-auto-rows in css/styles.css
  var MASONRY_GAP = 24;  // fallback vertical gap in px; the real value is --card-gap in css/styles.css

  function cardGap() {
    var value = parseFloat(getComputedStyle(grid).getPropertyValue('--card-gap'));
    return isNaN(value) ? MASONRY_GAP : value;
  }

  function setSpan(card) {
    var height = card.getBoundingClientRect().height;
    if (!height) return; // hidden by a filter
    card.style.gridRowEnd = 'span ' + Math.ceil((height + cardGap()) / MASONRY_ROW);
  }

  var masonryOn = false;

  function relayout() {
    cards.forEach(function (entry) { setSpan(entry.node); });
  }

  function setupMasonry() {
    if (!grid || !cards.length) return;
    masonryOn = true;
    grid.classList.add('is-masonry');
    relayout(); // synchronous first pass, before the first paint

    if ('ResizeObserver' in window) {
      // Fires when a card changes width (window resize) or height (web fonts finish loading).
      var observer = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) { setSpan(entry.target); });
      });
      cards.forEach(function (entry) { observer.observe(entry.node); });
    } else {
      window.addEventListener('resize', relayout);
    }
    window.addEventListener('load', relayout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
  }

  function setupFilters() {
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener('click', function (event) {
        applyFilter(event.currentTarget.getAttribute('data-filter'));
      });
    }
  }

  /* ---------- Lightbox ---------- */

  var dialog = document.getElementById('lightbox');
  var lbImg = dialog && dialog.querySelector('.lightbox__img');
  var lbTitle = dialog && dialog.querySelector('.lightbox__title');
  var lbPrice = dialog && dialog.querySelector('.lightbox__price');
  var lbCount = dialog && dialog.querySelector('.lightbox__count');
  var lbWa = dialog && dialog.querySelector('.lightbox__wa');
  var lbPrev = dialog && dialog.querySelector('.lightbox__nav--prev');
  var lbNext = dialog && dialog.querySelector('.lightbox__nav--next');
  var lbClose = dialog && dialog.querySelector('.lightbox__close');
  var lbIndex = 0;
  var lastTrigger = null;
  var canUseDialog = !!(dialog && typeof dialog.showModal === 'function');

  function preload(product) {
    if (!product) return;
    var probe = new Image();
    probe.src = product.image;
  }

  // The grid photo button of a product (where focus returns when the lightbox closes).
  function triggerFor(productId) {
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].product.id === productId) return cards[i].node.querySelector('[data-open]');
    }
    return null;
  }

  function renderLightboxPrice(product) {
    lbPrice.textContent = '';
    if (typeof product.price !== 'number') {
      lbPrice.textContent = 'Consultar precio';
    } else if (!CURRENCY_NAME) {
      lbPrice.textContent = formatPrice(product.price);
    } else {
      // Sighted users see "L 1,100"; screen readers hear "1,100 lempiras".
      var shown = createEl('span', '', formatPrice(product.price));
      shown.setAttribute('aria-hidden', 'true');
      lbPrice.appendChild(shown);
      lbPrice.appendChild(createEl('span', 'sr-only', Number(product.price).toLocaleString('en-US') + ' ' + CURRENCY_NAME));
    }
    if (product.personalizable) lbPrice.appendChild(document.createTextNode(' · Personalizable a tu gusto'));
  }

  var lbToken = 0; // identifies the latest showAt() call, so a slow photo cannot overwrite a newer one

  function showAt(index) {
    if (!visible.length) return;
    lbIndex = (index + visible.length) % visible.length;
    var product = visible[lbIndex];

    // Return focus to the card of the product that was last on screen, not the one first opened.
    lastTrigger = triggerFor(product.id) || lastTrigger;

    // Never show the previous product's photo under the new name and price: hide the photo
    // until the new one has loaded (or failed to load).
    var token = ++lbToken;
    var reveal = function () {
      if (token === lbToken) lbImg.classList.remove('is-loading');
    };
    lbImg.onload = reveal;  // the load event also fires for photos that are already cached
    lbImg.onerror = reveal;
    if (lbImg.getAttribute('src') !== product.image) {
      lbImg.classList.add('is-loading');
      lbImg.src = product.image;
    }
    lbImg.alt = product.alt || product.name;
    if (product.width && product.height) {
      lbImg.width = product.width;
      lbImg.height = product.height;
    }
    lbTitle.textContent = product.name;
    renderLightboxPrice(product);
    lbCount.textContent = 'Foto ' + (lbIndex + 1) + ' de ' + visible.length;
    setWhatsappLink(lbWa, productMessage(product));
    lbWa.setAttribute('aria-label', 'Pedir por WhatsApp: ' + product.name);
    if (visible.length < 2) dialog.setAttribute('data-single', ''); else dialog.removeAttribute('data-single');

    preload(visible[(lbIndex + 1) % visible.length]);
    preload(visible[(lbIndex - 1 + visible.length) % visible.length]);
  }

  function openLightbox(productId, trigger) {
    var index = visible.findIndex(function (p) { return p.id === productId; });
    if (index < 0) return;
    if (!canUseDialog) {
      // Very old browsers: fall back to opening the large photo in a new tab.
      window.open(visible[index].image, '_blank', 'noopener');
      return;
    }
    lastTrigger = trigger || null;
    showAt(index);
    document.documentElement.classList.add('is-locked');
    dialog.showModal();
  }

  function closeLightbox() {
    if (dialog.open) dialog.close();
  }

  function setupLightbox() {
    if (!dialog || !grid) return;

    grid.addEventListener('click', function (event) {
      var trigger = event.target.closest('[data-open]');
      if (trigger) openLightbox(trigger.getAttribute('data-open'), trigger);
    });

    if (!canUseDialog) return;

    lbPrev.addEventListener('click', function () { showAt(lbIndex - 1); });
    lbNext.addEventListener('click', function () { showAt(lbIndex + 1); });
    lbClose.addEventListener('click', closeLightbox);

    // Esc is handled natively by <dialog>. Arrow keys are handled here.
    dialog.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') { event.preventDefault(); showAt(lbIndex - 1); }
      else if (event.key === 'ArrowRight') { event.preventDefault(); showAt(lbIndex + 1); }
    });

    // Click on the dark area (not on the photo, buttons or caption) closes the lightbox.
    dialog.addEventListener('click', function (event) {
      var t = event.target;
      if (t === dialog || t.classList.contains('lightbox__inner') || t.classList.contains('lightbox__stage') ||
          t.classList.contains('lightbox__figure')) {
        closeLightbox();
      }
    });

    dialog.addEventListener('close', function () {
      document.documentElement.classList.remove('is-locked');
      if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
      lastTrigger = null;
    });

    // Swipe left/right on touch screens.
    var startX = null;
    dialog.addEventListener('touchstart', function (event) {
      startX = event.touches.length === 1 ? event.touches[0].clientX : null;
    }, { passive: true });
    dialog.addEventListener('touchend', function (event) {
      if (startX === null) return;
      var dx = event.changedTouches[0].clientX - startX;
      startX = null;
      if (Math.abs(dx) > 50) showAt(lbIndex + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  /* ---------- Init ---------- */

  warnAboutPlaceholders();
  wireStaticLinks();
  if (lbWa) setWhatsappLink(lbWa, GENERIC_MESSAGE); // showAt() sets the product message when the lightbox opens
  renderCatalog();
  setupMasonry();
  setupFilters();
  setupLightbox();
})();
