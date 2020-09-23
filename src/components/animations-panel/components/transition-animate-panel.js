const { __ } = wp.i18n;
const { RangeControl, SelectControl } = wp.components;
const { Fragment } = wp.element;

import { animateOptions } from "../utils";

const TransitionAnimatePanel = props => {
	const { animateVal, animateDelay, animateSpeed, setAttributes } = props;

	return (
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
				}}
				min={0}
				max={5000}
			/>
			<RangeControl
				label={__("Speed (ms)", "c9-blocks")}
				value={animateSpeed}
				onChange={animateSpeed => {
					setAttributes({ animateSpeed });
				}}
				min={500}
				max={5000}
			/>
		</Fragment>
	);
};

export default TransitionAnimatePanel;
