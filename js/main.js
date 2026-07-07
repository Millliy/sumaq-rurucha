/* =====================================================================
   SUMAQ RURUCHA - main.js
   Lógica de todas las páginas del sitio. Este archivo NO contiene datos
   de productos: esos viven en js/productos-data.js (catalogProducts y
   productDetails), que debe cargarse ANTES que este archivo.

   Índice:
     1. NAVEGACIÓN      -> barra superior compartida por todas las páginas
     2. FOOTER          -> pie de página compartido
     3. FICHAS          -> construcción de las fichas de producto
     4. HOME            -> tarjetas clicables de "Más pedidos"
     5. BUSCADOR        -> modal flotante de búsqueda de productos
     6. CATÁLOGO        -> grilla de productos, filtros y tarjetas
     7. PRODUCTO        -> página de detalle (galería, cantidad, etc.)
     8. PEDIDOS         -> estado del pedido y formulario de rastreo
     9. INICIALIZACIÓN  -> arranque: cada función detecta si aplica
   ===================================================================== */

/* =====================================================================
   1. NAVEGACIÓN
   Los enlaces se definen en 3 grupos: logo (izquierda), páginas
   principales (centro) e íconos de acción (derecha).
   ===================================================================== */

const navigationGroups = [
  [
    { href: "index.html", label: '<img src="assets/icons/logo/logo.svg" alt="Sumaq Rurucha" class="nav-logo">' },
  ],
  [
    { href: "catalogo.html", label: "Cat&aacute;logo" },
    { href: "nosotros.html", label: "Con&oacute;cenos" },
    { href: "contacto.html", label: "Contacto" },
  ],
  [
    { href: "soy-distribuidor.html", label: "&iquest;Eres distribuidor?" },
    {
      href: "buscador.html",
      label: '<img src="assets/icons/busqueda.svg" alt="" class="nav-icon">',
      ariaLabel: "Buscar",
    },
    {
      href: "mi-pedido.html",
      label: '<img src="assets/icons/mi-pedido.svg" alt="" class="nav-icon nav-icon--pedido">',
      ariaLabel: "Mi pedido",
    },
    {
      href: "carrito.html",
      label: '<img src="assets/icons/carrito.svg" alt="" class="nav-icon">',
      ariaLabel: "Carrito",
    },
  ],
];

/* Dibuja la barra de navegación dentro de <header data-nav> y marca
   como activo el enlace de la página actual (en producto.html se
   marca "Catálogo", porque producto no tiene enlace propio). */
