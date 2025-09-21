document.addEventListener("DOMContentLoaded", () => {
    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-link-container");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = hamburger.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }

    // --- GSAP Animations for Team Section ---
    gsap.registerPlugin(ScrollTrigger);

    // Animate instructor cards on scroll
    gsap.to(".instructor-card", {
        opacity: 1,
        y: 0, // Animate from translateY(30px) to 0
        duration: 0.6,
        stagger: 0.2, // Stagger the animation for each card
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".team-grid",
            start: "top 80%", // Start animation when the top of the grid is 80% from the top of the viewport
            toggleActions: "play none none none", // Play the animation once
        }
    });
});
