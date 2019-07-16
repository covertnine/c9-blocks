// External Dependencies.
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const {
	RichText,
	InnerBlocks
} = wp.editor;

export default class Save extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {

		const {
            tabActive,
            buttonsAlign,
            tabsData = [],
		} = this.props.attributes;
		
		let className = 'tabs';

		return (
			<div className={ className } data-tab-active={ tabActive }>
                <div className={ classnames( 'tabs-buttons', `tabs-buttons-align-${ buttonsAlign }` ) }>
                    {
                        tabsData.map( ( tabData ) => {
                            return (
                                <RichText.Content
                                    tagName="a"
                                    href={ `#${ tabData.slug }` }
                                    className="tabs-buttons-item"
                                    key={ `tab_button_${ tabData.slug }` }
                                    value={ tabData.title }
                                />
                            );
                        } )
                    }
                </div>
                <div className="tabs-content">
                    <InnerBlocks.Content />
                </div>
            </div>
		);
	}
}