function renderNavigation() {
  const navContainer = document.querySelector("[data-nav]");

  if (!navContainer) {
    return;
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const activeNavHref = currentPage === "producto.html" ? "catalogo.html" : currentPage;

  const links = navigationGroups
    .map((group) => {
      const groupLinks = group
        .map(({ href, label, ariaLabel }) => {
          const isActive = href === activeNavHref;
          const ariaCurrent = isActive ? ' aria-current="page"' : "";
          const activeClass = isActive ? " is-active" : "";
          const labelAttribute = ariaLabel ? ` aria-label="${ariaLabel}"` : "";

          return `<a class="nav__link${activeClass}" href="${href}"${ariaCurrent}${labelAttribute}>${label}</a>`;
        })
        .join("");

      return `<div class="nav__group">${groupLinks}</div>`;
    })
    .join("");

  navContainer.innerHTML = `<nav class="nav">${links}</nav>`;
}

/* Inyecta el favicon del sitio si la página todavía no lo declaró.
   Se hace por JS para reutilizarlo en todos los HTML que cargan main.js. */
function ensureSiteFavicon() {
  const existingFavicon = document.querySelector('link[rel="icon"]');

  if (existingFavicon) {
    return;
  }

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/svg+xml";
  favicon.href = "assets/icons/icon-logo.svg";
  document.head.appendChild(favicon);
}

/* =====================================================================
   2. FOOTER
   Columnas de enlaces del pie de página. Los href="#" son enlaces
   pendientes de contenido.
   ===================================================================== */

const footerColumns = [
  {
    title: "Comprar",
    links: [
      { href: "#", label: "Cereales" },
      { href: "#", label: "Deshidratados" },
      { href: "#", label: "Especias" },
      { href: "#", label: "Frutos secos" },
    ],
  },
  {
    title: "Negocios",
    links: [
      { href: "soy-distribuidor.html", label: "Exportaci&oacute;n / Mayoristas" },
      { href: "#", label: "Recetas" },
      { href: "soy-distribuidor.html", label: "Soy distribuidor" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { href: "#", label: "Pol&iacute;ticas de env&iacute;o y devoluci&oacute;n" },
      { href: "#", label: "T&eacute;rminos y condiciones" },
      { href: "#", label: "Preguntas frecuentes" },
    ],
  },
];

/* Genera el HTML de una columna del footer (título + enlaces). */
function renderFooterColumn({ title, links }) {
  const linksHtml = links
    .map(({ href, label }) => `<a href="${href}">${label}</a>`)
    .join("");

  return `
    <div class="footer-column">
      <h3>${title}</h3>
      ${linksHtml}
    </div>
  `;
}

/* Dibuja el footer completo dentro de <div data-footer>:
   marca + redes sociales + columnas de enlaces + copyright. */
function renderFooter() {
  const footerContainer = document.querySelector("[data-footer]");

  if (!footerContainer) {
    return;
  }

  const columnsHtml = footerColumns.map(renderFooterColumn).join("");

  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo" aria-label="Sumaq Rurucha">
            <img src="assets/icons/logo/stacked-alt.svg" alt="Sumaq Rurucha">
          </a>
          <p>Alimentos naturales del altiplano peruano. Directo de la chacra, sin intermediarios.</p>

          <div class="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>

        ${columnsHtml}
      </div>

      <p class="footer-copy">&copy; 2026 Sumaq Rurucha. Hecho en Per&uacute;.</p>
    </footer>
  `;
}

/* =====================================================================
   3. FICHAS DE PRODUCTO
   productDetails (js/productos-data.js) trae solo los datos únicos de
   cada producto. Aquí se completan los campos que son iguales para
   todos, para no repetirlos 51 veces.
   ===================================================================== */

/* Cuando un producto tiene una sola foto, se repite 4 veces en la
   galería con textos alternativos distintos. Al generar las imágenes
   reales, basta definir "gallery" en productos-data.js para reemplazarla. */
function buildSingleImageGallery(src, title) {
  return [
    { src, alt: title },
    { src, alt: `${title} vista alternativa` },
    { src, alt: `${title} detalle` },
    { src, alt: `${title} uso` },
  ];
}

/* Ficha completa de cada producto: agrega slug, breadcrumbs,
   disponibilidad, cantidad inicial y galería por defecto.
   Si el producto ya define "gallery" propia, esta se respeta
   (el spread ...detail va al final y sobreescribe la generada). */
const productVariants = Object.fromEntries(
  Object.entries(productDetails).map(([slug, detail]) => [
    slug,
    {
      slug,
      breadcrumbs: ["Inicio", "Cat&aacute;logo", detail.category, detail.title],
      presentationTitle: "PRESENTACI&Oacute;N",
      availability: "En stock",
      quantity: 1,
      gallery: buildSingleImageGallery(detail.image, detail.title),
      ...detail,
    },
  ])
);

/* =====================================================================
   3.5 CARRITO
   Estado local del carrito, semillas de demostración y render de
   carrito.html a partir de la especificación extraída de Figma.
   ===================================================================== */

const cartStorageKey = "sumaq-rurucha-cart";

const cartPageContent = {
  breadcrumbs: ["Inicio", "Carrito"],
  heading: "Tu carrito",
  subheading: "Revisa tu pedido antes de finalizar la compra.",
  trustItems: [
    {
      title: "Pago seguro",
      text: "Compra protegida con tarjetas y billeteras digitales.",
    },
    {
      title: "Envío coordinado",
      text: "Calcula el costo antes de finalizar tu pedido.",
    },
    {
      title: "Soporte cercano",
      text: "Te ayudamos si necesitas modificar tu compra.",
    },
  ],
  shipping: {
    heading: "Envío",
    placeholder: "Selecciona tu departamento",
    defaultCost: 8,
    resultPrefix: "Envío estimado:",
  },
  summary: {
    heading: "Resumen",
    ctaButton: "Finalizar compra ->",
    couponPlaceholder: "&iquest;Tienes un c&oacute;digo?",
  },
};

const shippingDepartments = [
  { value: "lima", label: "Lima", cost: 8 },
  { value: "arequipa", label: "Arequipa", cost: 12 },
  { value: "cusco", label: "Cusco", cost: 14 },
  { value: "la-libertad", label: "La Libertad", cost: 12 },
  { value: "puno", label: "Puno", cost: 10 },
];

const cartSeedItems = [
  {
    slug: "quinua-real-blanca",
    title: "Quinua real blanca",
    presentation: "Bolsa 1 kg",
    quantity: 1,
    unitPrice: 24,
  },
  {
    slug: "mango-deshidratado",
    title: "Mango deshidratado",
    presentation: "Pack 250 g",
    quantity: 2,
    unitPrice: 18,
  },
  {
    slug: "mix-andino-premium",
    title: "Mix andino premium",
    presentation: "Bolsa 500 g",
    quantity: 1,
    unitPrice: 32,
  },
];

function parsePrice(value) {
  const numeric = Number(String(value || "").replace(/[^\d.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function formatPrice(value) {
  const amount = Number(value) || 0;
  return `S/ ${Number.isInteger(amount) ? amount : amount.toFixed(2)}`;
}

function getCartItemKey(item) {
  return `${item.slug}::${item.presentation}`;
}

function getDefaultPresentation(product) {
  return (
    product?.presentations?.find((item) => item.selected)?.label ||
    product?.presentations?.[0]?.label ||
    ""
  );
}

function createCartProductSnapshot(slug, overrides = {}) {
  const detail = productVariants[slug] || productDetails[slug] || null;
  const catalogMatch = catalogProducts.find((item) => item.slug === slug) || null;
  const primaryImage =
    overrides.image ||
    detail?.gallery?.[0]?.src ||
    detail?.image ||
    catalogMatch?.image ||
    "";
  const primaryAlt =
    overrides.alt ||
    detail?.gallery?.[0]?.alt ||
    detail?.title ||
    catalogMatch?.alt ||
    overrides.title ||
    "";

  return {
    slug,
    title: overrides.title || detail?.title || catalogMatch?.title || slug,
    presentation:
      overrides.presentation ||
      getDefaultPresentation(detail) ||
      catalogMatch?.subtext?.split("·").pop()?.trim() ||
      "",
    quantity: Math.max(1, overrides.quantity || 1),
    unitPrice:
      overrides.unitPrice ??
      parsePrice(detail?.price || catalogMatch?.price || 0),
    image: primaryImage,
    alt: primaryAlt,
  };
}

function getDefaultCartState() {
  return {
    items: cartSeedItems.map((item) => createCartProductSnapshot(item.slug, item)),
    shippingDepartment: "",
    shippingCost: cartPageContent.shipping.defaultCost,
    coupon: "",
  };
}

function loadCart() {
  try {
    const raw = window.localStorage.getItem(cartStorageKey);
    if (!raw) {
      return getDefaultCartState();
    }

    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) {
      return getDefaultCartState();
    }

    return {
      items: parsed.items
        .map((item) => createCartProductSnapshot(item.slug, item))
        .filter((item) => item.slug),
      shippingDepartment: parsed.shippingDepartment || "",
      shippingCost: Number(parsed.shippingCost) || cartPageContent.shipping.defaultCost,
      coupon: parsed.coupon || "",
    };
  } catch (error) {
    return getDefaultCartState();
  }
}

function saveCart(state) {
  window.localStorage.setItem(cartStorageKey, JSON.stringify(state));
}

function persistCart(state) {
  saveCart(state);
  updateNavigationCartCount();
}

function getCartItemCount() {
  return loadCart().items.reduce((total, item) => total + item.quantity, 0);
}

function updateNavigationCartCount() {
  const cartLink = document.querySelector('.nav a[href="carrito.html"]');

  if (!cartLink) {
    return;
  }

  const totalItems = getCartItemCount();
  let badge = cartLink.querySelector(".nav-badge");

  if (!totalItems) {
    cartLink.classList.remove("nav__link--with-badge");
    if (badge) {
      badge.remove();
    }
    return;
  }

  cartLink.classList.add("nav__link--with-badge");

  if (!badge) {
    badge = document.createElement("span");
    badge.className = "nav-badge";
    cartLink.appendChild(badge);
  }

  badge.textContent = String(totalItems);
}

function addItemToCart(itemData) {
  const state = loadCart();
  const nextItem = createCartProductSnapshot(itemData.slug, itemData);
  const key = getCartItemKey(nextItem);
  const existing = state.items.find((item) => getCartItemKey(item) === key);

  if (existing) {
    existing.quantity += nextItem.quantity;
  } else {
    state.items.push(nextItem);
  }

  persistCart(state);
}

function getCartTotals(items, shippingCost) {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  const appliedShippingCost = items.length ? shippingCost : 0;

  return {
    itemCount,
    subtotal,
    shippingCost: appliedShippingCost,
    total: subtotal + appliedShippingCost,
  };
}

function renderCartBreadcrumbs() {
  const breadcrumbsMarkup = cartPageContent.breadcrumbs
    .map((item, index) =>
      index === cartPageContent.breadcrumbs.length - 1
        ? `<strong>${item}</strong>`
        : `<a href="index.html">${item}</a><span>/</span>`
    )
    .join("");

  return `
    <nav class="product-breadcrumbs cart-breadcrumbs" aria-label="Ruta de navegación">
      ${breadcrumbsMarkup}
    </nav>
  `;
}

function renderCartHeader(itemCount) {
  const countLabel = `${itemCount} producto${itemCount === 1 ? "" : "s"}`;

  return `
    <section class="cart-page__header" aria-labelledby="cart-title">
      <div>
        <h1 id="cart-title">${cartPageContent.heading}</h1>
        <p>${cartPageContent.subheading}</p>
      </div>
      <span class="cart-page__count">${countLabel}</span>
    </section>
  `;
}

function renderCartItem(item) {
  const itemKey = getCartItemKey(item);

  return `
    <article class="cart-item" data-cart-item="${itemKey}">
      <img src="${item.image}" alt="${item.alt}">
      <div class="cart-item__body">
        <div class="cart-item__copy">
          <h2>${item.title}</h2>
          <p>${item.presentation}</p>
          <button class="cart-item__remove" type="button" data-cart-remove="${itemKey}">Eliminar</button>
        </div>
        <div class="cart-item__meta">
          <div class="cart-item__stepper" aria-label="Cantidad">
            <button type="button" data-cart-step="decrease" data-cart-item-key="${itemKey}" aria-label="Disminuir cantidad">-</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-cart-step="increase" data-cart-item-key="${itemKey}" aria-label="Aumentar cantidad">+</button>
          </div>
          <strong class="cart-item__price">${formatPrice(item.unitPrice * item.quantity)}</strong>
        </div>
      </div>
    </article>
  `;
}

function renderCartItems(items) {
  if (!items.length) {
    return `
      <div class="cart-empty">
        <h2>Tu carrito est&aacute; vac&iacute;o</h2>
        <p>Agrega productos desde el cat&aacute;logo o desde una ficha de producto.</p>
        <a class="button button--primary" href="catalogo.html">Explorar cat&aacute;logo</a>
      </div>
    `;
  }

  return items.map(renderCartItem).join("");
}

function renderCartTrustItems() {
  return cartPageContent.trustItems
    .map(
      (item) => `
        <article class="cart-trust__item">
          <h2>${item.title}</h2>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderShippingOptions(selectedDepartment) {
  return shippingDepartments
    .map(
      (department) => `
        <option value="${department.value}"${department.value === selectedDepartment ? " selected" : ""}>
          ${department.label}
        </option>
      `
    )
    .join("");
}

function renderShippingCard(state, shippingCost) {
  return `
    <section class="cart-shipping">
      <h2>${cartPageContent.shipping.heading}</h2>
      <label class="sr-only" for="cart-department">${cartPageContent.shipping.placeholder}</label>
      <select id="cart-department" data-cart-shipping>
        <option value="">${cartPageContent.shipping.placeholder}</option>
        ${renderShippingOptions(state.shippingDepartment)}
      </select>
      <div class="cart-shipping__result">
        <i aria-hidden="true"></i>
        <span>${cartPageContent.shipping.resultPrefix} ${formatPrice(shippingCost)}</span>
      </div>
    </section>
  `;
}

function renderCartSummary(summary) {
  return `
    <section class="cart-summary">
      <h2>${cartPageContent.summary.heading}</h2>
      <div class="cart-summary__row">
        <span>Subtotal</span>
        <strong>${formatPrice(summary.subtotal)}</strong>
      </div>
      <div class="cart-summary__row">
        <span>Envío</span>
        <strong>${formatPrice(summary.shippingCost)}</strong>
      </div>
      <div class="cart-summary__total">
        <span>Total</span>
        <strong>${formatPrice(summary.total)}</strong>
      </div>
      <a class="button button--primary cart-summary__cta" href="pago.html">${cartPageContent.summary.ctaButton}</a>
      <input
        class="cart-summary__coupon"
        type="text"
        value="${summary.coupon}"
        data-cart-coupon
        placeholder="${cartPageContent.summary.couponPlaceholder}"
        aria-label="${cartPageContent.summary.couponPlaceholder}"
      >
    </section>
  `;
}

function bindAddToCartButtons() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-add-to-cart]");

    if (!trigger) {
      return;
    }

    const slug = trigger.dataset.cartSlug;
    if (!slug) {
      return;
    }

    event.preventDefault();

    let quantity = 1;
    let presentation = "";

    if (trigger.classList.contains("product-buy")) {
      const quantityElement = document.querySelector(".product-stepper strong");
      const selectedPresentation = document.querySelector(".product-pill.is-selected");

      quantity = Math.max(1, parseInt(quantityElement?.textContent || "1", 10) || 1);
      presentation = selectedPresentation?.textContent.trim() || "";
    }

    addItemToCart({ slug, quantity, presentation });

    /* Por defecto, agregar al carrito lleva a carrito.html.
       Algunas zonas, como "Más pedidos" en el home, solo agregan
       el producto y mantienen al usuario en la misma página. */
    if (trigger.dataset.cartRedirect !== "stay") {
      window.location.href = "carrito.html";
    }
  });
}

