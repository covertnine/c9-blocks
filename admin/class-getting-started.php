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
			.c9-admin-hero a {
				text-transform: uppercase;
				text-decoration: none;
				color: black;
				font-weight: 700;
				font-size: 1.8em;
				margin-bottom: 20px;
				position: relative;
			}
			.c9-admin-hero a:after {
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
				margin-bottom: 2vh;
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
			}
			.c9-if-you-love {
				padding-top: 7vh;
				padding-bottom: 7vh;
			}
			.c9-if-you-love h2 {
				color: white;
				font-size: 3.5em;
				margin-bottom: 3.5vh;
			}
			.c9-if-you-love-content {
				display: flex;
			}
			.c9-if-you-love-content .c9-content-left {
				width: 55%;
			}
			.c9-awareness-consideration-conversion {
				width: 100%;
				background-image: linear-gradient(white, white);
				background-repeat: no-repeat;
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
				width: 55%;
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
				font-size: 2.7em;
				color: #819FB3;
				text-transform: uppercase;
				margin-top: 1em 0;
			}
			.c9-block-icon {
				width: 30%;
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
				font-size: 1.8em;
			}
			.c9-support-forums-contact p {
				text-align: left;
			}
			.c9-who-are-we {
				margin-top: 10vh;
				margin-bottom: 10vh;
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
			@media all and (max-width: 1024px) {
				#wpcontent {
					font-size: 8px;
				}
			}
			@media all and (max-width: 768px) {
				#wpwrap #wpcontent {
					font-size: 4.5px;
					padding: 0;
				}
				.c9-section-templates {
					padding-top: 5vh;
				}
				.c9-content-wrapper {
					width: 90%;
				}
				.c9-admin-hero {
					min-height: 0;
				}
				.c9-admin-hero h5, .c9-admin-hero p {
					width: 100%;
				}
			}
			@media all and (max-width: 767px) {
				.c9-admin-hero {
					background-size: cover !important;
					background-position: center;
					background-image: linear-gradient( white, white) !important;
				}
				.c9-section-templates {
					display: block;
				}
				.c9-section-templates .c9-content-left {
					width: 100%;
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
					Expandable Window
				</h2>
				<h2 class="c9-subheading">
					Premade Templates
				</h2>
				<h5>
				C9 - BLOCKS | LOCATE THE FEATHER TO ACCESS EDITING FEATURES
				</h5>
				<p>
				Make your own layouts from scratch or use ours! Dragging and dropping layouts. Save custom built sections for to make sections modular. Easily duplicate designs across an entire ecosystem. 
				</p>
				<a href="#">Click here for preview</a>
			</div>
			</section>
			<section class="c9-section-templates">
				<div class="c9-content-left">
					<h2>Section Templates</h2>
					<p> Make your own layouts from scratch or use ours! Dragging and dropping layouts.</p>
					<p>Save custom built sections for to make sections modular.</p>
					<p>Easily duplicate designs across an entire ecosystem.</p>
					<p>Make your own layouts from scratch or use ours! Dragging and dropping layouts.</p>
					<p>Save custom built sections for to make sections modular.</p>
					<p>Easily duplicate designs across an entire ecosystem.</p>
				</div>
				<div class="c9-content-right" style="background-size: 100% auto; background-repeat: no-repeat; background-image: url(<?php echo $assets . '/drag-drop-section.jpg'; ?>)">
				</div>
			</section>
			<section class="c9-section-examples">
				<h2>Section Examples</h2>
				<div class="c9-section-examples-wrapper">
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/about-picture-contact-card.svg'; ?>"/>
						<h5>Event “Call to Action” + Video Background</h5>
					</div>
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/about-picture-contact-card.svg'; ?>"/>
						<h5>Event “Call to Action” + Video Background</h5>
					</div>
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/about-picture-contact-card.svg'; ?>"/>
						<h5>Event “Call to Action” + Video Background</h5>

					</div>
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/about-picture-contact-card.svg'; ?>"/>
						<h5>Event “Call to Action” + Video Background</h5>

					</div>
					<div class="c9-section-wrapper">
						<img src="<?php echo $assets . '/section-template-icons/about-picture-contact-card.svg'; ?>"/>
						<h5>Event “Call to Action” + Video Background</h5>

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
					<div>
						More room to format pages with a collapsible panels
					</div>
					<ul>
						<li>Disable Admin bar on Frontend</li>
						<li>Disable Admin bar on Frontend</li>
						<li>Disable Admin bar on Frontend</li>
						<li>Disable Admin bar on Frontend</li>
						<li>Disable Admin bar on Frontend</li>
					</ul>
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
					<div class="c9-wrapper-header">
						<img src="<?php echo $assets . '/awareness-consideration-conversion.jpg'; ?>" />
					</div>
					<div class="c9-template-types">
						<h3>
							Awareness:
						</h3>
						<p>
						For Customers learning about your product, service, event for the first time. Give them the most information they need right upfront.
						</p>
						<img src="<?php echo $assets . '/page-template-icons/awareness.svg'; ?>" />
					</div>
					<div class="c9-template-types">
						<h3>
							Consideration:
						</h3>
						<p>
						Second touchpoint, Customers are familiar with you, but need some information. 
						</p>
						<img src="<?php echo $assets . '/page-template-icons/consideration.svg'; ?>" />
					</div>
					<div class="c9-template-types">
						<h3>
							Conversion:
						</h3>
						<p>
						For Customers learning about your product, service, event for the first time. Give them the most information they need right upfront.
						</p>
						<img src="<?php echo $assets . '/page-template-icons/conversion.svg'; ?>" />
					</div>
				</div>
			</section>
			<section class="c9-build-your-own">
				<div class="c9-build-your-own-inner">
					<img class="image-left" src="<?php echo $assets . '/device-previews.png'; ?>">
					<div class="content-right">
						<h2>
							BUILD YOUR OWN PAGES with mobile responsive BLOCKS
						</h2>
						<h3>
							CLICK THE + MODAL & START BUILDING
						</h3>
						<p>
						There’s even more social media strategy content online that’s just as bad as the GOT clickbait.COVERT NINE develops distribution plans and full digital marketing plans to locate and connect with elusive audiences that exist outside of an algorithm, with content that doesn’t make you the 80,000,001 search result.
						</p>
						<a>click for overview</a>
						<h2>
							BUILD YOUR OWN PAGES with mobile responsive BLOCKS
						</h2>
						<h3>
							CLICK THE + MODAL & START BUILDING
						</h3>
						<p>
						There’s even more social media strategy content online that’s just as bad as the GOT clickbait.COVERT NINE develops distribution plans and full digital marketing plans to locate and connect with elusive audiences that exist outside of an algorithm, with content that doesn’t make you the 80,000,001 search result.
						</p>
						<a>click for overview</a>
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
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-grid.svg'; ?>"/>
							<h4>
								C9 Grid
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
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
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-grid.svg'; ?>"/>
							<h4>
								C9 Grid
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
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
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-grid.svg'; ?>"/>
							<h4>
								C9 Grid
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
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
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-grid.svg'; ?>"/>
							<h4>
								C9 Grid
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
							</p>
						</div>
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
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-grid.svg'; ?>"/>
							<h4>
								C9 Grid
							</h4>
							<p>
								COVERT NINE helps our clients develop digital marketing plans are
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

							<a>CHANGING OVERALL WIDTH VIDEO</a>
						</div>
						<div class="c9-video-tutorial">
							<a>CHANGING # of Rows (ADDING ROW BUTTON)</a>
						</div>
						<div class="c9-video-tutorial">
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
