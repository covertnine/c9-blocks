/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { applyFilters } = wp.hooks;
const { Component } = wp.element;
import ResizableBox from "../../../../components/resizable-box";

const MIN_SLIDE_HEIGHT = 1;

export default class ResizableCarouselContainer extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isResizing: false
		};
	}

	render() {
		const {
			attributes,
			attributes: {
				autoSlide,
				slideTime,
				wrapAround,
				slideMaxHeight,
				align,
				containerWidth,
				transitionType
			},
			className = "",
			editMode = false,
			isSelected,
			setAttributes,
			onResizeStart,
			onResizeStop,
			pause,
			...otherProps
		} = this.props;
		const instanceId = editMode ? this.props.instanceId : attributes.instanceId;

		let containerAlign;
		if (0 != align.length) {
			if ("container" == containerWidth) {
				containerAlign = "alignwide";
			} else if ("container-fluid" == containerWidth) {
				containerAlign = "alignfull";
			} else {
				containerAlign = null;
			}
		}

		let transitionClass = ""; // No transition
		if (transitionType === "slide") {
			// Default
			transitionClass = "slide";
		} else if (transitionType === "fade") {
			transitionClass = "slide carousel-fade";
		}

		const wrapperConfig = {
			id: `c9-carousel-indicator-${instanceId}`,
			className: classnames(
				applyFilters("c9-blocks.blocks.className", className),
				`carousel ${transitionClass}`,
				!editMode ? [containerAlign, containerWidth] : null
			),
			dataRide: "carousel",
			dataInterval: !pause && autoSlide ? slideTime : false,
			dataWrap: wrapAround,
			style: { height: slideMaxHeight },
			...otherProps
		};

		const updateHeight = value => {
			setAttributes({
				slideMaxHeight: value
			});
		};

		const handleOnResizeStart = (...args) => {
			onResizeStart(...args);
			this.setState({
				isResizing: true
			});
		};

		const handleOnResizeStop = (event, direction, elt, delta) => {
			onResizeStop();
			// const docHeight = document.documentElement.clientHeight;
			const spacerHeight = parseInt(slideMaxHeight + delta.height, 10);
			updateHeight(spacerHeight);
			this.setState({
				isResizing: false
			});
		};

		if (editMode) {
			return (
				<ResizableBox
					{...wrapperConfig}
					refHandle={c => {
						if (null !== c) {
							this.props.setRef(c.resizable);
						}
					}}
					size={{
						height: slideMaxHeight
					}}
					minHeight={MIN_SLIDE_HEIGHT}
					enable={{
						top: false,
						right: false,
						bottom: true,
						left: false,
						topRight: false,
						bottomRight: false,
						bottomLeft: false,
						topLeft: false
					}}
					onResizeStart={handleOnResizeStart}
					onResizeStop={handleOnResizeStop}
					showHandle={isSelected}
					__experimentalShowTooltip={true}
					__experimentalTooltipProps={{
						axis: "y",
						position: "bottom",
						isVisible: this.state.isResizing
					}}
				>
					{this.props.children}
				</ResizableBox>
			);
		} else {
			return <div {...wrapperConfig}>{this.props.children}</div>;
		}
	}
}