function renderCartPage() {
  const container = document.querySelector("[data-cart-page]");

  if (!container) {
    return;
  }

  const state = loadCart();
  const totals = getCartTotals(state.items, state.shippingCost);
  const itemsMarkup = renderCartItems(state.items);
  const trustMarkup = renderCartTrustItems();
  const shippingMarkup = renderShippingCard(state, totals.shippingCost);
  const summaryMarkup = renderCartSummary({ ...totals, coupon: state.coupon });

  container.innerHTML = `
    ${renderCartBreadcrumbs()}
    ${renderCartHeader(totals.itemCount)}

    <div class="cart-layout">
      <div class="cart-main">
        <section class="cart-items">
          ${itemsMarkup}
        </section>

        <a class="cart-continue" href="catalogo.html">&larr; Seguir comprando</a>

        <section class="cart-trust" aria-label="Beneficios del pedido">
          ${trustMarkup}
        </section>
      </div>

      <aside class="cart-side">
        ${shippingMarkup}
        ${summaryMarkup}
      </aside>
    </div>
  `;

  bindCartPageInteractions(container);
  updateNavigationCartCount();
}

function bindCartPageInteractions(container) {
  container.querySelectorAll("[data-cart-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const state = loadCart();
      state.items = state.items.filter((item) => getCartItemKey(item) !== button.dataset.cartRemove);
      persistCart(state);
      renderCartPage();
    });
  });

  container.querySelectorAll("[data-cart-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const state = loadCart();
      const target = state.items.find((item) => getCartItemKey(item) === button.dataset.cartItemKey);

      if (!target) {
        return;
      }

      target.quantity += button.dataset.cartStep === "increase" ? 1 : -1;
      state.items = state.items.filter((item) => item.quantity > 0);
      persistCart(state);
      renderCartPage();
    });
  });

  const shippingSelect = container.querySelector("[data-cart-shipping]");
  if (shippingSelect) {
    shippingSelect.addEventListener("change", () => {
      const selected = shippingDepartments.find((item) => item.value === shippingSelect.value);
      const state = loadCart();
      state.shippingDepartment = shippingSelect.value;
      state.shippingCost = selected ? selected.cost : cartPageContent.shipping.defaultCost;
      persistCart(state);
      renderCartPage();
    });
  }

  const couponInput = container.querySelector("[data-cart-coupon]");
  if (couponInput) {
    couponInput.addEventListener("change", () => {
      const state = loadCart();
      state.coupon = couponInput.value.trim();
      persistCart(state);
    });
  }
}

