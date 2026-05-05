const body = document.body;
const preloader = document.getElementById("preloader");
const header = document.getElementById("site-header");
const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const yearTarget = document.getElementById("year");
const orderForm = document.getElementById("order-form");
const formNote = document.getElementById("form-note");
const productGrid = document.getElementById("product-grid");
const productModal = document.getElementById("product-modal");
const modalImage = document.getElementById("product-modal-image");
const modalBadges = document.getElementById("product-modal-badges");
const modalCategory = document.getElementById("product-modal-category");
const modalTitle = document.getElementById("product-modal-title");
const modalPrice = document.getElementById("product-modal-price");
const modalDescription = document.getElementById("product-modal-description");
const modalMeta = document.getElementById("product-modal-meta");
const modalOrder = document.getElementById("product-modal-order");

const whatsappNumber = String(body.dataset.whatsapp || "").replace(/\D/g, "");

const products = [
  {
    id: "royal-rose-dome",
    title: "Royal Rose Mix (100 copë)",
    category: "Koleksioni Premium",
    price: "25,000 L",
    // oldPrice: "39,500 L",
    image: "./assets/listings/100trendafilamix.png",
    position: "center center",
    badges: ["Hot", "Bestseller"],
    description:
      "Një kompozim monumental me 100 trëndafila mix premium për momente që duan impakt maksimal dhe elegancë teatrale.",
    details: [
      "Ideal për përvjetorë, propozime ose surpriza të mëdha.",
      "Dërgim brenda Tiranës ose marrje direkte në dyqan.",
      "Paketim premium dhe kartolinë sipas dëshirës.",
    ],
  },
  {
    id: "red-roses-classic",
    title: "100 Trëndafila Klasikë",
    category: "Trëndafila",
    price: "25,000 L",
    // oldPrice: "14,200 L",
    image: "./assets/listings/100trendafilatekuq.png",
    position: "center center",
    badges: ["Premium"],
    description:
      "Buqetë e pasur me 100 trëndafila të kuq, e ndërtuar për një siluetë klasike dhe romantike.",
    details: [
      "Kompozim i dendur me tonalitet të thellë të kuq.",
      "Perfekte për surpriza romantike dhe ditëlindje.",
      "Mund të personalizohet me kartolinë mesazhi.",
    ],
  },
  {
    id: "peony-blush-deluxe",
    title: "Peony Deluxe",
    category: "Peonies",
    price: "20,000 - 25,000 L",
    oldPrice: "",
    image: "./assets/listings/peonydeluxe.png",
    position: "center center",
    badges: ["Limited"],
    description:
      "Peoni me volum të butë dhe tonalitete të ndryshme për një rezultat shumë delikat, modern dhe editorial.",
    details: [
      "Vjen me paketim nude premium.",
      "Zgjedhje perfekte për evente të rafinuara.",
      "Disponueshmëria varet nga sezoni i lules.",
    ],
  },
  {
    id: "roselini-signature",
    title: "Roselini Signature",
    category: "Signature",
    price: "25,000 L",
    oldPrice: "",
    image: "./assets/listings/roselini.png",
    position: "center center",
    badges: ["Signature"],
    description:
      "Një buqetë e lehtë dhe romantike me roselini, e menduar për surpriza elegante dhe të ngrohta.",
    details: [
      "Stil i butë dhe shumë i fotografueshëm.",
      "E përshtatshme për urime, simpati dhe falënderime.",
      "Dërgesë e shpejtë brenda qytetit.",
    ],
  },
  {
    id: "spring-tulips",
    title: "Tulipanë Pranvere",
    category: "Fresh Daily",
    price: "5,200 L",
    oldPrice: "",
    image: "./assets/tulipana.png",
    position: "center center",
    badges: ["Fresh"],
    description:
      "Tulipanë të zgjedhur për një pamje të pastër, të ndritshme dhe plot jetë.",
    details: [
      "Kompozim i freskët me frymë pranverore.",
      "I bukur për porosi spontane dhe dhurata të lehta.",
      "Mund të merret edhe direkt në dyqan.",
    ],
  },
  {
    id: "romantic-mix",
    title: "Romantic Mix",
    category: "Kompozime",
    price: "7,900 L",
    oldPrice: "8,700 L",
    image: "./assets/pranverorenobg.png",
    position: "center center",
    badges: ["New", "Hot"],
    description:
      "Kompozim me lule të miksuara dhe ritëm të pasur ngjyrash për një prezencë të gjallë e luksoze.",
    details: [
      "Mix sezonal i kuruar nga floristët tanë.",
      "Silhuetë e plotë dhe vizual shumë i pasur.",
      "I përshtatshëm për evente dhe surpriza familjare.",
    ],
  },
  {
    id: "grande-basket-101",
    title: "Grande Basket 101",
    category: "Grand Gesture",
    price: "36,500 L",
    oldPrice: "",
    image: "./assets/grandebasket.png",
    position: "center center",
    badges: ["Bestseller"],
    description:
      "Versioni i zgjeruar i kompozimit ikonik me trëndafila të kuq për momente që duan të mbahen mend gjatë.",
    details: [
      "Dizajn shumë voluminoz dhe shumë i fortë vizualisht.",
      "Ideal për surpriza ceremoniale dhe raste speciale.",
      "Konfirmohet paraprakisht për disponueshmëri.",
    ],
  },
  {
    id: "peony-cloud",
    title: "Peony Cloud",
    category: "Peonies",
    price: "8,600 L",
    oldPrice: "",
    image: "./assets/peonies.jpg",
    position: "center center",
    badges: ["Soft"],
    description:
      "Peoni në tonalitete të buta për një buqetë shumë femërore, të lehtë dhe të rafinuar.",
    details: [
      "Perfekte për ditëlindje, baby shower dhe evente pastel.",
      "Paketim editorial dhe volum i butë.",
      "Mund të kombinohet me kartolinë urimi.",
    ],
  },
  {
    id: "tulips-soft-nude",
    title: "Tulipanë Soft Nude",
    category: "Tulipanë",
    price: "4,800 L",
    oldPrice: "",
    image: "./assets/tulipsnude.png",
    position: "center center",
    badges: ["Everyday"],
    description:
      "Tulipanë me prezencë të thjeshtë dhe shumë chic për porosi të pastra, elegante dhe minimaliste.",
    details: [
      "Kompozim i lehtë për çdo ditë.",
      "I përshtatshëm si dhuratë e shpejtë por me stil.",
      "Dërgesë në Tiranë ose pick-up në dyqan.",
    ],
  },
  {
    id: "velvet-rose-box",
    title: "Velvet Rose Box",
    category: "Luxury Edit",
    price: "13,900 L",
    oldPrice: "15,400 L",
    image: "./assets/velvetrose.png",
    position: "center center",
    badges: ["Premium", "Hot"],
    description:
      "Trëndafila të kuq me prezencë luksoze, të menduar për një deklaratë të pastër elegance.",
    details: [
      "Pamje e pasur me tonalitet velvet red.",
      "Zgjedhje shumë e fortë për përvjetorë dhe surpriza romance.",
      "Finalizohet shpejt në WhatsApp me konfirmim të menjëhershëm.",
    ],
  },
];

