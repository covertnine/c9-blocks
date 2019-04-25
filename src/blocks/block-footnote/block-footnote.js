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

/**
 * Register block
 */
export default registerBlockType( "covertnine-blocks/richtext", {
	title: __( "Cortex - Footnote", "covertnine-blocks" ),
	description: __(
		"How to use the RichText component for building your own editable blocks.",
		"covertnine-blocks"
	),
	category: "common",
	keywords: [
		__( "Banner", "covertnine-blocks" ),
		__( "Call to Action", "covertnine-blocks" ),
		__( "Message", "covertnine-blocks" ),
	],
	attributes: {
		message: {
			type: "array",
			source: "children",
			selector: ".message-body",
		},
	},
	supports: {
		anchor: true,
	},
	edit: props => {
		const {
			attributes: { message },
			className,
			setAttributes,
		} = props;
		const onChangeMessage = message => {
			setAttributes( { message } );
		};
		return (
			<div className={ className }>
				<h2>{ __( "Call to Action", "covertnine-blocks" ) }</h2>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( "Add your custom message", "covertnine-blocks" ) }
					onChange={ onChangeMessage }
					value={ message }
				/>
			</div>
		);
	},
	save: props => {
		const {
			attributes: { message },
		} = props;
		return (
			<div>
				<h2>{ __( "Call to Action", "covertnine-blocks" ) }</h2>
				<div className="message-body">{ message }</div>
			</div>
		);
	},
} );
