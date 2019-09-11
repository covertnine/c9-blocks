/**
 * External dependencies
 */
import classnames from "classnames";
import memoize from "memize";
import map from "lodash/map";
import _times from "lodash/times";

/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import Container from "./components/container";
import WidthToolbar from "../../components/width-toolbar";
import VerticalAlignmentToolbar from "../../components/vertical-alignment-toolbar";
import BlockSelector from "../../components/block-selector";
import icons from "../../../assets/c9-col-layout-icons";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Tooltip, Placeholder, ButtonGroup, Button } = wp.components;
const { InnerBlocks, BlockControls } = wp.editor;

const ALLOWED_BLOCKS = ["c9-blocks/column-container"];

export default class Edit extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			pickLayout: true
		};
	}

	/**
	 * Generates the child column blocks.
	 */
	getLayoutTemplate = memoize(columns => {
		return _times(columns, () => ["c9-blocks/column"]);
	});

	render() {
		const {
			attributes: {
				verticalAlign,
				containerWidth,
				layout,
				columns,
				columnsGap,
				responsiveToggle,
				columnMaxWidth,
				align
			},
			setAttributes
		} = this.props;

		let selectedRows = 1;

		if (columns) {
			selectedRows = parseInt(columns.toString().split("-"));
		}

		let currWidth;
		if (0 != align.length) {
			if ("container" == containerWidth) {
				currWidth = "wide";
			} else if ("container-fluid" == containerWidth) {
				currWidth = "full";
			} else {
				currWidth = "narrow";
			}
		}

		// show placeholder when nothing is set
		if (!layout && this.state.pickLayout) {
			return [
				<Placeholder
					key="placeholder"
					icon="editor-table"
					label={
						columns
							? __("Column Layout", "c9-blocks")
							: __("Column Number", "c9-blocks")
					}
					instructions={
						columns
							? __("Select a layout for this column.", "c9-blocks")
							: __("Select the number of columns for this layout.", "c9-blocks")
					}
					className={"c9-column-selector-placeholder"}
				>
					{!columns ? (
						<ButtonGroup
							aria-label={__("Select Row Columns", "c9-blocks")}
							className="c9-column-selector-group"
						>
							{map(columnOptions, ({ name, key, icon, columns }) => (
								<Tooltip text={name} key={key}>
									<div className="c9-column-selector">
										<Button
											className="c9-column-selector-button"
											isSmall
											onClick={() => {
												setAttributes({
													columns: columns,
													layout:
														1 === columns || 5 === columns || 6 === columns
															? key
															: null
												});

												{
													1 === columns && this.setState({ pickLayout: false });
												}
											}}
										>
											{icon}
										</Button>
									</div>
								</Tooltip>
							))}
						</ButtonGroup>
					) : (
						<Fragment>
							<ButtonGroup
								aria-label={__("Select Column Layout", "c9-blocks")}
								className="c9-column-selector-group"
							>
								{map(columnLayouts[selectedRows], ({ name, key, icon }) => (
									<Tooltip text={name} key={key}>
										<div className="c9-column-selector">
											<Button
												key={key}
												className="c9-column-selector-button"
												isSmall
												onClick={() => {
													setAttributes({
														layout: key
													});
													this.setState({ pickLayout: false });
												}}
											>
												{icon}
											</Button>
										</div>
									</Tooltip>
								))}
								<Button
									className="c9-column-selector-button-back"
									onClick={() => {
										setAttributes({
											columns: null
										});
										this.setState({ pickLayout: true });
									}}
								>
									{__("Return to Column Selection", "c9-blocks")}
								</Button>
							</ButtonGroup>
						</Fragment>
					)}
				</Placeholder>
			];
		}

		return (
			<Fragment>
				<BlockControls key="controls">
					<WidthToolbar
						value={currWidth}
						onChange={value => {
							if ("wide" == value) {
								setAttributes({ containerWidth: "container", align: "wide" });
							} else if ("full" == value) {
								setAttributes({
									containerWidth: "container-fluid",
									align: "full"
								});
							} else if ("narrow" == value) {
								setAttributes({
									containerWidth: "container-narrow",
									align: "narrow"
								});
							} else {
								setAttributes({ containerWidth: "container", align: "" });
							}
						}}
					/>
					<VerticalAlignmentToolbar
						value={verticalAlign}
						onChange={value => {
							setAttributes({ verticalAlign: value });
						}}
					/>
				</BlockControls>
				<Inspector {...this.props} />

				<BlockSelector text="Select Column Container" />
				<Container {...this.props}>
					<div
						className={classnames(
							"c9-layout-column-wrap-admin",
							"c9-block-layout-column-gap-" + columnsGap,
							responsiveToggle ? "c9-is-responsive-column" : null
						)}
						style={{
							maxWidth: columnMaxWidth ? columnMaxWidth : null
						}}
					>
						<InnerBlocks
							template={this.getLayoutTemplate(columns)}
							templateLock="all"
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</div>
				</Container>
			</Fragment>
		);
	}
}

