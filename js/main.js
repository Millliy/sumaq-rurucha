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

const productVariants = {
  "quinua-real-blanca": {
    slug: "quinua-real-blanca",
    category: "Cereales",
    breadcrumbs: ["Inicio", "Catálogo", "Cereales", "Quinua real blanca"],
    title: "Quinua real blanca",
    badge: "TOP VENTAS",
    rating: "4.9",
    reviews: "312 reseñas verificadas",
    price: "S/ 24",
    presentationTitle: "PRESENTACIÓN",
    presentations: [
      { label: "Bolsa 100 g", selected: true },
      { label: "Herbal" },
      { label: "Bolsa 500 g" },
    ],
    availability: "En stock",
    quantity: 2,
    gallery: [
      {
        src: "assets/img/producto/producto-quinua-blanca/producto-quinua-vista1.png",
        alt: "Quinua real blanca en empaque",
      },
      {
        src: "assets/img/producto/producto-quinua-blanca/producto-quinua-vista1-min.png",
        alt: "Vista frontal de la quinua real blanca",
      },
      {
        src: "assets/img/producto/producto-quinua-blanca/producto-quinua-detalle.png",
        alt: "Detalle de la quinua real blanca",
      },
      {
        src: "assets/img/producto/producto-quinua-blanca/producto-quinua-uso.png",
        alt: "Quinua real blanca en uso",
      },
    ],
    description:
      "Quinua real blanca cultivada en comunidades del altiplano de Puno, a más de 3,800 m s.n.m. Grano grande, de cocción rápida y sabor limpio.",
    usage:
      "Ideal para ensaladas, bowls, guarniciones calientes o como reemplazo de arroz.",
    facts: [
      { label: "Ingredientes", value: "100% quinua" },
      { label: "Origen", value: "Puno, Perú" },
      { label: "Cocción", value: "15 minutos" },
      { label: "Conservación", value: "Lugar fresco y seco" },
    ],
    related: [
      {
        slug: "anis-estrella",
        title: "Anís estrella",
        subtext: "Especias · Bolsa 100 g",
        price: "S/ 12",
        image: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
        alt: "Anís estrella",
      },
      {
        slug: "semillas-girasol",
        title: "Semillas de girasol",
        subtext: "Frutos secos · Bolsa 100 g",
        price: "S/ 18",
        image: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
        alt: "Semillas de girasol",
      },
      {
        slug: "coco-rallado-fino",
        title: "Coco rallado fino",
        subtext: "Deshidratados · Bolsa 100 g",
        price: "S/ 16",
        image: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
        alt: "Coco rallado fino",
      },
      {
        slug: "mani-tostado-natural",
        title: "Maní tostado al natural",
        subtext: "Frutos secos · Bolsa 100 g",
        price: "S/ 14",
        image: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
        alt: "Maní tostado al natural",
      },
    ],
  },
  "anis-estrella": {
    slug: "anis-estrella",
    category: "Especias",
    breadcrumbs: ["Inicio", "Catálogo", "Especias", "Anís estrella"],
    title: "Anís estrella",
    badge: "TOP VENTAS",
    rating: "4.8",
    reviews: "184 reseñas verificadas",
    price: "S/ 12",
    presentationTitle: "PRESENTACIÓN",
    presentations: [
      { label: "Bolsa 100 g", selected: true },
      { label: "Bolsa 250 g" },
      { label: "Bolsa 500 g" },
    ],
    availability: "En stock",
    quantity: 2,
    gallery: [
      {
        src: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
        alt: "Anís estrella",
      },
      {
        src: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
        alt: "Anís estrella vista alternativa",
      },
      {
        src: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
        alt: "Anís estrella detalle",
      },
      {
        src: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
        alt: "Anís estrella uso",
      },
    ],
    description:
      "Especia aromática de sabor intenso, ideal para infusiones, postres y mezclas especiadas.",
    usage: "Perfecto para infusiones, repostería y preparaciones aromáticas.",
    facts: [
      { label: "Ingredientes", value: "100% anís estrella" },
      { label: "Origen", value: "Perú" },
      { label: "Cocción", value: "Infusión 5 minutos" },
      { label: "Conservación", value: "Lugar fresco y seco" },
    ],
    related: [
      {
        slug: "quinua-real-blanca",
        title: "Quinua real blanca",
        subtext: "Cereales · Bolsa 100 g",
        price: "S/ 24",
        image: "assets/img/producto/producto-quinua-blanca/producto-quinua-vista1-min.png",
        alt: "Quinua real blanca",
      },
      {
        slug: "semillas-girasol",
        title: "Semillas de girasol",
        subtext: "Frutos secos · Bolsa 100 g",
        price: "S/ 18",
        image: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
        alt: "Semillas de girasol",
      },
      {
        slug: "coco-rallado-fino",
        title: "Coco rallado fino",
        subtext: "Deshidratados · Bolsa 100 g",
        price: "S/ 16",
        image: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
        alt: "Coco rallado fino",
      },
      {
        slug: "mani-tostado-natural",
        title: "Maní tostado al natural",
        subtext: "Frutos secos · Bolsa 100 g",
        price: "S/ 14",
        image: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
        alt: "Maní tostado al natural",
      },
    ],
  },
  "semillas-girasol": {
    slug: "semillas-girasol",
    category: "Frutos secos",
    breadcrumbs: ["Inicio", "Catálogo", "Frutos secos", "Semillas de girasol"],
    title: "Semillas de girasol",
    badge: "NUEVO",
    rating: "4.7",
    reviews: "129 reseñas verificadas",
    price: "S/ 18",
    presentationTitle: "PRESENTACIÓN",
    presentations: [
      { label: "Bolsa 100 g", selected: true },
      { label: "Bolsa 250 g" },
      { label: "Bolsa 500 g" },
    ],
    availability: "En stock",
    quantity: 2,
    gallery: [
      {
        src: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
        alt: "Semillas de girasol",
      },
      {
        src: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
        alt: "Semillas de girasol vista alternativa",
      },
      {
        src: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
        alt: "Semillas de girasol detalle",
      },
      {
        src: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
        alt: "Semillas de girasol uso",
      },
    ],
    description:
      "Semillas naturales listas para snacks, desayunos y mezclas caseras.",
    usage: "Úsalas en ensaladas, panes, bowls o como snack directo.",
    facts: [
      { label: "Ingredientes", value: "100% semillas de girasol" },
      { label: "Origen", value: "Perú" },
      { label: "Cocción", value: "Listo para consumo" },
      { label: "Conservación", value: "Lugar fresco y seco" },
    ],
    related: [
      {
        slug: "quinua-real-blanca",
        title: "Quinua real blanca",
        subtext: "Cereales · Bolsa 100 g",
        price: "S/ 24",
        image: "assets/img/producto/producto-quinua-blanca/producto-quinua-vista1-min.png",
        alt: "Quinua real blanca",
      },
      {
        slug: "anis-estrella",
        title: "Anís estrella",
        subtext: "Especias · Bolsa 100 g",
        price: "S/ 12",
        image: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
        alt: "Anís estrella",
      },
      {
        slug: "coco-rallado-fino",
        title: "Coco rallado fino",
        subtext: "Deshidratados · Bolsa 100 g",
        price: "S/ 16",
        image: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
        alt: "Coco rallado fino",
      },
      {
        slug: "mani-tostado-natural",
        title: "Maní tostado al natural",
        subtext: "Frutos secos · Bolsa 100 g",
        price: "S/ 14",
        image: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
        alt: "Maní tostado al natural",
      },
    ],
  },
  "coco-rallado-fino": {
    slug: "coco-rallado-fino",
    category: "Deshidratados",
    breadcrumbs: ["Inicio", "Catálogo", "Deshidratados", "Coco rallado fino"],
    title: "Coco rallado fino",
    badge: "TOP VENTAS",
    rating: "4.8",
    reviews: "207 reseñas verificadas",
    price: "S/ 16",
    presentationTitle: "PRESENTACIÓN",
    presentations: [
      { label: "Bolsa 100 g", selected: true },
      { label: "Bolsa 250 g" },
      { label: "Bolsa 500 g" },
    ],
    availability: "En stock",
    quantity: 2,
    gallery: [
      {
        src: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
        alt: "Coco rallado fino",
      },
      {
        src: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
        alt: "Coco rallado fino vista alternativa",
      },
      {
        src: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
        alt: "Coco rallado fino detalle",
      },
      {
        src: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
        alt: "Coco rallado fino uso",
      },
    ],
    description:
      "Deshidratado fino para repostería, bowls y preparaciones dulces.",
    usage: "Ideal para pasteles, granolas y preparaciones de desayuno.",
    facts: [
      { label: "Ingredientes", value: "100% coco rallado" },
      { label: "Origen", value: "Perú" },
      { label: "Cocción", value: "Listo para consumo" },
      { label: "Conservación", value: "Lugar fresco y seco" },
    ],
    related: [
      {
        slug: "quinua-real-blanca",
        title: "Quinua real blanca",
        subtext: "Cereales · Bolsa 100 g",
        price: "S/ 24",
        image: "assets/img/producto/producto-quinua-blanca/producto-quinua-vista1-min.png",
        alt: "Quinua real blanca",
      },
      {
        slug: "anis-estrella",
        title: "Anís estrella",
        subtext: "Especias · Bolsa 100 g",
        price: "S/ 12",
        image: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
        alt: "Anís estrella",
      },
      {
        slug: "semillas-girasol",
        title: "Semillas de girasol",
        subtext: "Frutos secos · Bolsa 100 g",
        price: "S/ 18",
        image: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
        alt: "Semillas de girasol",
      },
      {
        slug: "mani-tostado-natural",
        title: "Maní tostado al natural",
        subtext: "Frutos secos · Bolsa 100 g",
        price: "S/ 14",
        image: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
        alt: "Maní tostado al natural",
      },
    ],
  },
  "mani-tostado-natural": {
    slug: "mani-tostado-natural",
    category: "Frutos secos",
    breadcrumbs: ["Inicio", "Catálogo", "Frutos secos", "Maní tostado al natural"],
    title: "Maní tostado al natural",
    badge: "TOP VENTAS",
    rating: "4.9",
    reviews: "256 reseñas verificadas",
    price: "S/ 14",
    presentationTitle: "PRESENTACIÓN",
    presentations: [
      { label: "Bolsa 100 g", selected: true },
      { label: "Bolsa 250 g" },
      { label: "Bolsa 500 g" },
    ],
    availability: "En stock",
    quantity: 2,
    gallery: [
      {
        src: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
        alt: "Maní tostado al natural",
      },
      {
        src: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
        alt: "Maní tostado al natural vista alternativa",
      },
      {
        src: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
        alt: "Maní tostado al natural detalle",
      },
      {
        src: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
        alt: "Maní tostado al natural uso",
      },
    ],
    description:
      "Snack clásico, tostado sin añadidos, ideal para consumo directo o mixes.",
    usage: "Perfecto para meriendas, mezclas y consumo directo.",
    facts: [
      { label: "Ingredientes", value: "100% maní tostado" },
      { label: "Origen", value: "Perú" },
      { label: "Cocción", value: "Listo para consumo" },
      { label: "Conservación", value: "Lugar fresco y seco" },
    ],
    related: [
      {
        slug: "quinua-real-blanca",
        title: "Quinua real blanca",
        subtext: "Cereales · Bolsa 100 g",
        price: "S/ 24",
        image: "assets/img/producto/producto-quinua-blanca/producto-quinua-vista1-min.png",
        alt: "Quinua real blanca",
      },
      {
        slug: "anis-estrella",
        title: "Anís estrella",
        subtext: "Especias · Bolsa 100 g",
        price: "S/ 12",
        image: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
        alt: "Anís estrella",
      },
      {
        slug: "semillas-girasol",
        title: "Semillas de girasol",
        subtext: "Frutos secos · Bolsa 100 g",
        price: "S/ 18",
        image: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
        alt: "Semillas de girasol",
      },
      {
        slug: "coco-rallado-fino",
        title: "Coco rallado fino",
        subtext: "Deshidratados · Bolsa 100 g",
        price: "S/ 16",
        image: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
        alt: "Coco rallado fino",
      },
    ],
  },
};

