/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { applyFilters } = wp.hooks;
const { ResizableBox } = wp.components;
const { Component } = wp.element;

import Container from "./container";

const MIN_GRID_HEIGHT = 10;
const MAX_GRID_HEIGHT = 100;

export default class ResizableContainer extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isResizing: false,
			minHeightPx: this.calcVhToPx(MIN_GRID_HEIGHT),
			maxHeightPx: this.calcVhToPx(MAX_GRID_HEIGHT)
		};
	}

	calcVhToPx = value => {
		const docHeight = document.documentElement.clientHeight;
		return (value / 100) * docHeight;
	};

	c9SpacingConfig = (padding, margin) => {
		let classes = [];
		// abstract side class assignment
		function assignSideClasses(sideClass, level) {
			if (-1 != level) {
				classes.push(`${sideClass}-${level}`);
			}
		}

		// padding
		if (
			padding.top === padding.left &&
			padding.top === padding.bottom &&
			padding.top === padding.right &&
			-1 != padding.top
		) {
			classes.push(`p-${padding.top}`);
		} else if (padding.top === padding.bottom && 0 <= padding.top) {
			classes.push(`py-${padding.top}`);
			assignSideClasses("pl", padding.left);
			assignSideClasses("pr", padding.right);
		} else if (padding.left === padding.right && 0 <= padding.left) {
			classes.push(`px-${padding.left}`);
			assignSideClasses("pt", padding.top);
			assignSideClasses("pb", padding.bottom);
		} else {
			["top", "bottom", "left", "right"].map(s =>
				assignSideClasses(`p${s[0]}`, padding[s])
			);
		}

		// margin
		if (margin.top === margin.bottom && -1 != margin.top) {
			classes.push(`my-${margin.top}`);
		} else {
			["top", "bottom"].map(s => assignSideClasses(`m${s[0]}`, margin[s]));
		}

		return classes;
	};

	hexToRGBA = (hex, alpha) => {
		let r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);

		var opacity;

		if (10 === alpha) {
			opacity = 1;
		} else {
			opacity = "." + alpha;
		}

		return `rgba(${r},${g},${b},${opacity})`;
	};

	c9ContainerStyles = (height, hue, opacity) => {
		const styles = {};

		styles.minHeight = `${height}vh`;

		if (hue) {
			styles.backgroundColor = this.hexToRGBA(hue, opacity);
		}

		return styles;
	};

	c9ContainerStylesMobile = (allowMobile, bgSize, bgX, bgY) => {
		const styles = {};

		if (allowMobile && !bgSize) {
			styles["--mobile-height"] =
				"auto" != bgX.size ? `${bgX.size}${bgX.unit}` : `${bgX.size}`;
			styles["--mobile-width"] =
				"auto" != bgY.size ? `${bgY.size}${bgY.unit}` : `${bgY.size}`;
		}

		return styles;
	};

	render() {
		const {
			attributes: {
				containerImgURL,
				bgImgAttach,
				containerHue,
				containerOpacity,
				containerPadding,
				containerMargin,
				containerVideoURL,
				containerVideoID,
				cannotEmbed,
				anchor,
				overrideMobile,
				bgImgSizeMobile,
				bgCustomXMobile,
				bgCustomYMobile,
				minScreenHeight
			},
			className = "",
			editMode = false,
			isSelected,
			setAttributes,
			onResizeStart,
			onResizeStop
		} = this.props;

		const wrapperConfig = {
			className: classnames(
				applyFilters("c9-blocks.blocks.className", className),
				this.c9SpacingConfig(containerPadding, containerMargin),
				bgImgAttach ? "c9-fixed" : "c9-scroll",
				containerImgURL ? "c9-grid-has-background" : null,
				(!!containerVideoURL || !!containerVideoID) && !cannotEmbed
					? "c9-grid-has-video"
					: null
			),
			style: {
				...this.c9ContainerStyles(
					minScreenHeight,
					containerHue,
					containerOpacity
				),
				...this.c9ContainerStylesMobile(
					overrideMobile,
					bgImgSizeMobile,
					bgCustomXMobile,
					bgCustomYMobile
				)
			},
			id: anchor ? anchor : null
		};

		const updateHeight = value => {
			// console.log(value);
			setAttributes({
				minScreenHeight: value
			});
		};

		const handleOnResizeStart = (...args) => {
			onResizeStart(...args);
			this.setState({
				isResizing: true,
				minResize: this.calcVhToPx(minScreenHeight) - 20
			});
			setTimeout(() => {
				this.setState({
					minResize: this.state.minHeightPx
				});
			}, 200);
		};

		const handleOnResizeStop = (event, direction, elt, delta) => {
			onResizeStop();
			// console.log(minScreenHeight, delta.height);
			const docHeight = document.documentElement.clientHeight;
			let pixelHeight = (minScreenHeight / 100) * docHeight + delta.height;
			// console.log(pixelHeight, direction, delta.height);
			const spacerHeight = Math.min(
				parseInt((pixelHeight / docHeight) * 100, 10),
				MAX_GRID_HEIGHT
			);
			updateHeight(spacerHeight);
			this.setState({
				isResizing: false,
				minResize: Math.min(pixelHeight, this.state.maxHeightPx)
			});
		};

		if (editMode) {
			return (
				<ResizableBox
					{...wrapperConfig}
					size={{
						height: "auto"
					}}
					minHeight={
						this.state.isResizing
							? this.state.minResize
							: `${minScreenHeight}vh`
					}
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
					<Container {...this.props} />
				</ResizableBox>
			);
		} else {
			return (
				<div {...wrapperConfig}>
					<Container {...this.props} />
				</div>
			);
		}
	}
}
