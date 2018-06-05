import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({
  id, nameField, value, error, type, onChange, label, minValue = null, required
}) => (
  <div className="input-field col s12">
    <input
      id={id}
      name={nameField}
      type={type}
      defaultValue={value}
      onChange={onChange}
      className="validate"
      min={minValue || ''}
    />
    <label htmlFor={id}>{label}</label>

    { error && <span id={id} className="red-text accent-1">{error}</span> }
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
  id: requiredPropTypeString,

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
  error: propsTypeNotRequired,

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
