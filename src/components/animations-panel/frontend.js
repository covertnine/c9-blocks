/**
 * Animations Frontend
 */

document.addEventListener("DOMContentLoaded", function() {
    // simple timeline setups
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    // register plugin
    gsap.registerPlugin(ScrollTrigger);

    // console.log("test");
    
    // target spins
    gsap.to("[data-animate='spin'", {
        scrollTrigger: "[data-animate='spin'",
        rotation: 360,
        duration: 3
    });

    // target move x
    gsap.to("[data-animate='moveX'", {
        scrollTrigger: "[data-animate='moveX'",
        x: 100,
        duration: 3
    });

    // target move y
    gsap.to("[data-animate='moveY'", {
        scrollTrigger: "[data-animate='moveY'",
        y: 100,
        duration: 3
    });
});
