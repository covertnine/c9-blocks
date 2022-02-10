/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import ShareLinks from "./components/sharing";

/**
 * WordPress dependencies
 */
const { BlockControls } = wp.blockEditor;
const { AlignmentToolbar } = wp.blockEditor;
const { Component } = wp.element;
const { __ } = wp.i18n;

export default class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		// Setup the props
		const { setAttributes } = this.props;

		const {
			twitter,
			facebook,
			instagram,
			tiktok,
			google,
			linkedin,
			pinterest,
			email,
			reddit,
			shareAlignment
		} = this.props.attributes;

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
			<Inspector {...this.props} />,
			// Show the button markup in the editor
			<ShareLinks {...this.props}>
				{!twitter &&
					!facebook &&
					!google &&
					!linkedin &&
					!pinterest &&
					!email &&
					!reddit && (
						<span className="text-danger">
							Choose a sharing link to display... otherwise remove this block.
						</span>
					)}
				<ul className="c9-share-list">
					{twitter && (
						<li>
							<a className="c9-share-twitter">
								<i className="fab fa-twitter" />
								<span className={"c9-social-text"}>
									{__("Share on Twitter", "c9-blocks")}
								</span>
								<span className="sr-only">(Link opens in new window)</span>
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
								<span className="sr-only">(Link opens in new window)</span>
							</a>
						</li>
					)}

					{instagram && (
						<li>
							<a className="c9-share-instagram">
								<i className="fab fa-instagram" />
								<span className={"c9-social-text"}>
									{__("Share on Instagram", "c9-blocks")}
								</span>
								<span className="sr-only">(Link opens in new window)</span>
							</a>
						</li>
					)}

					{tiktok && (
						<li>
							<a className="c9-share-tiktok">
								<i className="fab fa-tiktok" />
								<span className={"c9-social-text"}>
									{__("Share on Tiktok", "c9-blocks")}
								</span>
								<span className="sr-only">(Link opens in new window)</span>
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
								<span className="sr-only">(Link opens in new window)</span>
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
								<span className="sr-only">(Link opens in new window)</span>
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
								<span className="sr-only">(Link opens in new window)</span>
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
								<span className="sr-only">(Link opens in new window)</span>
							</a>
						</li>
					)}
				</ul>
			</ShareLinks>
		];
	}
}
