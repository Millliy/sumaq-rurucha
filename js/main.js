const navigationLinks = [
  { href: "index.html", label: '<img src="assets/icons/logo/logo.svg" alt="Sumaq Rurucha" class="nav-logo">' },
  { href: "catalogo.html", label: "Catálogo" },
  { href: "nosotros.html", label: "Conócenos" },
  { href: "contacto.html", label: "Contacto" },
  { href: "soy-distribuidor.html", label: "¿Eres distribuidor?" },
  {
    href: "buscador.html",
    label: '<img src="assets/icons/busqueda.svg" alt="" class="nav-icon">',
    ariaLabel: "Buscar",
  },
  {
    href: "carrito.html",
    label: '<img src="assets/icons/carrito.svg" alt="" class="nav-icon">',
    ariaLabel: "Carrito",
  },
];

function renderNavigation() {
  const navContainer = document.querySelector("[data-nav]");

  if (!navContainer) {
    return;
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const links = navigationLinks
    .map(({ href, label, ariaLabel }) => {
      const isActive = href === currentPage;
      const ariaCurrent = isActive ? ' aria-current="page"' : "";
      const activeClass = isActive ? " is-active" : "";
      const labelAttribute = ariaLabel ? ` aria-label="${ariaLabel}"` : "";

      return `<a class="nav__link${activeClass}" href="${href}"${ariaCurrent}${labelAttribute}>${label}</a>`;
    })
    .join("");

  navContainer.innerHTML = `<nav class="nav">${links}</nav>`;
}

// Para agregar un enlace real, solo cambia el "href" (ej: "#" -> "cereales.html").
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
      { href: "soy-distribuidor.html", label: "Exportación / Mayoristas" },
      { href: "#", label: "Recetas" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { href: "#", label: "Políticas de envío y devolución" },
      { href: "#", label: "Términos y condiciones" },
      { href: "#", label: "Preguntas frecuentes" },
    ],
  },
];

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
          <a href="index.html" class="footer-logo">Sumaq<br>Rurucha</a>
          <p>Alimentos naturales del altiplano peruano. Directo de la chacra, sin intermediarios.</p>

          <div class="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>

        ${columnsHtml}
      </div>

      <p class="footer-copy">© 2026 Sumaq Rurucha. Hecho en Perú.</p>
    </footer>
  `;
}

renderNavigation();
renderFooter();
