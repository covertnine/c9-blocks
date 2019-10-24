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
			.c9-admin-wrapper {
				width: 100%;
				box-sizing: border-box;
				overflow: hidden;
				padding: 4em;
			}
			.c9-header {
				display: flex;
				align-items: center;
				margin-bottom: 10px;
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
			section {
				width: 100%;
				box-sizing: border-box;
			}
			.c9-admin-hero {
				min-height: 80vh;
			}
			.c9-content-wrapper {
				width: 70%;
				padding-left: 5%;
				padding-top: 10%;
			}
			h2 {
				font-size: 5.5em;
				display: inline-block;
				line-height: 1.05;
				text-transform: uppercase;
				margin-top: 0;
				margin-bottom: 20px;
				padding-right: 15px;
				padding-left: 5px;
			}
			.c9-heading {
				background: #C9292C;
				color: white
			}
			.c9-subheading {
				background: #141414;
				color: white;
			}
			.c9-section-templates {
				background: white;
				display: flex;
				margin-top: 7.8em;
			}
			.c9-section-templates .c9-content-left {
				width: 30%;
			}
			.c9-section-templates .c9-content-left {
				box-sizing: border-box;
				padding-top: 13em;
				padding-left: 4em;
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
				background: white;
				text-align: center;
				padding-top: 20px;
			}
			.c9-section-examples h2 {
				text-align: center;
			}
			.c9-tutorials {
				display: flex;
				align-items: center;
				justify-content: space-around;
				padding-bottom: 20px;
			}
			.c9-if-you-love {
				padding-top: 7em;
				padding-bottom: 7em;
			}
			.c9-if-you-love h2 {
				color: white;
				font-size: 4em;
			}
			.c9-if-you-love-content {
				display: flex;
			}
			.c9-if-you-love-content .c9-content-left {
				width: 55%;
			}
			.c9-awareness-consideration-conversion {
				width: 100%;
				background: white;
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
				padding: 30px;
				display: flex;
				background: #F4F4F1;
				margin-top: 8em;
			}
			.c9-never-easier {
				margin-top: 8em;
				margin-bottom: 8em;
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
			.c9-blocks-list {
				display: grid;
				grid-column-gap: 2em;
				grid-row-gap: 2.3em;
				grid-template-columns: repeat(3, 1fr);
			}
			.c9-blocks-list .c9-block {
				background: white;
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
		</style>
		<div class="c9-admin-wrapper">
			<span class="c9-header">
				<img class="c9-admin-logo" src="<?php echo $assets . '/c9-feather-logo-gradient.svg'; ?>" />
				<h1 class="c9-text-white heading">QUICKSTART GUIDE WITH COVERTNINE BLOCKS</h1>
			</span>
			<section class="c9-admin-hero" style="background-size: 100% auto; background-repeat: no-repeat; background-image: url(<?php echo $assets . '/hero-screenshot.jpg'; ?>)">
			<div class="c9-content-wrapper">
				<h2 class="c9-heading">
					Expandable Window
				</h2>
				<h2 class="c9-subheading">
					Premade Templates
				</h2>
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
				<h2>Tutorials</h2>
				<div class="c9-tutorials">
					<?php foreach ( $tuts as $tut ) : ?>
					<div class="c9-tutorial-wrapper">
					<?php echo $tut->id; ?>
					</div>
					<?php endforeach; ?>
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
				<h2>How to use C9 Grid</h2>
				<p>There are 80,000,000+ results on Google for “Which Game of Thrones character am I?”It’s safe to say there is A LOT of content online. There’s even more social media strategy content online that’s just as bad as the GOT clickbait.There are 80,000,000+ results on Google for “Which Game of Thrones character am I?”It’s safe to say there is A LOT of content online. There’s even more social media strategy content online that’s just as bad as the GOT clickbait.</p>
			</section>
		</div>
		<?php
		ob_end_flush();

	}
}