let revealObserver = null;
let activeProductId = null;

const setLoaded = () => {
  window.setTimeout(() => {
    body.classList.add("is-loaded");
  }, 1700);
};

const syncHeader = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-solid", window.scrollY > 56);
};

const closeMenu = () => {
  if (!navToggle || !mobileMenu) {
    return;
  }

  body.classList.remove("menu-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("is-open");
};

const buildWhatsAppUrl = (lines) => {
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${whatsappNumber}?text=${text}`;
};

const getProductById = (productId) => products.find((product) => product.id === productId);

const getProductImageUrl = (product) => {
  if (!product) {
    return "";
  }

  const isWebContext =
    window.location.protocol === "http:" || window.location.protocol === "https:";

  if (!isWebContext) {
    return "";
  }

  return new URL(product.image, window.location.href).href;
};

const buildProductWhatsAppUrl = (product) => {
  const lines = [
    "Përshëndetje Bota e Luleve!",
    "",
    "Dua të porosis këtë produkt:",
    `- Produkti: ${product.title}`,
    `- Kategoria: ${product.category}`,
    `- Çmimi: ${product.price}${product.oldPrice ? ` (më parë ${product.oldPrice})` : ""}`,
    "- Shërbimi: Dërgim në Tiranë ose marrje në dyqan",
  ];

  const imageUrl = getProductImageUrl(product);
  if (imageUrl) {
    lines.push(`- Foto reference: ${imageUrl}`);
  }

  lines.push("", "Ju lutem më konfirmoni disponueshmërinë dhe hapat e porosisë.");

  return buildWhatsAppUrl(lines);
};

const openWhatsAppForProduct = (productId) => {
  const product = getProductById(productId);
  if (!product) {
    return;
  }

  window.open(buildProductWhatsAppUrl(product), "_blank", "noopener,noreferrer");
};

const observeReveals = (scope = document) => {
  const elements = scope.querySelectorAll(".reveal");

  if (!elements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );
  }

  elements.forEach((element) => revealObserver.observe(element));
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderProductCards = () => {
  if (!productGrid) {
    return;
  }

  productGrid.innerHTML = products
    .map((product) => {
      const oldPriceMarkup = product.oldPrice ? `<del>${escapeHtml(product.oldPrice)}</del>` : "";
      const badgesMarkup = product.badges
        .map((badge, index) => {
          const badgeClass = index === 0 ? "product-card__badge" : "product-card__badge product-card__badge--soft";
          return `<span class="${badgeClass}">${escapeHtml(badge)}</span>`;
        })
        .join("");

      return `
        <article class="product-card reveal" data-product-id="${escapeHtml(product.id)}">
          <div class="product-card__media" style="--product-position:${escapeHtml(product.position || "center center")};">
            <div class="product-card__badges">${badgesMarkup}</div>
            <button class="product-card__preview" type="button" data-product-preview="${escapeHtml(product.id)}" aria-label="Shiko ${escapeHtml(product.title)}">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.5 12s3.4-5.5 9.5-5.5S21.5 12 21.5 12s-3.4 5.5-9.5 5.5S2.5 12 2.5 12Z" />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
            </button>
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}" loading="lazy" />
          </div>

          <div class="product-card__content">
            <span class="product-card__category">${escapeHtml(product.category)}</span>
            <h3 class="product-card__title">${escapeHtml(product.title)}</h3>
            <div class="product-card__price">
              <strong>${escapeHtml(product.price)}</strong>
              ${oldPriceMarkup}
            </div>
            <div class="product-card__actions">
              <button class="product-card__button detailsbtn" type="button" data-product-details="${escapeHtml(product.id)}">Detaje</button>
              <button class="product-card__button product-card__button--primary" type="button" data-product-order="${escapeHtml(product.id)}">Porosit tani</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  observeReveals(productGrid);
};

