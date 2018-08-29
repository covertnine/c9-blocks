/**
 * External dependencies
 */
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
const { Button, ButtonGroup, RangeControl } = wp.components;

export default function CustomRadio( { sizes = [], fallbackFontSize, value, onChange } ) {
  return (
    <Fragment>
      <div className="components-font-size-picker__buttons">
        <ButtonGroup aria-label={ __( 'Font Size' ) }>
          { map( sizes, ( { name, size, shortName } ) => (
            <Button
              key={ size }
              isLarge
              isPrimary={ value === size }
              aria-pressed={ value === size }
              onClick={ () => onChange( size ) }
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
        value={ value || '' }
        initialPosition={ fallbackFontSize }
        onChange={ onChange }
        min={ 12 }
        max={ 100 }
        beforeIcon="editor-textcolor"
        afterIcon="editor-textcolor"
      />
    </Fragment>
  );
}