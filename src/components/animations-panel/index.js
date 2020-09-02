import { useEffect, useRef } from "react";

const { __ } = wp.i18n;
const { PanelBody, RangeControl, ToggleControl, SelectControl } = wp.components;
const { Fragment } = wp.element;

import { animateOptions, restartAnimate } from "./utils";

const animationPanel = props => {
	const {
		enableAnimate,
		animateVal,
		animateDelay,
		animateSpeed,
		setAttributes,
		target
	} = props;

	const isFirstRun = useRef([true, true, true]);
	const currDelay = useRef(animateDelay);
	const currSpeed = useRef(animateSpeed);

	// toggle animation / restart
	useEffect(() => {
		if (enableAnimate) {
			restartAnimate(target, animateVal, currDelay.current, currSpeed.current);
		}
		// console.log("test", enableAnimate);
	}, [enableAnimate]);

	// set new animation and kill old one
	useEffect(() => {
		// skip initial run
		if (isFirstRun.current[0] || null == animateVal) {
			// console.log("exit");
			isFirstRun.current[0] = false;
			return;
		}
		// console.log(animateVal);

		restartAnimate(target, animateVal, currDelay.current, currSpeed.current);
	}, [animateVal]);

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
						currSpeed.current
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
						currSpeed.current
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
				</Fragment>
			) : null}
		</PanelBody>
	);
};

export default animationPanel;
