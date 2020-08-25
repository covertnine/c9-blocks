const { __ } = wp.i18n;
const { PanelBody, RangeControl, ToggleControl, SelectControl } = wp.components;
const { Fragment } = wp.element;

const animationPanel = props => {
	const {
		enableAnimate,
		animateVal,
		animateDelay,
		animateSpeed,
		setAttributes
	} = props;

	const sampleAnimationOptions = [
		{ value: null, label: "Select animation", disabled: true },
		{ value: "a", label: "option A" },
		{ value: "b", label: "option B" },
		{ value: "c", label: "option c" }
	];

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
						onChange={animateDelay => setAttributes({ animateDelay })}
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

export default animationPanel;
