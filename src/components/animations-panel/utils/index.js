/**
 * Utilities for initiating gsap
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import isUndefined from "lodash/isUndefined";
import pickBy from "lodash/pickBy";

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

export const initAnimate = ({
	target,
	enableAnimate,
	animateVal,
	animateDelay,
	animateSpeed,
	animateScrub,
	animateStart,
	animateEnd,
	animateCustom
}) => {
	let customConfig = createCustomConfig(animateVal, animateDelay, animateSpeed);
	customConfig = editorCustomConfigModify(
		customConfig,
		target,
		animateScrub,
		false,
		animateStart,
		animateEnd
	);

	if (animateScrub) {
		customConfig = userEditorCustomConfigModify(customConfig, animateCustom);
	}

	if (enableAnimate) {
		gsap.fromTo(target, ...customConfig);
	}
};

const editorCustomConfigModify = (
	config,
	target,
	animateScrub,
	useMarkers,
	animateStart,
	animateEnd
) => {
	const triggerPlacement = pickBy(
		{
			start: animateStart,
			end: animateEnd
		},
		value => !isUndefined(value)
	);

	return [
		config[0],
		{
			...config[1],
			scrollTrigger: {
				id: target,
				trigger: target,
				scroller: SCROLLER,
				markers: useMarkers,
				scrub: animateScrub,
				...triggerPlacement
			}
		}
	];
};

const userEditorCustomConfigModify = (customConfig, animateCustom) => {
	return [
		{
			...customConfig[0],
			...animateCustom.before
		},
		{
			...customConfig[1],
			...animateCustom.after
		}
	];
};

export const restartAnimate = ({
	target,
	animateVal,
	animateDelay,
	animateSpeed,
	animateScrub,
	enableAnimate,
	useMarkers = false,
	animateStart,
	animateEnd,
	animateCustom
}) => {
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
		customConfig = editorCustomConfigModify(
			customConfig,
			target,
			animateScrub,
			useMarkers,
			animateStart,
			animateEnd
		);
		customConfig = userEditorCustomConfigModify(customConfig, animateCustom);
	}

	gsap.fromTo(target, ...customConfig);
};

export const initDataAttributes = ({
	animateVal,
	animateDelay,
	animateSpeed,
	animateScrub,
	animateStart,
	animateEnd
}) => {
	const config = pickBy(
		{
			"data-c9-animate": animateVal,
			"data-c9-animate-delay": animateDelay,
			"data-c9-animate-speed": animateSpeed,
			"data-c9-animate-scrub": animateScrub,
			"data-c9-animate-start": animateStart,
			"data-c9-animate-end": animateEnd
		},
		value => !isUndefined(value)
	);

	return config;
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
	},
	{
		value: "slideUp",
		label: "Slide Up"
	},
	{
		value: "slideDown",
		label: "Slide Down"
	},
	{
		value: "slideLeft",
		label: "Slide Left"
	},
	{
		value: "slideRight",
		label: "Slide Right"
	}
];

export const animateSettings = {
	fade: {
		before: [
			{
				name: "Starting Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 0
			}
		],
		after: [
			{
				name: "Ending Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 100
			}
		]
	},
	fadeUp: {
		before: [
			{
				name: "Starting Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 0
			},
			{
				name: "Starting Position",
				prop: "y",
				minValue: 0,
				maxValue: 500,
				defaultValue: 100
			}
		],
		after: [
			{
				name: "Ending Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 100
			},
			{
				name: "Ending Position",
				prop: "y",
				minValue: -500,
				maxValue: 0,
				defaultValue: 0
			}
		]
	},
	fadeDown: {
		before: [
			{
				name: "Starting Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 0
			},
			{
				name: "Starting Position",
				prop: "y",
				minValue: -500,
				maxValue: 0,
				defaultValue: -100
			}
		],
		after: [
			{
				name: "Ending Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 100
			},
			{
				name: "Ending Position",
				prop: "y",
				minValue: 0,
				maxValue: 500,
				defaultValue: 0
			}
		]
	},
	fadeLeft: {
		before: [
			{
				name: "Starting Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 0
			},
			{
				name: "Starting Position",
				prop: "x",
				minValue: -500,
				maxValue: 0,
				defaultValue: -100
			}
		],
		after: [
			{
				name: "Ending Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 100
			},
			{
				name: "Ending Position",
				prop: "x",
				minValue: 0,
				maxValue: 500,
				defaultValue: 0
			}
		]
	},
	fadeRight: {
		before: [
			{
				name: "Starting Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 0
			},
			{
				name: "Starting Position",
				prop: "x",
				minValue: 0,
				maxValue: 500,
				defaultValue: 100
			}
		],
		after: [
			{
				name: "Ending Opacity",
				prop: "autoAlpha",
				minValue: 0,
				maxValue: 100,
				defaultValue: 100
			},
			{
				name: "Ending Position",
				prop: "x",
				minValue: 0,
				maxValue: 500,
				defaultValue: 0
			}
		]
	},
	slideUp: {
		before: [
			{
				name: "Starting Position",
				prop: "y",
				minValue: 0,
				maxValue: 500,
				defaultValue: 100
			}
		],
		after: [
			{
				name: "Ending Position",
				prop: "y",
				minValue: -500,
				maxValue: 0,
				defaultValue: 0
			}
		]
	},
	slideDown: {
		before: [
			{
				name: "Starting Position",
				prop: "y",
				minValue: -500,
				maxValue: 0,
				defaultValue: -100
			}
		],
		after: [
			{
				name: "Ending Position",
				prop: "y",
				minValue: 0,
				maxValue: 500,
				defaultValue: 0
			}
		]
	},
	slideLeft: {
		before: [
			{
				name: "Starting Position",
				prop: "x",
				minValue: -500,
				maxValue: 0,
				defaultValue: -100
			}
		],
		after: [
			{
				name: "Ending Position",
				prop: "x",
				minValue: 0,
				maxValue: 500,
				defaultValue: 0
			}
		]
	},
	slideRight: {
		before: [
			{
				name: "Starting Position",
				prop: "x",
				minValue: 0,
				maxValue: 500,
				defaultValue: 100
			}
		],
		after: [
			{
				name: "Ending Position",
				prop: "x",
				minValue: 0,
				maxValue: 500,
				defaultValue: 0
			}
		]
	}
};

export const animateConfigs = {
	fade: [
		{
			autoAlpha: 0
		},
		{ autoAlpha: 1, duration: DEFAULT_SPEED }
	],
	fadeUp: [
		{
			autoAlpha: 0,
			y: 100
		},
		{ autoAlpha: 1, duration: DEFAULT_SPEED, y: 0 }
	],
	fadeDown: [
		{
			autoAlpha: 0,
			y: -100
		},
		{ autoAlpha: 1, duration: DEFAULT_SPEED, y: 0 }
	],
	fadeLeft: [
		{
			autoAlpha: 0,
			x: -100
		},
		{ autoAlpha: 1, duration: DEFAULT_SPEED, x: 0 }
	],
	fadeRight: [
		{
			autoAlpha: 0,
			x: 100
		},
		{ autoAlpha: 1, duration: DEFAULT_SPEED, x: 0 }
	],
	slideUp: [
		{
			y: 100
		},
		{ duration: DEFAULT_SPEED, y: 0 }
	],
	slideDown: [
		{
			y: -100
		},
		{ duration: DEFAULT_SPEED, y: 0 }
	],
	slideLeft: [
		{
			x: -100
		},
		{ duration: DEFAULT_SPEED, x: 0 }
	],
	slideRight: [
		{
			x: 100
		},
		{ duration: DEFAULT_SPEED, x: 0 }
	]
};
