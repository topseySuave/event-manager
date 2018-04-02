import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({
  fieldId, nameField, value, error, type, onChange, label, minValue = null
}) => (
  <div className="input-field col s12">
    <input
      id={fieldId}
      name={nameField}
      type={type}
      defaultValue={value}
      onChange={onChange}
      className="validate"
      min={minValue || ''}
      required
    />
    <label htmlFor={fieldId}>{label}</label>

    { error && <span className="red-text accent-1">{error}</span> }
  </div>
);

const requiredPropTypeString = PropTypes.string.isRequired;
const requiredPropTypeFunc = PropTypes.func.isRequired;
const propsTypeNotRequired = PropTypes.string;

InputForm.propTypes = {
  /**
     * Field Identification Required,
     * Type: String
     * */
  fieldId: requiredPropTypeString,

  /**
     * Name field Required,
     * Type: String
     * */
  nameField: requiredPropTypeString,

  /**
     * Field Value Required,
     * Type: String
     * */
  value: requiredPropTypeString,

  /**
     * Error field Required,
     * Type: String
     * */
  error: requiredPropTypeString,

  /**
     * Field Type Required,
     * Type: String
     * */
  type: requiredPropTypeString,

  /**
     * Field onChange Required,
     * Type: Function
     * */
  onChange: requiredPropTypeFunc,

  /**
     * Field label not Required,
     * Type: String
     * */
  label: propsTypeNotRequired,

  /**
     * Min field not Required,
     * Type: String
     * */
  minValue: propsTypeNotRequired
};

export default InputForm;
