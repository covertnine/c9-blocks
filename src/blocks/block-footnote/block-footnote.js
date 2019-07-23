/**
 * Block dependencies
 */
import "./styles/style.scss";
import "./styles/editor.scss";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

const { applyFilters } = wp.hooks;

/**
 * Register block
 */
export default registerBlockType("c9-blocks/richtext", {
	title: __("Cortex - Footnote", "c9-blocks"),
	description: __(
		"How to use the RichText component for building your own editable blocks.",
		"c9-blocks"
	),
	category: "c9-blocks",
	keywords: [
		__("Banner", "c9-blocks"),
		__("Call to Action", "c9-blocks"),
		__("Message", "c9-blocks")
	],
	attributes: {
		message: {
			type: "array",
			source: "children",
			selector: ".message-body"
		}
	},
	supports: {
		anchor: true
	},
	edit: props => {
		const {
			attributes: { message },
			setAttributes,
			className = ""
		} = props;
		const onChangeMessage = message => {
			setAttributes({ message });
		};
		return (
			<div className={applyFilters("c9-blocks.blocks.className", className)}>
				<h2>{__("Call to Action", "c9-blocks")}</h2>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={__("Add your custom message", "c9-blocks")}
					onChange={onChangeMessage}
					value={message}
				/>
			</div>
		);
	},
	save: props => {
		const {
			attributes: { message }
		} = props;
		return (
			<div
				className={applyFilters("c9-blocks.blocks.className", props.className)}
			>
				<h2>{__("Call to Action", "c9-blocks")}</h2>
				<div className="message-body">{message}</div>
			</div>
		);
	}
});
