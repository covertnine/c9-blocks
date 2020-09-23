const { __ } = wp.i18n;
const { Button, ButtonGroup, BaseControl } = wp.components;

const SIZE_PRESETS = [0, 25, 50, 75, 100];

const KeyframeStepper = props => {
	const { label, currentValue, offset, resetValue, disabled } = props;

	return (
		<BaseControl label={label}>
			<div className="block-editor-image-size-control__row">
				<ButtonGroup aria-label={label}>
					{SIZE_PRESETS.map(scale => {
						const buttonValue = `${offset}px ${scale}%`;
						const isCurrent = buttonValue === currentValue;
						return (
							<Button
								disabled={disabled}
								key={`${label}-${100 - scale}%`}
								isPrimary={isCurrent}
								isPressed={isCurrent}
								onClick={() => props.handleClick(buttonValue)}
							>
								{100 - scale}%
							</Button>
						);
					})}
				</ButtonGroup>
				<Button
					disabled={disabled}
					key={`${label}-reset`}
					isSmall
					onClick={() => props.handleClick(resetValue)}
				>
					{__("Reset")}
				</Button>
			</div>
		</BaseControl>
	);
};

export default KeyframeStepper;
