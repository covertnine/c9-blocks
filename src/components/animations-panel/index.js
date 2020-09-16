import { useEffect, useRef, useState } from "react";

const { __ } = wp.i18n;
const {
	PanelBody,
	Button,
	RangeControl,
	ToggleControl,
	SelectControl,
	BaseControl,
	Disabled
} = wp.components;
const { Fragment } = wp.element;

import SettingsSpacer from "../settings-spacer";
import KeyframeStepper from "./keyframe-stepper";
import { animateOptions, restartAnimate } from "./utils";
import { animateSettings } from "./utils/animate-settings";

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
		animateEnd,
		animateCustom
	} = props;

	const [useMarkers, setUseMarkers] = useState(false);
	const isFirstRun = useRef([true, true, true, true, true]);
	const currDelay = useRef(animateDelay);
	const currSpeed = useRef(animateSpeed);
	const currCustom = useRef(animateCustom);

	// set new animation and kill old one
	useEffect(() => {
		// skip initial run
		if (isFirstRun.current[0] || null == animateVal) {
			// console.log("exit");
			isFirstRun.current[0] = false;
			return;
		}
		// console.log(animateVal);

		restartAnimate({
			...props,
			animateDelay: currDelay.current,
			animateSpeed: currSpeed.current,
			animateCustom: currCustom.current,
			useMarkers
		});
	}, [
		enableAnimate,
		animateVal,
		animateScrub,
		useMarkers,
		animateStart,
		animateEnd
	]);

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
					restartAnimate({
						...props,
						animateDelay: currDelay.current,
						animateSpeed: currSpeed.current,
						animateCustom: currCustom.current,
						useMarkers
					});
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
					restartAnimate({
						...props,
						animateDelay: currDelay.current,
						animateSpeed: currSpeed.current,
						animateCustom: currCustom.current,
						useMarkers
					});
				}
			},
			200,
			animateSpeed
		);
	}, [animateSpeed]);

	// wipe config after every animation swap
	useEffect(() => {
		// skip initial run
		if (isFirstRun.current[3] || null == animateVal) {
			isFirstRun.current[3] = false;
			return;
		}
		setAttributes({ animateCustom: { before: {}, after: {} } });
	}, [animateVal]);

	// update animate custom
	useEffect(() => {
		// skip initial run
		if (isFirstRun.current[4] || null == animateVal) {
			isFirstRun.current[4] = false;
			return;
		}
		setTimeout(
			prevCustom => {
				// if same, then start updating timeline
				if (JSON.stringify(prevCustom) === JSON.stringify(currCustom.current)) {
					// console.log("check")
					restartAnimate({
						...props,
						animateDelay: currDelay.current,
						animateSpeed: currSpeed.current,
						animateCustom: currCustom.current,
						useMarkers
					});
				}
			},
			200,
			animateCustom
		);
	}, [animateCustom]);

	return (
		<PanelBody title={__("Animations", "c9-blocks")} initialOpen={false}>
			<ToggleControl
				label={__("Enable/Disable Animations", "c9-blocks")}
				checked={enableAnimate}
				onChange={enableAnimate => setAttributes({ enableAnimate })}
			/>
			{enableAnimate ? (
				<Fragment>
					<SettingsSpacer />
					<p className="components-base-control__label">
						{__("Scroll Animation", "c9-blocks")}
					</p>
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
							currCustom.current = animateCustomBlank;
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
											let savedValue =
												"autoAlpha" === c.prop ? value / 100 : value;

											const newAnimateCustom = {
												...animateCustom,
												before: {
													...animateCustom.before,
													[c.prop]: savedValue
												}
											};
											setAttributes({ animateCustom: newAnimateCustom });
											currCustom.current = newAnimateCustom;
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
											let savedValue =
												"autoAlpha" === c.prop ? value / 100 : value;

											const newAnimateCustom = {
												...animateCustom,
												after: {
													...animateCustom.after,
													[c.prop]: savedValue
												}
											};
											setAttributes({ animateCustom: newAnimateCustom });
											currCustom.current = newAnimateCustom;
										}}
										min={c.minValue}
										max={c.maxValue}
									/>
								);
						  })
						: null}

					<SettingsSpacer />

					{animateScrub ? (
						<ToggleControl
							disabled={!animateScrub}
							label={__("Show Keyframe Markers", "c9-blocks")}
							checked={useMarkers}
							onChange={useMarkers => setUseMarkers(useMarkers)}
						/>
					) : (
						<Disabled>
							<ToggleControl
								disabled={!animateScrub}
								label={__("Show Keyframe Markers", "c9-blocks")}
								checked={useMarkers}
								onChange={useMarkers => setUseMarkers(useMarkers)}
							/>
						</Disabled>
					)}

					<BaseControl
						help={__(
							"Select beginning and ending trigger positions in the browser window to add a scrub animation effect as the user scrolls between those positions.",
							"c9-blocks"
						)}
					/>
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
			) : null}

			<SettingsSpacer />
			<p className="components-base-control__label">
				{__("Transition Animation", "c9-blocks")}
			</p>

			<SettingsSpacer />
			<ToggleControl
				label={__("Enable Transitions", "c9-blocks")}
				checked={!animateScrub}
				onChange={animateScrub =>
					setAttributes({ animateScrub: !animateScrub })
				}
			/>

			{enableAnimate && !animateScrub ? (
				<Fragment>
					<BaseControl
						help={__(
							"Settings to automatically animate the selected block with delay and speed options for fine tuning animtions.",
							"c9-blocks"
						)}
					/>

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
