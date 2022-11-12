import { c9SpacingConfig } from './utils';

describe('space settings extension should work correctly', () => {
	const defaultConfig = {
		linked: true,
		icon: 'admin-links',
		top: '-1',
		bottom: '-1',
		left: '-1',
		right: '-1',
	};
	const sameValueConfig = {
		linked: true,
		icon: 'admin-links',
		top: '3',
		bottom: '3',
		left: '3',
		right: '3',
	};

	it('returns no padding when in unset state', () => {
		expect(c9SpacingConfig(defaultConfig, defaultConfig)).toStrictEqual([]);
	});

	it('returns one padding name if all values are the same', () => {
		expect(c9SpacingConfig(sameValueConfig, defaultConfig)).toStrictEqual([
			'p-3',
		]);
	});

	it('returns one margin name if all values are the same', () => {
		expect(c9SpacingConfig(defaultConfig, sameValueConfig)).toStrictEqual([
			'my-3',
		]);
	});
});
