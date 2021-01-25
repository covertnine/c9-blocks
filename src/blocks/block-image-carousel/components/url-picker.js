const { __ } = wp.i18n;
const { useState, Fragment } = wp.element;
const {
	Popover,
	ToolbarButton,
	ToolbarGroup,
	KeyboardShortcuts
} = wp.components;
const {
	BlockControls,
	__experimentalLinkControl: LinkControl
} = wp.blockEditor;
const { rawShortcut, displayShortcut } = wp.keycodes;
import { link, linkOff } from "@wordpress/icons";

function URLPicker({
	isSelected,
	url,
	slideActive,
	setAttributes,
	opensInNewTab,
	onToggleOpenInNewTab
}) {
	const [isURLPickerOpen, setIsURLPickerOpen] = useState(false);
	const urlIsSet = !!url[slideActive];
	const urlIsSetandSelected = urlIsSet && isSelected;
	const openLinkControl = () => {
		setIsURLPickerOpen(true);
		return false; // prevents default behaviour for event
	};
	const unlinkButton = () => {
		let link = [...url];
		link[slideActive] = null;
		setAttributes({
			link
		});
		setIsURLPickerOpen(false);
	};
	const linkControl = (isURLPickerOpen || urlIsSetandSelected) && (
		<Popover
			className="c9-url-picker"
			position="bottom center"
			onClose={() => setIsURLPickerOpen(false)}
		>
			<LinkControl
				className="wp-block-navigation-link__inline-link-input"
				value={{ url: url[slideActive], opensInNewTab }}
				onChange={({ url: newURL = "", opensInNewTab: newOpensInNewTab }) => {
					let link = [...url];
					link[slideActive] = newURL;
					setAttributes({ link });

					if (opensInNewTab !== newOpensInNewTab) {
						onToggleOpenInNewTab(newOpensInNewTab);
					}
				}}
			/>
		</Popover>
	);
	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					{!urlIsSet && (
						<ToolbarButton
							name="link"
							icon={link}
							title={__("Link")}
							shortcut={displayShortcut.primary("k")}
							onClick={openLinkControl}
						/>
					)}
					{urlIsSetandSelected && (
						<ToolbarButton
							name="link"
							icon={linkOff}
							title={__("Unlink")}
							shortcut={displayShortcut.primaryShift("k")}
							onClick={unlinkButton}
							isActive={true}
						/>
					)}
				</ToolbarGroup>
			</BlockControls>
			{isSelected && (
				<KeyboardShortcuts
					bindGlobal
					shortcuts={{
						[rawShortcut.primary("k")]: openLinkControl,
						[rawShortcut.primaryShift("k")]: unlinkButton
					}}
				/>
			)}
			{linkControl}
		</Fragment>
	);
}

export default URLPicker;
