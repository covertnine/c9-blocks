/**
 * Block dependencies
 */
import classnames from 'classnames';
import Inspector from './column-inspector';
import attributes from './column-attributes';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Dashicon, Tooltip, Button, PanelBody, Toolbar, withNotices } = wp.components;
const { registerBlockType, createBlock } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'covertnine-blocks/column-containers', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Content Container', 'cortex-blocks' ),
	description: __( 'A responsive container for columns of content', 'cortex-blocks' ),
	icon: 'columns',
	category: 'layout',
	keywords: [
		__( 'column', 'cortex-blocks' ),
		__( 'container', 'cortex-blocks'),
		__( 'responsive', 'cortex-blocks' ),
	],
	attributes,
	edit: props => {
		const { attributes, className, setAttributes } = props;

		// Creates a column container that can take other blocks
		return [
            <Inspector { ...{ setAttributes, ...props} } />,
				<div className={ className }>
					<div className="row">
						<div className={attributes.radioControl}>
							<div className="col-xs-12">
								<InnerBlocks />
							</div>
						</div>
					</div>
				</div>
		];
	},

	save: props => {
        const { attributes, setAttributes } = props;
		const containerWidth3 = attributes.radioControl;

		return (
				<div>
					<div className="row">
						<div className={ containerWidth3 }>
							<div className="col-xs-12">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
		);
	}, //end save
} ); //end registerBlockType

