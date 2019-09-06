/**
 * Block Frontend
 */

document.addEventListener("DOMContentLoaded", function() {
	const $ = window.jQuery;

	$(".c9-toggles-toggle:not(.toggle-collapse-ready)").each(function() {
		const $this = $(this);
		$this.addClass("toggle-collapse-ready");

		// grab collapse id
		const id = $(".c9-toggles-item-content.collapse", this).attr("id");

		// grab rotate arrow id
		const iconId = $(".c9-toggles-item-heading", this).attr("id");

		// insert hook into collapse and expand event
		$(`#${id}`).on("show.bs.collapse", () => {
			$(`#${iconId} span.c9-toggles-item-collapse > svg`).toggleClass(
				"c9-toggle-item-expand"
			);
		});
		$(`#${id}`).on("hide.bs.collapse", () => {
			$(`#${iconId} span.c9-toggles-item-collapse > svg`).toggleClass(
				"c9-toggle-item-expand"
			);
		});
	});
});
