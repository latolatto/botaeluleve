const body = document.body;
const preloader = document.getElementById("preloader");
const header = document.getElementById("site-header");
const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const revealElements = document.querySelectorAll(".reveal");
const yearTarget = document.getElementById("year");
const orderForm = document.getElementById("order-form");
const formNote = document.getElementById("form-note");
const heroCanvas = document.getElementById("hero-canvas");

const setLoaded = () => {
  window.setTimeout(() => {
    body.classList.add("is-loaded");
  }, 1700);
};

if (document.readyState === "complete") {
  setLoaded();
} else {
  window.addEventListener("load", setLoaded, { once: true });
}

const syncHeader = () => {
  header.classList.toggle("is-solid", window.scrollY > 56);
};

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
    link.addEventListener("click", () => {
      body.classList.remove("menu-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("is-open");
    });
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle && mobileMenu) {
    body.classList.remove("menu-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

if (orderForm) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(orderForm);
    const fullName = String(formData.get("full_name") || "").trim();
    const whatsappNumber = String(formData.get("whatsapp_number") || "").trim();
    const details = String(formData.get("details") || "").trim();

    const lines = [
      "Përshëndetje Bota e Luleve!",
      "",
      "Dua të bëj një porosi me këto detaje:",
      `- Emri i plotë: ${fullName}`,
      `- Numri i WhatsApp-it: ${whatsappNumber}`,
      `- Përshkrimi i porosisë / eventit: ${details}`,
    ];

    const number = String(body.dataset.whatsapp || "").replace(/\D/g, "");
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${number}?text=${text}`;

    if (formNote) {
      formNote.textContent = "Po ju dërgojmë te WhatsApp me porosinë tuaj.";
    }

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

if (heroCanvas) {
  const context = heroCanvas.getContext("2d");

  const resizeCanvas = () => {
    heroCanvas.width = window.innerWidth;
    heroCanvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const colors = [
    "rgba(167, 76, 99, ",
    "rgba(193, 161, 106, ",
    "rgba(255, 255, 255, ",
    "rgba(216, 182, 191, ",
  ];

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial) {
      this.x = Math.random() * heroCanvas.width;
      this.y = initial ? Math.random() * heroCanvas.height : -10;
      this.radius = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 0.45;
      this.speedY = Math.random() * 0.65 + 0.22;
      this.alpha = Math.random() * 0.42 + 0.15;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotation = Math.random() * Math.PI;
      this.rotationSpeed = (Math.random() - 0.5) * 0.018;
    }

    draw() {
      context.save();
      context.translate(this.x, this.y);
      context.rotate(this.rotation);
      context.globalAlpha = this.alpha;
      context.fillStyle = `${this.color}1)`;
      context.beginPath();
      context.ellipse(0, 0, this.radius, this.radius * 1.7, 0, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;

      if (this.y > heroCanvas.height + 12) {
        this.reset(false);
      }
    }
  }

  const petals = Array.from({ length: 64 }, () => new Petal());

  const animatePetals = () => {
    context.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    petals.forEach((petal) => {
      petal.update();
      petal.draw();
    });
    window.requestAnimationFrame(animatePetals);
  };

  animatePetals();
}
