import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Register the Draggable plugin with the GSAP core
gsap.registerPlugin(Draggable);

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".gallery-track");

  if (track) {
    // Clone images for a seamless "infinite" loop effect
    const images = Array.from(track.children);
    images.forEach((image) => {
      const clone = image.cloneNode(true);
      track.appendChild(clone);
    });

    const trackWidth = track.getBoundingClientRect().width;
    const proxy = document.createElement("div"); // Proxy element for smoother dragging

    gsap.set(proxy, { x: 0 });

    Draggable.create(proxy, {
      type: "x",
      trigger: track,
      inertia: true,
      onDrag: updatePosition,
      onThrowUpdate: updatePosition,
      // The snap logic below is optional but can help create a cleaner feel
      snap: {
        x: (endValue) => Math.round(endValue / 100) * 100,
      },
    });

    // This function updates the track's position based on the proxy's drag
    function updatePosition() {
      // 'this' refers to the Draggable instance
      let x = gsap.getProperty(this.target, "x");
      // Modulo operator creates the wrapping/infinite effect
      let wrappedX = ((x % (trackWidth / 2)) + (trackWidth / 2)) % (trackWidth / 2);
      gsap.set(track, { x: wrappedX });
    }

    // Add a subtle auto-scroll animation
    const autoScroll = gsap.to(track, {
      x: `-=${trackWidth / 2}`,
      ease: "none",
      duration: 40,
      repeat: -1,
    });
    
    // Optional: Pause auto-scroll on hover for better UX
    track.addEventListener('mouseenter', () => autoScroll.pause());
    track.addEventListener('mouseleave', () => autoScroll.resume());
  }
});
