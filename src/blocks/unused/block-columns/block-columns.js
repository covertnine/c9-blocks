/**
 * External dependencies
 */
import times from "lodash/times";
import classnames from "classnames";
import memoize from "memize";
import "./styles/style.scss";
import attributes from "./attributes";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelBody, RangeControl, G, SVG, Path } = wp.components;
const { Fragment } = wp.element;
const { registerBlockType, createBlock } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.editor;

const ALLOWED_BLOCKS = [ "covertnine-blocks/column" ];
/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getColumnsTemplate = memoize( columns => {
	return times( columns, () => [ "covertnine-blocks/column" ] );
} );

registerBlockType( "covertnine-blocks/columns", {
	title: __( "Content Columns", "covertnine-blocks" ),
	description: __(
		"Bootstrap columns based on the Wordpress column block",
		"covertnine-blocks"
	),
	icon: "columns",
	category: "layout",
	supports: {
		align: [ "wide", "full" ],
	},
	attributes,
	keywords: [
		__( "column", "covertnine-blocks" ),
		__( "container", "covertnine-blocks" ),
		__( "responsive", "covertnine-blocks" ),
	],
	edit( { attributes, setAttributes, className } ) {
		const { columns } = attributes;
		const classes = classnames( className, `has-${ columns }-columns` );
		console.log( attributes );
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={ __( "Columns" ) }
							value={ columns }
							onChange={ nextColumns => {
								setAttributes( {
									columns: nextColumns,
								} );
							} }
							min={ 1 }
							max={ 6 }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ classes }>
					<InnerBlocks
						template={ getColumnsTemplate( columns ) }
						templateLock="all"
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const { columns } = attributes;

		return (
			<div className={ `has-${ columns }-columns` }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