/* =====================================================================
   4. HOME -> sección "Más pedidos"
   El degradado decorativo de las tarjetas queda por encima de la foto,
   así que el clic directo sobre la imagen no llega al enlace. Este
   manejador hace que TODA la tarjeta redirija a la ficha del producto
   (los botones "Agregar" conservan su propio destino).
   ===================================================================== */

function bindHomeProductCards() {
  document.querySelectorAll(".featured-product, .mini-products article").forEach((card) => {
    const productLink = card.querySelector('a[href^="producto.html"]');

    if (!productLink) {
      return;
    }

    const href = productLink.getAttribute("href");

    card.addEventListener("click", (event) => {
      // Si el clic fue sobre un enlace o botón, se respeta su destino.
      if (event.target.closest("a, button")) {
        return;
      }
      window.location.href = href;
    });
  });
}

/* =====================================================================
   5. BUSCADOR -> modal flotante de búsqueda
   El ícono de lupa de la barra de navegación abre esta ventana modal
   (centrada, con fondo oscurecido) en lugar de ir a buscador.html.
   El usuario escribe y ve resultados en vivo enlazados a cada ficha
   de producto. Se cierra con la X, con Escape o clicando el fondo.
   ===================================================================== */

/* Índice de búsqueda: un registro por producto único (sin duplicar los
   tamaños 100 g / 1 kg) + los productos que solo existen en el home. */
const searchIndex = (() => {
  const items = [];
  const seen = new Set();

  catalogProducts.forEach((product) => {
    if (seen.has(product.slug)) return;
    seen.add(product.slug);
    items.push({
      slug: product.slug,
      title: product.title,
      subtext: product.subtext,
      category: product.category,
      price: product.price,
      image: product.image,
    });
  });

  // Productos con ficha pero sin tarjeta de catálogo (mango, cúrcuma...).
  Object.entries(productDetails).forEach(([slug, detail]) => {
    if (seen.has(slug)) return;
    seen.add(slug);
    items.push({
      slug,
      title: detail.title,
      subtext: detail.category,
      category: detail.category,
      price: detail.price,
      image: detail.gallery ? detail.gallery[0].src : detail.image,
    });
  });

  return items;
})();

/* Sugerencias que se muestran al abrir el modal, antes de escribir. */
const searchSuggestions = ["quinua-real-blanca", "aji-amarillo", "pecanas", "mango-deshidratado"];

/* Quita tildes y pasa a minúsculas, para que "aji" encuentre "Ají"
   y "canihua" encuentre "cañihua". */
