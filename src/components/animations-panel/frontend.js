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
    const spinTargets = document.querySelectorAll("[data-animate='spin']");
    const moveXTargets = document.querySelectorAll("[data-animate='moveX']");
    const moveYTargets = document.querySelectorAll("[data-animate='moveY']");

    // target spins
    for (let element of spinTargets) {
        gsap.to(element, {
            scrollTrigger: element,
            rotation: 360,
            duration: 3
        });
    }

    // target move x
    for (let element of moveXTargets) {
        gsap.to(element, {
            scrollTrigger: element,
            rotation: 360,
            duration: 3
        });
    }

    // target move y
    for (let element of moveYTargets) {
        gsap.to(element, {
            scrollTrigger: element,
            rotation: 360,
            duration: 3
        });
    }
});
