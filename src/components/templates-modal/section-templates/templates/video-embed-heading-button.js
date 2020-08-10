import Icon from "../../../../../assets/section-template-icons/video-embed-heading-button.svg";

export default {
	icon: Icon,
	title: "Video Embed + Heading + Button",
	markup:
		`<!-- wp:c9-blocks/grid {"instanceId":0,"containerHue":"#f6f6fb"} -->
		<div class="c9-grid p-5 c9-scroll" style="min-height:20vh;background-color:rgba(246,246,251,1)"><!-- wp:c9-blocks/column-container {"align":"wide","columns":2,"layout":"c9-2-col-equal","containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->
		<div class="container alignwide c9-column-container my-5 c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Music Videos","tagLevel":3,"displayLevel":"4","type":"c9-txl display-","textAlign":"center","weight":"light","overrideStyle":true} -->
		<div class="section-heading c9-heading text-center"><h3 class="c9-txl display-4 font-weight-light">Music Videos</h3></div>
		<!-- /wp:c9-blocks/heading -->

		<!-- wp:c9-blocks/heading {"heading":"UPLOAD VIDEOS OR JUST LINK TO YOUTUBE OR VIMEO","tagLevel":6,"textColor":"#abb8c3","textAlign":"center","overrideStyle":true} -->
		<div class="section-heading c9-heading text-center"><h6 class="c9-h h6" style="color:#abb8c3">UPLOAD VIDEOS OR JUST LINK TO YOUTUBE OR VIMEO</h6></div>
		<!-- /wp:c9-blocks/heading -->

		<!-- wp:spacer {"height":42} -->
		<div style="height:42px" aria-hidden="true" class="wp-block-spacer"></div>
		<!-- /wp:spacer -->

		<!-- wp:button {"align":"center","className":"is-style-outline"} -->
		<div class="wp-block-button aligncenter is-style-outline"><a class="wp-block-button__link" href="https://www.youtube.com/watch?v=8Qn_spdM5Zg">See Video</a></div>
		<!-- /wp:button --></div></div>
		<!-- /wp:c9-blocks/column -->

		<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:video {"id":7693} -->
		<figure class="wp-block-video"><video controls src="//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-1640698.mp4"></video></figure>
		<!-- /wp:video --></div></div>
		<!-- /wp:c9-blocks/column --></div></div>
		<!-- /wp:c9-blocks/column-container --></div>
		<!-- /wp:c9-blocks/grid -->`
};
