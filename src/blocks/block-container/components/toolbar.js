import { Toolbar } from "@wordpress/components";
import { withState } from "@wordpress/compose";

export const containerBar = withState( {
	activeControl: "up",
} )( ( { activeControl, setState } ) => {
	function createThumbsControl( thumbs ) {
		return {
			icon: `thumbs-${ thumbs }`,
			title: `Thumbs ${ thumbs }`,
			isActive: activeControl === thumbs,
			onClick: () => setState( { activeControl: thumbs } ),
		};
	}

	return <Toolbar controls={ [ "up", "down" ].map( createThumbsControl ) } />;
} );
