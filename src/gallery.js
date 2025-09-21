document.addEventListener("DOMContentLoaded", () => {
    // --- Hamburger Menu Logic ---
    // ... (Your standard hamburger menu JS goes here) ...

    // --- GSAP Draggable Gallery ---
    gsap.registerPlugin(Draggable);

    const track = document.querySelector(".gallery-track");

    if (track) {
        // Clone images for a seamless "infinite" loop effect
        const images = Array.from(track.children);
        images.forEach(image => {
            const clone = image.cloneNode(true);
            track.appendChild(clone);
        });

        // Use a proxy element for smooth dragging with inertia
        const proxy = document.createElement("div");
        const trackWidth = track.getBoundingClientRect().width;
        
        gsap.set(proxy, { x: 0 });

        Draggable.create(proxy, {
            type: "x",
            trigger: track,
            inertia: true,
            onDrag: updatePosition,
            onThrowUpdate: updatePosition,
            snap: {
                x: (endValue) => {
                    // Custom snapping logic if needed
                    return Math.round(endValue / 100) * 100;
                }
            }
        });
        
        function updatePosition() {
             // Wrap the movement for an infinite feel
            let x = gsap.getProperty(this.target, "x");
            let wrappedX = (x % (trackWidth / 2) + (trackWidth / 2)) % (trackWidth / 2);
            gsap.set(track, { x: wrappedX });
        }
        
        // Add a subtle auto-scroll animation
        gsap.to(track, {
            x: `-=${trackWidth / 2}`,
            ease: "none",
            duration: 40,
            repeat: -1,
        });
    }
});
