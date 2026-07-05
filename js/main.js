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

const catalogProducts = [
  // Cereales
  { slug: "quinua-real-blanca", category: "Cereales", title: "Ajonjolí tostado", subtext: "Cereales · Bolsa 100 g", price: "S/ 14", image: "assets/img/catalogo/Cereales/cereales-ajonjoli-tostado-100g.png", alt: "Ajonjolí tostado" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Ajonjolí blanca", subtext: "Cereales · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Cereales/cereales-ajonjoli-blanca-100g.png", alt: "Ajonjolí blanca" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Ajonjolí blanca", subtext: "Cereales · Bolsa 1 kg", price: "S/ 38", image: "assets/img/catalogo/Cereales/cereales-Ajonjolí-blanca-1000g.png", alt: "Ajonjolí blanca 1 kg" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Chía en granos", subtext: "Cereales · Bolsa 500 g", price: "S/ 26", image: "assets/img/catalogo/Cereales/cereales-chia-gramos-500g.png", alt: "Chía en granos" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Crema de habas", subtext: "Cereales · Bolsa 100 g", price: "S/ 11", image: "assets/img/catalogo/Cereales/cereales-Crema-de-habas-100g.png", alt: "Crema de habas" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Harina de arvejas", subtext: "Cereales · Bolsa 100 g", price: "S/ 10", image: "assets/img/catalogo/Cereales/cereales-Harina-de-arvejas-100g.png", alt: "Harina de arvejas" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Harina de cañihua", subtext: "Cereales · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Cereales/cereales-Harina-de-cañihua-100g.png", alt: "Harina de cañihua" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Harina de quinua tostada", subtext: "Cereales · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Cereales/cereales-Harina-de-quinua-tostada-100g.png", alt: "Harina de quinua tostada" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Hojuela de kiwicha orgánica", subtext: "Cereales · Bolsa 100 g", price: "S/ 13", image: "assets/img/catalogo/Cereales/cereales-Hojuela-de-kiwicha-orgánica-100g.png", alt: "Hojuela de kiwicha orgánica" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Hojuelas de quinua", subtext: "Cereales · Bolsa 100 g", price: "S/ 13", image: "assets/img/catalogo/Cereales/cereales-hojuelasdequinua-100g.png", alt: "Hojuelas de quinua" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Kiwicha", subtext: "Cereales · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Cereales/cereales-kiwicha-100g.png", alt: "Kiwicha" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Quinua blanca", subtext: "Cereales · Bolsa 100 g", price: "S/ 14", image: "assets/img/catalogo/Cereales/cereales-Quinua-blanca-100g.png", alt: "Quinua blanca" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Quinua blanca", subtext: "Cereales · Bolsa 1 kg", price: "S/ 42", image: "assets/img/catalogo/Cereales/cereales -quinua-blanca-1000g.png", alt: "Quinua blanca 1 kg" },
  { slug: "quinua-real-blanca", category: "Cereales", title: "Hojuela de kiwicha orgánica", subtext: "Cereales · Bolsa 1 kg", price: "S/ 38", image: "assets/img/catalogo/Cereales/cereales-Hojuela-de-kiwicha-orgánica-1000g.png", alt: "Hojuela de kiwicha orgánica 1 kg" },

  // Deshidratados
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Aguaymanto fino", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 18", image: "assets/img/catalogo/Deshidratados/deshidratados-Aguaymanto-Fino-100g.png", alt: "Aguaymanto fino" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Arándanos deshidratados", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 20", image: "assets/img/catalogo/Deshidratados/deshidratados-Arándanos-deshidratados-100g.png", alt: "Arándanos deshidratados" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Coco rallado fino", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png", alt: "Coco rallado fino" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Coco rallado grueso", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-grueso-100g.png", alt: "Coco rallado grueso" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Guindones", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 16", image: "assets/img/catalogo/Deshidratados/deshidratados-Guindones-100g.png", alt: "Guindones" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Higo", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 15", image: "assets/img/catalogo/Deshidratados/deshidratados-Higo-100g.png", alt: "Higo" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Higos secos", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 15", image: "assets/img/catalogo/Deshidratados/deshidratados-Higos-Secos-100g.png", alt: "Higos secos" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Kiwi deshidratado", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 18", image: "assets/img/catalogo/Deshidratados/Deshidratados-kiwi-100g.png", alt: "Kiwi deshidratado" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Pera deshidratada", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 17", image: "assets/img/catalogo/Deshidratados/deshidratados-Pera-deshidradata-100g.png", alt: "Pera deshidratada" },
  { slug: "coco-rallado-fino", category: "Deshidratados", title: "Toronja deshidratada", subtext: "Deshidratados · Bolsa 100 g", price: "S/ 17", image: "assets/img/catalogo/Deshidratados/deshitrados-toronja-dishidratado-100g.png", alt: "Toronja deshidratada" },

  // Especias
  { slug: "anis-estrella", category: "Especias", title: "Airampo", subtext: "Especias · Bolsa 100 g", price: "S/ 11", image: "assets/img/catalogo/Especias/Especias-Airampo-100g.png", alt: "Airampo" },
  { slug: "anis-estrella", category: "Especias", title: "Ají amarillo", subtext: "Especias · Bolsa 100 g", price: "S/ 13", image: "assets/img/catalogo/Especias/Especias-Aji-amarillo-100g.png", alt: "Ají amarillo" },
  { slug: "anis-estrella", category: "Especias", title: "Ají panca", subtext: "Especias · Bolsa 100 g", price: "S/ 13", image: "assets/img/catalogo/Especias/Especias-Ají-panca-100g.png", alt: "Ají panca" },
  { slug: "anis-estrella", category: "Especias", title: "Ají panca molido", subtext: "Especias · Bolsa 100 g", price: "S/ 13", image: "assets/img/catalogo/Especias/Especias-ají-panca-molido-100g.png", alt: "Ají panca molido" },
  { slug: "anis-estrella", category: "Especias", title: "Anís", subtext: "Especias · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Especias/Especias-Anís-100g.png", alt: "Anís" },
  { slug: "anis-estrella", category: "Especias", title: "Anís estrella", subtext: "Especias · Bolsa 100 g", price: "S/ 14", image: "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png", alt: "Anís estrella" },
  { slug: "anis-estrella", category: "Especias", title: "Bicarbonato", subtext: "Especias · Bolsa 100 g", price: "S/ 8", image: "assets/img/catalogo/Especias/Especias-bicarbonato-100g.png", alt: "Bicarbonato" },
  { slug: "anis-estrella", category: "Especias", title: "Canela molida", subtext: "Especias · Bolsa 100 g", price: "S/ 15", image: "assets/img/catalogo/Especias/Especias-canela-molida-100g.png", alt: "Canela molida" },
  { slug: "anis-estrella", category: "Especias", title: "Clavo de olor", subtext: "Especias · Bolsa 100 g", price: "S/ 14", image: "assets/img/catalogo/Especias/Especias-Clavo-de-olor-100g.png", alt: "Clavo de olor" },

  // Frutos secos
  { slug: "semillas-girasol", category: "Frutos secos", title: "Almendras", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 18", image: "assets/img/catalogo/Frutos secos/Fruto-secos-Almendras-100g.png", alt: "Almendras" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Cajú cruda", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 20", image: "assets/img/catalogo/Frutos secos/Fruto-secos-cajú-cruda-100g.png", alt: "Cajú cruda" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Cajú tostado", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 21", image: "assets/img/catalogo/Frutos secos/Fruto-secos-cajú-tostado-100g.png", alt: "Cajú tostado" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Castaña", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 22", image: "assets/img/catalogo/Frutos secos/Fruto-secos-castaña-100g.png", alt: "Castaña" },
  { slug: "mani-tostado-natural", category: "Frutos secos", title: "Maní tostado natural", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png", alt: "Maní tostado natural" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Nueces", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 20", image: "assets/img/catalogo/Frutos secos/Fruto-secos-nueces-100g.png", alt: "Nueces" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Pecanas", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 24", image: "assets/img/catalogo/Frutos secos/Fruto-secos-Pecanas-100g.png", alt: "Pecanas" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Pistachos", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 26", image: "assets/img/catalogo/Frutos secos/Fruto-secos-pistachos-100g.png", alt: "Pistachos" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Sacha inchi", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 18", image: "assets/img/catalogo/Frutos secos/Fruto-secos-sacha-inca-100g.png", alt: "Sacha inchi" },
  { slug: "coco-rallado-fino", category: "Frutos secos", title: "Pasas morenas importadas", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 14", image: "assets/img/catalogo/Frutos secos/Fruto-secos-Pasas-morenas-importadas-grandes-100g.png", alt: "Pasas morenas importadas" },
  { slug: "coco-rallado-fino", category: "Frutos secos", title: "Pasas morenas nacionales", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 12", image: "assets/img/catalogo/Frutos secos/Fruto-secos-pasas-morenas-nacionales-100g.png", alt: "Pasas morenas nacionales" },
  { slug: "coco-rallado-fino", category: "Frutos secos", title: "Pasas rubias pequeñas", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 13", image: "assets/img/catalogo/Frutos secos/Fruto-secos-Pasas-rubias-pequeñas-100g.png", alt: "Pasas rubias pequeñas" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Semillas de calabaza", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 15", image: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-calabaza-100g.png", alt: "Semillas de calabaza" },
  { slug: "semillas-girasol", category: "Frutos secos", title: "Semillas de girasol", subtext: "Frutos secos · Bolsa 100 g", price: "S/ 13", image: "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png", alt: "Semillas de girasol" },

  // Mixes para ti
  { slug: "quinua-real-blanca", category: "Mixes para ti", title: "Mixes saludables", subtext: "Mixes para ti", price: "S/ 32", image: "assets/img/catalogo/Mixes para ti/mixes-saludables.png", alt: "Mixes saludables" },
  { slug: "quinua-real-blanca", category: "Mixes para ti", title: "Mixes premium", subtext: "Mixes para ti", price: "S/ 36", image: "assets/img/catalogo/Mixes para ti/Mixes-premium.png", alt: "Mixes premium" },
  { slug: "quinua-real-blanca", category: "Mixes para ti", title: "Mixes energéticos", subtext: "Mixes para ti", price: "S/ 34", image: "assets/img/catalogo/Mixes para ti/Mixes-energéticos.png", alt: "Mixes energéticos" },
];

const catalogCategoryIds = {
  Cereales: "cereales",
  Deshidratados: "deshidratados",
  Especias: "especias",
  "Frutos secos": "frutos",
};

function getProductSize(product) {
  if (/1 kg/.test(product.subtext)) return "1kg";
  if (/500 g/.test(product.subtext)) return "500g";
  if (/100 g/.test(product.subtext)) return "100g";
  return null;
}

const catalogFilterState = {
  category: "Todos",
  sizes: [],
};

const sizeLabels = { "100g": "100 g", "500g": "500 g", "1kg": "1 kg" };

function matchesCatalogFilters(product) {
  const categoryMatch =
    catalogFilterState.category === "Todos" || product.category === catalogFilterState.category;
  const sizeMatch =
    catalogFilterState.sizes.length === 0 || catalogFilterState.sizes.includes(getProductSize(product));

  return categoryMatch && sizeMatch;
}

function pickRandomProducts(excludeSlug, count) {
  const pool = catalogProducts.filter((item) => item.slug !== excludeSlug);
  const shuffled = pool.slice();

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

function buildSingleImageGallery(src, title) {
  return [
    { src, alt: title },
    { src, alt: `${title} vista alternativa` },
    { src, alt: `${title} detalle` },
    { src, alt: `${title} uso` },
  ];
}

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
    gallery: buildSingleImageGallery(
      "assets/img/catalogo/Especias/Especias-Anís-estrella-100g.png",
      "Anís estrella"
    ),
    description:
      "Especia aromática de sabor intenso, ideal para infusiones, postres y mezclas especiadas.",
    usage: "Perfecto para infusiones, repostería y preparaciones aromáticas.",
    facts: [
      { label: "Ingredientes", value: "100% anís estrella" },
      { label: "Origen", value: "Perú" },
      { label: "Cocción", value: "Infusión 5 minutos" },
      { label: "Conservación", value: "Lugar fresco y seco" },
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
    gallery: buildSingleImageGallery(
      "assets/img/catalogo/Frutos secos/Fruto-secos-Semillas-de-girasol-100g.png",
      "Semillas de girasol"
    ),
    description:
      "Semillas naturales listas para snacks, desayunos y mezclas caseras.",
    usage: "Úsalas en ensaladas, panes, bowls o como snack directo.",
    facts: [
      { label: "Ingredientes", value: "100% semillas de girasol" },
      { label: "Origen", value: "Perú" },
      { label: "Cocción", value: "Listo para consumo" },
      { label: "Conservación", value: "Lugar fresco y seco" },
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
    gallery: buildSingleImageGallery(
      "assets/img/catalogo/Deshidratados/deshidratados-Coco-Rallado-Fino-100g.png",
      "Coco rallado fino"
    ),
    description:
      "Deshidratado fino para repostería, bowls y preparaciones dulces.",
    usage: "Ideal para pasteles, granolas y preparaciones de desayuno.",
    facts: [
      { label: "Ingredientes", value: "100% coco rallado" },
      { label: "Origen", value: "Perú" },
      { label: "Cocción", value: "Listo para consumo" },
      { label: "Conservación", value: "Lugar fresco y seco" },
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
    gallery: buildSingleImageGallery(
      "assets/img/catalogo/Frutos secos/Fruto-secos-Maní-tostado-al-natural-100g.png",
      "Maní tostado al natural"
    ),
    description:
      "Snack clásico, tostado sin añadidos, ideal para consumo directo o mixes.",
    usage: "Perfecto para meriendas, mezclas y consumo directo.",
    facts: [
      { label: "Ingredientes", value: "100% maní tostado" },
      { label: "Origen", value: "Perú" },
      { label: "Cocción", value: "Listo para consumo" },
      { label: "Conservación", value: "Lugar fresco y seco" },
    ],
  },
};

function bindCatalogProductCards() {
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
      if (catalogFilterState.sizes.length) {
        parts.push(catalogFilterState.sizes.map((size) => sizeLabels[size]).join(", "));
      }
      activeFiltersElement.textContent = parts.length
        ? `Filtros activos: ${parts.join(" · ")}`
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
      const checked = document.querySelectorAll('[data-size-filter] input[type="checkbox"]:checked');
      catalogFilterState.sizes = Array.from(checked).map((input) => input.value);
      renderCatalogPage();
    });
  }
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

  const related = pickRandomProducts(product.slug, 4).map(renderProductCard).join("");

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

  bindCatalogProductCards();
}

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

const orderData = {
  "SR-10001": { orderNumber: "SR-10001", placedDate: "4 de julio de 2026", stage: "confirmado", ...demoOrderContent },
  "SR-10002": { orderNumber: "SR-10002", placedDate: "3 de julio de 2026", stage: "preparando", ...demoOrderContent },
  "SR-48213": { orderNumber: "SR-48213", placedDate: "4 de julio de 2026", stage: "enviado", ...demoOrderContent },
  "SR-10004": { orderNumber: "SR-10004", placedDate: "1 de julio de 2026", stage: "entregado", ...demoOrderContent },
};

const helpActionCard = {
  type: "help",
  heading: "¿Necesitas ayuda?",
  text: "Escríbenos por WhatsApp si tienes dudas sobre tu envío.",
  buttonText: "Escribir por WhatsApp",
  buttonHref: "https://wa.me/",
};

const orderStageData = {
  confirmado: {
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

  const stepperMarkup = stage.steps
    .map(
      (step, index) => `
        <div class="order-stepper__step order-stepper__step--${step.state}">
          <div class="order-stepper__marker">${step.state === "completed" ? "✓" : index + 1}</div>
          <div class="order-stepper__label">${step.label}</div>
          <div class="order-stepper__timestamp">${step.timestamp}</div>
        </div>
      `
    )
    .join("");

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

  const actionButtonMarkup =
    stage.actionCard.type === "review"
      ? `<button class="button button--primary" type="button">${stage.actionCard.buttonText}</button>`
      : `<a class="button button--primary" href="${stage.actionCard.buttonHref}" target="_blank" rel="noreferrer">${stage.actionCard.buttonText}</a>`;

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
      <h1>${stage.heading}</h1>
      <p>Pedido #${order.orderNumber} &middot; realizado el ${order.placedDate}</p>
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

function bindTrackOrderForm() {
  const form = document.querySelector("[data-track-order-form]");

  if (!form) {
    return;
  }

  const errorMessage = form.querySelector("[data-track-order-error]");
  const fields = form.querySelectorAll("[data-track-order-field]");

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
renderCatalogPage();
bindCatalogFilters();
renderProductPage();
renderOrderStatusPage();
bindTrackOrderForm();
renderFooter();
