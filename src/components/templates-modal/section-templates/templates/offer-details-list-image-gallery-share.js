import Icon from "../../../../../assets/section-template-icons/offer-details-list-image-gallery-share.svg";

export default {
	icon: Icon,
	title: "Offer Details List + Image Gallery + Share",
	markup:
		`<!-- wp:c9-blocks/grid {"instanceId":0,"rows":2,"containerPadding":{"linked":true,"icon":"admin-links","top":"5","bottom":"5","left":"5","right":"5"}} -->
		<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":8,"layout":"c9-2-col-equal"} -->
		<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-8 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Offer","subheading":"Details","addSubheading":true,"tagLevel":3} -->
		<div class="section-heading c9-heading text-left"><h3 class="c9-h">Offer</h3><div class="c9-h h3"><small class="text-muted">&nbsp;Details</small></div></div>
		<!-- /wp:c9-blocks/heading -->

		<!-- wp:list {"ordered":true} -->
		<ol><li>Vivamus sit amet leo aliquam, fermentum justo et, euismod felis amet leo aliquam</li><li> Interdum et malesuada fames ac ante ipsum primis in faucibus alesuada fames ac ante </li><li> Vivamus viverra augue efficitur semper com modoalesuada fames ac ante </li><li>Donec sollicitudin eros id turpis fermentum vehi alesuada fames ac ante  cula</li></ol>
		<!-- /wp:list -->

		<!-- wp:spacer {"height":30} -->
		<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
		<!-- /wp:spacer -->

		<!-- wp:button {"align":"center"} -->
		<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">Button Link</a></div>
		<!-- /wp:button --></div></div>
		<!-- /wp:c9-blocks/column -->

		<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->
		<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":0,"url":["https://cortex.covertnine.com/wp-content/uploads/2019/10/art-2.jpg","https://cortex.covertnine.com/wp-content/uploads/2019/10/art-3.jpg","https://cortex.covertnine.com/wp-content/uploads/2019/10/art-1.jpg"],"id":[437,438,436],"isResponsive":true} -->
		<div id="c9-image-carousel-indicator-0" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="https://cortex.covertnine.com/wp-content/uploads/2019/10/art-2.jpg" class="d-block w-100 wp-image-437"/></div><div class="carousel-item"><img src="https://cortex.covertnine.com/wp-content/uploads/2019/10/art-3.jpg" class="d-block w-100 wp-image-438"/></div><div class="carousel-item"><img src="https://cortex.covertnine.com/wp-content/uploads/2019/10/art-1.jpg" class="d-block w-100 wp-image-436"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>
		<!-- /wp:c9-blocks/image-carousel --></div></div>
		<!-- /wp:c9-blocks/column --></div></div>
		<!-- /wp:c9-blocks/column-container -->

		<!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","containerMargin":{"linked":false,"top":"5","bottom":"-1","left":"5","right":"5","icon":"editor-unlink"}} -->
		<div class="container-narrow c9-column-container mt-5 c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->
		<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Know someone who would love this thing? Tell em!","tagLevel":2,"displayLevel":"3","type":"c9-txl display-","textAlign":"center","weight":"bold","overrideStyle":true} -->
		<div class="section-heading c9-heading text-center"><h2 class="c9-txl display-3 font-weight-bold">Know someone who would love this thing? Tell em!</h2></div>
		<!-- /wp:c9-blocks/heading -->

		<!-- wp:spacer {"height":30} -->
		<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
		<!-- /wp:spacer -->

		<!-- wp:c9-blocks/social-share {"linkedin":true,"email":true,"reddit":true,"shareAlignment":"center","shareButtonSize":"c9-share-size-large","shareButtonColor":"c9-share-color-social"} /--></div></div>
		<!-- /wp:c9-blocks/column --></div></div>
		<!-- /wp:c9-blocks/column-container --></div>
		<!-- /wp:c9-blocks/grid -->`
};