function normalizeSearchText(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/* Crea el modal (una sola vez, al final del <body>), conecta el ícono
   de la barra de navegación y maneja búsqueda, apertura y cierre. */
function initSearchModal() {
  const modal = document.createElement("div");
  modal.className = "search-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="search-modal__backdrop" data-search-close></div>
    <div class="search-modal__card" role="dialog" aria-modal="true" aria-label="Buscar productos">
      <div class="search-modal__head">
        <input type="search" placeholder="Busca quinua, ají, pecanas..." data-search-input aria-label="Buscar productos" autocomplete="off">
        <button type="button" data-search-close aria-label="Cerrar buscador">&#10005;</button>
      </div>
      <p class="search-modal__hint" data-search-hint></p>
      <ul class="search-modal__results" data-search-results></ul>
    </div>
  `;
  document.body.appendChild(modal);

  const input = modal.querySelector("[data-search-input]");
  const resultsList = modal.querySelector("[data-search-results]");
  const hint = modal.querySelector("[data-search-hint]");

  // HTML de un resultado: miniatura + nombre + presentación + precio.
  const renderResultItem = (item) => `
    <li>
      <a href="producto.html?slug=${item.slug}">
        <img src="${item.image}" alt="">
        <span class="search-result__info">
          <strong>${item.title}</strong>
          <small>${item.subtext}</small>
        </span>
        <span class="search-result__price">${item.price}</span>
      </a>
    </li>
  `;

  // Filtra el índice según lo escrito y pinta la lista de resultados.
  const renderResults = (query) => {
    const term = normalizeSearchText(query.trim());

    if (!term) {
      hint.textContent = "Sugerencias para empezar:";
      resultsList.innerHTML = searchSuggestions
        .map((slug) => searchIndex.find((item) => item.slug === slug))
        .filter(Boolean)
        .map(renderResultItem)
        .join("");
      return;
    }

    const matches = searchIndex
      .filter((item) => normalizeSearchText(`${item.title} ${item.category}`).includes(term))
      .slice(0, 8);

    hint.textContent = matches.length
      ? `${matches.length} resultado${matches.length === 1 ? "" : "s"} para "${query.trim()}"`
      : `Sin resultados para "${query.trim()}". Prueba con "quinua", "ají" o "pecanas".`;
    resultsList.innerHTML = matches.map(renderResultItem).join("");
  };

  const openModal = () => {
    modal.hidden = false;
    document.body.classList.add("search-open"); // bloquea el scroll del fondo
    input.value = "";
    renderResults("");
    input.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("search-open");
  };

  input.addEventListener("input", () => renderResults(input.value));

  // Cierra con la X o clicando el fondo oscuro.
  modal.querySelectorAll("[data-search-close]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  // Cierra con la tecla Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  // El ícono de lupa de la barra abre el modal en vez de navegar.
  document.querySelectorAll('.nav a[href="buscador.html"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openModal();
    });
  });
}

/* =====================================================================
   6. CATÁLOGO
   Renderiza la grilla por categorías, aplica los filtros (chips de
   categoría + checkboxes de tamaño) y hace las tarjetas clicables.
   ===================================================================== */

/* Ids usados en aria-labelledby de cada sección de categoría. */
const catalogCategoryIds = {
  Cereales: "cereales",
  Deshidratados: "deshidratados",
  Especias: "especias",
  "Frutos secos": "frutos",
};

/* Estado actual de los filtros del catálogo (se modifica al hacer clic
   en los chips o al aplicar los checkboxes de tamaño). */
const catalogFilterState = {
  category: "Todos",
  purposes: [],
  sizes: [],
  inStockOnly: false,
};

/* Texto legible de cada tamaño, para el resumen "Filtros activos". */
const sizeLabels = { "100g": "100 g", "250g": "250 g", "500g": "500 g", "1kg": "1 kg" };

/* Etiquetas legibles para el bloque "Filtros activos". */
const purposeLabels = {
  Cocinar: "Cocinar",
  Desayuno: "Desayuno",
  Infusiones: "Infusiones",
};

function getCatalogProductDetail(product) {
  return productVariants[product.slug] || productDetails[product.slug] || null;
}

/* Extrae un tamaño estable aunque el dato venga en subtext o presentación. */
function extractSizeToken(text) {
  if (!text) return null;
  if (/1\s*kg/i.test(text)) return "1kg";
  if (/500\s*g/i.test(text)) return "500g";
  if (/250\s*g/i.test(text)) return "250g";
  if (/100\s*g/i.test(text)) return "100g";
  return null;
}

/* Deduce el tamaño de un producto a partir de su subtexto
   (ej. "Cereales · Bolsa 100 g" -> "100g"). */
function getProductSize(product) {
  const detail = getCatalogProductDetail(product);

  return (
    extractSizeToken(product.subtext) ||
    extractSizeToken(getDefaultPresentation(detail)) ||
    null
  );
}

/* Resume el producto en etiquetas de uso para filtrar sin depender
   de una sola categoría fija. Un producto puede vivir en varios usos. */
function getProductPurposes(product) {
  const detail = getCatalogProductDetail(product);
  const searchableText = normalizeSearchText(
    [
      product.category,
      product.title,
      product.subtext,
      detail?.description,
      detail?.usage,
      ...(detail?.facts || []).map((fact) => `${fact.label} ${fact.value}`),
    ]
      .filter(Boolean)
      .join(" ")
  );

  const purposes = new Set();

  if (
    /infusion|infusiones|te |tes |agua caliente|digestiv|manzanilla|muña|muna|anis/.test(searchableText)
  ) {
    purposes.add("Infusiones");
  }

  if (
    /desayuno|avena|porridge|yogurt|granola|granolas|batido|batidos|jugo|jugos|leche caliente|panqueques|golden milk/.test(
      searchableText
    )
  ) {
    purposes.add("Desayuno");
  }

  if (
    product.category === "Especias" ||
    /cocina|cocina peruana|guiso|guisos|sopa|sopas|aderezo|aderezos|salsa|salsas|arroz|guarnicion|guarniciones|remoja|hidrata|licua|espesante|marinada|marinadas|crema|cremas/.test(
      searchableText
    )
  ) {
    purposes.add("Cocinar");
  }

  return [...purposes];
}

function isProductInStock(product) {
  const detail = getCatalogProductDetail(product);
  return !detail?.availability || detail.availability === "En stock";
}

/* Un producto pasa el filtro si coincide con la categoría elegida
   Y con alguno de los tamaños marcados (o si no hay filtros). */
function matchesCatalogFilters(product) {
  const categoryMatch =
    catalogFilterState.category === "Todos" || product.category === catalogFilterState.category;
  const purposeMatch =
    catalogFilterState.purposes.length === 0 ||
    catalogFilterState.purposes.some((purpose) => getProductPurposes(product).includes(purpose));
  const sizeMatch =
    catalogFilterState.sizes.length === 0 || catalogFilterState.sizes.includes(getProductSize(product));
  const stockMatch = !catalogFilterState.inStockOnly || isProductInStock(product);

  return categoryMatch && purposeMatch && sizeMatch && stockMatch;
}

/* Elige "count" productos al azar (mezcla Fisher-Yates), excluyendo el
   producto actual. Se usa en "También puede interesarte". */
function pickRandomProducts(excludeSlug, count) {
  const pool = catalogProducts.filter((item) => item.slug !== excludeSlug);
  const shuffled = pool.slice();

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

/* HTML de una tarjeta de producto del catálogo:
   corazón de favorito + imagen + título + precio + botón de carrito. */
function renderProductCard({ slug, title, subtext, price, image, alt }) {
  return `
    <article class="catalog-card">
      <button class="favorite-button" type="button" aria-label="Agregar a favoritos">
        <img src="assets/icons/corazon.svg" alt="" class="favorite-button__icon">
      </button>
      <a href="producto.html?slug=${slug}">
        <img src="${image}" alt="${alt}">
      </a>
      <div>
        <h3>${title}</h3>
        <p>${subtext}</p>
        <strong>${price}</strong>
        <a class="button button--primary" href="carrito.html" data-add-to-cart data-cart-slug="${slug}">Agregar al carrito</a>
      </div>
    </article>
  `;
}

/* HTML de una sección de categoría: título + grilla de tarjetas. */
function renderCatalogCategory(category, products) {
  const id = catalogCategoryIds[category];
  const cards = products.map(renderProductCard).join("");

  return `
    <section class="catalog-category" aria-labelledby="${id}-title">
      <h2 id="${id}-title">${category}</h2>
      <div class="catalog-grid">${cards}</div>
    </section>
  `;
}

/* Botones de favorito (corazón vacío/lleno). Solo visual por ahora:
   no persiste la selección entre páginas. */
function bindFavoriteButtons() {
  document.querySelectorAll(".favorite-button").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      const isActive = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", String(!isActive));
      button.classList.toggle("is-active", !isActive);
    });
  });
}

/* Hace clicable toda la tarjeta del catálogo (imagen, título, fondo)
   hacia la ficha del producto, con soporte de teclado (Enter/Espacio).
   Los enlaces y botones internos conservan su propio destino. */
function bindCatalogProductCards() {
  bindFavoriteButtons();

  document.querySelectorAll(".catalog-card").forEach((card) => {
    const productLink = card.querySelector('a[href^="producto.html"]');
    const titleElement = card.querySelector("h3");
    const button = card.querySelector('a.button[href="carrito.html"]');

    if (!productLink) {
      return;
    }

    const href = productLink.getAttribute("href");
    const title = titleElement ? titleElement.textContent.trim() : "";

    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");

    const navigate = () => {
      window.location.href = href;
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) {
        return;
      }
      navigate();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        navigate();
      }
    });

    if (button && title) {
      button.setAttribute("aria-label", `Agregar ${title} al carrito`);
    }
  });
}

/* Dibuja la página del catálogo:
   - Grilla principal por categorías (sin "Mixes para ti"), aplicando filtros.
   - Contador de productos y resumen de filtros activos.
   - Fila "Mixes para ti" en su propia sección recomendada.
   Se vuelve a ejecutar cada vez que cambian los filtros. */
function renderCatalogPage() {
  const categoriesContainer = document.querySelector("[data-catalog-categories]");

  if (categoriesContainer) {
    const filtered = catalogProducts.filter(
      (item) => item.category !== "Mixes para ti" && matchesCatalogFilters(item)
    );
    const categories = [...new Set(filtered.map((item) => item.category))];

    categoriesContainer.innerHTML = categories.length
      ? categories
          .map((category) =>
            renderCatalogCategory(category, filtered.filter((item) => item.category === category))
          )
          .join("")
      : '<p class="catalog-empty">No hay productos que coincidan con los filtros seleccionados.</p>';

    const countElement = document.querySelector("[data-catalog-count]");
    if (countElement) {
      countElement.textContent = `${filtered.length} productos`;
    }

    const activeFiltersElement = document.querySelector("[data-active-filters]");
    if (activeFiltersElement) {
      const parts = [];
      if (catalogFilterState.category !== "Todos") {
        parts.push(catalogFilterState.category);
      }
      if (catalogFilterState.purposes.length) {
        parts.push(catalogFilterState.purposes.map((purpose) => purposeLabels[purpose]).join(", "));
      }
      if (catalogFilterState.sizes.length) {
        parts.push(catalogFilterState.sizes.map((size) => sizeLabels[size]).join(", "));
      }
      if (catalogFilterState.inStockOnly) {
        parts.push("En stock");
      }
      activeFiltersElement.textContent = parts.length
        ? `Filtros activos: ${parts.join(" &middot; ")}`
        : "Mostrando todos los productos";
    }
  }

  const recommendedContainer = document.querySelector("[data-recommended-grid]");

  if (recommendedContainer) {
    recommendedContainer.innerHTML = catalogProducts
      .filter((item) => item.category === "Mixes para ti")
      .map(renderProductCard)
      .join("");
  }

  bindCatalogProductCards();
}

/* Conecta los controles de filtrado:
   - Chips de categoría: filtran al instante.
   - Checkboxes: agrupan uso, tamaño y stock al pulsar "Aplicar filtros". */
function bindCatalogFilters() {
  const chipsContainer = document.querySelector(".catalog-chips");

  if (chipsContainer) {
    const chips = chipsContainer.querySelectorAll(".catalog-chip");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("catalog-chip--active"));
        chip.classList.add("catalog-chip--active");
        catalogFilterState.category = chip.textContent.trim();
        renderCatalogPage();
      });
    });
  }

  const applyButton = document.querySelector("[data-apply-filters]");

  if (applyButton) {
    applyButton.addEventListener("click", () => {
      const checkedPurposes = document.querySelectorAll(
        '[data-purpose-filter] input[type="checkbox"]:checked'
      );
      const checked = document.querySelectorAll('[data-size-filter] input[type="checkbox"]:checked');
      const inStockInput = document.querySelector(
        '[data-stock-filter] input[type="checkbox"][value="in-stock"]'
      );

      catalogFilterState.purposes = Array.from(checkedPurposes).map((input) => input.value);
      catalogFilterState.sizes = Array.from(checked).map((input) => input.value);
      catalogFilterState.inStockOnly = Boolean(inStockInput?.checked);
      renderCatalogPage();
    });
  }
}

/* =====================================================================
   7. PÁGINA DE PRODUCTO (producto.html?slug=...)
   Lee el slug de la URL, busca la ficha y dibuja toda la página:
   breadcrumbs, galería, resumen de compra, detalles y relacionados.
   Si el slug no existe, muestra la quinua como producto por defecto.
   ===================================================================== */

function renderProductPage() {
  const container = document.querySelector("[data-product-page]");

  if (!container) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "quinua-real-blanca";
  const product = productVariants[slug] || productVariants["quinua-real-blanca"];

  // Miniaturas de la galería (la primera arranca activa).
  const galleryThumbs = product.gallery
    .map(
      (image, index) => `
        <button class="product-gallery__thumb${index === 0 ? " is-active" : ""}" type="button" aria-label="${image.alt}">
          <img src="${image.src}" alt="">
        </button>
      `
    )
    .join("");

  // Píldoras de presentación (Bolsa 100 g, 250 g, ...).
  const presentations = product.presentations
    .map(
      ({ label, selected }) =>
        `<button class="product-pill${selected ? " is-selected" : ""}" type="button">${label}</button>`
    )
    .join("");

  // Tabla de datos clave (ingredientes, origen, cocción, conservación).
  const facts = product.facts
    .map(
      ({ label, value }) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `
    )
    .join("");

  // 4 productos al azar para "También puede interesarte".
  const related = pickRandomProducts(product.slug, 4).map(renderProductCard).join("");

  document.title = `${product.title} - Sumaq Rurucha`;

  // Breadcrumbs: el último elemento es texto plano; el resto, enlaces.
  const breadcrumbMarkup = product.breadcrumbs
    .map((item, index) => {
      if (index === product.breadcrumbs.length - 1) {
        return `<strong>${item}</strong>`;
      }

      const href = index === 0 ? "index.html" : "catalogo.html";
      return `<a href="${href}">${item}</a><span>/</span>`;
    })
    .join("");

  container.innerHTML = `
    <section class="product-breadcrumbs" aria-label="Ruta de navegación">
      ${breadcrumbMarkup}
    </section>

    <section class="product-hero" aria-labelledby="product-title">
      <div class="product-gallery">
        <figure class="product-gallery__main">
          <img src="${product.gallery[0].src}" alt="${product.gallery[0].alt}">
        </figure>

        <div class="product-gallery__thumbs" aria-label="Galería de imágenes">
          ${galleryThumbs}
        </div>
      </div>

      <aside class="product-summary" aria-labelledby="product-title">
        <span class="product-badge">${product.badge}</span>
        <h1 id="product-title">${product.title}</h1>

        <p class="product-rating" aria-label="Calificaci&oacute;n ${product.rating} de 5">
          <span class="product-rating__stars" aria-hidden="true">
            <img src="assets/icons/estrella.svg" alt="">
            <img src="assets/icons/estrella.svg" alt="">
            <img src="assets/icons/estrella.svg" alt="">
            <img src="assets/icons/estrella.svg" alt="">
            <img src="assets/icons/estrella.svg" alt="">
          </span>
          <strong>${product.rating}</strong>
          <span>${product.reviews}</span>
        </p>

        <p class="product-price">${product.price}</p>

        <div class="product-variant-group">
          <span>${product.presentationTitle}</span>
          <div class="product-pills">${presentations}</div>
        </div>

        <div class="product-availability">
          <span>DISPONIBILIDAD</span>
          <p><i aria-hidden="true"></i> ${product.availability}</p>
        </div>

        <div class="product-quantity">
          <span>CANTIDAD</span>
          <div class="product-stepper" aria-label="Cantidad">
            <button type="button" aria-label="Disminuir cantidad">-</button>
            <strong>${product.quantity}</strong>
            <button type="button" aria-label="Aumentar cantidad">+</button>
          </div>
        </div>

        <button class="button button--primary product-buy" type="button" data-add-to-cart data-cart-slug="${product.slug}">A&ntilde;adir al carrito</button>

        <div class="product-benefits">
          <article>
            <strong>Env&iacute;o seguro</strong>
            <span>A todo el pa&iacute;s</span>
          </article>
          <article>
            <strong>Pago seguro</strong>
            <span>Tarjetas y billeteras</span>
          </article>
          <article>
            <strong>Devoluci&oacute;n</strong>
            <span>Hasta 7 d&iacute;as</span>
          </article>
        </div>
      </aside>
    </section>

    <section class="product-details" aria-label="Detalles del producto">
      <article>
        <h2>Descripci&oacute;n breve</h2>
        <p>${product.description}</p>

        <h2>Uso recomendado</h2>
        <p>${product.usage}</p>
      </article>

      <div class="product-facts">
        <h2>Datos clave</h2>
        <dl>${facts}</dl>
      </div>
    </section>

    <section class="related-products" aria-labelledby="related-title">
      <div class="section-heading section-heading--split">
        <div>
          <h2 id="related-title">Tambi&eacute;n puede interesarte</h2>
          <p>Opciones similares para comparar r&aacute;pidamente.</p>
        </div>
        <a href="catalogo.html">Ver todos &rarr;</a>
      </div>

      <div class="recommended-grid">${related}</div>
    </section>
  `;

  bindProductInteractions(container);
  bindCatalogProductCards();
}

