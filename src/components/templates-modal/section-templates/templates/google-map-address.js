import Icon from "../../../../../assets/section-template-icons/google-map-address.svg";

export default {
	icon: Icon,
	title: "Google Map + Address",
	markup:
		`<!-- wp:c9-blocks/grid {"instanceId":0,"containerHue":"#f4f4f4","minScreenHeight":64} -->
		<div class="c9-grid p-5 c9-scroll" style="min-height:64vh;background-color:rgba(244,244,244,1)"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal","verticalAlign":"center","overlayHue":"#ffffff","overlayOpacity":10,"minScreenHeight":10,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"}} -->
		<div class="container c9-column-container my-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal" style="min-height:10vh"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:overlay"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:html -->
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.925326227983!2d-87.63594088430501!3d41.8299060764073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c14278e92f5%3A0x2f864f668f4a90b8!2sGuaranteed%20Rate%20Field!5e0!3m2!1sen!2sus!4v1567193833384!5m2!1sen!2sus" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
		<!-- /wp:html --></div></div>
		<!-- /wp:c9-blocks/column -->

		<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:paragraph {"align":"center"} -->
		<p class="has-text-align-center"><strong>Headquarters</strong> (Not the bar)<br>2999 N. Chicago Ave.<br>Chicago, Illinois 60666</p>
		<!-- /wp:paragraph -->

		<!-- wp:paragraph {"align":"center"} -->
		<p class="has-text-align-center">555-666-4000</p>
		<!-- /wp:paragraph --></div></div>
		<!-- /wp:c9-blocks/column --></div></div>
		<!-- /wp:c9-blocks/column-container --></div>
		<!-- /wp:c9-blocks/grid -->`
};
