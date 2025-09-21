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

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