/* Interactividad de la página de producto:
   - Miniaturas: al hacer clic cambian la imagen principal.
   - Presentaciones: solo una píldora seleccionada a la vez.
   - Cantidad: botones +/- con mínimo de 1 unidad. */
function bindProductInteractions(container) {
  const mainImage = container.querySelector(".product-gallery__main img");
  const thumbs = container.querySelectorAll(".product-gallery__thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("is-active"));
      thumb.classList.add("is-active");

      const thumbImage = thumb.querySelector("img");
      if (mainImage && thumbImage) {
        mainImage.src = thumbImage.src;
        mainImage.alt = thumb.getAttribute("aria-label") || "";
      }
    });
  });

  const pills = container.querySelectorAll(".product-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("is-selected"));
      pill.classList.add("is-selected");
    });
  });

  const stepper = container.querySelector(".product-stepper");
  if (stepper) {
    const quantityElement = stepper.querySelector("strong");
    const [decreaseButton, increaseButton] = stepper.querySelectorAll("button");

    decreaseButton.addEventListener("click", () => {
      const current = parseInt(quantityElement.textContent, 10);
      quantityElement.textContent = Math.max(1, current - 1);
    });

    increaseButton.addEventListener("click", () => {
      const current = parseInt(quantityElement.textContent, 10);
      quantityElement.textContent = current + 1;
    });
  }
}

