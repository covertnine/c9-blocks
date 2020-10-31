import Icon from "../../../../../assets/page-template-icons/contact-short.svg";

export default {
	icon: Icon,
	type: "consideration",
	title: "Contact Short Page",
	description: `Lead people to the right person, the right way. If you only have a single location or minimal contact information, then this is the landing page that gets messages into your inbox.`,
	recommended: `Large heading, address, contact phone, placeholder for contact form, contact button for live-chat, embedded map with an address`,
	markup: `<!-- wp:c9-blocks/grid {"instanceId":0,"containerImgURL":"https://c9.covertnine.com/wp-content/uploads/2020/09/20190621-disney-alaska-vacation-207-2.jpg","containerHue":"#3f3f3f","overlayHue":"#0b0b0b","overlayOpacity":8,"blendMode":"color-burn","minScreenHeight":27,"focalPoint":{"x":"0.58","y":"0.67"}} -->
<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:27vh;background-color:rgba(63,63,63,1)"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","verticalAlign":"center","minScreenHeight":0} -->
<div class="container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Get in touch","subheading":"We're here to help","addSubheading":true,"displayLevel":"2","type":"c9-txl display-","textColor":"#ffffff","textAlign":"center","overrideStyle":true} -->
<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-2" style="color:#ffffff">Get in touch</h1><div class="c9-txl display-2"><small class="text-muted">&nbsp;We're here to help</small></div></div>
<!-- /wp:c9-blocks/heading --></div></div>
<!-- /wp:c9-blocks/column --></div></div>
<!-- /wp:c9-blocks/column-container --><div class="c9-overlay-container" style="background-color:rgba(11,11,11,.8);mix-blend-mode:color-burn"></div><div class="c9-image-container c9-image-mobile-size-cover" style="background-position:57.99999999999999% 67%;background-image:url(https://c9.covertnine.com/wp-content/uploads/2020/09/20190621-disney-alaska-vacation-207-2.jpg);background-repeat:no-repeat;background-size:cover"></div></div>
<!-- /wp:c9-blocks/grid -->

<!-- wp:c9-blocks/grid {"instanceId":1,"containerMargin":{"linked":true,"unit":"px","top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"}} -->
<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":6,"layout":"c9-2-col-wideleft","minScreenHeight":0,"containerMargin":{"linked":false,"top":"5","bottom":"-1","left":"-1","right":"-1","icon":"editor-unlink"},"containerPadding":{"linked":true,"top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"}} -->
<div class="container c9-column-container mt-5 c9-scroll c9-layout-columns-2 c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-6 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:group {"style":{"color":{"background":"#fafafa"}}} -->
<div class="wp-block-group has-background" style="background-color:#fafafa"><div class="wp-block-group__inner-container"><!-- wp:c9-blocks/heading {"heading":"Email Us Directly","subheading":"Response time 24/7","addSubheading":true,"tagLevel":3} -->
<div class="section-heading c9-heading text-left"><h3 class="c9-h">Email Us Directly</h3><div class="c9-h h3"><small class="text-muted">&nbsp;Response time 24/7</small></div></div>
<!-- /wp:c9-blocks/heading -->

<!-- wp:separator -->
<hr class="wp-block-separator"/>
<!-- /wp:separator -->

<!-- wp:html -->
<form id="contact" action="" method="post">
    <fieldset>
      <input class="d-block w-100 mb-3" placeholder="Your name" type="text" tabindex="1" required="" autofocus="">
    </fieldset>
    <fieldset>
      <input class="d-block w-100 mb-3" placeholder="Your Email Address" type="email" tabindex="2" required="">
    </fieldset>
    <fieldset>
      <input class="d-block w-100 mb-3" placeholder="Your Phone Number" type="tel" tabindex="3" required="">
    </fieldset>
    <fieldset>
      <input class="d-block w-100 mb-3" placeholder="Your Web Site starts with http://" type="url" tabindex="4" required="">
    </fieldset>
    <fieldset>
      <textarea class="d-block w-100 mb-3" placeholder="Type your Message Here...." tabindex="5" required=""></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
<!-- /wp:html --></div></div>
<!-- /wp:group --></div></div>
<!-- /wp:c9-blocks/column -->

<!-- wp:c9-blocks/column -->
<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Address","tagLevel":3} -->
<div class="section-heading c9-heading text-left"><h3 class="c9-h">Address</h3></div>
<!-- /wp:c9-blocks/heading -->

<!-- wp:paragraph -->
<p>100 N. Main St.<br>Suite 200<br>Chicago, IL 60666</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":50} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:c9-blocks/heading {"heading":"Support","tagLevel":3} -->
<div class="section-heading c9-heading text-left"><h3 class="c9-h">Support</h3></div>
<!-- /wp:c9-blocks/heading -->

<!-- wp:paragraph -->
<p><strong>Phone</strong> 888-555-0000</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":30} -->
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:button {"borderRadius":0,"align":"center","className":"is-style-outline"} -->
<div class="wp-block-button aligncenter is-style-outline"><a class="wp-block-button__link no-border-radius" href="#">live chat now</a></div>
<!-- /wp:button -->

<!-- wp:spacer {"height":50} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div></div>
<!-- /wp:c9-blocks/column --></div></div>
<!-- /wp:c9-blocks/column-container --></div>
<!-- /wp:c9-blocks/grid -->

<!-- wp:c9-blocks/grid {"instanceId":2,"containerHue":"#f4f4f4","minScreenHeight":30,"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->
<div class="c9-grid p-5 c9-scroll" style="min-height:30vh;background-color:rgba(244,244,244,1)"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal","verticalAlign":"center","overlayHue":"#ffffff","overlayOpacity":10,"blendMode":"normal","containerMargin":{"linked":true,"top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"},"containerPadding":{"linked":true,"top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"}} -->
<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal" style="min-height:10vh"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:html -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.925326227983!2d-87.63594088430501!3d41.8299060764073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c14278e92f5%3A0x2f864f668f4a90b8!2sGuaranteed%20Rate%20Field!5e0!3m2!1sen!2sus!4v1567193833384!5m2!1sen!2sus" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
<!-- /wp:html --></div></div>
<!-- /wp:c9-blocks/column -->

<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><strong>Headquarters</strong> (Not the bar)<br>100 N. Main St.<br>Suite 200<br>Chicago, IL</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:c9-blocks/column --></div></div>
<!-- /wp:c9-blocks/column-container --></div>
<!-- /wp:c9-blocks/grid -->`
};
