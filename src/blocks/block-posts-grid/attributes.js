/**
 * Block Attributes
 */
const attributes = {
	instanceId: {
		type: 'number',
	},
	align: {
		type: 'string',
		default: 'full',
	},
	containerImgURL: {
		type: 'string',
		sanitize: value => typeof value === 'string' ? value : '',
	},
	containerHue: {
		type: 'string',
		default: undefined,
		sanitize: value => typeof value === 'string' ? value : undefined,
	},
	containerOpacity: {
		type: 'number',
		default: 10,
		validate: value => Number.isFinite(value) ? value : 10,
	},
	bgImgSize: {
		type: 'string',
		default: 'cover',
		sanitize: value => typeof value === 'string' ? value : 'cover',
	},
	bgCustomX: {
		type: 'object',
		default: {
			size: 'auto',
			unit: 'px',
		},
		validate: value =>
			typeof value === 'object' && value.size && value.unit
				? value
				: { size: 'auto', unit: 'px' },
	},
	bgCustomY: {
		type: 'object',
		default: {
			size: 'auto',
			unit: 'px',
		},
		validate: value =>
			typeof value === 'object' && value.size && value.unit
				? value
				: { size: 'auto', unit: 'px' },
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
		sanitize: (value) => sanitizeHTML(value), // Sanitize the video URL
	},
	containerVideoID: {
		type: 'string',
		default: '',
		sanitize: (value) => sanitizeHTML(value), // Sanitize the video ID
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
