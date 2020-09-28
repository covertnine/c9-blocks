import styled from "styled-components";

const { __ } = wp.i18n;
const { Button, ButtonGroup, BaseControl } = wp.components;

const SIZE_PRESETS = [0, 25, 50, 75, 100];

const StyledButtonGroup = styled(ButtonGroup)`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	flex-wrap: wrap;
	.is-pressed:after {
		display: inline-block;
		font-family: dashicons;
		content: "\f342";
		padding-left: 40px;
	}
	.components-button + .components-button {
		margin-left: 0;
	}
	.components-button:first-child {
		border-radius: 0;
	}
	.components-button {
		box-shadow: none;
	}
`;

const StyledButton = styled(Button)`
	width: 100%;
	height: 25px;
	margin: 0px auto;
	display: block;
	padding: 2px 12px 2px 30px;
	border-radius: 0;
	box-shadow: none;
	border-bottom: 2px solid var(--gray-dark);
	&.is-pressed {
		background-color: var(--teal);
		border-bottom: 2px solid var(--teal);
	}
`;

const KeyframeStepper = props => {
	const { label, currentValue, offset, resetValue, disabled, id } = props;

	return (
		<BaseControl label={label}>
			<div
				id={id}
				className="block-editor-image-size-control__row c9-key-stepper"
			>
				<StyledButtonGroup aria-label={label}>
					{" "}
					{SIZE_PRESETS.map(scale => {
						const buttonValue = `${offset}px ${scale}%`;
						const isCurrent = buttonValue === currentValue;
						return (
							<StyledButton
								disabled={disabled}
								key={`${label}-${100 - scale}%`}
								isPrimary={isCurrent}
								isPressed={isCurrent}
								onClick={() => props.handleClick(buttonValue)}
							>
								{" "}
								{100 - scale} %
							</StyledButton>
						);
					})}{" "}
				</StyledButtonGroup>{" "}
				<Button
					disabled={disabled}
					key={`${label}-reset`}
					isSmall
					onClick={() => props.handleClick(resetValue)}
				>
					{" "}
					{__("Reset")}{" "}
				</Button>{" "}
			</div>{" "}
		</BaseControl>
	);
};

export default KeyframeStepper;