/* =====================================================================
   8. PEDIDOS -> estado del pedido y rastreo
   Datos de demostración: los 4 pedidos comparten el mismo contenido y
   solo cambia la etapa (confirmado / preparando / enviado / entregado).
   Cuando exista backend, orderData se reemplaza por datos reales.
   ===================================================================== */

/* Contenido compartido por los pedidos demo: productos, envío y resumen. */
const demoOrderContent = {
  items: [
    {
      title: "Quinua real blanca",
      subtext: "Bolsa 1 kg · x1",
      price: "S/ 24",
      image: "assets/img/producto/producto-quinua-blanca/producto-quinua-vista1-min.png",
    },
    {
      title: "Mango deshidratado",
      subtext: "Pack 250 g · x2",
      price: "S/ 36",
      image: "assets/img/home/03-mini-mango-deshidratado.png",
    },
    {
      title: "Mix andino premium",
      subtext: "Bolsa 500 g · x1",
      price: "S/ 32",
      image: "assets/img/home/05-mini-miel-andina.png",
    },
  ],
  shipping: {
    name: "María Fernanda Quispe",
    address: "Av. Los Próceres 123, dpto. 201 · San Isidro, Lima",
    phone: "987 654 321",
  },
  summary: {
    rows: [
      { label: "Subtotal", value: "S/ 92" },
      { label: "Envío", value: "S/ 8" },
      { label: "Método de pago", value: "Yape / Plin" },
    ],
    total: { label: "Total", value: "S/ 100" },
  },
};

/* Pedidos de prueba. La clave es el número que el usuario escribe
   en "Rastrea tu pedido" (mi-pedido.html). */
const orderData = {
  "SR-10001": { orderNumber: "SR-10001", placedDate: "4 de julio de 2026", stage: "confirmado", ...demoOrderContent },
  "SR-10002": { orderNumber: "SR-10002", placedDate: "3 de julio de 2026", stage: "preparando", ...demoOrderContent },
  "SR-48213": { orderNumber: "SR-48213", placedDate: "4 de julio de 2026", stage: "enviado", ...demoOrderContent },
  "SR-10004": { orderNumber: "SR-10004", placedDate: "1 de julio de 2026", stage: "entregado", ...demoOrderContent },
};

/* Tarjeta lateral de ayuda (WhatsApp), común a las etapas en curso. */
const helpActionCard = {
  type: "help",
  heading: "¿Necesitas ayuda?",
  text: "Escríbenos por WhatsApp si tienes dudas sobre tu envío.",
  buttonText: "Escribir por WhatsApp",
  buttonHref: "https://wa.me/",
};

/* Contenido de cada etapa del pedido: título, pasos del stepper
   (completado/pendiente con su marca de tiempo) y tarjeta de acción.
   La etapa "entregado" muestra la invitación a calificar en lugar
   de la ayuda por WhatsApp. */
const orderStageData = {
  confirmado: {
    pillLabel: "Confirmado",
    heading: "¡Gracias! Tu pedido fue confirmado",
    steps: [
      { label: "Confirmado", timestamp: "4 jul · 10:32 a.m.", state: "completed" },
      { label: "Preparando", timestamp: "En proceso", state: "pending" },
      { label: "Enviado", timestamp: "Pendiente", state: "pending" },
      { label: "Entregado", timestamp: "Pendiente", state: "pending" },
    ],
    actionCard: helpActionCard,
  },
  preparando: {
    pillLabel: "En preparación",
    heading: "Estamos preparando tu pedido",
    steps: [
      { label: "Confirmado", timestamp: "3 jul · 9:40 a.m.", state: "completed" },
      { label: "Preparando", timestamp: "3 jul · 4:20 p.m.", state: "completed" },
      { label: "Enviado", timestamp: "Pendiente", state: "pending" },
      { label: "Entregado", timestamp: "Pendiente", state: "pending" },
    ],
    actionCard: helpActionCard,
  },
  enviado: {
    pillLabel: "En camino",
    heading: "Tu pedido está en camino",
    steps: [
      { label: "Confirmado", timestamp: "4 jul · 10:32 a.m.", state: "completed" },
      { label: "Preparando", timestamp: "4 jul · 3:10 p.m.", state: "completed" },
      { label: "Enviado", timestamp: "5 jul · 9:00 a.m.", state: "completed" },
      { label: "Entregado", timestamp: "Estimado 6-8 jul", state: "pending" },
    ],
    actionCard: helpActionCard,
  },
  entregado: {
    pillLabel: "Entregado",
    heading: "Tu pedido fue entregado",
    steps: [
      { label: "Confirmado", timestamp: "1 jul · 10:32 a.m.", state: "completed" },
      { label: "Preparando", timestamp: "1 jul · 3:10 p.m.", state: "completed" },
      { label: "Enviado", timestamp: "2 jul · 9:00 a.m.", state: "completed" },
      { label: "Entregado", timestamp: "3 jul · 11:15 a.m.", state: "completed" },
    ],
    actionCard: {
      type: "review",
      heading: "¿Cómo estuvo tu pedido?",
      text: "Cuéntanos qué te pareció. Tu opinión ayuda a otros compradores.",
      buttonText: "Calificar mi pedido ★",
    },
  },
};

