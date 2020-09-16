const startingOpacitySetting = {
	name: "Starting Opacity",
	prop: "autoAlpha",
	minValue: 0,
	maxValue: 100,
	defaultValue: 0
};

const endingOpacitySetting = {
	name: "Ending Opacity",
	prop: "autoAlpha",
	minValue: 0,
	maxValue: 100,
	defaultValue: 100
};

const startingPositiveTranslationSetting = prop => ({
	name: "Starting Position",
	prop,
	minValue: 0,
	maxValue: 300,
	defaultValue: 100
});

const endingPositiveTranslationSetting = prop => ({
	name: "Ending Position",
	prop,
	minValue: -300,
	maxValue: 0,
	defaultValue: 0
});

const startingNegativeTranslationSetting = prop => ({
	name: "Starting Position",
	prop,
	minValue: -300,
	maxValue: 0,
	defaultValue: -100
});

const endingNegativeTranslationSetting = prop => ({
	name: "Ending Position",
	prop,
	minValue: 0,
	maxValue: 300,
	defaultValue: 0
});

/**
 * Animate settings for user
 */

export const animateSettings = {
	fade: {
		before: [startingOpacitySetting],
		after: [endingOpacitySetting]
	},
	fadeUp: {
		before: [startingOpacitySetting, startingPositiveTranslationSetting("y")],
		after: [endingOpacitySetting, endingPositiveTranslationSetting("y")]
	},
	fadeDown: {
		before: [startingOpacitySetting, startingNegativeTranslationSetting("y")],
		after: [endingOpacitySetting, endingNegativeTranslationSetting("y")]
	},
	fadeLeft: {
		before: [startingOpacitySetting, startingNegativeTranslationSetting("x")],
		after: [endingOpacitySetting, endingNegativeTranslationSetting("x")]
	},
	fadeRight: {
		before: [startingOpacitySetting, startingPositiveTranslationSetting("x")],
		after: [endingOpacitySetting, endingPositiveTranslationSetting("x")]
	},
	slideUp: {
		before: [startingPositiveTranslationSetting("y")],
		after: [endingPositiveTranslationSetting("y")]
	},
	slideDown: {
		before: [startingNegativeTranslationSetting("y")],
		after: [endingNegativeTranslationSetting("y")]
	},
	slideLeft: {
		before: [startingNegativeTranslationSetting("x")],
		after: [endingNegativeTranslationSetting("x")]
	},
	slideRight: {
		before: [startingPositiveTranslationSetting("x")],
		after: [endingPositiveTranslationSetting("x")]
	}
};
