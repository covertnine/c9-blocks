/**
 * Utilities for initiating gsap
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger);
	gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const DEFAULT_SPEED = 2;
const SCROLLER = ".interface-interface-skeleton__content";

export const animateOptions = [
	{ value: null, label: "Select animation", disabled: true },
	{
		value: "spin",
		label: "spinning"
	},
	{
		value: "moveX",
		label: "moving x"
	},
	{
		value: "moveY",
		label: "moving y"
	}
];

export const animateConfigs = {
	spin: {
		rotation: 360,
		duration: DEFAULT_SPEED
	},
	moveX: {
		x: 100,
		duration: DEFAULT_SPEED
	},
	moveY: {
		y: 100,
		duration: DEFAULT_SPEED
	}
};

export const initTimeline = (
	target,
	enableAnimate,
	animateVal,
	animateDelay,
	animateSpeed
) => {
    // console.log(target);

	const tl = gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: target,
			scroller: SCROLLER,
			markers: true
		}
	});

	if (enableAnimate) {
		tl.to(target, {
			...animateConfigs[animateVal],
			delay: animateDelay / 1000,
			duration: animateSpeed / 1000
		});
	} else {
		tl.to(target, {
			paused: true,
			...animateConfigs[animateVal],
			delay: animateDelay / 1000,
			duration: animateSpeed / 1000
		});
    }
    
    return tl;
};
