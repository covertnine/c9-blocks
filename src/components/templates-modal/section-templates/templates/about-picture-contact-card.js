import Icon from "../../../../../assets/section-template-icons/about-picture-contact-card.svg";

export default {
	icon: Icon,
	title: "About + Picture Contact Card",
	markup:
		`<!-- wp:c9-blocks/grid {"instanceId":0} -->
		<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":4,"layout":"c9-2-col-equal","verticalAlign":"center"} -->
		<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Name","tagLevel":3,"displayLevel":"4","overrideStyle":true} -->
		<div class="section-heading c9-heading text-left"><h3 class="c9-h h4">Name</h3></div>
		<!-- /wp:c9-blocks/heading -->

		<!-- wp:paragraph -->
		<p>Click on the section's outer edge of the C9 Grid block to select it and changes its background overlay, imagery, or video. If you don't see a sidebar when clicking on the C9 Grid block, click the gear icon and then change Background Settings</p>
		<!-- /wp:paragraph -->

		<!-- wp:spacer {"height":31} -->
		<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>
		<!-- /wp:spacer -->

		<!-- wp:c9-blocks/heading {"heading":"Runway heading towards","tagLevel":5,"type":"c9-sh subhead-h","weight":"light","overrideStyle":true} -->
		<div class="section-heading c9-heading text-left"><h5 class="c9-sh subhead-h5 font-weight-light">Runway heading towards</h5></div>
		<!-- /wp:c9-blocks/heading -->

		<!-- wp:button {"className":"is-style-outline"} -->
		<div class="wp-block-button is-style-outline"><a class="wp-block-button__link" href="#">Button</a></div>
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