const openProductModal = (productId) => {
  const product = getProductById(productId);
  if (!product || !productModal) {
    return;
  }

  activeProductId = product.id;
  body.classList.add("modal-open");
  productModal.hidden = false;
  productModal.setAttribute("aria-hidden", "false");

  if (modalImage) {
    modalImage.src = product.image;
    modalImage.alt = product.title;
  }

  if (modalBadges) {
    modalBadges.innerHTML = product.badges
      .map((badge, index) => {
        const badgeClass = index === 0 ? "product-card__badge" : "product-card__badge product-card__badge--soft";
        return `<span class="${badgeClass}">${escapeHtml(badge)}</span>`;
      })
      .join("");
  }

  if (modalCategory) {
    modalCategory.textContent = product.category;
  }

  if (modalTitle) {
    modalTitle.textContent = product.title;
  }

  if (modalPrice) {
    modalPrice.innerHTML = `${escapeHtml(product.price)}${
      product.oldPrice ? ` <del>${escapeHtml(product.oldPrice)}</del>` : ""
    }`;
  }

  if (modalDescription) {
    modalDescription.textContent = product.description;
  }

  if (modalMeta) {
    modalMeta.innerHTML = product.details
      .map((detail) => `<li>${escapeHtml(detail)}</li>`)
      .join("");
  }

  if (modalOrder) {
    modalOrder.href = buildProductWhatsAppUrl(product);
  }
};

const closeProductModal = () => {
  if (!productModal) {
    return;
  }

  activeProductId = null;
  body.classList.remove("modal-open");
  productModal.hidden = true;
  productModal.setAttribute("aria-hidden", "true");
};

if (document.readyState === "complete") {
  setLoaded();
} else {
  window.addEventListener("load", setLoaded, { once: true });
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.classList.toggle("is-open", isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (productModal && !productModal.hidden) {
    closeProductModal();
    return;
  }

  closeMenu();
});

observeReveals(document);

renderProductCards();

if (productGrid) {
  productGrid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const orderButton = target.closest("[data-product-order]");
    if (orderButton instanceof HTMLElement) {
      openWhatsAppForProduct(orderButton.dataset.productOrder || "");
      return;
    }

    const detailsButton = target.closest("[data-product-details]");
    if (detailsButton instanceof HTMLElement) {
      openProductModal(detailsButton.dataset.productDetails || "");
      return;
    }

    const previewButton = target.closest("[data-product-preview]");
    if (previewButton instanceof HTMLElement) {
      openProductModal(previewButton.dataset.productPreview || "");
      return;
    }

    const card = target.closest("[data-product-id]");
    if (card instanceof HTMLElement) {
      openProductModal(card.dataset.productId || "");
    }
  });
}

if (productModal) {
  productModal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.closest("[data-modal-close]")) {
      closeProductModal();
    }
  });
}

if (orderForm) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(orderForm);
    const fullName = String(formData.get("full_name") || "").trim();
    const whatsappNumberField = String(formData.get("whatsapp_number") || "").trim();
    const details = String(formData.get("details") || "").trim();

    const lines = [
      "Përshëndetje Bota e Luleve!",
      "",
      "Dua të bëj një porosi me këto detaje:",
      `- Emri i plotë: ${fullName}`,
      `- Numri i WhatsApp-it: ${whatsappNumberField}`,
      `- Përshkrimi i porosisë / eventit: ${details}`,
    ];

    if (formNote) {
      formNote.textContent = "Po ju dërgojmë te WhatsApp me porosinë tuaj.";
    }

    window.open(buildWhatsAppUrl(lines), "_blank", "noopener,noreferrer");
  });
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}
