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

				<div className="accordion" id="accordionExample">
					<div>
						<div id="headingOne">
							<h2 className="mb-0">
								<button
									className="btn btn-link"
									type="button"
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="false"
									aria-controls="collapseOne"
								>
									Collapsible Group Item #1
								</button>
							</h2>
						</div>

						<div
							id="collapseOne"
							className="collapse"
							aria-labelledby="headingOne"
							data-parent="#accordionExample"
						>
							<div className="card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute,
								non cupidatat skateboard dolor brunch. Food truck quinoa
								nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
								put a bird on it squid single-origin coffee nulla assumenda
								shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
								wes anderson cred nesciunt sapiente ea proident. Ad vegan
								excepteur butcher vice lomo. Leggings occaecat craft beer
								farm-to-table, raw denim aesthetic synth nesciunt you probably
								haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div>
						<div id="headingTwo">
							<h2 className="mb-0">
								<button
									className="btn btn-link collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									Collapsible Group Item #2
								</button>
							</h2>
						</div>
						<div
							id="collapseTwo"
							className="collapse"
							aria-labelledby="headingTwo"
							data-parent="#accordionExample"
						>
							<div className="card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute,
								non cupidatat skateboard dolor brunch. Food truck quinoa
								nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
								put a bird on it squid single-origin coffee nulla assumenda
								shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
								wes anderson cred nesciunt sapiente ea proident. Ad vegan
								excepteur butcher vice lomo. Leggings occaecat craft beer
								farm-to-table, raw denim aesthetic synth nesciunt you probably
								haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div>
						<div id="headingThree">
							<h2 className="mb-0">
								<button
									className="btn btn-link collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									Collapsible Group Item #3
								</button>
							</h2>
						</div>
						<div
							id="collapseThree"
							className="collapse"
							aria-labelledby="headingThree"
							data-parent="#accordionExample"
						>
							<div className="card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute,
								non cupidatat skateboard dolor brunch. Food truck quinoa
								nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
								put a bird on it squid single-origin coffee nulla assumenda
								shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
								wes anderson cred nesciunt sapiente ea proident. Ad vegan
								excepteur butcher vice lomo. Leggings occaecat craft beer
								farm-to-table, raw denim aesthetic synth nesciunt you probably
								haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
