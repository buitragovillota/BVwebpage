import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const navbarAnimations = () => {
  const navLogo = document.querySelector("#navbar-logo");
  const navbar = document.querySelector("#navbar");

  let mm = gsap.matchMedia();

  const scrollTriggerConfig = {
    trigger: document.body,
    start: "50px top",
    end: "+=1",
    toggleActions: "play none none reverse",
    markers: false,
  };

  // Mobile: shrink logo + collapse navbar padding together
  mm.add("(max-width: 767px)", () => {
    gsap.fromTo(
      navLogo,
      { height: 64 },
      {
        height: 48,
        ease: "power1.inOut",
        duration: 0.4,
        scrollTrigger: scrollTriggerConfig,
      },
    );
    gsap.fromTo(
      navbar,
      { paddingTop: 8, paddingBottom: 8 },
      {
        paddingTop: 4,
        paddingBottom: 4,
        ease: "power1.inOut",
        duration: 0.4,
        scrollTrigger: scrollTriggerConfig,
      },
    );
  });

  // Desktop (md+): shrink logo + collapse navbar padding together
  mm.add("(min-width: 768px)", () => {
    gsap.fromTo(
      navLogo,
      { height: 96 },
      {
        height: 56,
        ease: "power1.inOut",
        duration: 0.4,
        scrollTrigger: scrollTriggerConfig,
      },
    );
    gsap.fromTo(
      navbar,
      { paddingTop: 8, paddingBottom: 8 },
      {
        paddingTop: 4,
        paddingBottom: 4,
        ease: "power1.inOut",
        duration: 0.4,
        scrollTrigger: scrollTriggerConfig,
      },
    );
  });

  // dropdown menu animation
  const details = document.querySelector("#services-dropdown");

  if (details) {
    details.addEventListener("mouseenter", () => (details.open = true));
    details.addEventListener("mouseleave", () => {
      details.open = false;
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const menuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");

  function openMobileMenu() {
    menuToggle?.setAttribute("aria-expanded", "true");
    mobileMenu?.classList.remove(
      "pointer-events-none",
      "-translate-y-full",
      "opacity-0",
    );
    mobileMenu?.classList.add(
      "pointer-events-auto",
      "translate-y-0",
      "opacity-100",
    );
    menuIconOpen?.classList.add("hidden");
    menuIconClose?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileMenu?.classList.add(
      "pointer-events-none",
      "-translate-y-full",
      "opacity-0",
    );
    mobileMenu?.classList.remove(
      "pointer-events-auto",
      "translate-y-0",
      "opacity-100",
    );
    menuIconOpen?.classList.remove("hidden");
    menuIconClose?.classList.add("hidden");
    document.body.style.overflow = "";
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  menuClose?.addEventListener("click", closeMobileMenu);

  // Close menu when clicking a link
  const menuLinks = document.querySelectorAll("[data-menu-link]");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Services accordion toggle
  const servicesToggle = document.getElementById("mobile-services-toggle");
  const servicesSubmenu = document.getElementById("mobile-services-submenu");
  const servicesChevron = document.getElementById("mobile-services-chevron");

  servicesToggle?.addEventListener("click", () => {
    const isExpanded = servicesToggle.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      servicesToggle.setAttribute("aria-expanded", "false");
      servicesSubmenu?.classList.remove("max-h-96", "opacity-100");
      servicesSubmenu?.classList.add("max-h-0", "opacity-0");
      servicesChevron?.classList.remove("rotate-180");
    } else {
      servicesToggle.setAttribute("aria-expanded", "true");
      servicesSubmenu?.classList.remove("max-h-0", "opacity-0");
      servicesSubmenu?.classList.add("max-h-96", "opacity-100");
      servicesChevron?.classList.add("rotate-180");
    }
  });

  // Close desktop dropdown when clicking outside
  const servicesDropdown = document.getElementById("services-dropdown");
  document.addEventListener("click", (e) => {
    if (servicesDropdown && !servicesDropdown.contains(e.target)) {
      servicesDropdown.removeAttribute("open");
    }
  });
};
