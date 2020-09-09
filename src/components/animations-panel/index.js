import { useEffect, useRef, useState } from "react";

const { __ } = wp.i18n;
const {
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl,
	BaseControl
} = wp.components;
const { Fragment } = wp.element;


import SettingsSpacer from "../settings-spacer";
import KeyframeStepper from "./keyframe-stepper";
import { animateOptions, restartAnimate } from "./utils";

const animationPanel = props => {
	const {
		enableAnimate,
		animateVal,
		animateDelay,
		animateSpeed,
		animateScrub,
		setAttributes,
		target,
		animateStart,
		animateEnd
	} = props;

	const [useMarkers, setUseMarkers] = useState(false);
	const isFirstRun = useRef([true, true, true]);
	const currDelay = useRef(animateDelay);
	const currSpeed = useRef(animateSpeed);

	// set new animation and kill old one
	useEffect(() => {
		// skip initial run
		if (isFirstRun.current[0] || null == animateVal) {
			// console.log("exit");
			isFirstRun.current[0] = false;
			return;
		}
		// console.log(animateVal);

		restartAnimate(
			target,
			animateVal,
			currDelay.current,
			currSpeed.current,
			animateScrub,
			enableAnimate,
			useMarkers
		);
	}, [enableAnimate, animateVal, animateScrub, useMarkers]);

	// update delay
	useEffect(() => {
		// skip initial run
		if (isFirstRun.current[1] || null == animateVal) {
			// console.log("exit");
			isFirstRun.current[1] = false;
			return;
		}
		setTimeout(
			prevDelay => {
				// console.log("diff", prevDelay, currDelay.current);
				// if same, then start updating timeline
				if (prevDelay === currDelay.current) {
					// console.log("check")
					restartAnimate(
						target,
						animateVal,
						currDelay.current,
						currSpeed.current,
						animateScrub,
						enableAnimate
					);
				}
			},
			200,
			animateDelay
		);
	}, [animateDelay]);

	// update duration
	useEffect(() => {
		// skip initial run
		if (isFirstRun.current[2] || null == animateVal) {
			// console.log("exit");
			isFirstRun.current[2] = false;
			return;
		}
		setTimeout(
			prevSpeed => {
				// if same, then start updating timeline
				if (prevSpeed === currSpeed.current) {
					// console.log("check")
					restartAnimate(
						target,
						animateVal,
						currDelay.current,
						currSpeed.current,
						animateScrub,
						enableAnimate
					);
				}
			},
			200,
			animateSpeed
		);
	}, [animateSpeed]);

	return (
		<PanelBody title={__("Animations", "c9-blocks")} initialOpen={false}>
			<ToggleControl
				label={__("Enable/Disable Animations", "c9-blocks")}
				checked={enableAnimate}
				onChange={enableAnimate => setAttributes({ enableAnimate })}
			/>
			{enableAnimate ? (
				<Fragment>
					<SelectControl
						label={__("Animation", "c9-blocks")}
						options={animateOptions}
						value={animateVal}
						onChange={animateVal => setAttributes({ animateVal })}
					/>
					<RangeControl
						label={__("Delay (ms)", "c9-blocks")}
						value={animateDelay}
						onChange={animateDelay => {
							setAttributes({ animateDelay });
							currDelay.current = animateDelay;
						}}
						min={0}
						max={5000}
					/>
					<RangeControl
						label={__("Speed (ms)", "c9-blocks")}
						value={animateSpeed}
						onChange={animateSpeed => {
							setAttributes({ animateSpeed });
							currSpeed.current = animateSpeed;
						}}
						min={500}
						max={5000}
					/>
					<BaseControl
						help={__(
							"Select beginning and ending trigger positions in the browser window to add a scrub animation effect as the user scrolls between those positions.",
							"c9-blocks"
						)}
					/>
					<KeyframeStepper
						label={__("Starting Keyframe", "c9-blocks")}
						currentValue={animateStart}
						handleClick={animateStart => setAttributes({ animateStart })}
						resetValue="0%"
					/>
					<SettingsSpacer />
					<KeyframeStepper
						label={__("Ending Keyframe", "c9-blocks")}
						currentValue={animateEnd}
						handleClick={animateEnd => setAttributes({ animateEnd })}
						resetValue="100%"
					/>
					<ToggleControl
						label={__("Scrub Animation", "c9-blocks")}
						checked={animateScrub}
						onChange={animateScrub => setAttributes({ animateScrub })}
					/>
					{animateScrub ? (
						<ToggleControl
							label={__("Show Markers for Scrubbing?", "c9-blocks")}
							checked={useMarkers}
							onChange={useMarkers => setUseMarkers(useMarkers)}
						/>
					) : null}
				</Fragment>
			) : null}
		</PanelBody>
	);
};

export default animationPanel;
