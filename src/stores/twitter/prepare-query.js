import qs from 'qs';

export default function prepareQuery( type, data ) {
    const additionalData = qs.stringify( data, { encode: false } );
    const query = `/c9-blocks/get_twitter_${ type }/${ additionalData ? `?${ additionalData }` : '' }`;

    return query;
}
