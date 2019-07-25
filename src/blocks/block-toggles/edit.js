/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

const { InnerBlocks, BlockControls } = wp.editor;

const ALLOWED_BLOCKS = ["c9-blocks/column-container"];

export default class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
			<Fragment>
				<BlockControls key="controls" />
				<Inspector {...this.props} />

				<ul className="nav nav-tabs c9-tabs" id="c9-tabs" role="tablist">
					<li className="nav-item">
						<a
							href="#tab-by-brand"
							className="nav-link active"
							id="tab-button-by-brand"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-brand"
							aria-selected="true"
						>
							By Brand
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-job"
							className="nav-link"
							id="tab-button-by-job"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-job"
							aria-selected="false"
						>
							By Job
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-user"
							className="nav-link"
							id="tab-button-by-user"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-user"
							aria-selected="false"
						>
							By User
						</a>
					</li>
				</ul>
				<div className="c9-tab-content tab-content" id="c9-nav-tab-content">
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade show active"
						role="tabpanel"
						id="tab-by-brand"
						aria-labelledby="by-brand"
					>
						<p>By Brand</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-job"
						aria-labelledby="by-job"
					>
						<p>By Job</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-user"
						aria-labelledby="by-user"
					>
						<p>By User</p>
					</div>
				</div>

				<ul className="nav nav-tabs c9-tabs" id="c9-tabs-2" role="tablist">
					<li className="nav-item">
						<a
							href="#tab-by-brand-2"
							className="nav-link active"
							id="tab-button-by-brand"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-brand"
							aria-selected="true"
						>
							By Brand
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-job-2"
							className="nav-link"
							id="tab-button-by-job"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-job"
							aria-selected="false"
						>
							By Job
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-user-2"
							className="nav-link"
							id="tab-button-by-user"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-user"
							aria-selected="false"
						>
							By User
						</a>
					</li>
				</ul>
				<div className="c9-tab-content tab-content" id="c9-nav-tab-content">
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade show active"
						role="tabpanel"
						id="tab-by-brand-2"
						aria-labelledby="by-brand"
					>
						<p>By Brand</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-job-2"
						aria-labelledby="by-job"
					>
						<p>By Job</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-user-2"
						aria-labelledby="by-user"
					>
						<p>By User</p>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-sm-3">
						<div
							className="nav flex-column c9-tabs nav-pills"
							id="c9-tabs-3"
							role="tablist"
							aria-orientation="vertical"
						>
							<a
								href="#tab-by-brand-3"
								className="nav-link active"
								id="tab-button-by-brand"
								data-toggle="pill"
								role="tab"
								aria-controls="tab-by-brand"
								aria-selected="true"
							>
								By Brand
							</a>
							<a
								href="#tab-by-job-3"
								className="nav-link"
								id="tab-button-by-job"
								data-toggle="pill"
								role="tab"
								aria-controls="tab-by-job"
								aria-selected="false"
							>
								By Job
							</a>
							<a
								href="#tab-by-user-3"
								className="nav-link"
								id="tab-button-by-user"
								data-toggle="pill"
								role="tab"
								aria-controls="tab-by-user"
								aria-selected="false"
							>
								By User
							</a>
						</div>
					</div>
					<div className="col-xs-12 col-sm-9">
						<div className="c9-tab-content tab-content" id="c9-nav-tab-content">
							<div
								className="wp-block-c9-blocks-tabs-tab tab-pane fade show active d-flex align-items-start"
								role="tabpanel"
								id="tab-by-brand-3"
								aria-labelledby="by-brand"
							>
								<p>By Brand</p>
							</div>
							<div
								className="wp-block-c9-blocks-tabs-tab tab-pane fade d-flex align-items-center"
								role="tabpanel"
								id="tab-by-job-3"
								aria-labelledby="by-job"
							>
								<p>By Job</p>
							</div>
							<div
								className="wp-block-c9-blocks-tabs-tab tab-pane fade d-flex align-items-end"
								role="tabpanel"
								id="tab-by-user-3"
								aria-labelledby="by-user"
							>
								<p>By User</p>
							</div>
						</div>
					</div>
				</div>

				<ul
					className="nav nav-tabs c9-tabs nav-justified"
					id="c9-tabs-4"
					role="tablist"
				>
					<li className="nav-item">
						<a
							href="#tab-by-brand-4"
							className="nav-link active"
							id="tab-button-by-brand"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-brand"
							aria-selected="true"
						>
							By Brand
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-job-4"
							className="nav-link"
							id="tab-button-by-job"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-job"
							aria-selected="false"
						>
							By Job
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-user-4"
							className="nav-link"
							id="tab-button-by-user"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-user"
							aria-selected="false"
						>
							By User
						</a>
					</li>
				</ul>
				<div className="c9-tab-content tab-content" id="c9-nav-tab-content">
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade show active"
						role="tabpanel"
						id="tab-by-brand-4"
						aria-labelledby="by-brand"
					>
						<p>By Brand</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-job-4"
						aria-labelledby="by-job"
					>
						<p>By Job</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-user-4"
						aria-labelledby="by-user"
					>
						<p>By User</p>
					</div>
				</div>

				<ul
					className="nav nav-tabs c9-tabs d-flex justify-content-end"
					id="c9-tabs-5"
					role="tablist"
				>
					<li className="nav-item">
						<a
							href="#tab-by-brand-5"
							className="nav-link active"
							id="tab-button-by-brand"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-brand"
							aria-selected="true"
						>
							By Brand
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-job-5"
							className="nav-link"
							id="tab-button-by-job"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-job"
							aria-selected="false"
						>
							By Job
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-user-5"
							className="nav-link"
							id="tab-button-by-user"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-user"
							aria-selected="false"
						>
							By User
						</a>
					</li>
				</ul>
				<div className="c9-tab-content tab-content" id="c9-nav-tab-content">
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade show active"
						role="tabpanel"
						id="tab-by-brand-5"
						aria-labelledby="by-brand"
					>
						<p>By Brand</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-job-5"
						aria-labelledby="by-job"
					>
						<p>By Job</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-user-5"
						aria-labelledby="by-user"
					>
						<p>By User</p>
					</div>
				</div>

				<ul
					className="nav nav-tabs c9-tabs d-flex justify-content-center"
					id="c9-tabs-6"
					role="tablist"
				>
					<li className="nav-item">
						<a
							href="#tab-by-brand-6"
							className="nav-link active"
							id="tab-button-by-brand"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-brand"
							aria-selected="true"
						>
							By Brand
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-job-6"
							className="nav-link"
							id="tab-button-by-job"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-job"
							aria-selected="false"
						>
							By Job
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#tab-by-user-6"
							className="nav-link"
							id="tab-button-by-user"
							data-toggle="tab"
							role="tab"
							aria-controls="tab-by-user"
							aria-selected="false"
						>
							By User
						</a>
					</li>
				</ul>
				<div className="c9-tab-content tab-content" id="c9-nav-tab-content">
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade show active"
						role="tabpanel"
						id="tab-by-brand-6"
						aria-labelledby="by-brand"
					>
						<p>By Brand</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-job-6"
						aria-labelledby="by-job"
					>
						<p>By Job</p>
					</div>
					<div
						className="wp-block-c9-blocks-tabs-tab tab-pane fade"
						role="tabpanel"
						id="tab-by-user-6"
						aria-labelledby="by-user"
					>
						<p>By User</p>
					</div>
				</div>
			</Fragment>
		);
	}
}
