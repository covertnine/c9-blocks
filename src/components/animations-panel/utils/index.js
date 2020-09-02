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
		value: "fade",
		label: "Fade"
	},
	{
		value: "fadeUp",
		label: "Fade Up"
	},
	{
		value: "fadeDown",
		label: "Fade Down"
	},
	{
		value: "fadeLeft",
		label: "Fade Left"
	},
	{
		value: "fadeRight",
		label: "Fade Right"
	}
];

export const animateConfigs = {
	fade: [
		{
			opacity: 0
		},
		{ opacity: 1, duration: DEFAULT_SPEED }
	],
	fadeUp: [
		{
			opacity: 0,
			y: 100
		},
		{ opacity: 1, duration: DEFAULT_SPEED, y: 0 }
	],
	fadeDown: [
		{
			opacity: 0,
			y: -100
		},
		{ opacity: 1, duration: DEFAULT_SPEED, y: 0 }
	],
	fadeLeft: [
		{
			opacity: 0,
			x: -100
		},
		{ opacity: 1, duration: DEFAULT_SPEED, x: 0 }
	],
	fadeRight: [
		{
			opacity: 0,
			x: 100
		},
		{ opacity: 1, duration: DEFAULT_SPEED, x: 0 }
	]
};

export const createCustomConfig = (animateVal, animateDelay, animateSpeed) => {
	return [
		animateConfigs[animateVal][0],
		{
			...animateConfigs[animateVal][1],
			delay: animateDelay / 1000,
			duration: animateSpeed / 1000
		}
	];
};

export const initAnimate = (
	target,
	enableAnimate,
	animateVal,
	animateDelay,
	animateSpeed
) => {
	const customConfig = createCustomConfig(
		animateVal,
		animateDelay,
		animateSpeed
	);

	if (enableAnimate) {
		gsap.fromTo(target, customConfig[0], {
			...customConfig[1],
			scrollTrigger: {
				trigger: target,
				scroller: SCROLLER,
				markers: true
			}
		});
	}
};

export const restartAnimate = (
	target,
	animateVal,
	animateDelay,
	animateSpeed
) => {
	const customConfig = createCustomConfig(
		animateVal,
		animateDelay,
		animateSpeed
	);
	// console.log("repeat", customConfig, target, animateDelay, animateSpeed);
	gsap.fromTo(target, ...customConfig);
};
