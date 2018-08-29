 /**
 * External dependencies
 */
import isEmpty from 'lodash/isEmpty';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
const { BaseControl } = wp.components;

function CustomRadio( { label, className, selected, help, instanceId, onChange, options = [] } ) {
  const id = `inspector-custom-radio-control-${ instanceId }`;
  const onChangeValue = ( event ) => onChange( event.target.value );

  return ! isEmpty( options ) && (
    <BaseControl label={ label } id={ id } help={ help } className={ classnames( className, 'components-custom-radio-control' ) }>
      { options.map( ( option, index ) =>
        <div
          key={ `${ id }-${ index }` }
          className="components-custom-radio-control__option"
        >
          <input
            id={ `${ id }-${ index }` }
            className="components-custom-radio-control__input"
            type="radio"
            name={ id }
            value={ option.value }
            onChange={ onChangeValue }
            checked={ option.value === selected }
            aria-describedby={ !! help ? `${ id }__help` : undefined }
          />
          <label htmlFor={ `${ id }-${ index }` }>
            { option.label }
          </label>
        </div>
      ) }
    </BaseControl>
  );
}

export default CustomRadio;