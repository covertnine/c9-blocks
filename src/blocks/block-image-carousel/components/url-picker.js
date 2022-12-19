const { __ } = wp.i18n;
const { useState, useEffect, Fragment } = wp.element;
const { Popover, ToolbarButton, ToolbarGroup, KeyboardShortcuts, Button } =
	wp.components;
const { BlockControls, __experimentalLinkControl: LinkControl } =
	wp.blockEditor;
const { rawShortcut, displayShortcut } = wp.keycodes;

import styled from 'styled-components';
import { link, linkOff } from '@wordpress/icons';

const StyledButton = styled(Button)`
	padding-left: 16px !important;
	svg {
		height: 24px;
		width: 24px;
	}
`;

function URLPicker({
	isSelected,
	url,
	id,
	startPause,
	setAttributes,
	opensInNewTab,
	onToggleOpenInNewTab,
}) {
	const [isURLPickerOpen, setIsURLPickerOpen] = useState(false);
	const [slideActive, setSlideActive] = useState(0);

	useEffect(() => {
		const intervalID = setInterval(() => {
			const $ = window.jQuery;
			const currSlide = $(
				`#c9-image-carousel-indicator-${id} div.active`
			).index();
			setSlideActive(currSlide);
		}, 300);
		return () => {
			// Stop the interval when the component unmounts.
			clearInterval(intervalID);
		};
	}, []);

	const urlIsSet = !!url[slideActive];
	const toggleLinkControl = () => {
		startPause();
		setIsURLPickerOpen((isURLPickerOpen) => !isURLPickerOpen);
		return false; // prevents default behaviour for event
	};
	const unlinkButton = () => {
		let link = [...url];
		link[slideActive] = null;
		setAttributes({
			link,
		});
	};
	const linkControl = isURLPickerOpen && (
		<Popover
			className="c9-url-picker"
			position="bottom center"
			onClose={() => setIsURLPickerOpen(false)}
		>
			<p
				className="components-base-control__label"
				style={{ textAlign: 'center' }}
			>
				Custom Link Setting for Slide {slideActive + 1}
			</p>
			<LinkControl
				className="wp-block-navigation-link__inline-link-input"
				value={{ url: url[slideActive], opensInNewTab }}
				onChange={({ url: newURL = '', opensInNewTab: newOpensInNewTab }) => {
					let link = [...url];
					link[slideActive] = newURL;
					setAttributes({ link });

					if (opensInNewTab !== newOpensInNewTab) {
						onToggleOpenInNewTab(newOpensInNewTab);
					}
				}}
			/>
			{urlIsSet && (
				<StyledButton
					label={__('Remove custom link', 'c9-blocks')}
					icon={linkOff}
					style={{}}
					onClick={unlinkButton}
				>
					{__('Remove custom link', 'c9-blocks')}
				</StyledButton>
			)}
		</Popover>
	);
	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						name="link"
						icon={link}
						title={__('Link')}
						shortcut={displayShortcut.primary('k')}
						onClick={toggleLinkControl}
						isActive={isURLPickerOpen}
					/>
				</ToolbarGroup>
			</BlockControls>
			{isSelected && (
				<KeyboardShortcuts
					bindGlobal
					shortcuts={{
						[rawShortcut.primary('k')]: toggleLinkControl,
						[rawShortcut.primaryShift('k')]: unlinkButton,
					}}
				/>
			)}
			{linkControl}
		</Fragment>
	);
}

export default URLPicker;
