/**
 * WordPress dependencies
 */
const { Path, SVG } = wp.components;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;
const { registerBlockType, createBlock } = wp.blocks;


registerBlockType( 'covertnine-blocks/column', {

  title: __( 'Column', 'cortex-blocks'),

  category: 'common',

  parent: [ 'covertnine-blocks/columns' ],

  icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" /></SVG>,

  description: __( 'A single column within the columns block.' ),

  supports: {
    inserter: false,
  },

  edit() {
    return <div className="col"><InnerBlocks className="col" templateLock={ false } /></div>;
  },

  save() {
    return <div className="col"><InnerBlocks.Content /></div>;
  },

});