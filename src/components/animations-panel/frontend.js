/**
 * Animations Frontend
 */

import { createCustomConfig, userCustomConfigModify } from "./utils";

document.addEventListener("DOMContentLoaded", function() {
	// simple timeline setups
	const gsap = window.gsap;
	const ScrollTrigger = window.ScrollTrigger;
	if (gsap && ScrollTrigger) {
		// register plugin
		gsap.registerPlugin(ScrollTrigger);

		const animateTargets = document.querySelectorAll("[data-c9-animate]");
		// console.log(animateTargets);

		//setup gsap
		for (let element of animateTargets) {
			const animateVal = element.dataset.c9Animate;
			const animateDelay = element.dataset.c9AnimateDelay;
			const animateSpeed = element.dataset.c9AnimateSpeed;
			const animateStart = element.dataset.c9AnimateStart;
			const animateEnd = element.dataset.c9AnimateEnd;
			const animateCustom = JSON.parse(element.dataset.c9AnimateCustom);

			let animateScrub = element.dataset.c9AnimateScrub;
			const keyframeConfig = animateScrub
				? { start: animateStart, end: animateEnd }
				: null;

			// console.log(animateVal, animateDelay, animateSpeed);
			let customConfig = createCustomConfig(
				animateVal,
				animateDelay,
				animateSpeed
			);
			// string to boolean
			animateScrub = "true" === animateScrub;

			if (animateScrub) {
				customConfig = userCustomConfigModify(customConfig, animateCustom);
			}

			gsap.fromTo(element, customConfig[0], {
				...customConfig[1],
				scrollTrigger: {
					trigger: element,
					scrub: animateScrub,
					...keyframeConfig
				}
			});
		}
	}
});
