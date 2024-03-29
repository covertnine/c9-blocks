/**
 * Block Attributes
 */
const attributes = {
	instanceId: {
		type: 'number',
	},
	lockMovement: {
		type: 'boolean',
		default: true,
	},
	rows: {
		type: 'number',
		default: 1,
	},
	align: {
		type: 'string',
		default: 'full',
	},
	containerImgURL: {
		type: 'string',
	},
	containerHue: {
		type: 'string',
		default: undefined,
	},
	containerOpacity: {
		type: 'number',
		default: 10,
	},
	bgImgSize: {
		type: 'string',
		default: 'cover',
	},
	bgCustomX: {
		type: 'object',
		default: {
			size: 'auto',
			unit: 'px',
		},
	},
	bgCustomY: {
		type: 'object',
		default: {
			size: 'auto',
			unit: 'px',
		},
	},
	bgImgRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	// true evaluates to backgroundAttachment fixed, false to scroll
	bgImgAttach: {
		type: 'boolean',
		default: false,
	},
	overlayHue: {
		type: 'string',
		default: undefined,
	},
	overlayOpacity: {
		type: 'number',
		default: 10,
	},
	blendMode: {
		type: 'string',
		default: 'normal',
	},
	linkedValToggle: {
		type: 'boolean',
		default: true,
	},
	minScreenHeight: {
		type: 'number',
		default: 20,
	},
	containerMargin: {
		type: 'object',
		default: {
			linked: true,
			icon: 'admin-links',
			unit: 'px',
			top: '-1',
			bottom: '-1',
		},
	},
	containerPadding: {
		type: 'object',
		default: {
			linked: true,
			icon: 'admin-links',
			top: '3',
			bottom: '3',
			left: '3',
			right: '3',
		},
	},
	focalPoint: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
	},
	videoType: {
		type: 'string',
		default: 'upload',
	},
	containerVideoURL: {
		type: 'string',
		default: '',
	},
	containerVideoID: {
		type: 'string',
		default: '',
	},
	cannotEmbed: {
		type: 'boolean',
		default: false,
	},
	bgImgSizeMobile: {
		type: 'string',
		default: 'cover',
	},
	focalPointMobile: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
	},
	overrideMobile: {
		type: 'boolean',
		default: false,
	},
	bgCustomXMobile: {
		type: 'object',
		default: {
			size: 'auto',
			unit: 'px',
		},
	},
	bgCustomYMobile: {
		type: 'object',
		default: {
			size: 'auto',
			unit: 'px',
		},
	},
};

export default attributes;
