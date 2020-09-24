const { __ } = wp.i18n;
const {
	Button,
	RangeControl,
	ToggleControl,
	SelectControl,
	BaseControl
} = wp.components;
const { Fragment } = wp.element;

import SettingsSpacer from "../../settings-spacer";
import KeyframeStepper from "../keyframe-stepper";
import { animateOptions } from "../utils";
import { animateSettings } from "../utils/animate-settings";

const ScrollAnimatePanel = props => {
	const {
		animateVal,
		animateScrub,
		setAttributes,
		target,
		animateStart,
		animateEnd,
		animateCustom,
		useMarkers = false
	} = props;

	const setUseMarkers = value => {
		setAttributes({ useMarkers: value });
	};

	return (
		<Fragment>
            <BaseControl
				help={__(
					"Select beginning and ending trigger positions in the browser window to add a scrub animation effect as the user scrolls between those positions.",
					"c9-blocks"
				)}
			/>

			<ToggleControl
				disabled={!animateScrub}
				label={__("Show Keyframe Markers", "c9-blocks")}
				checked={useMarkers}
				onChange={useMarkers => setUseMarkers(useMarkers)}
			/>

			<SelectControl
				disabled={!animateScrub}
				label={__("Animation", "c9-blocks")}
				options={animateOptions}
				value={animateVal}
				onChange={animateVal => setAttributes({ animateVal })}
			/>

			<Button
				disabled={!animateScrub}
				onClick={() => {
					const animateCustomBlank = {
						before: {},
						after: {}
					};
					setAttributes({
						animateCustom: animateCustomBlank
					});
				}}
			>
				Reset Settings
			</Button>

			{animateSettings[animateVal] && animateSettings[animateVal].before
				? animateSettings[animateVal].before.map(c => {
						let currValue = c.defaultValue;
						if (
							animateCustom.before &&
							animateCustom.before[c.prop] !== undefined
						) {
							let storedValue = animateCustom.before[c.prop];
							currValue =
								"autoAlpha" === c.prop ? storedValue * 100 : storedValue;
						}

						return (
							<RangeControl
								disabled={!animateScrub}
								label={__(c.name, "c9-blocks")}
								value={currValue}
								onChange={value => {
									let savedValue = "autoAlpha" === c.prop ? value / 100 : value;

									const newAnimateCustom = {
										...animateCustom,
										before: {
											...animateCustom.before,
											[c.prop]: savedValue
										}
									};
									setAttributes({ animateCustom: newAnimateCustom });
								}}
								min={c.minValue}
								max={c.maxValue}
							/>
						);
				  })
				: null}

			{animateSettings[animateVal] && animateSettings[animateVal].after
				? animateSettings[animateVal].after.map(c => {
						let currValue = c.defaultValue;
						if (
							animateCustom.after &&
							animateCustom.after[c.prop] !== undefined
						) {
							let storedValue = animateCustom.after[c.prop];
							currValue =
								"autoAlpha" === c.prop ? storedValue * 100 : storedValue;
						}

						return (
							<RangeControl
								disabled={!animateScrub}
								label={__(c.name, "c9-blocks")}
								value={currValue}
								onChange={value => {
									let savedValue = "autoAlpha" === c.prop ? value / 100 : value;

									const newAnimateCustom = {
										...animateCustom,
										after: {
											...animateCustom.after,
											[c.prop]: savedValue
										}
									};
									setAttributes({ animateCustom: newAnimateCustom });
								}}
								min={c.minValue}
								max={c.maxValue}
							/>
						);
				  })
				: null}

			<SettingsSpacer />

			<KeyframeStepper
				disabled={!animateScrub}
				label={__("Starting Keyframe", "c9-blocks")}
				currentValue={animateStart}
				handleClick={animateStart => setAttributes({ animateStart })}
				offset={0}
			/>
			<SettingsSpacer />
			<KeyframeStepper
				disabled={!animateScrub}
				label={__("Ending Keyframe", "c9-blocks")}
				currentValue={animateEnd}
				handleClick={animateEnd => setAttributes({ animateEnd })}
				offset={
					document.querySelector(target)
						? document.querySelector(target).offsetHeight
						: 0
				}
			/>
		</Fragment>
	);
};

export default ScrollAnimatePanel;
