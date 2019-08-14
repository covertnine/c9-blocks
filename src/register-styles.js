const { registerBlockStyle } = wp.blocks;

let loadBlocksEditor = null;

if (typeof window._wpLoadBlockEditor !== "undefined") {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if (typeof window._wpLoadGutenbergEditor !== "undefined") {
	// Using WP core Gutenberg
	loadBlocksEditor = window._wpLoadGutenbergEditor;
}

if (loadBlocksEditor) {
	loadBlocksEditor.then(() => {
		// registerBlockStyle("core/button", {
		// 	name: "custom-button-style",
		// 	label: "My Button Style"
		// });
	});
}
