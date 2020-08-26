import { useEffect, useState, useRef } from "react";

const { __ } = wp.i18n;
const { PanelBody, RangeControl, ToggleControl, SelectControl } = wp.components;
const { Fragment } = wp.element;

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger);
	gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const animationPanel = props => {
	const {
		enableAnimate,
		animateVal,
		animateDelay,
		animateSpeed,
		setAttributes
	} = props;

	const [tl, setTl] = useState(
		gsap.timeline({
			paused: true,
			scrollTrigger: {
				trigger: ".c9-heading"
				// markers: true
			}
		})
	);
	
	const isFirstRun = useRef([true, true, true]);
	const currDelay = useRef(animateDelay);

	// init animation
	useEffect(() => {
		if (enableAnimate) {
			tl.to(".c9-heading", animateConfigs[animateVal]).pause();
			// console.log("play", tl.paused());
			tl.resume();
		} else {
			tl.to(".c9-heading", { paused: true, ...animateConfigs[animateVal] });
		}
	}, []);

	// toggle animation / restart
	useEffect(() => {
		if (enableAnimate) {
			// console.log(tl);
			tl.restart().resume();
		} else {
			tl.pause(0);
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

		tl.pause(0);
		tl.clear();
		tl.to(".c9-heading", animateConfigs[animateVal]).pause();
		tl.resume();
		// console.log("change", animateConfigs[animateVal]);
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
				console.log("diff", prevDelay, currDelay.current);
				// if same, then start updating timeline
				if (prevDelay === currDelay.current) {
					// console.log("check")
					tl.pause(0);
					tl.clear();
					const customConfig = {
						...animateConfigs[animateVal],
						delay: currDelay.current / 1000
					};
					// console.log(customConfig);
					tl.to(".c9-heading", customConfig).pause();
					tl.resume();
				}
			},
			200,
			animateDelay
		);
	}, [animateDelay]);

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
						options={sampleAnimationOptions}
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
						onChange={animateSpeed => setAttributes({ animateSpeed })}
						min={0}
						max={5000}
					/>
				</Fragment>
			) : null}
		</PanelBody>
	);
};

const animateConfigs = {
	spin: {
		rotation: 360,
		duration: 3
	},
	moveX: {
		x: 100,
		duration: 3
	},
	moveY: {
		y: 100,
		duration: 3
	}
};

const sampleAnimationOptions = [
	{ value: null, label: "Select animation", disabled: true },
	{
		value: "spin",
		label: "spinning"
	},
	{
		value: "moveX",
		label: "moving x"
	},
	{
		value: "moveY",
		label: "moving y"
	}
];

export default animationPanel;
