/**
 * Utilities for initiating gsap
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger);
	gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

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
	animateSpeed,
	animateScrub
) => {
	let customConfig = createCustomConfig(animateVal, animateDelay, animateSpeed);
	customConfig = editorCustomConfigModify(customConfig, target, animateScrub);

	if (enableAnimate) {
		gsap.fromTo(target, ...customConfig);
	}
};

const editorCustomConfigModify = (config, target, animateScrub) => {
	return [
		config[0],
		{
			...config[1],
			scrollTrigger: {
				id: target,
				trigger: target,
				scroller: SCROLLER,
				// markers: true,
				scrub: animateScrub
			}
		}
	];
};

export const restartAnimate = (
	target,
	animateVal,
	animateDelay,
	animateSpeed,
	animateScrub,
	enableAnimate
) => {
	let customConfig = createCustomConfig(
		animateVal,
		animateDelay,
		animateSpeed,
		animateScrub
	);
	ScrollTrigger.getAll().forEach(st => {
		if (st.vars.id === target) {
			st.kill();
		}
	});
	gsap.set(target, { clearProps: true });

	if (!enableAnimate) {
		return;
	}

	if (animateScrub) {
		customConfig = editorCustomConfigModify(customConfig, target, animateScrub);
	}
	gsap.fromTo(target, ...customConfig);
};

/**
 * Animate Configurations
 */

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
