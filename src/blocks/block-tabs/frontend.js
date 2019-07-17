document.addEventListener("DOMContentLoaded", function() {
	const $ = window.jQuery;

	const pageHash = window.location.hash;

	$(".tabs:not(.tabs-ready)").each(function() {
		const $this = $(this);
		const tabsActive = $this.attr("data-tab-active");

		// pageHash

		$this.addClass("tabs-ready");

		// click action
		$this.on("click", ".tabs-buttons-item", function(e) {
			e.preventDefault();

			const $thisBtn = $(this);
			const tabName = $thisBtn.attr("data-tab") || this.hash;

			activateTab($this, tabName);
		});

		// activate by page hash
		let tabActivated = false;
		if (pageHash) {
			tabActivated = activateTab($this, pageHash);
		}

		if (!tabActivated && tabsActive) {
			tabActivated = activateTab($this, `#${tabsActive}`);
		}
	});
});

function activateTab($tabs, tabName) {
	let $activeBtn = false;
	const $activeTab = $tabs
		.children(".tabs-content")
		.children(`[data-tab="${tabName.replace(/^#/, "")}"]`);

	$activeBtn = $tabs.find(".tabs-buttons").find(`[href="${tabName}"]`);

	if (!$activeBtn || !$activeBtn.length || !$activeTab.length) {
		return false;
	}

	$activeBtn
		.addClass("tabs-buttons-item-active")
		.siblings()
		.removeClass("tabs-buttons-item-active");

	$activeTab
		.addClass("tab-active")
		.siblings()
		.removeClass("tab-active");

	return true;
}
