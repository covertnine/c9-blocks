/**
 * Block dependencies
 */
import Inspector from "./components/inspector";
import attributes from "./attributes";

import classnames from "classnames";

// // Import CSS
// import "./styles/style.scss";
// import "./styles/editor.scss";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { BlockControls } = wp.editor;
const { Fragment } = wp.element;
// const { Toolbar } = wp.components;

registerBlockType("c9-blocks/c9-card", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("Covertnine Card Container", "c9-blocks"),
	description: __("A flexible and extensible content container", "c9-blocks"),
	icon: "id-alt",
	category: "c9-blocks",
	supports: {
		alignwide: true
	},
	keywords: [
		__("card", "c9-blocks"),
		__("container", "c9-blocks"),
		__("responsive", "c9-blocks")
	],
	attributes,
	edit: props => {
		const {
			attributes: { containerPadding },
			setAttributes
		} = props;

		// Creates a column container that can take other blocks
		return (
			<Fragment>
				<BlockControls key="controls" />
				<Inspector {...{ setAttributes, ...props }} />
				<div
					className={classNames("card", props.className)}
					style={{ width: "26rem" }}
				>
					<img
						style={{ height: "180px", width: "100%", display: "block" }}
						className="card-img-top"
						src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16bd8b068e2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16bd8b068e2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1875%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
						alt="Card cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the cards content.
						</p>
						<a className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</Fragment>
		);
	},

	save: props => {
		const {
			attributes: { containerPadding }
		} = props;

		return (
			<Fragment>
				<div
					className={classNames("card", props.className)}
					style={{ width: "26rem" }}
				>
					<img
						style={{ height: "180px", width: "100%", display: "block" }}
						className="card-img-top"
						src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16bd8b068e2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16bd8b068e2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1875%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
						alt="Card cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the cards content.
						</p>
						<a className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</Fragment>
		);
	} //end save
}); //end registerBlockType
