// External Dependencies.
import classnames from "classnames";

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
		const { tabActive, buttonsAlign, tabsData = [] } = this.props.attributes;

		let className = "tabs";

		return [
			<div className={className} data-tab-active={tabActive}>
				<div
					className={classnames(
						"tabs-buttons",
						`tabs-buttons-align-${buttonsAlign}`
					)}
				>
					{tabsData.map(tabData => {
						return (
							<RichText.Content
								tagName="a"
								href={`#${tabData.slug}`}
								className="tabs-buttons-item"
								key={`tab_button_${tabData.slug}`}
								value={tabData.title}
							/>
						);
					})}
				</div>
				<div className="tabs-content">
					<InnerBlocks.Content />
				</div>
			</div>,
			<style>
				{`
                .tabs .tabs-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 1em;
                    border-bottom: 1px solid #dee2e6;
                  }
                  .tabs .tabs-buttons.tabs-buttons-align-left {
                    justify-content: flex-start;
                  }
                  .tabs .tabs-buttons.tabs-buttons-align-center {
                    justify-content: center;
                  }
                  .tabs .tabs-buttons.tabs-buttons-align-right {
                    justify-content: flex-end;
                  }
                  .tabs .tabs-buttons > .tabs-buttons-item {
                    padding: 0.5em 1.5em;
                    margin-bottom: -1px;
                    font-weight: 500;
                    color: inherit;
                    text-decoration: none;
                    background-color: transparent;
                    border: 1px solid transparent;
                    border-top-left-radius: 3px;
                    border-top-right-radius: 3px;
                    opacity: 0.6;
                    transition: 0.15s border-color, 0.15s background-color, 0.15s opacity;
                    will-change: border-color, background-color, opacity;
                  }
                  .tabs .tabs-buttons > .tabs-buttons-item:hover {
                    border-color: #dee2e6;
                    opacity: 1;
                  }
                  .tabs .tabs-buttons > .tabs-buttons-item.tabs-buttons-item-active {
                    background-color: #fff;
                    border-color: #dee2e6;
                    border-bottom-color: #fff;
                    opacity: 1;
                  }
                  .tabs .tabs-content .tab {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0 0 0 0);
                    border: 0;
                    opacity: 0;
                    transition: 0.2s opacity;
                    will-change: opacity;
                  }
                  .tabs .tabs-content .tab.tab-active {
                    position: static;
                    width: auto;
                    height: auto;
                    margin: 0;
                    overflow: visible;
                    clip: auto;
                    opacity: 1;
                  }.tabs .tabs-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 1em;
                    border-bottom: 1px solid #dee2e6;
                  }
                  .tabs .tabs-buttons.tabs-buttons-align-left {
                    justify-content: flex-start;
                  }
                  .tabs .tabs-buttons.tabs-buttons-align-center {
                    justify-content: center;
                  }
                  .tabs .tabs-buttons.tabs-buttons-align-right {
                    justify-content: flex-end;
                  }
                  .tabs .tabs-buttons > .tabs-buttons-item {
                    padding: 0.5em 1.5em;
                    margin-bottom: -1px;
                    font-weight: 500;
                    color: inherit;
                    text-decoration: none;
                    background-color: transparent;
                    border: 1px solid transparent;
                    border-top-left-radius: 3px;
                    border-top-right-radius: 3px;
                    opacity: 0.6;
                    transition: 0.15s border-color, 0.15s background-color, 0.15s opacity;
                    will-change: border-color, background-color, opacity;
                  }
                  .tabs .tabs-buttons > .tabs-buttons-item:hover {
                    border-color: #dee2e6;
                    opacity: 1;
                  }
                  .tabs .tabs-buttons > .tabs-buttons-item.tabs-buttons-item-active {
                    background-color: #fff;
                    border-color: #dee2e6;
                    border-bottom-color: #fff;
                    opacity: 1;
                  }
                  .tabs .tabs-content .tab {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0 0 0 0);
                    border: 0;
                    opacity: 0;
                    transition: 0.2s opacity;
                    will-change: opacity;
                  }
                  .tabs .tabs-content .tab.tab-active {
                    position: static;
                    width: auto;
                    height: auto;
                    margin: 0;
                    overflow: visible;
                    clip: auto;
                    opacity: 1;
                  }
                `}
			</style>
		];
	}
}
