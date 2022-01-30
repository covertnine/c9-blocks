/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ToolbarGroup, ToolbarButton } = wp.components;
const { dispatch } = wp.data;
const { createSuccessNotice } = dispatch("core/notices");

/**
 * Control Settings
 */
const DEFAULT_WIDTH_CONTROLS = [
	{
		icon: "arrow-left-alt",
		title: __("Swap Slide toward Left", "c9-blocks"),
		isLeft: true
	},
	{
		icon: "arrow-right-alt",
		title: __("Swap Slide toward Right", "c9-blocks"),
		isLeft: false
	}
];

const TIMEOUT_DELAY = 250;

/**
 * Create a Width Toolbar Component
 */
export function SwapSlideToolbar({
	swapSlide,
	activeSlide,
	slides,
	carouselRef,
	widthControls = DEFAULT_WIDTH_CONTROLS
}) {
	return (
		<ToolbarGroup label={__("Change Widths", "c9-blocks")}>
			{widthControls.map(control => {
				const { isLeft } = control;
				return (
					<ToolbarButton
						{...control}
						onClick={() => {
							const $ = window.jQuery;
							let config = { opacity: 0, marginLeft: "200px" };
							if (isLeft) {
								config.marginLeft = "-200px";
							}
							$(".carousel-inner", carouselRef.current).animate(
								config,
								400,
								"swing",
								() => {
									if (isLeft) {
										const targetSlide =
											-1 < activeSlide - 1 ? activeSlide - 1 : slides - 1;
										swapSlide(activeSlide, targetSlide);
										setTimeout(() => {
											$(carouselRef.current).carousel("prev");
											$(".carousel-inner", carouselRef.current).animate({
												opacity: 100,
												marginLeft: 0
											});
											createSuccessNotice(
												`c9-blocks/carousel: #${activeSlide +
													1} is swapped with Slide #${targetSlide + 1}`,
												{ id: "swapBlockSlideNotice" }
											);
										}, TIMEOUT_DELAY);
									} else {
										const targetSlide =
											slides > activeSlide + 1 ? activeSlide + 1 : 0;
										swapSlide(activeSlide, targetSlide);
										setTimeout(() => {
											$(carouselRef.current).carousel("next");
											$(".carousel-inner", carouselRef.current).animate({
												opacity: 100,
												marginLeft: 0
											});
											createSuccessNotice(
												`c9-blocks/carousel: #${activeSlide +
													1} is swapped with Slide #${targetSlide + 1}`,
												{ id: "swapBlockSlideNotice" }
											);
										}, TIMEOUT_DELAY);
									}
								}
							);
						}}
					/>
				);
			})}
		</ToolbarGroup>
	);
}

export default SwapSlideToolbar;
