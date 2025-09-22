import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  // --- Hamburger Menu Logic ---
  const openMenuBtn = document.querySelector(".hamburger-menu");
  const closeMenuBtn = document.querySelector(".close-menu-button");
  const navLinks = document.querySelector(".nav-link-container");

  if (openMenuBtn && closeMenuBtn && navLinks) {
    // Function to open the menu
    const openMenu = () => {
      navLinks.classList.add("active");
      document.body.classList.add("menu-open");
    };

    // Function to close the menu
    const closeMenu = () => {
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    };

    // Event listeners
    openMenuBtn.addEventListener("click", openMenu);
    closeMenuBtn.addEventListener("click", closeMenu);

    // Optional: Close menu when a link is clicked (for single-page apps)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  // --- GSAP Auto-Scroller for Team Section ---
  const track = document.querySelector(".instructor-track");

  if (track) {
    const images = Array.from(track.children);
    // Clone images for seamless loop
    images.forEach((image) => {
      const clone = image.cloneNode(true);
      track.appendChild(clone);
    });

    const singleSetWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: -singleSetWidth,
      duration: 40, // Slower speed
      ease: "none",
      repeat: -1, // Infinite loop
    });
  }
});
