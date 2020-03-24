import SaveDeprecated from './save.deprecated';
import attributes from '../attributes';

export const BlockGridContainerDeprecated = ( props ) => (
    <SaveDeprecated { ...props } />
)

const Deprecated = [
	{
		attributes: attributes,
		save: BlockGridContainerDeprecated,
	},
];

export default Deprecated;