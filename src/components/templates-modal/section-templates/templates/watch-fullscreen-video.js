import Icon from "../../../../../assets/section-template-icons/fullscreen-video-large-heading-button.svg";

export default {
	icon: Icon,
	title: "Watch Fullscreen Video",
	description: "Video File • Video Link • Headline",
	markup: `<!-- wp:c9-blocks/grid {"instanceId":0,"containerHue":"#000000","overlayHue":"#000000","overlayOpacity":8,"blendMode":"normal","minScreenHeight":71,"containerVideoURL":"https://c9.covertnine.com/wp-content/uploads/2020/10/c9-website-2019-bg.mp4"} -->
<div class="c9-grid p-5 c9-scroll c9-grid-has-video" style="min-height:71vh;background-color:rgba(0,0,0,1)"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideright","verticalAlign":"center","minScreenHeight":0} -->
<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Watch Video Now","tagLevel":6,"displayLevel":"1","type":"c9-txl display-","textColor":"#ffffff","weight":"bold","overrideStyle":true} -->
<div class="section-heading c9-heading text-left"><h6 class="c9-txl display-1 font-weight-bold" style="color:#ffffff">Watch Video Now</h6></div>
<!-- /wp:c9-blocks/heading -->

<!-- wp:c9-blocks/heading {"heading":"Supporting Subheading","tagLevel":2,"displayLevel":"5","type":"c9-sh subhead-h","textColor":"#979797","weight":"light","overrideStyle":true} -->
<div class="section-heading c9-heading text-left"><h2 class="c9-sh subhead-h5 font-weight-light" style="color:#979797">Supporting Subheading</h2></div>
<!-- /wp:c9-blocks/heading --></div></div>
<!-- /wp:c9-blocks/column -->

<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:paragraph {"align":"center","textColor":"color-light","fontSize":"small"} -->
<p class="has-text-align-center has-color-light-color has-text-color has-small-font-size">Click on the outer edge of the C9 Grid block to select it and change its background video.</p>
<!-- /wp:paragraph -->

<!-- wp:separator {"customColor":"#f8f8f8"} -->
<hr class="wp-block-separator has-text-color has-background" style="background-color:#f8f8f8;color:#f8f8f8"/>
<!-- /wp:separator -->

<!-- wp:buttons {"align":"center"} -->
<div class="wp-block-buttons aligncenter"><!-- wp:button {"style":{"color":{"text":"#f9f9f9"}},"align":"center","className":"is-style-default is-style-outline"} -->
<div class="wp-block-button aligncenter is-style-default is-style-outline"><a class="wp-block-button__link has-text-color" href="https://www.youtube.com/watch?v=zq6sgA1tmoQ" style="color:#f9f9f9">View Fullscreen Video</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div></div>
<!-- /wp:c9-blocks/column --></div></div>
<!-- /wp:c9-blocks/column-container --><div class="c9-overlay-container" style="background-color:rgba(0,0,0,.8);mix-blend-mode:normal"></div><div class="c9-video-container d-none d-sm-block"><div class="c9-embed-container"><video id="containerVideo-0" class="c9-video-custom" playsinline autoplay muted loop style="min-height:71vh"><source src="https://c9.covertnine.com/wp-content/uploads/2020/10/c9-website-2019-bg.mp4" type="video/mp4"/></video></div></div></div>
<!-- /wp:c9-blocks/grid -->`
};