const catalogProductSlugMap = {
  "ajonjoli tostado": "quinua-real-blanca",
  "ajonjoli blanca": "quinua-real-blanca",
  "chia en granos": "quinua-real-blanca",
  "crema de habas": "quinua-real-blanca",
  "harina de arvejas": "quinua-real-blanca",
  "harina de canihua": "quinua-real-blanca",
  "harina de quinua tostada": "quinua-real-blanca",
  "hojuela de kiwicha organica": "quinua-real-blanca",
  "hojuelas de quinua": "quinua-real-blanca",
  kiwicha: "quinua-real-blanca",
  "quinua blanca": "quinua-real-blanca",
  "Aguaymanto fino": "coco-rallado-fino",
  "arandanos deshidratados": "coco-rallado-fino",
  "coco rallado fino": "coco-rallado-fino",
  "coco rallado grueso": "coco-rallado-fino",
  guindones: "coco-rallado-fino",
  higo: "coco-rallado-fino",
  "higos secos": "coco-rallado-fino",
  "kiwi deshidratado": "coco-rallado-fino",
  "pera deshidratada": "coco-rallado-fino",
  "toronja deshidratada": "coco-rallado-fino",
  airampo: "anis-estrella",
  "aji amarillo": "anis-estrella",
  "aji panca": "anis-estrella",
  "aji panca molido": "anis-estrella",
  anis: "anis-estrella",
  "anis estrella": "anis-estrella",
  bicarbonato: "anis-estrella",
  "canela molida": "anis-estrella",
  "clavo de olor": "anis-estrella",
  almendras: "semillas-girasol",
  "caju cruda": "semillas-girasol",
  "caju tostado": "semillas-girasol",
  "castana": "semillas-girasol",
  "mani tostado natural": "mani-tostado-natural",
  nueces: "semillas-girasol",
  pecanas: "semillas-girasol",
  pistachos: "semillas-girasol",
  "sacha inchi": "semillas-girasol",
  "pasas morenas importadas": "coco-rallado-fino",
  "pasas morenas nacionales": "coco-rallado-fino",
  "pasas rubias pequenas": "coco-rallado-fino",
  "semillas de calabaza": "semillas-girasol",
  "semillas de girasol": "semillas-girasol",
  "mixes saludables": "quinua-real-blanca",
  "mixes premium": "quinua-real-blanca",
  "mixes energeticos": "quinua-real-blanca",
};

