const el = wp.element.createElement;

function makeIcon(iconObject) {
	const iconArray = iconObject.icon;
	const width = iconArray[0];
	const height = iconArray[1];
	const path = iconArray[4];
	return el(
		"svg",
		{ viewBox: `0,0,${width},${height}` },
		el("path", { d: path })
	);
}

export { makeIcon };
