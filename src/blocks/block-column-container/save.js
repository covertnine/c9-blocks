/**
 * Internal dependencies
 */
import Container from "./components/container";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {

		return (
			<Container {...this.props}>
				<p>stuff</p>
			</Container>
		);
	}
}
