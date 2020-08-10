// Does exist yet
import Icon from "../../../../../assets/section-template-icons/single-profile.svg";

export default {
	icon: Icon,
	title: "Single Profile",
	markup:
		`<!-- wp:c9-blocks/grid {"instanceId":0,"containerHue":"#ededed","minScreenHeight":80} -->
		<div class="c9-grid p-5 c9-scroll" style="min-height:80vh;background-color:rgba(237,237,237,1)"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":4,"layout":"c9-2-col-wideleft","verticalAlign":"center","overlayHue":"#ffffff","overlayOpacity":10,"blendMode":"normal","containerMargin":{"linked":true,"top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->
		<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Namey McNamster","tagLevel":3,"displayLevel":"1","textAlign":"center","overrideStyle":true} -->
		<div class="section-heading c9-heading text-center"><h3 class="c9-h h1">Namey McNamster</h3></div>
		<!-- /wp:c9-blocks/heading -->

		<!-- wp:c9-blocks/heading {"heading":"Click on the section's outer edge of the C9 Grid block to select it and changes its background overlay, imagery, or video. If you don't see a sidebar when clicking on the C9 Grid block, click the gear icon and then change Background Settings.","tagLevel":6,"displayLevel":"3","type":"c9-sh subhead-h","textAlign":"center","weight":"light","overrideStyle":true} -->
		<div class="section-heading c9-heading text-center"><h6 class="c9-sh subhead-h3 font-weight-light">Click on the section's outer edge of the C9 Grid block to select it and changes its background overlay, imagery, or video. If you don't see a sidebar when clicking on the C9 Grid block, click the gear icon and then change Background Settings.</h6></div>
		<!-- /wp:c9-blocks/heading -->

		<!-- wp:spacer {"height":31} -->
		<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>
		<!-- /wp:spacer -->

		<!-- wp:button {"align":"center"} -->
		<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">EMAIL ME</a></div>
		<!-- /wp:button --></div></div>
		<!-- /wp:c9-blocks/column -->

		<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:image {"align":"center"} -->
		<div class="wp-block-image"><figure class="aligncenter"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-testimonial-1024x1024.jpeg" alt="girl in tesitmonial from WordPress Gutenberg Block"/></figure></div>
		<!-- /wp:image --></div></div>
		<!-- /wp:c9-blocks/column --></div></div>
		<!-- /wp:c9-blocks/column-container --></div>
		<!-- /wp:c9-blocks/grid -->`
};
