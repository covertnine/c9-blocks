export const c9AlignConfig = (containerWidth, align) => {
	let containerAlign = '';
	if (align !== undefined && 0 != align.length) {
		if ('container' == containerWidth) {
			containerAlign = 'alignwide';
		} else if ('container-fluid' == containerWidth) {
			containerAlign = 'alignfull';
		} else if ('container-narrow' == containerWidth) {
			containerAlign = 'alignnarrow';
		}
	}

	return containerAlign;
};
