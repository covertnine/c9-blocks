const { registerPlugin, PluginSidebarMoreMenuItem } = wp.plugins;
const { PluginSidebar } = wp.editPost;

const { Fragment } = wp.element;

const { __ } = wp.i18n;
const { Component } = wp.element;

const { Button, PanelBody } = wp.components;

import "./editor.scss";
import Logo from "../../assets/c9-feather-logo-gray.svg";

class C9 extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isModalOpen: false
		};
	}

	render() {
		const { isModalOpen } = this.state;

		return (
			<Fragment>
				<PluginSidebar name="c9-blocks" title={__("C9 Blocks")}>
					<PanelBody className="plugin-c9-panel">
						<Button
							className="plugin-c9-panel-button"
							isDefault
							isLarge
							onClick={() => {
								this.setState({ isModalOpen: "templates" });
							}}
						>
							<span className="dashicons dashicons-schedule" />
							{__("Templates")}
						</Button>
						<Button
							className="plugin-c9-panel-button"
							isDefault
							isLarge
							onClick={() => {
								this.setState({ isModalOpen: "custom-code" });
							}}
						>
							<span className="dashicons dashicons-editor-code" />
							{__("CSS & JavaScript")}
						</Button>
						<Button
							className="plugin-c9-panel-button"
							isDefault
							isLarge
							onClick={() => {
								this.setState({ isModalOpen: "customizer" });
							}}
						>
							<span className="dashicons dashicons-admin-settings" />
							{__("Customizer")}
						</Button>
					</PanelBody>
				</PluginSidebar>
				{/* { 'templates' === isModalOpen ? (
                    <TemplatesModal
                        onRequestClose={ () => this.setState( { isModalOpen: false } ) }
                    />
                ) : '' }
                { 'custom-code' === isModalOpen ? (
                    <CustomCodeModal
                        onRequestClose={ () => this.setState( { isModalOpen: false } ) }
                    />
                ) : '' }
                { 'customizer' === isModalOpen ? (
                    <CustomizerModal
                        onRequestClose={ () => this.setState( { isModalOpen: false } ) }
                    />
                ) : '' } */}
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
	render: C9
});
