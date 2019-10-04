/**
 * Internal dependencies
 */
import ColorAppender from "../color-appender";
import Logo from "../../../assets/c9-feather-logo-gray.svg";
import { TemplatesModal } from "../templates-modal";
import icons from "../../../assets/sidebar-icons";

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
const { Button, PanelBody, Dashicon, Icon } = wp.components;
const { withDispatch } = wp.data;

const ICON_SIZE = 80;

class Sidebar extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isModalOpen: false,
			loading: false,
			sections: {},
			layouts: {}
		};
	}

	setSections = sections => {
		this.setState({ sections });
	};

	setLayouts = layouts => {
		this.setState({ layouts });
	};

	closeMenu = () => {
		this.setState({ isModalOpen: false });
	};

	render() {
		const { resetBlocks } = this.props;
		const { isModalOpen, sections, layouts } = this.state;

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
								this.setState({ loading: true });
								this.setState({ isModalOpen: "section-templates" });
								this.setState({ loading: false });
							}}
						>
							<Icon icon={icons.section} size={ICON_SIZE} />
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
							<Icon icon={icons.page} size={ICON_SIZE} />
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
							<Icon icon={icons.saved} size={ICON_SIZE} />
							{__("Saved Blocks", "c9-blocks")}
						</Button>
						<Button
							className="plugin-c9-panel-button"
							isDefault
							isLarge
							onClick={() => {
								resetBlocks([]);
							}}
						>
							<Icon icon={icons.close} size={ICON_SIZE} />
							{__("Clear Page", "c9-blocks")}
						</Button>
					</PanelBody>
					<PanelBody>
						<h5 className="components-base-control__label">
							<b>Color Palette</b>
						</h5>
						<ColorAppender />
					</PanelBody>
				</PluginSidebar>
				{isModalOpen ? (
					<TemplatesModal
						close={this.closeMenu}
						sections={sections}
						layouts={layouts}
						setSections={this.setSections}
						setLayouts={this.setLayouts}
						title="Templates"
						icon={<Dashicon icon={"schedule"} />}
						onRequestClose={() => this.setState({ isModalOpen: false })}
						initial={isModalOpen}
					/>
				) : (
					""
				)}
			</Fragment>
		);
	}
}

const C9Sidebar = withDispatch(dispatch => {
	const { resetBlocks } = dispatch("core/editor");
	return {
		resetBlocks
	};
})(Sidebar);

registerPlugin("c9-blocks", {
	icon: (
		<div className="c9-plugin-icon">
			<Logo />
		</div>
	),
	render: C9Sidebar
});