function getProductSlugByTitle(title) {
  return catalogProductSlugMap[
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  ] || null;
}

function bindCatalogProductCards() {
  if (window.location.pathname.split("/").pop() !== "catalogo.html") {
    return;
  }

  document.querySelectorAll(".catalog-card").forEach((card) => {
    const titleElement = card.querySelector("h3");
    const button = card.querySelector('a.button[href="carrito.html"]');

    if (!titleElement) {
      return;
    }

    const title = titleElement.textContent.trim();
    const slug = getProductSlugByTitle(title);

    if (!slug) {
      return;
    }

    card.classList.add("catalog-card--linked");
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");

    const navigate = () => {
      window.location.href = `producto.html?slug=${slug}`;
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

    if (button) {
      button.setAttribute("aria-label", `Agregar ${title} al carrito`);
    }
  });
}

function renderProductCard({ slug, title, subtext, price, image, alt }) {
  return `
    <article class="catalog-card">
      <button class="favorite-button" type="button" aria-label="Agregar a favoritos">♡</button>
      <a href="producto.html?slug=${slug}">
        <img src="${image}" alt="${alt}">
      </a>
      <div>
        <h3>${title}</h3>
        <p>${subtext}</p>
        <strong>${price}</strong>
        <a class="button button--primary" href="carrito.html">Agregar al carrito</a>
      </div>
    </article>
  `;
}

function renderProductPage() {
  const container = document.querySelector("[data-product-page]");

  if (!container) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "quinua-real-blanca";
  const product = productVariants[slug] || productVariants["quinua-real-blanca"];
  const galleryThumbs = product.gallery
    .map(
      (image, index) => `
        <button class="product-gallery__thumb${index === 0 ? " is-active" : ""}" type="button" aria-label="${image.alt}">
          <img src="${image.src}" alt="">
        </button>
      `
    )
    .join("");

  const presentations = product.presentations
    .map(
      ({ label, selected }) =>
        `<button class="product-pill${selected ? " is-selected" : ""}" type="button">${label}</button>`
    )
    .join("");

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

  const related = product.related.map(renderProductCard).join("");

  document.title = `${product.title} - Sumaq Rurucha`;
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

        <p class="product-rating" aria-label="Calificación ${product.rating} de 5">
          <span aria-hidden="true">☆☆☆☆☆</span>
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

        <button class="button button--primary product-buy" type="button">Añadir al carrito</button>

        <div class="product-benefits">
          <article>
            <strong>Envío seguro</strong>
            <span>A todo el país</span>
          </article>
          <article>
            <strong>Pago seguro</strong>
            <span>Tarjetas y billeteras</span>
          </article>
          <article>
            <strong>Devolución</strong>
            <span>Hasta 7 días</span>
          </article>
        </div>
      </aside>
    </section>

    <section class="product-details" aria-label="Detalles del producto">
      <article>
        <h2>Descripción breve</h2>
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
          <h2 id="related-title">También puede interesarte</h2>
          <p>Opciones similares para comparar rápidamente.</p>
        </div>
        <a href="catalogo.html">Ver todos &rarr;</a>
      </div>

      <div class="recommended-grid">${related}</div>
    </section>
  `;
}

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

renderNavigation();
renderProductPage();
bindCatalogProductCards();
renderFooter();
