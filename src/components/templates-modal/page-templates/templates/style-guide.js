import Icon from "../../../../../assets/page-template-icons/style-guide.svg";

export default {
	icon: Icon,
	type: "consideration",
	title: "Style Guide",
	description: `Create a style guide of nearly all of the C9 Blocks to test out layouts, typography, buttons, or to view the full web style guide for the site.`,
	recommended: `Typography, buttons, and all elements needed to build out all of the style guide components needed for a website.`,
	markup: `<!-- wp:c9-blocks/grid {"instanceId":0,"containerImgURL":"https://c9.covertnine.com/wp-content/uploads/2020/09/20190622-disney-alaska-vacation-66-2.jpg","containerHue":"#000000","overlayHue":"#262626","overlayOpacity":8,"blendMode":"normal","minScreenHeight":90,"focalPoint":{"x":0.5161290322580645,"y":0.176056338028169}} -->
	<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:90vh;background-color:rgba(0,0,0,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","verticalAlign":"center","minScreenHeight":0} -->
	<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"bottom"} -->
	<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Subheading","tagLevel":3,"type":"c9-sh subhead-h","textColor":"#FEC50A"} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-sh" style="color:#FEC50A">Subheading</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"Heading H1","textColor":"#ffffff"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h" style="color:#ffffff">Heading H1</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"Style Guide","type":"c9-txl display-","textColor":"#ffffff"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-txl display-1" style="color:#ffffff">Style Guide</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:spacer -->
	<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:c9-blocks/horizontal-tabs {"buttonsAlign":"center","tabsData":[{"slug":"tab-1","title":"Tab 1"},{"slug":"tab-2","title":"Tab 2"},{"slug":"tab-3","title":"Tab 3"}],"instanceId":0,"tabContentBackgroundColor":"#ffffff"} -->
	<div class="c9-horizontal-tabs" data-tab-active="tab-1"><ul class="nav nav-tabs d-flex justify-content-center" role="tablist"><li class="nav-item"><a data-toggle="tab" role="tab" href="#htab-tab-1-0" class="nav-link active" id="tab-button-tab-1">Tab 1</a></li><li class="nav-item"><a data-toggle="tab" role="tab" href="#htab-tab-2-0" class="nav-link" id="tab-button-tab-2">Tab 2</a></li><li class="nav-item"><a data-toggle="tab" role="tab" href="#htab-tab-3-0" class="nav-link" id="tab-button-tab-3">Tab 3</a></li></ul><div class="c9-tabs-content tab-content" style="background-color:#ffffff"><!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-1","tabActive":"tab-1","id":0} -->
	<!-- wp:c9-blocks/heading {"heading":"C9 Horizontal Tabs Block"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h">C9 Horizontal Tabs Block</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>text &nbsp;Nunc laoreet mi at nulla venenatis efficitur. Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. Suspendisse congue orci mi, vitae fringilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. Suspendisse posuere metus eget lectus consectetur dapibus euismod ut lectus. Phasellus id efficitur quam.</p>
	<!-- /wp:paragraph -->
	<!-- /wp:c9-blocks/horizontal-tabs-tab -->

	<!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-2","tabActive":"tab-1","id":0} -->
	<!-- wp:c9-blocks/heading {"heading":"Tab Heading Two"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h">Tab Heading Two</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>&nbsp;Nunc laoreet mi at nulla venenatis efficitur. Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. Suspendisse congue orci mi, vitae fringilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. Suspendisse posuere metus eget lectus consectetur dapibus euismod ut lectus. Phasellus id efficitur quam.</p>
	<!-- /wp:paragraph -->
	<!-- /wp:c9-blocks/horizontal-tabs-tab -->

	<!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-3","tabActive":"tab-1","id":0} -->
	<!-- wp:c9-blocks/heading {"heading":"Tab Heading Three"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h">Tab Heading Three</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>&nbsp;Nunc laoreet mi at nulla venenatis efficitur. Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. Suspendisse congue orci mi, vitae fringilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. Suspendisse posuere metus eget lectus consectetur dapibus euismod ut lectus. Phasellus id efficitur quam.</p>
	<!-- /wp:paragraph -->
	<!-- /wp:c9-blocks/horizontal-tabs-tab --></div></div>
	<!-- /wp:c9-blocks/horizontal-tabs --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --><div class="c9-overlay-container" style="background-color:rgba(38,38,38,.8);mix-blend-mode:normal"></div><div class="c9-image-container c9-image-mobile-size-cover" style="background-position:51.61290322580645% 17.6056338028169%;background-image:url(https://c9.covertnine.com/wp-content/uploads/2020/09/20190622-disney-alaska-vacation-66-2.jpg);background-repeat:no-repeat;background-size:cover"></div></div>
	<!-- /wp:c9-blocks/grid -->

	<!-- wp:c9-blocks/grid {"instanceId":1,"rows":3} -->
	<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":10,"layout":"c9-2-col-equal"} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-10 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Paragraphs","tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">Paragraphs</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph {"dropCap":true} -->
	<p class="has-drop-cap">Mauris malesuada condimentum metus, ac elementum neque auctor vitae. Vivamus in turpis quis dolor pulvinar gravida eget ut augue. Cras facilisis, risus et pretium convallis, magna libero rutrum neque.</p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph -->
	<p>Donec hendrerit at elit id eleifend. Sed scelerisque metus venenatis, tristique enim a, aliquam felis. Nam a bibendum ligula. Proin accumsan sagittis tortor vitae scelerisque.</p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph -->
	<p>Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. Suspendisse congue orci mi, vitae fringilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. </p>
	<!-- /wp:paragraph -->

	<!-- wp:heading {"level":1} -->
	<h1>Tab Heading One</h1>
	<!-- /wp:heading -->

	<!-- wp:heading -->
	<h2>Tab Heading One</h2>
	<!-- /wp:heading -->

	<!-- wp:heading {"level":3} -->
	<h3>Tab Heading One</h3>
	<!-- /wp:heading -->

	<!-- wp:heading {"level":4} -->
	<h4>Tab Heading One</h4>
	<!-- /wp:heading -->

	<!-- wp:heading {"level":5} -->
	<h5>Tab Heading One</h5>
	<!-- /wp:heading -->

	<!-- wp:heading {"level":6} -->
	<h6>Tab Heading One</h6>
	<!-- /wp:heading -->

	<!-- wp:spacer {"height":35} -->
	<div style="height:35px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:buttons {"align":"left"} -->
	<div class="wp-block-buttons alignleft"><!-- wp:button {"textColor":"color-warning","className":"is-style-outline"} -->
	<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-color-warning-color has-text-color" href="#">Outlined</a></div>
	<!-- /wp:button -->

	<!-- wp:button -->
	<div class="wp-block-button"><a class="wp-block-button__link" href="#">Button Link</a></div>
	<!-- /wp:button --></div>
	<!-- /wp:buttons -->

	<!-- wp:spacer {"height":30} -->
	<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:button -->
	<div class="wp-block-button"><a class="wp-block-button__link">Single Button</a></div>
	<!-- /wp:button -->

	<!-- wp:button {"borderRadius":21} -->
	<div class="wp-block-button"><a class="wp-block-button__link" style="border-radius:21px">Round Button</a></div>
	<!-- /wp:button -->

	<!-- wp:spacer {"height":30} -->
	<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:c9-blocks/heading {"heading":"Seperators + Horizontal Rules","tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">Seperators + Horizontal Rules</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:separator -->
	<hr class="wp-block-separator"/>
	<!-- /wp:separator -->

	<!-- wp:separator {"customColor":"#bcbcbc"} -->
	<hr class="wp-block-separator has-text-color has-background" style="background-color:#bcbcbc;color:#bcbcbc"/>
	<!-- /wp:separator -->

	<!-- wp:separator {"customColor":"#bcbcbc","className":"is-style-wide"} -->
	<hr class="wp-block-separator has-text-color has-background is-style-wide" style="background-color:#bcbcbc;color:#bcbcbc"/>
	<!-- /wp:separator -->

	<!-- wp:separator {"customColor":"#d05050","className":"is-style-wide"} -->
	<hr class="wp-block-separator has-text-color has-background is-style-wide" style="background-color:#d05050;color:#d05050"/>
	<!-- /wp:separator -->

	<!-- wp:separator {"className":"is-style-dots"} -->
	<hr class="wp-block-separator is-style-dots"/>
	<!-- /wp:separator -->

	<!-- wp:separator {"customColor":"#df0000","className":"is-style-dots"} -->
	<hr class="wp-block-separator has-text-color has-background is-style-dots" style="background-color:#df0000;color:#df0000"/>
	<!-- /wp:separator --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Paragraph Sizes","tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">Paragraph Sizes</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph {"fontSize":"small"} -->
	<p class="has-small-font-size">Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. Suspendisse congue orci mi, vitae fringilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. Suspendisse posuere metus eget lectus consectetur dapibus euismod ut lectus. Phasellus id efficitur quam.</p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph {"fontSize":"normal"} -->
	<p class="has-normal-font-size">Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. Suspendisse congue orci mi, vitae fringilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. Suspendisse posuere metus eget lectus consectetur dapibus euismod ut lectus. Phasellus id efficitur quam.</p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph {"fontSize":"medium"} -->
	<p class="has-medium-font-size">Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. Suspendisse congue orci mi, vitae fringilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. Suspendisse posuere metus eget lectus consectetur dapibus euismod ut lectus. Phasellus id efficitur quam.</p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph {"fontSize":"large"} -->
	<p class="has-large-font-size">Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. </p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph {"fontSize":"huge"} -->
	<p class="has-huge-font-size">Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu.</p>
	<!-- /wp:paragraph -->

	<!-- wp:spacer {"height":30} -->
	<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:c9-blocks/heading {"heading":"Code + Pre","tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">Code + Pre</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:code -->
	<pre class="wp-block-code"><code>.the-best-styles {
	  font-family: 'Oswald', sans-serif;
	  color: black; /* like your soul */
	  font-size: 1.6em;
	  padding: 420px;
	}</code></pre>
	<!-- /wp:code --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container -->

	<!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","containerMargin":{"linked":false,"icon":"editor-unlink","top":"5","bottom":"-1"}} -->
	<div class="container c9-column-container mt-5 c9-scroll c9-layout-columns-1 one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:separator -->
	<hr class="wp-block-separator"/>
	<!-- /wp:separator -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Pullquotes + Blockquotes","type":"c9-txl display-","textAlign":"center"} -->
	<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-1">C9 Pullquotes + Blockquotes</h1></div>
	<!-- /wp:c9-blocks/heading --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container -->

	<!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":10,"layout":"c9-2-col-equal"} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-10 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:pullquote -->
	<figure class="wp-block-pullquote"><blockquote><p><strong>Pullquote. </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><cite>Guy Fawkes.</cite></blockquote></figure>
	<!-- /wp:pullquote --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:quote -->
	<blockquote class="wp-block-quote"><p><strong>Quote Block. </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><cite>Guy Fawkes.</cite></blockquote>
	<!-- /wp:quote --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --></div>
	<!-- /wp:c9-blocks/grid -->

	<!-- wp:c9-blocks/grid {"instanceId":2,"rows":3,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->
	<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:separator -->
	<hr class="wp-block-separator"/>
	<!-- /wp:separator -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading Typography","type":"c9-txl display-","textAlign":"center"} -->
	<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-1">C9 Heading Typography</h1></div>
	<!-- /wp:c9-blocks/heading --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container -->

	<!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal"} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"C9  Heading H1","subheading":"subheading","addSubheading":true} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h">C9  Heading H1</h1><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H2","subheading":"subheading","addSubheading":true,"tagLevel":2} -->
	<div class="section-heading c9-heading text-left"><h2 class="c9-h">C9 Heading H2</h2><div class="c9-h h2"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H3","subheading":"subheading","addSubheading":true,"tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">C9 Heading H3</h3><div class="c9-h h3"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H4","subheading":"subheading","addSubheading":true,"tagLevel":4} -->
	<div class="section-heading c9-heading text-left"><h4 class="c9-h">C9 Heading H4</h4><div class="c9-h h4"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H5","subheading":"subheading","addSubheading":true,"tagLevel":5} -->
	<div class="section-heading c9-heading text-left"><h5 class="c9-h">C9 Heading H5</h5><div class="c9-h h5"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H6","subheading":"subheading","addSubheading":true,"tagLevel":6} -->
	<div class="section-heading c9-heading text-left"><h6 class="c9-h">C9 Heading H6</h6><div class="c9-h h6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"C9 Subheading H1","subheading":"subheading","addSubheading":true,"type":"c9-sh subhead-h"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-sh">C9 Subheading H1</h1><div class="c9-sh subhead-h1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H2","subheading":"subheading","addSubheading":true,"tagLevel":2,"type":"c9-sh subhead-h"} -->
	<div class="section-heading c9-heading text-left"><h2 class="c9-sh">C9 Subheading H2</h2><div class="c9-sh subhead-h2"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H3","subheading":"subheading","addSubheading":true,"tagLevel":3,"type":"c9-sh subhead-h"} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-sh">C9 Subheading H3</h3><div class="c9-sh subhead-h3"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H4","subheading":"subheading","addSubheading":true,"tagLevel":4,"type":"c9-sh subhead-h"} -->
	<div class="section-heading c9-heading text-left"><h4 class="c9-sh">C9 Subheading H4</h4><div class="c9-sh subhead-h4"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H5","subheading":"subheading","addSubheading":true,"tagLevel":5,"type":"c9-sh subhead-h"} -->
	<div class="section-heading c9-heading text-left"><h5 class="c9-sh">C9 Subheading H5</h5><div class="c9-sh subhead-h5"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9  Subheading H6","subheading":"subheading","addSubheading":true,"tagLevel":6,"type":"c9-sh subhead-h"} -->
	<div class="section-heading c9-heading text-left"><h6 class="c9-sh">C9  Subheading H6</h6><div class="c9-sh subhead-h6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container -->

	<!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal"} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"C9 Heading H1 with .h6 Class","subheading":"Override Base Tag Style h6","addSubheading":true,"displayLevel":"6","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h h6">C9 Heading H1 with .h6 Class</h1><div class="c9-h h6"><small class="text-muted">&nbsp;Override Base Tag Style h6</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H2 with .h6 Class","subheading":"Override Base Tag Style h6","addSubheading":true,"tagLevel":2,"displayLevel":"6","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h2 class="c9-h h6">C9 Heading H2 with .h6 Class</h2><div class="c9-h h6"><small class="text-muted">&nbsp;Override Base Tag Style h6</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H3 with .h6 Class","subheading":"Override Base Tag Style h6","addSubheading":true,"tagLevel":3,"displayLevel":"6","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h h6">C9 Heading H3 with .h6 Class</h3><div class="c9-h h6"><small class="text-muted">&nbsp;Override Base Tag Style h6</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H4 with .h6 Class","subheading":"Override Base Tag Style h6","addSubheading":true,"tagLevel":4,"displayLevel":"6","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h4 class="c9-h h6">C9 Heading H4 with .h6 Class</h4><div class="c9-h h6"><small class="text-muted">&nbsp;Override Base Tag Style h6</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Heading H5 with .h6 Class","subheading":"Override Base Tag Style h6","addSubheading":true,"tagLevel":5,"displayLevel":"6","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h5 class="c9-h h6">C9 Heading H5 with .h6 Class</h5><div class="c9-h h6"><small class="text-muted">&nbsp;Override Base Tag Style h6</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9  Heading H6 with .h6 Class","subheading":"Override Base Tag Style h6","addSubheading":true,"tagLevel":6,"displayLevel":"6","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h6 class="c9-h h6">C9  Heading H6 with .h6 Class</h6><div class="c9-h h6"><small class="text-muted">&nbsp;Override Base Tag Style h6</small></div></div>
	<!-- /wp:c9-blocks/heading --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"C9 Subheading H1 with .H6 Class","subheading":"subheading","addSubheading":true,"displayLevel":"6","type":"c9-sh subhead-h","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-sh subhead-h6">C9 Subheading H1 with .H6 Class</h1><div class="c9-sh subhead-h6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H2 with .H6 Class","subheading":"subheading","addSubheading":true,"tagLevel":2,"displayLevel":"6","type":"c9-sh subhead-h","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h2 class="c9-sh subhead-h6">C9 Subheading H2 with .H6 Class</h2><div class="c9-sh subhead-h6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H3 with .H6 Class","subheading":"subheading","addSubheading":true,"tagLevel":3,"displayLevel":"6","type":"c9-sh subhead-h","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-sh subhead-h6">C9 Subheading H3 with .H6 Class</h3><div class="c9-sh subhead-h6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H4 with .H6 Class","subheading":"subheading","addSubheading":true,"tagLevel":4,"displayLevel":"6","type":"c9-sh subhead-h","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h4 class="c9-sh subhead-h6">C9 Subheading H4 with .H6 Class</h4><div class="c9-sh subhead-h6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H5 with .H6 Class","subheading":"subheading","addSubheading":true,"tagLevel":5,"displayLevel":"6","type":"c9-sh subhead-h","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h5 class="c9-sh subhead-h6">C9 Subheading H5 with .H6 Class</h5><div class="c9-sh subhead-h6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Subheading H6 with .H6 Class","subheading":"subheading","addSubheading":true,"tagLevel":6,"displayLevel":"6","type":"c9-sh subhead-h","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h6 class="c9-sh subhead-h6">C9 Subheading H6 with .H6 Class</h6><div class="c9-sh subhead-h6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --></div>
	<!-- /wp:c9-blocks/grid -->

	<!-- wp:c9-blocks/grid {"instanceId":3,"containerHue":"#262626"} -->
	<div class="c9-grid p-5 c9-scroll" style="min-height:20vh;background-color:rgba(38,38,38,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","overlayHue":"#ffffff","overlayOpacity":10,"blendMode":"normal","minScreenHeight":0,"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->
	<div class="container-narrow c9-column-container p-5 c9-scroll c9-layout-columns-1 one-column"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":0,"autoSlide":false,"url":["https://c9.covertnine.com/wp-content/uploads/2020/08/widescreen-homepage-hero-1920x1200-v2-1024x661.jpg","https://c9.covertnine.com/wp-content/uploads/2020/08/widescreen-homepage-hero-1920x1200-v2-1024x661.jpg","https://c9.covertnine.com/wp-content/uploads/2020/08/widescreen-homepage-hero-1920x1200-v2-1024x661.jpg"],"id":[2730,2730,2730],"captionTitle":["Slide Two Caption","Slide Label"],"captionContent":["Slide Caption two label","Slide Caption"],"isResponsive":true,"slideMaxHeight":747,"verticalAlign":"center"} -->
	<div id="c9-image-carousel-indicator-0" class="c9-image-carousel carousel slide container" data-ride="carousel" data-interval="false" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner c9-is-vertically-aligned-center"><div class="carousel-item active"><img src="https://c9.covertnine.com/wp-content/uploads/2020/08/widescreen-homepage-hero-1920x1200-v2-1024x661.jpg" class="d-block w-100 wp-image-2730"/><div class="carousel-caption d-none d-md-block"><h5>Slide Two Caption</h5><p>Slide Caption two label</p></div></div><div class="carousel-item"><img src="https://c9.covertnine.com/wp-content/uploads/2020/08/widescreen-homepage-hero-1920x1200-v2-1024x661.jpg" class="d-block w-100 wp-image-2730"/><div class="carousel-caption d-none d-md-block"><h5>Slide Label</h5><p>Slide Caption</p></div></div><div class="carousel-item"><img src="https://c9.covertnine.com/wp-content/uploads/2020/08/widescreen-homepage-hero-1920x1200-v2-1024x661.jpg" class="d-block w-100 wp-image-2730"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>
	<!-- /wp:c9-blocks/image-carousel -->

	<!-- wp:heading {"level":3} -->
	<h3>C9 Image Carousel Block</h3>
	<!-- /wp:heading -->

	<!-- wp:paragraph -->
	<p>Mauris malesuada condimentum metus, ac elementum neque auctor vitae. Vivamus in turpis quis dolor pulvinar gravida eget ut augue. Cras facilisis, risus et pretium convallis, magna libero rutrum neque, dignissim viverra augue ante at nunc. </p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph -->
	<p>Donec hendrerit at elit id eleifend. Sed scelerisque metus venenatis, tristique enim a, aliquam felis. Nam a bibendum ligula. </p>
	<!-- /wp:paragraph -->

	<!-- wp:paragraph -->
	<p>Proin accumsan sagittis tortor vitae scelerisque. Aliquam sagittis elit eget nisl blandit, in hendrerit turpis condimentum. Ut id euismod odio. Nunc laoreet mi at nulla venenatis efficitur. Nunc scelerisque odio ut ipsum convallis fermentum. Mauris eu quam eget nibh finibus rhoncus vitae nec lorem. Suspendisse congue orci mi, vitae fringilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. Suspendisse posuere metus eget lectus consectetur dapibus euismod ut lectus. Phasellus id efficitur quam.</p>
	<!-- /wp:paragraph -->

	<!-- wp:separator -->
	<hr class="wp-block-separator"/>
	<!-- /wp:separator -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Vertical Tabs","type":"c9-txl display-","textAlign":"center"} -->
	<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-1">C9 Vertical Tabs</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/vertical-tabs {"tabsData":[{"slug":"tab-1","title":"Tab 1"},{"slug":"tab-2","title":"Tab 2"},{"slug":"tab-3","title":"Tab 3"},{"slug":"tab-4","title":"Tab 4"}],"instanceId":0,"tabContentBackgroundColor":"#f4f4f4"} -->
	<div class="c9-vertical-tabs row" data-tab-active="tab-1"><div class="col-xs-12 col-sm-3"><div class="nav flex-column nav-pills" role="tablist"><a data-toggle="pill" role="tab" href="#vtab-tab-1-0" class="nav-link active" id="tab-button-tab-1">Tab 1</a><a data-toggle="pill" role="tab" href="#vtab-tab-2-0" class="nav-link" id="tab-button-tab-2">Tab 2</a><a data-toggle="pill" role="tab" href="#vtab-tab-3-0" class="nav-link" id="tab-button-tab-3">Tab 3</a><a data-toggle="pill" role="tab" href="#vtab-tab-4-0" class="nav-link" id="tab-button-tab-4">Tab 4</a></div></div><div class="col-xs-12 col-sm-9"><div class="c9-tabs-content tab-content" style="background-color:#f4f4f4"><!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-1","tabActive":"tab-1","id":0} -->
	<!-- wp:c9-blocks/heading {"heading":"Tab One Heading","tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">Tab One Heading</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>Mauris malesuada condimentum metus, ac elementum neque auctor vitae. Vivamus in turpis quis dolor pulvinar gravida eget ut augue. Cras facilisis, risus et pretium convallis, magna libero rutrum neque, dignissim viverra augue ante at nunc. Donec hendrerit at elit id eleifend. Sed scelerisque metus venenatis, tristique enim a, aliquam felis. Nam a bibendum ligula. Proin accumsan sagittis tortor vitae scelerisque. </p>
	<!-- /wp:paragraph -->
	<!-- /wp:c9-blocks/vertical-tabs-tab -->

	<!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-2","tabActive":"tab-1","id":0} -->
	<!-- wp:c9-blocks/heading {"heading":"Tab Two Heading","tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">Tab Two Heading</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>Mauris malesuada condimentum metus, ac elementum neque auctor vitae. Vivamus in turpis quis dolor pulvinar gravida eget ut augue. Cras facilisis, risus et pretium convallis, magna libero rutrum neque, dignissim viverra augue ante at nunc. ngilla urna aliquet malesuada. Morbi eu metus viverra, sodales ligula sit amet, consectetur purus. Suspendisse posuere metus eget lectus consectetur dapibus euismod ut lectus. Phasellus id efficitur quam.</p>
	<!-- /wp:paragraph -->
	<!-- /wp:c9-blocks/vertical-tabs-tab -->

	<!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-3","tabActive":"tab-1","id":0} -->
	<!-- wp:c9-blocks/heading {"heading":"Tab Three Heading","tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">Tab Three Heading</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>Mauris malesuada bus euismod ut lectus. Phasellus id efficitur quam. Mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Mus mauris vitae ultricies leo. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.&nbsp;Mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Mus mauris vitae ultricies leo. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.&nbsp;Mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Mus mauris vitae ultricies leo. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.&nbsp;</p>
	<!-- /wp:paragraph -->
	<!-- /wp:c9-blocks/vertical-tabs-tab -->

	<!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-4","tabActive":"tab-1","id":0} -->
	<!-- wp:c9-blocks/heading {"heading":"Tab Four Heading","tagLevel":3} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h">Tab Four Heading</h3></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>Mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Mus mauris vitae ultricies leo. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.&nbsp;Mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Mus mauris vitae ultricies leo. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.&nbsp;Mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Mus mauris vitae ultricies leo. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.&nbsp;</p>
	<!-- /wp:paragraph -->
	<!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>
	<!-- /wp:c9-blocks/vertical-tabs --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --></div>
	<!-- /wp:c9-blocks/grid -->

	<!-- wp:c9-blocks/grid {"instanceId":4,"rows":2} -->
	<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"C9 Tables","type":"c9-txl display-","textAlign":"center"} -->
	<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-1">C9 Tables</h1></div>
	<!-- /wp:c9-blocks/heading --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container -->

	<!-- wp:c9-blocks/column-container {"align":"wide","columns":2,"columnsGap":10,"layout":"c9-2-col-equal"} -->
	<div class="container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-10 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:paragraph -->
	<p><strong>Default Table Style</strong></p>
	<!-- /wp:paragraph -->

	<!-- wp:table -->
	<figure class="wp-block-table"><table><thead><tr><th>Label</th><th>Title</th><th>Price</th></tr></thead><tbody><tr><td>First Row</td><td>Title of First Row</td><td>$4.20</td></tr><tr><td>Second Row</td><td>Second Row Title</td><td>$104.12</td></tr><tr><td>Third Row</td><td>Third Row Title</td><td>$0.99</td></tr><tr><td>Fourth Row</td><td>Fourth Row Title</td><td>$1.35</td></tr><tr><td>Fifth Row</td><td>Title of 5th Row</td><td>$2.31</td></tr></tbody><tfoot><tr><td>Total</td><td></td><td>$232.04</td></tr></tfoot></table><figcaption>Table Caption</figcaption></figure>
	<!-- /wp:table --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:paragraph -->
	<p><strong>Stripes Table Style</strong></p>
	<!-- /wp:paragraph -->

	<!-- wp:table {"className":"is-style-stripes"} -->
	<figure class="wp-block-table is-style-stripes"><table><thead><tr><th>Label</th><th>Title</th><th>Price</th></tr></thead><tbody><tr><td>First Row</td><td>Title of First Row</td><td>$99.99</td></tr><tr><td>Second Row</td><td>Second Row Title</td><td>$104.12</td></tr><tr><td>Third Row</td><td>Third Row Title</td><td>$0.99</td></tr><tr><td>Fourth Row</td><td>Fourth Row Title</td><td>$1.35</td></tr><tr><td>Fifth Row</td><td>Title of 5th Row</td><td>$4.20</td></tr></tbody><tfoot><tr><td>Total</td><td></td><td>$232.04</td></tr></tfoot></table><figcaption>Table Caption</figcaption></figure>
	<!-- /wp:table --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --></div>
	<!-- /wp:c9-blocks/grid -->

	<!-- wp:c9-blocks/posts-grid {"instanceId":0} -->
	<div class="c9-posts-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/post-grid {"displayPostDate":true,"displayPostExcerpt":true,"displayPostAuthor":true,"displayPostLink":true,"displaySectionTitle":true,"postTitleTag":"h4","columns":3,"sectionTitle":"C9 Posts Grid Block","imageSize":"c9-feature-medium-crop"} /--></div>
	<!-- /wp:c9-blocks/posts-grid -->

	<!-- wp:c9-blocks/grid {"instanceId":5} -->
	<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","minScreenHeight":0} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:separator -->
	<hr class="wp-block-separator"/>
	<!-- /wp:separator -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Carousel","type":"c9-txl display-","textAlign":"center"} -->
	<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-1">C9 Carousel</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/carousel {"instanceId":0,"autoSlide":false,"slideMaxHeight":-1} -->
	<div id="c9-carousel-indicator-0" class="c9-carousel carousel slide container" dataride="carousel" style="height:-1px"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->
	<div class="c9-carousel-slide carousel-item active"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":10,"layout":"c9-2-col-equal","verticalAlign":"center","minScreenHeight":0} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-10 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
	<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:embed {"url":"https://www.youtube.com/watch?v=zu3JyJr5eeM","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
	<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
	https://www.youtube.com/watch?v=zu3JyJr5eeM
	</div></figure>
	<!-- /wp:embed --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
	<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"C9 Work Theme"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h">C9 Work Theme</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>A reel of content editing with C9 Blocks using the <a href="https://wordpress.org/themes/c9-work" target="_blank" rel="noreferrer noopener">C9 Work</a> Theme that you can download for free on WordPress.org</p>
	<!-- /wp:paragraph -->

	<!-- wp:spacer {"height":30} -->
	<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:button -->
	<div class="wp-block-button"><a class="wp-block-button__link" href="https://www.youtube.com/watch?v=zu3JyJr5eeM">Fullscreen Video</a></div>
	<!-- /wp:button --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --></div>
	<!-- /wp:c9-blocks/carousel-slide -->

	<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->
	<div class="c9-carousel-slide carousel-item"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal","minScreenHeight":0} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Video Title"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h">Video Title</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>Sliders with any content.</p>
	<!-- /wp:paragraph -->

	<!-- wp:button -->
	<div class="wp-block-button"><a class="wp-block-button__link" href="https://www.youtube.com/watch?v=Q0CbN8sfihY">YouTube Link</a></div>
	<!-- /wp:button --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:embed {"url":"https://www.youtube.com/watch?v=Q0CbN8sfihY","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
	<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
	https://www.youtube.com/watch?v=Q0CbN8sfihY
	</div></figure>
	<!-- /wp:embed --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --></div>
	<!-- /wp:c9-blocks/carousel-slide -->

	<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->
	<div class="c9-carousel-slide carousel-item"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal","minScreenHeight":0} -->
	<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:embed {"url":"https://www.youtube.com/watch?v=sGbxmsDFVnE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
	<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
	https://www.youtube.com/watch?v=sGbxmsDFVnE
	</div></figure>
	<!-- /wp:embed --></div></div>
	<!-- /wp:c9-blocks/column -->

	<!-- wp:c9-blocks/column -->
	<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Video Title"} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h">Video Title</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:paragraph -->
	<p>Slide three with YouTube Video</p>
	<!-- /wp:paragraph -->

	<!-- wp:button -->
	<div class="wp-block-button"><a class="wp-block-button__link" href="https://www.youtube.com/watch?v=sGbxmsDFVnE">Watch Fullscreen Video</a></div>
	<!-- /wp:button --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --></div>
	<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>
	<!-- /wp:c9-blocks/carousel -->

	<!-- wp:spacer -->
	<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:c9-blocks/heading {"heading":"XL Heading H1","subheading":"subheading","addSubheading":true,"type":"c9-txl display-","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-txl display-1">XL Heading H1</h1><div class="c9-txl display-1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"XL Heading H2","subheading":"subheading","addSubheading":true,"tagLevel":2,"type":"c9-txl display-"} -->
	<div class="section-heading c9-heading text-left"><h2 class="c9-txl display-2">XL Heading H2</h2><div class="c9-txl display-2"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"XL Heading H3","subheading":"subheading","addSubheading":true,"tagLevel":3,"type":"c9-txl display-"} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-txl display-3">XL Heading H3</h3><div class="c9-txl display-3"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"XL Heading H4","subheading":"subheading","addSubheading":true,"tagLevel":4,"type":"c9-txl display-"} -->
	<div class="section-heading c9-heading text-left"><h4 class="c9-txl display-4">XL Heading H4</h4><div class="c9-txl display-4"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"XL Heading H5","subheading":"subheading","addSubheading":true,"tagLevel":5,"type":"c9-txl display-"} -->
	<div class="section-heading c9-heading text-left"><h5 class="c9-txl display-5">XL Heading H5</h5><div class="c9-txl display-5"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"XL Heading H6","subheading":"subheading","addSubheading":true,"tagLevel":6,"type":"c9-txl display-"} -->
	<div class="section-heading c9-heading text-left"><h6 class="c9-txl display-6">XL Heading H6</h6><div class="c9-txl display-6"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 H1 with .H1 Class","subheading":"subheading","addSubheading":true,"displayLevel":"1","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h1 class="c9-h h1">C9 H1 with .H1 Class</h1><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 H2 with .H1 Class","subheading":"subheading","addSubheading":true,"tagLevel":2,"displayLevel":"1","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h2 class="c9-h h1">C9 H2 with .H1 Class</h2><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 H3 with .H1 Class","subheading":"subheading","addSubheading":true,"tagLevel":3,"displayLevel":"1","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h3 class="c9-h h1">C9 H3 with .H1 Class</h3><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 H4 with .H1 Class","subheading":"subheading","addSubheading":true,"tagLevel":4,"displayLevel":"1","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h4 class="c9-h h1">C9 H4 with .H1 Class</h4><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 H5 with .H1 Class","subheading":"subheading","addSubheading":true,"tagLevel":5,"displayLevel":"1","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h5 class="c9-h h1">C9 H5 with .H1 Class</h5><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/heading {"heading":"C9 H6 with .H1 Class","subheading":"subheading","addSubheading":true,"tagLevel":6,"displayLevel":"1","overrideStyle":true} -->
	<div class="section-heading c9-heading text-left"><h6 class="c9-h h1">C9 H6 with .H1 Class</h6><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:spacer -->
	<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:separator -->
	<hr class="wp-block-separator"/>
	<!-- /wp:separator -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Social Share","type":"c9-txl display-","textAlign":"center"} -->
	<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-1">C9 Social Share</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/social-share {"linkedin":true,"pinterest":true,"email":true,"reddit":true,"shareAlignment":"center","shareButtonStyle":"c9-share-icon-text","shareButtonSize":"c9-share-size-small"} /-->

	<!-- wp:c9-blocks/social-share {"linkedin":true,"pinterest":true,"email":true,"reddit":true,"shareAlignment":"center","shareButtonStyle":"c9-share-icon-text"} /-->

	<!-- wp:c9-blocks/social-share {"linkedin":true,"pinterest":true,"email":true,"reddit":true,"shareAlignment":"center","shareButtonStyle":"c9-share-icon-text","shareButtonSize":"c9-share-size-large","shareButtonColor":"c9-share-color-social"} /-->

	<!-- wp:c9-blocks/social-share {"linkedin":true,"pinterest":true,"email":true,"reddit":true,"shareAlignment":"center","shareButtonSize":"c9-share-size-small"} /-->

	<!-- wp:c9-blocks/social-share {"linkedin":true,"pinterest":true,"email":true,"reddit":true,"shareAlignment":"center"} /-->

	<!-- wp:c9-blocks/social-share {"linkedin":true,"pinterest":true,"email":true,"reddit":true,"shareAlignment":"center","shareButtonSize":"c9-share-size-large","shareButtonColor":"c9-share-color-social"} /-->

	<!-- wp:spacer -->
	<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:separator -->
	<hr class="wp-block-separator"/>
	<!-- /wp:separator -->

	<!-- wp:c9-blocks/heading {"heading":"C9 Toggles","type":"c9-txl display-","textAlign":"center"} -->
	<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-1">C9 Toggles</h1></div>
	<!-- /wp:c9-blocks/heading -->

	<!-- wp:c9-blocks/toggles {"toggleCount":4,"instanceId":0,"className":"is-style-toggles-small"} -->
	<div class="c9-toggles is-style-toggles-small accordion" id="accordion-0"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":0} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-0" data-toggle="collapse" data-target="#c9-toggles-collapse1-0"><div class="mb-0"><span class="c9-toggles-toggle-label">1. Tog Togg Togggle Toggle Item</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-0" data-parent="#accordion-0"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle -->

	<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":0} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-0" data-toggle="collapse" data-target="#c9-toggles-collapse2-0"><div class="mb-0"><span class="c9-toggles-toggle-label">2. Tig Tog Big Bog Wig Wog Toggle Item</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-0" data-parent="#accordion-0"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle -->

	<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":0} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-0" data-toggle="collapse" data-target="#c9-toggles-collapse3-0"><div class="mb-0"><span class="c9-toggles-toggle-label">3. Toggliest Toggler Toggle Item</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-0" data-parent="#accordion-0"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle -->

	<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":0} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-0" data-toggle="collapse" data-target="#c9-toggles-collapse4-0"><div class="mb-0"><span class="c9-toggles-toggle-label">4. Toggle Items are all responsive  by default Toggly Toggle Item</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-0" data-parent="#accordion-0"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle --></div>
	<!-- /wp:c9-blocks/toggles -->

	<!-- wp:c9-blocks/toggles {"toggleCount":5,"instanceId":1,"className":"is-style-default"} -->
	<div class="c9-toggles is-style-default accordion" id="accordion-1"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":1} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-1" data-toggle="collapse" data-target="#c9-toggles-collapse1-1"><div class="mb-0"><span class="c9-toggles-toggle-label">Big Tog Toggle</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-1" data-parent="#accordion-1"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle -->

	<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":1} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-1" data-toggle="collapse" data-target="#c9-toggles-collapse2-1"><div class="mb-0"><span class="c9-toggles-toggle-label">Another Big Tog Toggle that looks good in a group.</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-1" data-parent="#accordion-1"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle -->

	<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":1} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-1" data-toggle="collapse" data-target="#c9-toggles-collapse3-1"><div class="mb-0"><span class="c9-toggles-toggle-label">Especially for big long hard questions that need more space.</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-1" data-parent="#accordion-1"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle -->

	<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":1} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-1" data-toggle="collapse" data-target="#c9-toggles-collapse4-1"><div class="mb-0"><span class="c9-toggles-toggle-label">Responsive for all devices.</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-1" data-parent="#accordion-1"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle -->

	<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":5,"id":1} -->
	<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading5-1" data-toggle="collapse" data-target="#c9-toggles-collapse5-1"><div class="mb-0"><span class="c9-toggles-toggle-label">Type /c9 to view the full list of C9 Blocks after activation</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse5-1" data-parent="#accordion-1"><div></div></div></div>
	<!-- /wp:c9-blocks/toggles-toggle --></div>
	<!-- /wp:c9-blocks/toggles --></div></div>
	<!-- /wp:c9-blocks/column --></div></div>
	<!-- /wp:c9-blocks/column-container --></div>
	<!-- /wp:c9-blocks/grid -->

	<!-- wp:spacer -->
	<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:cover {"url":"https://c9.covertnine.com/wp-content/uploads/2020/09/20190619-disney-alaska-vacation-171-2.jpg","id":2791,"align":"wide"} -->
	<div class="wp-block-cover alignwide has-background-dim" style="background-image:url(https://c9.covertnine.com/wp-content/uploads/2020/09/20190619-disney-alaska-vacation-171-2.jpg)"><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->
	<p class="has-text-align-center has-large-font-size">Cover Block Wide</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:cover -->

	<!-- wp:heading {"textAlign":"center"} -->
	<h2 class="has-text-align-center">Call To Action Bar</h2>
	<!-- /wp:heading -->

	<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"Sign Up","buttonSize":"c9-button-size-large","ctaWidth":"container-fluid","ctaBackgroundColor":"#f8f8f8","align":"full","fontSize":"small"} -->
	<div style="background-color:rgba(248,248,248,1);text-align:left" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text c9-sh has-small-font-size"><p>Sign up for emails to get notified about our upcoming releases.</p></div></div><div class="c9-cta-button col-12 col-md-4"><a href="#" target="_self" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-square c9-button-size-large" style="color:#ffffff">Sign Up</a></div></div></div>
	<!-- /wp:c9-blocks/cta -->

	<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"Sign Up","buttonTextColor":"#21a77a","buttonSize":"c9-button-size-extralarge","buttonShape":"outline","ctaWidth":"container-fluid","ctaBackgroundColor":"#f8f8f8","align":"full","fontSize":"normal"} -->
	<div style="background-color:rgba(248,248,248,1);text-align:left" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text c9-sh has-normal-font-size"><p>Sign up for emails to get notified about our upcoming releases.</p></div></div><div class="c9-cta-button col-12 col-md-4"><a href="#" target="_self" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-outline c9-button-size-extralarge" style="color:#21a77a">Sign Up</a></div></div></div>
	<!-- /wp:c9-blocks/cta -->

	<!-- wp:c9-blocks/cta {"type":"c9-h","buttonText":"Sign Up","buttonTextColor":"#272727","buttonSize":"c9-button-size-extralarge","buttonShape":"outline","ctaWidth":"container-fluid","ctaBackgroundColor":"#f8f8f8","align":"full","fontSize":"medium"} -->
	<div style="background-color:rgba(248,248,248,1);text-align:left" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text c9-h has-medium-font-size"><p>Sign up for emails to get notified about our upcoming releases.</p></div></div><div class="c9-cta-button col-12 col-md-4"><a href="#" target="_self" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-outline c9-button-size-extralarge" style="color:#272727">Sign Up</a></div></div></div>
	<!-- /wp:c9-blocks/cta -->

	<!-- wp:c9-blocks/cta {"type":"c9-h","buttonText":"Sign Up","buttonTextColor":"#272727","buttonSize":"c9-button-size-small","buttonShape":"outline","ctaWidth":"container-fluid","ctaBackgroundColor":"#f8f8f8","align":"full","fontSize":"large"} -->
	<div style="background-color:rgba(248,248,248,1);text-align:left" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text c9-h has-large-font-size"><p>Sign up for emails to get notified about our upcoming releases.</p></div></div><div class="c9-cta-button col-12 col-md-4"><a href="#" target="_self" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-outline c9-button-size-small" style="color:#272727">Sign Up</a></div></div></div>
	<!-- /wp:c9-blocks/cta -->

	<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"Sign Up","buttonTextColor":"#272727","buttonShape":"outline","ctaWidth":"container-fluid","ctaBackgroundColor":"#f8f8f8","align":"full","customFontSize":21} -->
	<div style="background-color:rgba(248,248,248,1);text-align:left" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text c9-sh" style="font-size:21px"><p>Sign up for emails to get notified about our upcoming releases.</p></div></div><div class="c9-cta-button col-12 col-md-4"><a href="#" target="_self" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-outline c9-button-size-medium" style="color:#272727">Sign Up</a></div></div></div>
	<!-- /wp:c9-blocks/cta -->

	<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"Sign Up","buttonSize":"c9-button-size-extralarge","buttonShape":"round","ctaWidth":"container-fluid","ctaBackgroundColor":"#f8f8f8","align":"full","fontSize":"huge"} -->
	<div style="background-color:rgba(248,248,248,1);text-align:left" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text c9-sh has-huge-font-size"><p>Sign up for emails to get notified about our upcoming releases.</p></div></div><div class="c9-cta-button col-12 col-md-4"><a href="#" target="_self" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-round c9-button-size-extralarge" style="color:#ffffff">Sign Up</a></div></div></div>
	<!-- /wp:c9-blocks/cta -->

	<!-- wp:spacer {"height":31} -->
	<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:c9-blocks/cta {"type":"c9-p","buttonText":"Sign Up","buttonBackgroundColor":"#000000","buttonSize":"c9-button-size-extralarge","ctaBackgroundColor":"#f8f8f8","align":"wide"} -->
	<div style="background-color:rgba(248,248,248,1);text-align:left" class="c9-cta c9-block-cta container alignwide p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text c9-p"><p>Wide orientation with background setting options are available from WordPress Inspector in backend. Sign up for emails to get notified about our upcoming releases.</p></div></div><div class="c9-cta-button col-12 col-md-4"><a href="#" target="_self" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-square c9-button-size-extralarge" style="color:#ffffff;background-color:#000000">Sign Up</a></div></div></div>
	<!-- /wp:c9-blocks/cta -->

	<!-- wp:spacer {"height":31} -->
	<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:cover {"url":"https://c9.covertnine.com/wp-content/uploads/2020/10/30055127781_732e6b081b_o.jpg","id":3053,"align":"full"} -->
	<div class="wp-block-cover alignfull has-background-dim" style="background-image:url(https://c9.covertnine.com/wp-content/uploads/2020/10/30055127781_732e6b081b_o.jpg)"><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->
	<p class="has-text-align-center has-large-font-size">Cover Block Full</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:cover -->

	<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"Sign Up","buttonBackgroundColor":"#000000","buttonSize":"c9-button-size-small","ctaWidth":"container-fluid","ctaBackgroundColor":"#f8f8f8","align":"full"} -->
	<div style="background-color:rgba(248,248,248,1);text-align:left" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text c9-sh"><p>Full orientation with background setting options are available from WordPress Inspector in backend. Sign up for emails to get notified about our upcoming releases.</p></div></div><div class="c9-cta-button col-12 col-md-4"><a href="#" target="_self" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-square c9-button-size-small" style="color:#ffffff;background-color:#000000">Sign Up</a></div></div></div>
	<!-- /wp:c9-blocks/cta -->`
};
