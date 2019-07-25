// External Dependencies.
import classnames from "classnames";

const { applyFilters } = wp.hooks;

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText, InnerBlocks } = wp.editor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			tabActive,
			buttonsAlign,
			tabsData = [],
			ver
		} = this.props.attributes;

		const { className = "" } = this.props;

		return [
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					"row"
				)}
				data-tab-active={tabActive}
			>
				<div className="col-xs-12 col-sm-3">
					<div
						className={classnames(
							"nav flex-column nav-pills",
							buttonsAlign ? `justify-content-${buttonsAlign}` : "nav-justified"
						)}
						role="tablist"
					>
						{tabsData.map(tabData => {
							const { slug, title } = tabData;
							const selected = tabActive === slug;
							return (
								<RichText.Content
									tagName="a"
									data-toggle="pill"
									role="tab"
									href={`#tab-${slug}-${ver}`}
									className={classnames("nav-link", selected ? "active" : "")}
									id={`tab-button-${slug}`}
									value={title}
								/>
							);
						})}
					</div>
				</div>
				<div className="col-xs-12 col-sm-9">
					<div className="c9-tabs-content tab-content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		];
	}
}
