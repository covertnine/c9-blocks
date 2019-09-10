/**
 * Internal dependencies
 */
import ColorAppender from "../color-appender";
import Logo from "../../../assets/c9-feather-logo-gray.svg";
import { TemplatesModal } from "../templates-modal";

/**
 * Styles
 */
import "./editor.scss";

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Button, PanelBody, Dashicon } = wp.components;

class Sidebar extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isModalOpen: false
		};
	}

	closeMenu = () => {
		this.setState({ isModalOpen: false });
	};

	render() {
		const { isModalOpen } = this.state;

		return (
			<Fragment>
				<PluginSidebarMoreMenuItem
					icon={<Logo style={{ width: "20px", margin: "0 10px 0 6px" }} />}
					target="c9-blocks"
				>
					{__("COVERT NINE Blocks", "c9-blocks")}
				</PluginSidebarMoreMenuItem>
				<PluginSidebar
					name="c9-blocks"
					id="c9-blocks"
					title={__("COVERT NINE Blocks", "c9-blocks")}
				>
					<PanelBody className="plugin-c9-panel">
						<Button
							className="plugin-c9-panel-button"
							isDefault
							isLarge
							onClick={() => {
								this.setState({ isModalOpen: "section-templates" });
							}}
						>
							<span className="dashicons dashicons-schedule" />
							{__("Section Templates", "c9-blocks")}
						</Button>
						<Button
							className="plugin-c9-panel-button"
							isDefault
							isLarge
							onClick={() => {
								this.setState({ isModalOpen: "page-templates" });
							}}
						>
							<span className="dashicons dashicons-editor-code" />
							{__("Page Templates", "c9-blocks")}
						</Button>
						<Button
							className="plugin-c9-panel-button"
							isDefault
							isLarge
							onClick={() => {
								this.setState({ isModalOpen: "saved-blocks" });
							}}
						>
							<span className="dashicons dashicons-admin-settings" />
							{__("Saved Blocks", "c9-blocks")}
						</Button>
					</PanelBody>
					<PanelBody>
						<h5 className="components-base-control__label">
							<b>Color Palette</b>
						</h5>
						<ColorAppender />
					</PanelBody>
				</PluginSidebar>
				{"section-templates" === isModalOpen ? (
					<TemplatesModal
						close={this.closeMenu}
						title="Templates"
						icon={<Dashicon icon={"schedule"} />}
						onRequestClose={() => this.setState({ isModalOpen: false })}
						initial="sections"
					/>
				) : (
					""
				)}
				{"page-templates" === isModalOpen ? (
					<TemplatesModal
						close={this.closeMenu}
						title="Templates"
						icon={<Dashicon icon={"schedule"} />}
						onRequestClose={() => this.setState({ isModalOpen: false })}
						initial="pages"
					/>
				) : (
					""
				)}
				{"saved-blocks" === isModalOpen ? (
					<TemplatesModal
						close={this.closeMenu}
						title="Templates"
						icon={<Dashicon icon={"schedule"} />}
						onRequestClose={() => this.setState({ isModalOpen: false })}
						initial="blocks"
					/>
				) : (
					""
				)}
			</Fragment>
		);
	}
}

registerPlugin("c9-blocks", {
	icon: (
		<div className="c9-plugin-icon">
			<Logo />
		</div>
	),
	render: Sidebar
});
