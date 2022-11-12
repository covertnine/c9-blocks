import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as controls from './controls';
import * as resolvers from './resolvers';

const { registerStore } = wp.data;

registerStore('c9-blocks/twitter', {
	reducer,
	selectors,
	actions,
	controls,
	resolvers,
});
