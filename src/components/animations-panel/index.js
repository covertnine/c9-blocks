const { __ } = wp.i18n;
const { PanelBody, ToggleControl, BaseControl } = wp.components;
const { Fragment, useEffect, useRef } = wp.element;

import SettingsSpacer from "../settings-spacer";
import { restartAnimate } from "./utils";
import ScrollAnimatePanel from "./components/scroll-animate-panel";
import TransitionAnimatePanel from "./components/scroll-animate-panel";

const animationPanel = props => {
	const {
		enableAnimate,
		animateVal,
		animateDelay,
		animateSpeed,
		animateScrub,
		setAttributes,
		animateStart,
		animateEnd,
		animateCustom,
		useMarkers = false
	} = props;

	const isFirstRun = useRef([true, true, true, true, true]);
	const currDelay = useRef(animateDelay);
	currDelay.current = animateDelay;
	const currSpeed = useRef(animateSpeed);
	currSpeed.current = animateSpeed;
	const currCustom = useRef(animateCustom);
	currCustom.current = animateCustom;

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

		if (!animateScrub) {
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
		<PanelBody title={__("Animations", "c9-blocks")}>
			<ToggleControl
				label={__("Enable/Disable Animations", "c9-blocks")}
				checked={enableAnimate}
				onChange={enableAnimate => setAttributes({ enableAnimate })}
			/>
			{enableAnimate ? (
				<Fragment>
					<SettingsSpacer />
					<p className="components-base-control__label">
						{__(
							animateScrub ? "Scroll Animation" : "Transition Animation",
							"c9-blocks"
						)}
					</p>

					<ToggleControl
						label={__("Scroll/Transition", "c9-blocks")}
						checked={!animateScrub}
						onChange={animateScrub =>
							setAttributes({ animateScrub: !animateScrub })
						}
					/>

					{!animateScrub && (
						<BaseControl
							help={__(
								"Settings to automatically animate the selected block with delay and speed options for fine tuning animtions.",
								"c9-blocks"
							)}
						/>
					)}

					<SettingsSpacer />

					{animateScrub ? (
						<ScrollAnimatePanel {...props} />
					) : (
						<TransitionAnimatePanel {...props} />
					)}
				</Fragment>
			) : null}
		</PanelBody>
	);
};

export default animationPanel;
