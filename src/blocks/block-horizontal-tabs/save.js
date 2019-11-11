/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.editor;
const { RichText } = wp.blockEditor;
const { applyFilters } = wp.hooks;

/**
 * External Dependencies.
 */
import classnames from "classnames";

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			tabActive,
			buttonsAlign,
			tabsData = [],
			tabBackgroundColor,
			tabTextColor,
			tabContentBackgroundColor,
			blockBackgroundColor,
			instanceId
		} = this.props.attributes;

		const { className = "" } = this.props;

		return [
			<div
				className={applyFilters("c9-blocks.blocks.className", className)}
				data-tab-active={tabActive}
				style={{
					backgroundColor: blockBackgroundColor
				}}
			>
				<ul
					className={classnames(
						"nav nav-tabs d-flex",
						buttonsAlign ? `justify-content-${buttonsAlign}` : "nav-justified"
					)}
					role="tablist"
				>
					{tabsData.map(tabData => {
						const { slug, title } = tabData;
						const selected = tabActive === slug;
						return (
							<li className="nav-item">
								<RichText.Content
									style={{
										backgroundColor: tabBackgroundColor,
										color: tabTextColor
									}}
									tagName="a"
									data-toggle="tab"
									role="tab"
									href={`#htab-${slug}-${instanceId}`}
									className={classnames("nav-link", selected ? "active" : "")}
									id={`tab-button-${slug}`}
									value={title}
								/>
							</li>
						);
					})}
				</ul>
				<div
					className="c9-tabs-content tab-content"
					style={{
						backgroundColor: tabContentBackgroundColor
					}}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		];
	}
}