const columnOptions = [
	{
		name: __("1 Column", "c9-blocks"),
		key: "one-column",
		columns: 1,
		icon: icons.oneEqual
	},
	{
		name: __("2 Columns", "c9-blocks"),
		key: "two-column",
		columns: 2,
		icon: icons.twoEqual
	},
	{
		name: __("3 Columns", "c9-blocks"),
		key: "three-column",
		columns: 3,
		icon: icons.threeEqual
	},
	{
		name: __("4 Columns", "c9-blocks"),
		key: "four-column",
		columns: 4,
		icon: icons.fourEqual
	},
	{
		name: __("5 Columns", "c9-blocks"),
		key: "five-column",
		columns: 5,
		icon: icons.fiveEqual
	},
	{
		name: __("6 Columns", "c9-blocks"),
		key: "six-column",
		columns: 6,
		icon: icons.sixEqual
	}
];

const columnLayouts = {
	1: [
		{
			name: __("1 Column", "c9-blocks"),
			key: "c9-1-col-equal",
			col: 1,
			icon: icons.oneEqual
		}
	],
	2: [
		{
			name: __("2 Columns - 50/50", "c9-blocks"),
			key: "c9-2-col-equal",
			col: 2,
			icon: icons.twoEqual
		},
		{
			name: __("2 Columns - 75/25", "c9-blocks"),
			key: "c9-2-col-wideleft",
			col: 2,
			icon: icons.twoLeftWide
		},
		{
			name: __("2 Columns - 25/75", "c9-blocks"),
			key: "c9-2-col-wideright",
			col: 2,
			icon: icons.twoRightWide
		}
	],
	3: [
		{
			name: __("3 Columns - 33/33/33", "c9-blocks"),
			key: "c9-3-col-equal",
			col: 3,
			icon: icons.threeEqual
		},
		{
			name: __("3 Columns - 25/50/25", "c9-blocks"),
			key: "c9-3-col-widecenter",
			col: 3,
			icon: icons.threeWideCenter
		},
		{
			name: __("3 Columns - 50/25/25", "c9-blocks"),
			key: "c9-3-col-wideleft",
			col: 3,
			icon: icons.threeWideLeft
		},
		{
			name: __("3 Columns - 25/25/50", "c9-blocks"),
			key: "c9-3-col-wideright",
			col: 3,
			icon: icons.threeWideRight
		}
	],
	4: [
		{
			name: __("4 Columns - 25/25/25/25", "c9-blocks"),
			key: "c9-4-col-equal",
			col: 4,
			icon: icons.fourEqual
		},
		{
			name: __("4 Columns - 40/20/20/20", "c9-blocks"),
			key: "c9-4-col-wideleft",
			col: 4,
			icon: icons.fourLeft
		},
		{
			name: __("4 Columns - 20/20/20/40", "c9-blocks"),
			key: "c9-4-col-wideright",
			col: 4,
			icon: icons.fourRight
		}
	],
	5: [
		{
			name: __("5 Columns", "c9-blocks"),
			key: "c9-5-col-equal",
			col: 5,
			icon: icons.fiveEqual
		}
	],
	6: [
		{
			name: __("6 Columns", "c9-blocks"),
			key: "c9-6-col-equal",
			col: 6,
			icon: icons.sixEqual
		}
	]
};
