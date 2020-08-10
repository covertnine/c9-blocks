import Icon from "../../../../../assets/section-template-icons/widescreen-video-with-title-description.svg";

export default {
	icon: Icon,
	title: "Widescreen Video With Title + Description",
	markup: `<!-- wp:c9-blocks/grid {"instanceId":0,"containerHue":"#000000","overlayHue":"#3d3d3d","overlayOpacity":9,"blendMode":"multiply","minScreenHeight":50,"containerVideoURL":"https://cortex.covertnine.com/wp-content/uploads/2019/10/Pexels-Videos-1333384.mp4"} -->
	<div class="c9-grid p-5 c9-scroll c9-grid-has-video" style="min-height:50vh;background-color:rgba(0,0,0,1)"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideright","verticalAlign":"center"} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
	<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Heading Title","displayLevel":"2","textColor":"#ffffff","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h h2" style="color:#ffffff">Heading Title</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"Lead description supporting title","tagLevel":2,"displayLevel":"5","type":"c9-sh subhead-h","textColor":"#ffffff","weight":"light","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h2 class="c9-sh subhead-h5 font-weight-light" style="color:#ffffff">Lead description supporting title</h2></div>
	<!-- /wp:c9-blocks/heading --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
	<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:separator {"className":"is-style-default"} -->
	<hr class="wp-block-separator is-style-default"/>
	<!-- /wp:separator -->

	<!-- wp:paragraph {"textColor":"covertnine-palette-1"} -->
	<p class="has-covertnine-palette-1-color has-text-color">Click on the section's outer edge of the C9 Grid block to select it and changes its background overlay, imagery, or video. If you don't see a sidebar when clicking on the C9 Grid block, click the gear icon and then change Background Settings</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --><div class="c9-overlay-container" style="background-color:rgba(61,61,61,.9);mix-blend-mode:multiply"></div><div class="c9-video-container d-none d-sm-block"><div class="c9-embed-container"><video id="containerVideo-0" class="c9-video-custom" playsinline autoplay muted loop style="min-height:50vh"><source src="https://cortex.covertnine.com/wp-content/uploads/2019/10/Pexels-Videos-1333384.mp4" type="video/mp4"/></video></div></div></div>
	<!-- /wp:c9-blocks/grid -->`
};
