/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

const { InnerBlocks } = wp.editor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return [
			<div id="accordion">
				<div className="card">
					<div className="card-header" id="headingOne">
						<h5 className="mb-0">
							<button
								className="btn btn-link"
								data-toggle="collapse"
								data-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								Collapsible Group Item #1
							</button>
						</h5>
					</div>

					<div
						id="collapseOne"
						className="collapse show"
						aria-labelledby="headingOne"
						data-parent="#accordion"
					>
						<div className="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
							laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
							on it squid single-origin coffee nulla assumenda shoreditch et.
							Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
							nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
							lomo. Leggings occaecat craft beer farm-to-table, raw denim
							aesthetic synth nesciunt you probably haven't heard of them
							accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingTwo">
						<h5 className="mb-0">
							<button
								className="btn btn-link collapsed"
								data-toggle="collapse"
								data-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								Collapsible Group Item #2
							</button>
						</h5>
					</div>
					<div
						id="collapseTwo"
						className="collapse"
						aria-labelledby="headingTwo"
						data-parent="#accordion"
					>
						<div className="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
							laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
							on it squid single-origin coffee nulla assumenda shoreditch et.
							Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
							nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
							lomo. Leggings occaecat craft beer farm-to-table, raw denim
							aesthetic synth nesciunt you probably haven't heard of them
							accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingThree">
						<h5 className="mb-0">
							<button
								className="btn btn-link collapsed"
								data-toggle="collapse"
								data-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								Collapsible Group Item #3
							</button>
						</h5>
					</div>
					<div
						id="collapseThree"
						className="collapse"
						aria-labelledby="headingThree"
						data-parent="#accordion"
					>
						<div className="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. 3 wolf moon officia aute, non
							cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
							laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
							on it squid single-origin coffee nulla assumenda shoreditch et.
							Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
							nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
							lomo. Leggings occaecat craft beer farm-to-table, raw denim
							aesthetic synth nesciunt you probably haven't heard of them
							accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
			</div>,
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a
						className="nav-link active"
						id="home-tab"
						data-toggle="tab"
						href="#home"
						role="tab"
						aria-controls="home"
						aria-selected="true"
					>
						Home
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="profile-tab"
						data-toggle="tab"
						href="#profile"
						role="tab"
						aria-controls="profile"
						aria-selected="false"
					>
						Profile
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="contact-tab"
						data-toggle="tab"
						href="#contact"
						role="tab"
						aria-controls="contact"
						aria-selected="false"
					>
						Contact
					</a>
				</li>
			</ul>,
			<div className="tab-content" id="myTabContent">
				<div
					className="tab-pane fade show active"
					id="home"
					role="tabpanel"
					aria-labelledby="home-tab"
				>
					...
				</div>
				<div
					className="tab-pane fade"
					id="profile"
					role="tabpanel"
					aria-labelledby="profile-tab"
				>
					...
				</div>
				<div
					className="tab-pane fade"
					id="contact"
					role="tabpanel"
					aria-labelledby="contact-tab"
				>
					...
				</div>
			</div>
		];
	}
}