/* Dibuja la página de estado del pedido. La usan 3 páginas:
   - estado-pedido.html: lee ?pedido=SR-XXXXX de la URL.
   - pedido-confirmado.html / pedido-entregado.html: fuerzan su etapa
     con el atributo data-order-stage del <main>. */
function renderOrderStatusPage() {
  const container = document.querySelector("[data-order-status-page]");

  if (!container) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const forcedStage = container.dataset.orderStage;
  const defaultOrder = forcedStage
    ? Object.values(orderData).find((item) => item.stage === forcedStage)
    : orderData["SR-48213"];
  const requested = (params.get("pedido") || defaultOrder.orderNumber).toUpperCase();
  const order = orderData[requested] || defaultOrder;
  const stageKey = forcedStage || order.stage;
  const stage = orderStageData[stageKey] || orderStageData.enviado;

  document.title = `Pedido ${order.orderNumber} - Sumaq Rurucha`;

  // Stepper horizontal: ✓ en pasos completados, número en pendientes.
  // El último paso completado se marca como "actual" y recibe un anillo
  // de realce para que se vea de un vistazo en qué etapa va el pedido.
  const lastCompletedIndex = stage.steps.reduce(
    (lastIndex, step, index) => (step.state === "completed" ? index : lastIndex),
    -1
  );

  const stepperMarkup = stage.steps
    .map(
      (step, index) => `
        <div class="order-stepper__step order-stepper__step--${step.state}${index === lastCompletedIndex ? " order-stepper__step--current" : ""}">
          <div class="order-stepper__marker">${step.state === "completed" ? "✓" : index + 1}</div>
          <div class="order-stepper__label">${step.label}</div>
          <div class="order-stepper__timestamp">${step.timestamp}</div>
        </div>
      `
    )
    .join("");

  // Lista de productos del pedido.
  const itemsMarkup = order.items
    .map(
      (item) => `
        <li class="order-product-item">
          <img src="${item.image}" alt="${item.title}">
          <div>
            <h3>${item.title}</h3>
            <p>${item.subtext}</p>
          </div>
          <strong>${item.price}</strong>
        </li>
      `
    )
    .join("");

  // Botón de la tarjeta lateral: calificar (entregado) o WhatsApp (resto).
  // El botón de WhatsApp lleva un icono de burbuja de chat inline.
  const chatIconSvg =
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';

  const actionButtonMarkup =
    stage.actionCard.type === "review"
      ? `<button class="button button--primary" type="button">${stage.actionCard.buttonText}</button>`
      : `<a class="button button--primary" href="${stage.actionCard.buttonHref}" target="_blank" rel="noreferrer">${chatIconSvg} ${stage.actionCard.buttonText}</a>`;

  // Filas del resumen (subtotal, envío, método de pago).
  const summaryRowsMarkup = order.summary.rows
    .map(
      (row) => `
        <div class="order-summary__row">
          <span>${row.label}</span>
          <span>${row.value}</span>
        </div>
      `
    )
    .join("");

  container.innerHTML = `
    <nav class="product-breadcrumbs" aria-label="Ruta de navegación">
      <a href="index.html">Inicio</a><span>/</span>
      <a href="mi-pedido.html">Mi cuenta</a><span>/</span>
      <strong>Pedido #${order.orderNumber}</strong>
    </nav>

    <div class="order-status__header">
      <div>
        <span class="order-stage-pill order-stage-pill--${stageKey}">${stage.pillLabel}</span>
        <h1>${stage.heading}</h1>
        <p>Pedido #${order.orderNumber} &middot; realizado el ${order.placedDate}</p>
      </div>
      <a class="button button--outline order-status__track" href="mi-pedido.html">Rastrear otro pedido</a>
    </div>

    <div class="order-stepper">${stepperMarkup}</div>

    <div class="order-layout">
      <div class="order-main">
        <section class="order-products">
          <h2>Productos en tu pedido</h2>
          <ul>${itemsMarkup}</ul>
        </section>

        <section class="order-address">
          <h2>Dirección de envío</h2>
          <p class="order-address__name">${order.shipping.name}</p>
          <p class="order-address__line">${order.shipping.address}</p>
          <p class="order-address__phone">${order.shipping.phone}</p>
        </section>
      </div>

      <aside class="order-side">
        <section class="order-summary">
          <h2>Resumen</h2>
          ${summaryRowsMarkup}
          <div class="order-summary__total">
            <span>${order.summary.total.label}</span>
            <span>${order.summary.total.value}</span>
          </div>
        </section>

        <section class="order-help">
          <h2>${stage.actionCard.heading}</h2>
          <p>${stage.actionCard.text}</p>
          ${actionButtonMarkup}
        </section>
      </aside>
    </div>
  `;
}

/* Formulario "Rastrea tu pedido" (mi-pedido.html):
   valida que el número exista en orderData y que haya un contacto.
   Si es válido redirige a estado-pedido.html; si no, marca los campos
   en rojo y muestra el mensaje de error. */
function bindTrackOrderForm() {
  const form = document.querySelector("[data-track-order-form]");

  if (!form) {
    return;
  }

  const errorMessage = form.querySelector("[data-track-order-error]");
  const fields = form.querySelectorAll("[data-track-order-field]");

  // Acceso de demostración: cada botón rellena los campos con un pedido
  // de ejemplo (uno por etapa) para probar el flujo sin escribir nada.
  form.querySelectorAll("[data-demo-order]").forEach((demoButton) => {
    demoButton.addEventListener("click", () => {
      form.orderNumber.value = demoButton.dataset.demoOrder;
      form.contact.value = "maria@gmail.com";
      form.orderNumber.focus();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const orderNumber = form.orderNumber.value.trim().toUpperCase();
    const contact = form.contact.value.trim();
    const isValid = Boolean(orderData[orderNumber]) && contact.length > 0;

    fields.forEach((field) => field.classList.toggle("has-error", !isValid));
    errorMessage.hidden = isValid;
    form.classList.toggle("is-error", !isValid);

    if (isValid) {
      window.location.href = `estado-pedido.html?pedido=${orderNumber}`;
    }
  });
}

/* =====================================================================
   9. INICIALIZACIÓN
   Se ejecuta en todas las páginas. Cada función busca su contenedor
   (data-nav, data-catalog-categories, data-product-page, etc.) y no
   hace nada si la página actual no lo tiene.
   initSearchModal va después de renderNavigation porque conecta el
   ícono de lupa que esa función acaba de dibujar.
   ===================================================================== */

ensureSiteFavicon();
renderNavigation();
updateNavigationCartCount();
initSearchModal();
bindAddToCartButtons();
bindHomeProductCards();
renderCatalogPage();
bindCatalogFilters();
renderProductPage();
renderCartPage();
renderOrderStatusPage();
bindTrackOrderForm();
renderFooter();


