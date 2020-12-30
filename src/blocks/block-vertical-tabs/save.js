/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor;
const { applyFilters } = wp.hooks;

/**
 * WordPress dependencies
 */
import classnames from "classnames";

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			tabActive,
			textAlign,
			tabsData = [],
			tabBackgroundColor,
			tabTextColor,
			tabContentBackgroundColor,
			blockBackgroundColor,
			verticalAlign,
			instanceId
		} = this.props.attributes;

		const {
			className = "",
			...otherProps
		} = this.props;

		return [
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					"row"
				)}
				style={{
					backgroundColor: blockBackgroundColor
				}}
				data-tab-active={tabActive}
				{...otherProps}
			>
				<div className="col-xs-12 col-sm-3">
					<div
						className={classnames(
							"nav flex-column nav-pills",
							textAlign ? `text-${textAlign}` : null
						)}
						role="tablist"
					>
						{tabsData.map(tabData => {
							const { slug, title } = tabData;
							const selected = tabActive === slug;
							return (
								<RichText.Content
									style={{
										backgroundColor: tabBackgroundColor,
										color: tabTextColor
									}}
									tagName="a"
									data-toggle="pill"
									role="tab"
									href={`#vtab-${slug}-${instanceId}`}
									className={classnames("nav-link", selected ? "active" : "")}
									id={`tab-button-${slug}`}
									value={title}
								/>
							);
						})}
					</div>
				</div>
				<div className="col-xs-12 col-sm-9">
					<div
						className={classnames(
							"c9-tabs-content tab-content",
							verticalAlign ? `align-self-${verticalAlign}` : null
						)}
						style={{
							backgroundColor: tabContentBackgroundColor
						}}
					>
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		];
	}
}
