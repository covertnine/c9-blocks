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
					CLICK THE FEATHER TO ADD TEMPLATES + SAVED LAYOUTS
				</h5>
				<p>
					Build agency-designed, responsive layouts from readymade section templates and page templates. You can even create & save your own sections and page templates. Just locate the feather in the upper right hand corner of any Gutenberg Editing screen to see the templates.
				</p>
				<a href="https://www.covertnine.com/c9-blocks-plugin" class="c9-click-preview c9-arrow-after" target="_blank">Detailed Video Walk Throughs</a>
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
				<div class="c9-content-right" style="background-size: 100.3% auto; background-repeat: no-repeat; background-image: url(<?php echo $assets . '/drag-drop-section.jpg'; ?>)">
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
				<h2>Enhance the WordPress admin editing experience</h2>
				<div class="c9-if-you-love-content">
				<div class="c9-content-left" style="background-size: 100% auto; background-repeat: no-repeat; background-image: url(<?php echo $assets . '/c9-admin-plugin-screenshot.jpg'; ?>)">
				</div>
				<div class="c9-content-right">
					<h3>
						C9 Admin Plugin
					</h3>
					<h5>
						Simplify the WordPress Admin in a few clicks
					</h5>
					<ul>
						<li>Frees up space for Gutenberg editing</li>
						<li>Disable admin bar on frontend</li>
						<li>Disable media attachment pages</li>
						<li>Hide developer-specific menu items</li>
						<li>Hide notifications for non-admins</li>
						<li>Free to download and use</li>
					</ul>
					<a href="https://c9.covertnine.com/c9-admin-plugin/" class="c9-click-preview c9-arrow-after" target="_blank">Learn More</a><br /><br />
					<a href="https://www.covertnine.com/form/c9-beta" class="c9-click-preview c9-arrow-after" target="_blank">Download Now</a>
				</div>
				</div>
			</section>
			<section class="c9-page-templates">
				<h2 class="c9-heading">
					Page Templates
				</h2>
				<h2 class="c9-subheading">
					Designed for the content journey
				</h2>
				<div class="c9-awareness-consideration-conversion">
					<img class="c9-awareness-header" src="<?php echo $assets . '/awareness-consideration-conversion.jpg'; ?>" />
					<div class="c9-template-types">
						<h3>
							Awareness
						</h3>
						<p>
							Provide newcomers with something they can’t get elsewhere: Your take on their interests. Earn their trust as an authority. Answer their questions. Be there when they need you.
						</p>
						<img src="<?php echo $assets . '/page-template-icons/awareness.svg'; ?>" />
					</div>
					<div class="c9-template-types">
						<h3>
							Consideration
						</h3>
						<p>
							Help your visitors make a decision by sharing what sets you apart. Give them details, comparisons, testimonials, case studies, etc.
						</p>
						<img src="<?php echo $assets . '/page-template-icons/consideration.svg'; ?>" />
					</div>
					<div class="c9-template-types">
						<h3>
							Conversion
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
					<img class="image-left" src="<?php echo $assets . '/device-previews.svg'; ?>">
					<div class="content-right">
						<div class="c9-content-right-first">
							<h2>
								DISPLAY PIXEL PERFECT CONTENT ON ANY DEVICE
							</h2>
							<h3>
								CLICK THE + TO START BUILDING RESPONSIVE LAYOUTS
							</h3>
							<p>
								Page elements like text and images automatically scale to the correct size no matter your screen size.</p>
							<p>
								Minimized and combined production files keep pages loading fast on all devices and internet connections.
							</p>
							<a href="https://c9.covertnine.com/sample-content/" target="_blank" class="c9-click-preview c9-arrow-after">SEE SAMPLE CONTENT</a>
						</div>
						<div class="c9-content-right-second">
							<h2>
								SPEED UP YOUR WORKFLOW WITH THE / SHORTCUT
							</h2>
							<h3>
								Quickly insert blocks from any empty line by typing the slash key to see a list of blocks. 
							</h3>
							<p>
								For those of you looking for short cuts so you don't have to keep clicking the + icon to add new blocks, try the '/' shortcut. Open any paragraph block, move to a new line and type ‘/c9’ to see the C9 blocks or just type the / key to see any of your currently installed blocks.
							</p>
							<a href="https://www.covertnine.com/category/block-walk-through-videos/" target="_blank" class="c9-click-preview c9-arrow-after">Watch Walk-Through Videos</a>
						</div>
					</div>
				</div>
			</section>
			<section class="c9-never-easier" style="background-size: 100% auto; background-repeat: no-repeat; background-image: url(<?php echo $assets . '/device-size-twice.svg'; ?>);">
				<div class="c9-never-easier-inner">
					<h2 class="c9-heading">
						Bring complex landing pages to life
					</h2>
					<h2 class="c9-subheading">
						 In minutes
					</h2>
					<div class="c9-blocks-list">
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-grid.svg'; ?>"/>
							<h4>
								C9 Grid
							</h4>
							<p>
								The C9 Grid contains 1-6 columns.
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-heading.svg'; ?>"/>
							<h4>
								C9 Heading
							</h4>
							<p>
								Drop in an H1 to H6 anywhere on the page. You can also enable optional inline subheading.
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-cta-bar.svg'; ?>"/>
							<h4>
								C9 CALL TO ACTION
							</h4>
							<p>
							Invite site visitors to click a button
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-social-share.svg'; ?>"/>
							<h4>
								C9 SOCIAL SHARE
							</h4>
							<p>
							Invite site users to share your article or page.
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-tabs-horizontal.svg'; ?>"/>
							<h4>
								C9 HORIZONTAL TABS
							</h4>
							<p>
								Horizontal tabs, fill with any child blocks.
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-tabs-vertical-tabs.svg'; ?>"/>
							<h4>
								C9 VERTICAL TABS
							</h4>
							<p>
							Vertical tabs, fill with any child blocks
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-toggles.svg'; ?>"/>
							<h4>
								C9 Toggles
							</h4>
							<p>
								Toggle content open to save space on the page.
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-post-grid.svg'; ?>"/>
							<h4>
								C9 POSTS GRID
							</h4>
							<p>
								Generate a grid of posts. Define layout, post type, category, tag, and more!
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-anything-carousel.svg'; ?>"/>
							<h4>
								C9 Carousel
							</h4>
							<p>
								Simple carousel built on Bootstrap's owl carousel, fill with any child blocks you like.
							</p>
						</div>
						<div class="c9-block">
							<img class="c9-block-icon" src="<?php echo $assets . '/icon-c9-image-carousel.svg'; ?>"/>
							<h4>
								C9 Image Carousel
							</h4>
							<p>
								Simple carousel, but just for images.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section class="c9-how-to">
				<div class="c9-how-to-inner">
					<h2>How to use the responsive C9 Grid</h2>
					<p class="c9-how-to-blurb">Building responsive landing pages that work on all devices can be a tricky business with the Gutenberg editor, so we’ve compiled a few of our most helpful tips for working with the C9 Grid block, the foundation block for a responsive website.</p>
					<div class="c9-video-tutorials">
						<div class="c9-video-tutorial">
							<img src="<?php echo $assets . '/c9-blocks-netflix-tutorial.jpg'; ?>" alt="">
							<a class="c9-click-preview" target="_blank" href="https://c9.covertnine.com/documentation/using-the-c9-grid-block-for-responsive-layouts/">VIDEO: Building Pages From Scratch</a>
						</div>
						<div class="c9-video-tutorial">
							<img src="<?php echo $assets . '/using-templates.jpg'; ?>" alt="">
							<a class="c9-click-preview" target="_blank" href="https://c9.covertnine.com/documentation/building-layouts-from-templates">VIDEO: Building layouts from C9 Block templates</a>
						</div>
						<div class="c9-video-tutorial">
							<img src="<?php echo $assets . '/responsive-landing-2020-theme.jpg'; ?>" alt="">
							<a class="c9-click-preview" target="_blank" href="https://www.youtube.com/watch?v=urLN4C3YFaM">VIDEO: A New Homepage for the new Twenty Twenty theme</a>
						</div>
					</div>
					<img src="<?php echo $assets . '/col-number.png'; ?>" alt="" />
					<h2 class="c9-pick-layouts-heading">CHOOSE # OF COLUMNS + THEN SELECT COLUMN WIDTHS</h2>
					<img src="<?php echo $assets . '/pick-your-layout.svg'; ?>"/>
					<div class="c9-who-are-we">
						<div class="c9-content-left">
							<img src="<?php echo $assets . '/c9-logo.png'; ?>" alt="">
							<div class="c9-social">
								<a target="_blank" href="https://www.linkedin.com/company/covert-nine/" class="c9-linkedin">
									<img src="<?php echo $assets . '/fa-icons/linkedin-in-brands.svg'; ?>">
								</a>
								<a target="_blank" href="https://twitter.com/covertnine?lang=en class="c9-twitter">
									<img src="<?php echo $assets . '/fa-icons/twitter-square-brands.svg'; ?>">
								</a>
								<a target="_blank" href="https://www.instagram.com/covertnine/" class="c9-insta">
									<img src="<?php echo $assets . '/fa-icons/instagram-brands.svg'; ?>">
								</a>
							</div>
						</div>
						<div class="c9-content-right">
							<h4>Who are we?</h4>
							<p>We’re a small team of five based out of Chicago, Illinois. We spent the last year or so planning, testing, and coding this plugin because it was something we needed to make our client websites better, and we hope that these tools help you do the same!</p>
						</div>
					</div>
					<div class="c9-support-forums-contact">
						<div class="c9-card">
							<h4>Paid Support</h4>
							<p>We’re still actively developing this plugin, along with our other plugins and themes. If you need support, head over to contact us (links to our contact page) and reach out as we’re still developing our paid support plans. For now, you can reference our very detailed documentation located <a target="_blank" href="https://c9.covertnine.com/c9-blocks-plugin/">here</a>.</p>
							<button><a target="_blank" href="https://www.covertnine.com/contact/">Get in touch</a></button>
						</div>
						<div class="c9-card">
							<h4>Community Forums</h4>
							<p>There is a section of our website dedicated to using our tools and getting support for them. If you need help, this is a great place to start, and if you don’t find what you need there, you can always reach out to us @covertnine on Twitter or <a target="_blank" href="https://www.covertnine.com/contact/">contact us.</a></p>
							<button><a target="_blank" href="https://www.covertnine.com/community/">Community</a></button>
						</div>
						<div class="c9-card">
							<h4>WE NEED YOUR HELP</h4>
							<p>C9 Blocks is still being actively developed by the team at COVERT NINE as we learn the ins and outs of the new Gutenberg Editor. After you’ve had time to try out all the features of our plugins and themes, we ask that you provide us with feedback so we can make them even better below:</p>
							<button><a target="_blank" href="https://covertnine.com/form/what-did-you-think">GIVE FEEDBACK</a></button>
						</div>
					</div>
				</div>
			</section>
		</div>
		<?php
		ob_end_flush();

	}
}
