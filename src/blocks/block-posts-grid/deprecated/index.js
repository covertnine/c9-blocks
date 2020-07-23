import SaveDeprecated from './save.deprecated';
import attributes from '../attributes';

export const BlockPostsGridDeprecated = ( props ) => (
    <SaveDeprecated { ...props } />
)

const Deprecated = [
	{
		attributes: attributes,
		save: BlockPostsGridDeprecated,
	},
];

export default Deprecated;