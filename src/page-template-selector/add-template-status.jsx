const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;

const { Component } = wp.element;

const { Button } = wp.components;
const { select } = wp.data;

import "./editor.scss";

class PageTemplateSelector extends Component {
	constructor() {
		super(...arguments);

		this.template = this.getClassName();
	}

	getClassName() {
		let url = select("core/editor").getEditedPostAttribute("template");

		if (url.length == 0) {
			return "";
		}

		let result = url.substring(url.lastIndexOf("/") + 1).replace(".php", "");
		return `page-template-${result}`;
	}

	render() {
		return (
			<PluginPostStatusInfo>
				<Button
					className="c9-preview-page-template-button"
					onClick={() => {
						let body = document.getElementsByTagName("body")[0];
						body.classList.remove(this.template);

						this.template = this.getClassName();

						body.classList.add(this.template);
						// console.log(body);
					}}
				>
					Preview Page Template CSS
				</Button>
			</PluginPostStatusInfo>
		);
	}
}

registerPlugin("post-status-info-test", { render: PageTemplateSelector });
