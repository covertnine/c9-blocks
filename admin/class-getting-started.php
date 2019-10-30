<?php
/**
 * Class for Getting Started View
 */
class C9_Block_Getting_Started {
	public function __construct( $tuts = [] ) {
		self::render( $tuts );
	}
	public static function render( $tuts ) {
		$assets = plugin_dir_url( __DIR__ ) . 'assets';
		ob_start();
		?>
		<style>
			#wpcontent {
				padding-left: 0;
				background: rgba(0,0,0,.88);
				font-size: 10px;
				background: url(/wp-content/plugins/c9-blocks/assets/wood-tile.jpg);
			}
			#wpcontent li {
				display: flex;
			}
			#wpcontent li:before {
				content: "";
				background-image: url(/wp-content/plugins/c9-blocks/assets/fa-icons/chevron-circle-right-solid.svg);
				background-size: 100%;
				background-repeat: no-repeat;
				background-position: center;
				width: 1em;
				margin-right: 5px;
			}
			section {
				width: 100%;
				box-sizing: border-box;
				background-origin: content-box;
				padding: 3vh 3vw;
			}
			h1,h2,h3,h4,h5,h6 {
				color: black;
				text-transform: uppercase;
				margin: 0;
				line-height: 1;
			}
			h2 {
				font-size: 4.2em;
				display: inline-block;
				margin-top: 0;
				margin-bottom: 1vh;
				padding-right: 15px;
				padding-left: 5px;
			}
			p {
				color: black;
			}
			.c9-heading {
				background: #C9292C;
				color: white
			}
			.c9-subheading {
				background: #141414;
				color: white;
			}
			.c9-heading, .c9-subheading {
				padding-top: 1vh;
				padding-bottom: 1vh;
			}
			.c9-admin-wrapper {
				width: 100%;
				overflow: hidden;
				padding: 0;
			}
			.c9-header {
				display: flex;
				align-items: center;
				padding: 5em;
				padding-bottom: 0;
			}
			.heading {
				font-size: 3.8em;
			}
			.c9-text-white {
				color: white;
			}
			.c9-admin-logo {
				height: 5.8em;
				width: auto;
				margin-right: 20px;
			}
			.c9-admin-hero {
				min-height: 80vh;
			}
			.c9-content-wrapper {
				width: 70%;
				padding-left: 5%;
				padding-top: 10%;
				padding-bottom: 2vh;
			}
			.c9-admin-hero h5 {
				font-size: 2em;
				font-weight: 800;
				width: 50%;
				line-height: 1.3;
				background: white;
			}
			.c9-admin-hero p {
				line-height: 2;
				width: 50%;
				background: white;
				margin: 2em 0;
			}
			.c9-click-preview {
				text-transform: uppercase;
				text-decoration: none;
				color: black;
				font-weight: 700;
				font-size: 1.8em;
				margin-bottom: 20px;
				position: relative;
			}
			.c9-click-preview:after {
				content: "";
				height: 1em;
				width: 1em;
				position: absolute;
				top: 1px;
				right: -1.5em;
				background-size: 100%;
				background-repeat: no-repeat;
				background-image: url('/wp-content/plugins/c9-blocks/assets/fa-icons/chevron-circle-right-solid.svg');
			}
			.c9-section-templates {
				background-image: linear-gradient(white, white);
				background-repeat: no-repeat;
				display: flex;
				padding-bottom: 0;
				padding-top: 10vh;
			}
			.c9-section-templates .c9-content-left {
				width: 30%;
			}
			.c9-section-templates .c9-content-left {
				box-sizing: border-box;
				padding-top: 10em;
				padding-left: 2.5em;
				padding-right: 2em;
				padding-bottom: 3.5em;
			}
			.c9-section-templates .c9-content-left h2 {
				padding-left: 0;
			}
			.c9-section-templates .c9-content-right {
				width: 70%;
			}
			.c9-section-examples {
				background-image: linear-gradient(white, white);
				background-repeat: no-repeat;
				text-align: center;
				padding-top: 0;
			}
			.c9-section-examples h2 {
				text-align: center;
				margin-top: 4vh;
				margin-bottom: 3vh;
			}
			.c9-section-examples-wrapper  {
				display: flex;
				align-items: center;
				justify-content: space-around;
				padding-bottom: 20px;
			}
			.c9-section-examples-wrapper  .c9-section-wrapper:first-child {
				padding-left: 20px;
			}
			.c9-section-examples-wrapper  .c9-section-wrapper:last-child {
				padding-right: 20px;
			}
			.c9-section-examples-wrapper  .c9-section-wrapper {
				width: 100%;
				padding: 10px;
			}
			.c9-section-examples-wrapper  .c9-section-wrapper img {
				width: 100%;
			}
			.c9-section-examples-wrapper  .c9-section-wrapper h5 {
				font-weight: 500;
				color: #576D7B;
				font-size: 1.5em;
				line-height: 1.2;
				margin-top: 10px;
				display: block;
				height: 2.5em;
			}
			.c9-if-you-love {
				padding-top: 7vh;
				padding-bottom: 7vh;
			}
			.c9-if-you-love h2 {
				color: white;
				font-size: 3.5em;
				margin-bottom: 3.5vh;
				line-height: 1.5;
			}
			.c9-if-you-love h3 {
				color: white;
				font-size: 5em;
				margin-bottom: 10px;
			}
			.c9-if-you-love h5 {
				color: #C9292C;
				font-size: 1.8em;
				font-weight: 700;
				line-height: 1.5;
			}
			.c9-if-you-love .c9-click-preview {
				color: white;
			}
			.c9-if-you-love-content {
				display: flex;
			}
			.c9-if-you-love-content .c9-content-left {
				width: 50%;
			}
			.c9-if-you-love-content .c9-content-right {
				width: 50%;
				padding: 5vh 12vw 7vh 6vw;
				box-sizing: border-box;
				line-height: 
			}
			.c9-if-you-love ul {
				margin-top: 4vh;
				margin-bottom: 4vh;
			}
			.c9-if-you-love li {
				color: white;
				font-size: 1.5em;
				font-weight: 300;
				letter-spacing: .5px;
				margin-bottom: 1.5vh;
			}
			.c9-awareness-consideration-conversion {
				width: 100%;
				background-image: linear-gradient(white, white);
				background-repeat: no-repeat;
				margin-top: 3vh;
			}
			.c9-awareness-header {
				width: 100%;
				margin-bottom: -5px;
			}
			.c9-template-types {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 4px solid #819FB3;
				border-left: 4px solid #819FB3;
				border-right: 4px solid #819FB3;
			}
			.c9-template-types img {
				width: 20%;
			}
			.c9-template-types h3 {
				width: 20%;
				margin-left: 34px;
				font-size: 2.7em;
				text-transform: uppercase;
				font-weight: 700;
			}
			.c9-template-types p {
				width: 40%;
				font-size: 2.1em;
			}
			.c9-wrapper-header img {
				width: 100%;
			}
			.c9-build-your-own {
				background-image: linear-gradient(#F4F4F1, #F4F4F1);
				background-repeat: no-repeat;
			}
			.c9-build-your-own-inner {
				display: flex;
				padding: 3em;
			}
			.c9-build-your-own-inner .image-left {
				width: 50%;
			}
			.c9-build-your-own-inner .content-right {
				padding: 4em;
				display: flex;
				flex-direction: column;
			}
			.c9-build-your-own-inner .content-right h2 {
				padding: 0;
			}
			.c9-build-your-own-inner .content-right h3 {
				color: #C04035;
				font-size: 1.5em;
			}
			.c9-build-your-own-inner .content-right .c9-content-right-first,
			.c9-build-your-own-inner .content-right .c9-content-right-second {
				margin-bottom: 9vh;
				margin-top: 1.5vh;
			}
			.c9-never-easier {
				margin-top: 8em;
				margin-bottom: 8em;
				padding: 0;
				padding-bottom: 5em;
			}
			.c9-never-easier h2 {
				margin-bottom: 3px;
			}
			.c9-never-easier h3 {
				color: white;
				font-size: 2em;
			}
			.c9-never-easier .c9-never-easier-inner {
				width: 75%;
				margin: 0 auto;
			}
			.c9-never-easier .c9-never-easier-inner h3 {
				margin-top: 1em;
				margin-bottom: 3em;
			}
			.c9-blocks-list {
				display: grid;
				grid-column-gap: 2em;
				grid-row-gap: 2.3em;
				grid-template-columns: repeat(3, 1fr);
			}
			.c9-blocks-list .c9-block {
				background-image: linear-gradient(white, white);
				background-repeat: no-repeat;
				text-align: center;
				padding-top: 20px;
				padding-bottom: 20px;
			}
			.c9-blocks-list .c9-block h4 {
				font-size: 2.3em;
				color: #819FB3;
				text-transform: uppercase;
				margin-top: 1em 0;
			}
			.c9-blocks-list .c9-block p {
				width: 90%;
				margin: 3vh auto;
			}
			.c9-block-icon {
				width: 20%;
			}
			.c9-how-to {
				background-image: linear-gradient(#F4F4F1, #F4F4F1);
				background-repeat: no-repeat;
				padding-left: 10em;
				padding-right: 10em;
			}
			.c9-how-to .c9-how-to-inner {
				padding: 10.5em 3.5em 7em 3.5em;
				text-align: center;
			}
			.c9-how-to .c9-how-to-inner img {
				width: 100%;
			}
			.c9-how-to .c9-how-to-blurb {
				width: 80%;
				margin: 0 auto;
				text-align: left;
				line-height: 2.2;
				font-weight: 700;
			}
			.c9-how-to .c9-pick-layouts-heading {
				width: 80%;
				margin: 6.5vh auto;
			}
			.c9-who-are-we {
				display: flex;
			}
			.c9-who-are-we .c9-content-left {
				width: 30%;
			}
			.c9-who-are-we .c9-content-right {
				width: 70%;
			}
			.c9-support-forums-contact {
				display: flex;
				justify-content: space-between;
			}
			.c9-support-forums-contact .c9-card {
				width: 29%;
				background: white;
				padding: 15px;
				padding-bottom: 25px;
			}
			.c9-support-forums-contact h4 {
				color: black;
				font-size: 2.4em;
				text-transform: uppercase;
				font-weight: 700;
				margin-top: 10px;
				margin-bottom: 10px;
			}
			.c9-support-forums-contact button {
				background: #C04035;
				padding: 8px 58px;
			}
			.c9-support-forums-contact button a {
				color: white;
				text-decoration: none;
				text-transform: uppercase;
				font-size: 1.4em;
			}
			.c9-support-forums-contact p {
				text-align: left;
			}
			.c9-who-are-we {
				margin-top: 10vh;
				margin-bottom: 7vh;
			}
			.c9-who-are-we .c9-social {
				width: 50%;
				margin: 0 auto;
				justify-content: space-between;
				display: flex;
				margin-top: 2em;
			}
			.c9-who-are-we .c9-social > a {
				width: 30px;
			}
			.c9-who-are-we .c9-content-right h4 {
				font-size: 2em;
				margin: 0;
				margin-bottom: 17px;
				font-weight: 800;
				text-decoration: uppercase;
			}
			.c9-who-are-we .c9-content-right p {
				width: 75%;
				margin: 0 auto;
				text-align: left;
			}
			.c9-how-to .c9-video-tutorials {
				margin-top: 4vh;
				margin-bottom: 4vh;
				display: flex;
				justify-content: space-between;
			}
			.c9-how-to .c9-video-tutorials .c9-video-tutorial {
				width: 32.5%;
				margin-bottom: 2.5vh;
			}
			.c9-how-to .c9-how-to-inner img {
				margin-bottom: 7px;
			}
			.c9-how-to .c9-video-tutorials .c9-video-tutorial a {
				margin-top: 5px;
				font-size: 1.5em;
				color: black;
			}
			@media all and (max-width: 1024px) {
				#wpcontent {
					font-size: 8px;
				}
				.c9-if-you-love-content {
					display: block;
				}
				.c9-if-you-love-content .c9-content-right {
					width: 100%;
				}
				.c9-if-you-love li {
					font-size: 1.8em;
				}
				.c9-build-your-own-inner {
					display: block;
				}
				.c9-build-your-own-inner .image-left {
					width: 100%;
				}
				.c9-how-to {
					padding-left: 3vw;
					padding-right: 3vw;
				}
				.c9-how-to .c9-video-tutorials .c9-video-tutorial a {
					line-height: 1.1;
				}
				.c9-admin-hero {
					min-height: 0;
				}
				.c9-admin-hero h5, .c9-admin-hero p {
					width: 100%;
				}
				.c9-section-templates {
					padding-left: 0;
					padding-right: 0;
				}
				.c9-section-templates .c9-content-right {
					background-size: auto 100% !important;
				}
				.c9-blocks-list {
					grid-template-columns: repeat(2, 1fr);
				}
				.c9-section-examples {
					padding-left: 0;
					padding-right: 0;
				}
				.c9-support-forums-contact p {
					width: 90%;
					margin: 15px auto;
				}
				.c9-support-forums-contact button {
					padding: 8px 40px;
				}
			}
			@media all and (max-width: 767px) {
				#wpwrap #wpcontent {
					font-size: 6px;
					padding: 0;
				}
				.c9-section-templates {
					padding-top: 5vh;
				}
				.c9-section-templates {
					display: block;
				}
				.c9-section-templates .c9-content-left {
					width: 100%;
				}
				.c9-content-wrapper {
					width: 90%;
				}
				.c9-section-examples-wrapper .c9-section-wrapper h5 {
					font-size: 2.5em;
					width: 80%;
					margin: 0 auto;
				}
				.c9-admin-hero {
					background-size: cover !important;
					background-position: center;
					background-image: linear-gradient( white, white) !important;
				}
				.c9-section-examples h2 {
					margin-bottom: 1vh;
				}
				.c9-section-examples-wrapper {
					padding-bottom: 5em;
					flex-direction: column;
				}
				.c9-section-examples-wrapper .c9-section-wrapper:first-child, .c9-section-examples-wrapper .c9-section-wrapper:last-child, .c9-section-examples-wrapper .c9-section-wrapper {
					padding: 10px;
				}
				.c9-section-examples-wrapper .c9-section-wrapper img {
					width: 80%;
				}
				.c9-if-you-love {
					font-size: 6px;
				}
				.c9-template-types h3 {
					margin-left: 6px;
					font-size: 1.8em;
				}
				.c9-template-types p {
					line-height: 1.3;
				}
				.c9-awareness-header {
					margin-bottom: -7px;
				}
				.c9-blocks-list {
					grid-template-columns: repeat(1, 1fr);
				}
				.c9-support-forums-contact {
					flex-direction: column;
				}
				.c9-support-forums-contact .c9-card {
					width: 100%;
					box-sizing: border-box;
					margin-bottom: 10px;
				}
				.c9-who-are-we .c9-social {
					width: 80%;
					margin-top: 0;
				}
				.c9-who-are-we .c9-social > a {
					width: 30%;
				}
				.c9-who-are-we .c9-content-right p {
					width: 85%;
				}
				.c9-how-to .c9-how-to-blurb {
					width: 95%;
				}
			}
		</style>
		<div class="c9-admin-wrapper">
			<span class="c9-header">
				<img class="c9-admin-logo" src="<?php echo $assets . '/c9-feather-logo-gradient.svg'; ?>" />
				<h1 class="c9-text-white heading">QUICKSTART GUIDE WITH COVERTNINE BLOCKS</h1>
			</span>
			<section class="c9-admin-hero" style="background-size: 100% auto; background-repeat: no-repeat; background-image: url(<?php echo $assets . '/hero-screenshot.jpg'; ?>), linear-gradient( white, white);">
			<div class="c9-content-wrapper">
				<h2 class="c9-heading">
					A Quick Start Guide
				</h2>
				<h2 class="c9-subheading">
					C9 Blocks
				</h2>
				<h5>
					C9 - BLOCKS | FIND THE FEATHER TO ADD BLOCKS
				</h5>
				<p>
					Build well-crafted, responsive layouts from readymade section templates and page templates. You can even create & save your own sections and page templates. And try the C9 Admin plugin for a refreshing backend experience.
				</p>
				<a href="#" class="c9-click-preview">Click here for preview</a>
			</div>
			</section>
			<section class="c9-section-templates">
				<div class="c9-content-left">
					<h2>Section Templates</h2>
					<p> Eliminate time-consuming design decisions with pre-built section templates.</p>
					<p>35 customizable section templates are one click away.</p>
					<p>If a pre-made section doesn’t fit the bill, create and save your own custom section to be reused on any other page.</p>
					<p>Entire blocks can be reordered with a simple drag & drop.</p>
				</div>
				<div class="c9-content-right" style="background-size: 100% auto; background-repeat: no-repeat; background-image: url(<?php echo $assets . '/drag-drop-section.jpg'; ?>)">
				</div>
			</section>
			<section class="c9-section-examples">
				<h2>Section Examples</h2>
				<div class="c9-section-examples-wrapper">
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/event-call-to-action-fullscreen-video.svg'; ?>"/>
						<h5>Event “Call to Action” + Video Background</h5>
					</div>
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/large-testimonial-fullscreen-photo.svg'; ?>"/>
						<h5>Large Testimonial + Background Image</h5>
					</div>
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/faq-toggles.svg'; ?>"/>
						<h5>FAQ Toggles</h5>

					</div>
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/large-audio-embed-fullscreen-photo.svg'; ?>"/>
						<h5>Large Audio Embed + Background Image</h5>

					</div>
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/large-lineup-get-tickets-button.svg'; ?>"/>
						<h5>Large Lineup + "Get Tickets" Button</h5>

					</div>
				</div>
			</section>
			<section class="c9-if-you-love">
				<h2>IF you love c9 Blocks, then you’ll love our ADMIN PLUGIN</h2>
				<div class="c9-if-you-love-content">
				<div class="c9-content-left" style="background-size: 100% auto; background-repeat: no-repeat; background-image: url(<?php echo $assets . '/c9-admin-plugin-screenshot.jpg'; ?>)">
				</div>
				<div class="c9-content-right">
					<h3>
						C9 Admin Plugin
					</h3>
					<h5>
						A FULL-FEATURED, ENJOYABLE ADMIN EXPERIENCE
					</h5>
					<ul>
						<li>Disable Admin bar on Frontend</li>
						<li>Disable Media Attachment Pages</li>
						<li>Hide Developer-specific menu items</li>
						<li>Make notification visible to admins only</li>
					</ul>
					<a href="#" class="c9-click-preview">Click here for preview</a>
				</div>
				</div>
			</section>
			<section class="c9-page-templates">
				<h2 class="c9-heading">
					Page Templates
				</h2>
				<h2 class="c9-subheading">
					Designed for the customer journey
				</h2>
				<div class="c9-awareness-consideration-conversion">
					<img class="c9-awareness-header" src="<?php echo $assets . '/awareness-consideration-conversion.jpg'; ?>" />
					<div class="c9-template-types">
						<h3>
							Awareness:
						</h3>
						<p>
							Provide newcomers with something they can’t get elsewhere: Your take on their interests. Earn their trust as an authority. Answer their questions. Be there when they need you.
						</p>
						<img src="<?php echo $assets . '/page-template-icons/awareness.svg'; ?>" />
					</div>
					<div class="c9-template-types">
						<h3>
							Consideration:
						</h3>
						<p>
							Help your visitors make a decision by sharing what sets you apart. Give them details, comparisons, testimonials, case studies, etc.
						</p>
						<img src="<?php echo $assets . '/page-template-icons/consideration.svg'; ?>" />
					</div>
					<div class="c9-template-types">
						<h3>
							Conversion:
						</h3>
						<p>
							Make it easy for visitors to sign up, purchase, ask questions. Give them brief forms, easy-to-read product details, and support information to reassure their decisions.
						</p>
						<img src="<?php echo $assets . '/page-template-icons/conversion.svg'; ?>" />
					</div>
				</div>
			</section>
			<section class="c9-build-your-own">
				<div class="c9-build-your-own-inner">
					<img class="image-left" src="<?php echo $assets . '/device-previews.png'; ?>">
					<div class="content-right">
						<div class="c9-content-right-first">
							<h2>
								DISPLAY PERFECTLY ON ANY DEVICE WITH RESPONSIVE BLOCKS
							</h2>
							<h3>
								CLICK THE ‘+’ & START BUILDING
							</h3>
							<p>
								Page elements like text and images automatically scale to the correct size no matter your screen size.</p>
							<p>
								Minimized and combined production files keep pages loading fast on all devices and internet connections.
							</p>
							<a href="#" class="c9-click-preview">click for overview</a>
						</div>
						<div class="c9-content-right-second">
							<h2>
								SPEED UP YOUR WORKFLOW WITH THIS SHORTCUT
							</h2>
							<h3>
								QUICK EDIT IN THE PARAGRAPH BLOCK
							</h3>
							<p>
								Open any paragraph block, move to a new line and type ‘/c9’
							</p>
							<a href="#" class="c9-click-preview">click for overview</a>
						</div>
					</div>
				</div>
			</section>
			<section class="c9-never-easier" style="background-size: 100% auto; background-repeat: repeat-y; background-image: url(<?php echo $assets . '/device-size-backgrounds.svg'; ?>)">
				<div class="c9-never-easier-inner">
					<h2 class="c9-heading">
						Building Pages With Gutenberg
					</h2>
					<h2 class="c9-subheading">
						HAS NEVER BEEN EASIER
					</h2>
					<h3>TOUR THROUGH THE PANEL</h3>
					<div class="c9-blocks-list">
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-grid.svg'; ?>"/>
							<h4>
								C9 Grid
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-heading.svg'; ?>"/>
							<h4>
								C9 Heading
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-cta-bar.svg'; ?>"/>
							<h4>
								C9 CALL TO ACTION
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-social-share.svg'; ?>"/>
							<h4>
								C9 SOCIAL SHARE
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are b
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-tabs-horizontal.svg'; ?>"/>
							<h4>
								C9 HORIZONTAL TABS
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are b
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-tabs-vertical-tabs.svg'; ?>"/>
							<h4>
								C9 VERTICAL TABS
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-toggles.svg'; ?>"/>
							<h4>
								C9 Toggles
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are b
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-post-grid.svg'; ?>"/>
							<h4>
								C9 POSTS GRID
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-anything-carousel.svg'; ?>"/>
							<h4>
								C9 VERTICAL TABS
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are b
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-image-carousel.svg'; ?>"/>
							<h4>
								C9 TOGGLES
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are b
							</p>
						</div>
					</div>
				</div>
			</section>
			<section class="c9-how-to">
				<div class="c9-how-to-inner">
					<h2>How to use C9 Grid</h2>
					<p class="c9-how-to-blurb">There are 80,000,000+ results on Google for “Which Game of Thrones character am I?”It’s safe to say there is A LOT of content online. There’s even more social media strategy content online that’s just as bad as the GOT clickbait.There are 80,000,000+ results on Google for “Which Game of Thrones character am I?”It’s safe to say there is A LOT of content online. There’s even more social media strategy content online that’s just as bad as the GOT clickbait.</p>
					<div class="c9-video-tutorials">
						<div class="c9-video-tutorial">
							<img src="<?php echo $assets . '/change-number-columns.jpg'; ?>" alt="">
							<a>CHANGING OVERALL WIDTH VIDEO</a>
						</div>
						<div class="c9-video-tutorial">
							<img src="<?php echo $assets . '/change-number-rows.jpg'; ?>" alt="">
							<a>CHANGING # of Rows (ADDING ROW BUTTON)</a>
						</div>
						<div class="c9-video-tutorial">
							<img src="<?php echo $assets . '/change-overall-width.jpg'; ?>" alt="">
							<a>CHANGING # of COLUMNS WATCH VIDEO</a>
						</div>
					</div>
					<img src="<?php echo $assets . '/grid-screenshot.jpg'; ?>" alt="" />
					<h2 class="c9-pick-layouts-heading">Pick a Column Layout then pick a more specific layout</h2>
					<img src="<?php echo $assets . '/pick-your-layout.svg'; ?>"/>
					<div class="c9-who-are-we">
						<div class="c9-content-left">
							<img src="<?php echo $assets . '/c9-logo.jpg'; ?>" alt="">
							<div class="c9-social">
								<a href="#" class="c9-fb">
									<img src="<?php echo $assets . '/fa-icons/facebook-square-brands.svg'; ?>">
								</a>
								<a href="#" class="c9-twitter">
									<img src="<?php echo $assets . '/fa-icons/twitter-square-brands.svg'; ?>">
								</a>
								<a href="#" class="c9-insta">
									<img src="<?php echo $assets . '/fa-icons/instagram-brands.svg'; ?>">
								</a>
							</div>
						</div>
						<div class="c9-content-right">
							<h4>Who are we?</h4>
							<p>There’s even more social media strategy content online that’s just as bad as the GOT clickbait. COVERT NINE develops distribution plans and full digital marketing plans to locate and connect.</p>
						</div>
					</div>
					<div class="c9-support-forums-contact">
						<div class="c9-card">
							<h4>Paid Support</h4>
							<p>There’s even more social media strategy content online that’s just as bad as the GOT clickbait. COVERT NINE develops distribution plans and full digital marketing plans to locate and connect.</p>
							<button><a href="/forums">View Forums</a></button>
						</div>
						<div class="c9-card">
							<h4>Forums</h4>
							<p>There’s even more social media strategy content online that’s just as bad as the GOT clickbait. COVERT NINE develops distribution plans and full digital marketing plans to locate and connect.</p>
							<button><a href="/forums">View Forums</a></button>
						</div>
						<div class="c9-card">
							<h4>Contact Us</h4>
							<p>There’s even more social media strategy content online that’s just as bad as the GOT clickbait. COVERT NINE develops distribution plans and full digital marketing plans to locate and connect.</p>
							<button><a href="/forums">View Forums</a></button>
						</div>
					</div>
				</div>
			</section>
		</div>
		<?php
		ob_end_flush();

	}
}
