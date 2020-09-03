/**
 * Animations Frontend
 */

import { createCustomConfig } from "./utils";

document.addEventListener("DOMContentLoaded", function() {
	// simple timeline setups
	const gsap = window.gsap;
	const ScrollTrigger = window.ScrollTrigger;
	// register plugin
	gsap.registerPlugin(ScrollTrigger);

	const animateTargets = document.querySelectorAll("[data-c9-animate]");
	console.log(animateTargets);

	//setup gsap
	for (let element of animateTargets) {
		const animateVal = element.dataset.c9Animate;
		const animateDelay = element.dataset.c9AnimateDelay;
		const animateSpeed = element.dataset.c9AnimateSpeed;
		let animateScrub = element.dataset.c9AnimateScrub;
		// console.log(animateVal, animateDelay, animateSpeed);
		const customConfig = createCustomConfig(
			animateVal,
			animateDelay,
			animateSpeed
		);
		// string to boolean
		animateScrub = "true" === animateScrub;
		gsap.fromTo(element, customConfig[0], {
			...customConfig[1],
			scrollTrigger: {
				trigger: element,
				scrub: animateScrub
			}
		});
	}
});
