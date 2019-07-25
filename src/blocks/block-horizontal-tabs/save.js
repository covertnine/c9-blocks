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
		const { tabActive, buttonsAlign, tabsData = [], ver } = this.props.attributes;

		const { className = "" } = this.props;

		return [
			<div
				className={applyFilters("c9-blocks.blocks.className", className)}
				data-tab-active={tabActive}
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
									tagName="a"
									data-toggle="tab"
									role="tab"
									href={`#tab-${slug}-${ver}`}
									className={classnames("nav-link", selected ? "active" : "")}
									id={`tab-button-${slug}`}
									value={title}
								/>
							</li>
						);
					})}
				</ul>
				<div className="c9-tabs-content tab-content">
					<InnerBlocks.Content />
				</div>
			</div>
		];
	}
}
