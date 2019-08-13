/* eslint-disable jsx-a11y/anchor-is-valid */

// Import block dependencies and components
import Inspector from "./components/inspector";
import ShareLinks from "./components/sharing";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Import Fontawesome Icon
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { makeIcon } from "../../helpers/awesomeGenerator";
const iconEl = makeIcon(faShareSquare);

// Components
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	AlignmentToolbar,
	BlockControls,
} = wp.editor;

// Register the block
registerBlockType("c9-blocks/social-share", {
	title: __("C9 Social Share", "c9-blocks"),
	description: __("Add sharing buttons to your posts and pages.", "c9-blocks"),
	icon: iconEl,
	category: "c9-blocks",
	keywords: [
		__("share", "c9-blocks"),
		__("social", "c9-blocks")
	],

	// Render the block components
	edit: props => {
		// Setup the props
		const {
			setAttributes
		} = props;

		const {
			twitter,
			facebook,
			google,
			linkedin,
			pinterest,
			email,
			reddit,
			shareAlignment,
		} = props.attributes;

		return [
			// Show the alignment toolbar on focus
			<BlockControls key="controls">
				<AlignmentToolbar
					value={shareAlignment}
					onChange={value => {
						setAttributes({ shareAlignment: value });
					}}
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector {...props} />,
			// Show the button markup in the editor
			<ShareLinks {...props}>
				<ul className="c9-share-list">
					{twitter && (
						<li>
							<a className="c9-share-twitter">
								<i className="fab fa-twitter" />
								<span className={"c9-social-text"}>
									{__("Share on Twitter", "c9-blocks")}
								</span>
							</a>
						</li>
					)}

					{facebook && (
						<li>
							<a className="c9-share-facebook">
								<i className="fab fa-facebook-f" />
								<span className={"c9-social-text"}>
									{__("Share on Facebook", "c9-blocks")}
								</span>
							</a>
						</li>
					)}

					{google && (
						<li>
							<a className="c9-share-google">
								<i className="fab fa-google" />
								<span className={"c9-social-text"}>
									{__("Share on Google", "c9-blocks")}
								</span>
							</a>
						</li>
					)}

					{pinterest && (
						<li>
							<a className="c9-share-pinterest">
								<i className="fab fa-pinterest-p" />
								<span className={"c9-social-text"}>
									{__("Share on Pinterest", "c9-blocks")}
								</span>
							</a>
						</li>
					)}

					{linkedin && (
						<li>
							<a className="c9-share-linkedin">
								<i className="fab fa-linkedin" />
								<span className={"c9-social-text"}>
									{__("Share on LinkedIn", "c9-blocks")}
								</span>
							</a>
						</li>
					)}

					{reddit && (
						<li>
							<a className="c9-share-reddit">
								<i className="fab fa-reddit-alien" />
								<span className={"c9-social-text"}>
									{__("Share on reddit", "c9-blocks")}
								</span>
							</a>
						</li>
					)}

					{email && (
						<li>
							<a className="c9-share-email">
								<i className="fas fa-envelope" />
								<span className={"c9-social-text"}>
									{__("Share via Email", "c9-blocks")}
								</span>
							</a>
						</li>
					)}
				</ul>
			</ShareLinks>
		];
	},

	// Render via PHP
	save() {
		return null;
	}
});
