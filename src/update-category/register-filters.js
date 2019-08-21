const { addFilter } = wp.hooks;

function formatClassName(className) {
	const result = className.replace("wp-block-c9-blocks", "c9");
	return result;
}

addFilter(
	"c9-blocks.editor.className",
	"c9-blocks/format-classname",
	formatClassName
);
addFilter(
	"c9-blocks.blocks.className",
	"c9-blocks/format-classname",
	formatClassName
);
