// Import CSS
const { Component } = wp.element;
const { Path, SVG } = wp.components;

const { __ } = wp.i18n;

const { Button, Popover } = wp.components;

export default class RemoveButton extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			confirmed: -1
		};
	}

	render() {
		const {
			onRemove,
			show,
			style,
			tooltipText = __("Remove block?"),
			tooltipRemoveText = __("Remove"),
			tooltipCancelText = __("Cancel")
		} = this.props;

		const { confirmed } = this.state;

		if (!show) {
			return "";
		}

		return (
			<Button
				className="c9-component-remove-button"
				onClick={() => {
					if (confirmed === -1) {
						this.setState({
							confirmed: 0
						});
					}
				}}
				style={style}
			>
				{confirmed === 0 ? (
					<Popover
						className="c9-component-remove-button-confirm"
						onClose={() => {
							this.setState({
								confirmed: -1
							});
						}}
						onClickOutside={() => {
							this.setState({
								confirmed: -1
							});
						}}
					>
						{tooltipText}
						<Button
							className="c9-component-remove-button-confirm-yep"
							onClick={onRemove}
						>
							{tooltipRemoveText}
						</Button>
						<Button
							className="c9-component-remove-button-confirm-nope"
							onClick={() => {
								this.setState({
									confirmed: -1
								});
							}}
						>
							{tooltipCancelText}
						</Button>
					</Popover>
				) : (
					""
				)}
				<SVG
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					width="1em"
					height="1em"
					style={{ transform: "rotate(360deg)" }}
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 20 20"
				>
					<Path
						d="M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
						fill="#626262"
					/>
				</SVG>
			</Button>
		);
	}
}
