/**
 * External dependencies
 */
import map from 'lodash/map';

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
const { Button, ButtonGroup, RangeControl } = wp.components;

export default function CustomRadio( { label, customValues = [], defaultValue, currentValue, onChange } ) {
  return (
    <Fragment>
    { label && <label className="custom-radio">{ label }</label> }
      <div className="components-font-size-picker__buttons">
        <ButtonGroup aria-label={ label }>
          { map( customValues, ( { name, customValue, shortName } ) => (
            <Button
              key={ customValue }
              isLarge
              isPrimary={ currentValue === customValue }
              aria-pressed={ currentValue === customValue }
              onClick={ () => onChange( customValue ) }
            >
              { shortName || name }
            </Button>
          ) ) }
        </ButtonGroup>
        <Button
          isLarge
          onClick={ () => onChange( undefined ) }
        >
          { __( 'Reset' ) }
        </Button>
      </div>
      <RangeControl
        className="components-font-size-picker__custom-input"
        label={ __( 'Custom Size' ) }
        value={ currentValue || '' }
        initialPosition={ fallbackCustomValue }
        onChange={ onChange }
        min={ 0 }
        max={ 100 }
        beforeIcon="editor-textcolor"
        afterIcon="editor-textcolor"
      />
    </Fragment>
  );
}