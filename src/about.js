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
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
    
      gsap.registerPlugin(ScrollTrigger);
      const track = document.querySelector(".values-track");
  
      if (track) {
          const setupMarquee = () => {
              if (window.innerWidth <= 768) return; // Don't run on mobile
              const trackWidth = track.scrollWidth / 2;
              gsap.to(track, {
                  x: -trackWidth,
                  ease: "none",
                  scrollTrigger: {
                      trigger: ".values-scroller",
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 1.5,
                  },
              });
          };
  
          setupMarquee();
          window.addEventListener("resize", () => {
              ScrollTrigger.getAll().forEach(t => t.kill());
              gsap.set(track, { x: 0 });
              setupMarquee();
          });
      }
});
