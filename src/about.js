import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// You MUST register the plugin with the GSAP core
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // --- Hamburger Menu Logic ---
    const openMenuBtn = document.querySelector(".hamburger-menu");
    const closeMenuBtn = document.querySelector(".close-menu-button");
    const navLinks = document.querySelector(".nav-link-container");

    if (openMenuBtn && closeMenuBtn && navLinks) {
        const openMenu = () => {
            navLinks.classList.add("active");
            document.body.classList.add("menu-open");
        };
        const closeMenu = () => {
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");
        };

        openMenuBtn.addEventListener("click", openMenu);
        closeMenuBtn.addEventListener("click", closeMenu);

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    // --- GSAP Scroll-based Marquee for Values ---
    const track = document.querySelector(".values-track");

    if (track) {
        const setupMarquee = () => {
            // Don't run the animation on mobile where the scroller is hidden
            if (window.innerWidth <= 768) return; 
            
            const trackWidth = track.scrollWidth / 2;
            gsap.to(track, {
                x: -trackWidth,
                ease: "none",
                // The scrollTrigger object is now correctly recognized
                scrollTrigger: {
                    trigger: ".values-scroller",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });
        };

        setupMarquee();

        // Re-create the animation on resize to handle responsive changes
        window.addEventListener("resize", () => {
            // Kill existing ScrollTriggers to prevent conflicts
            ScrollTrigger.getAll().forEach((t) => t.kill());
            // Reset the track's position before recalculating
            gsap.set(track, { x: 0 });
            setupMarquee();
        });
    }
});
