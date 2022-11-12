import { c9AlignConfig } from './utils';

describe('width settings extension should work correctly', () => {
	it('returns no alignment when align is unset', () => {
		expect(c9AlignConfig('container', '')).toStrictEqual('');
	});

	it('returns alignfull if all align is full and container is fluid', () => {
		expect(c9AlignConfig('container-fluid', 'full')).toStrictEqual('alignfull');
	});
});
