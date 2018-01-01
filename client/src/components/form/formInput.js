import React from 'react';
import PropTypes from 'prop-types'

const InputForm = ({fieldId, nameField, value, error, type, onChange, label, minValue = null}) => {
    return (
        <div className="input-field col s12">
            <input
                id={fieldId}
                name={nameField}
                type={type}
                defaultValue={value}
                onChange={onChange}
                className="validate"
                min={ minValue ? minValue : ''}
                required
            />
            <label htmlFor={fieldId}>{label}</label>

            { error && <span className="red-text accent-1">{error}</span> }
        </div>
    );
};

const requiredPropTypeString = PropTypes.string.isRequired;
const requiredPropTypeFunc = PropTypes.func.isRequired;
const propsTypeNotRequired = PropTypes.string;

InputForm.propTypes = {
    fieldId: requiredPropTypeString,
    nameField: requiredPropTypeString,
    value: requiredPropTypeString,
    error: requiredPropTypeString,
    type: requiredPropTypeString,
    onChange: requiredPropTypeFunc,
    label: requiredPropTypeString,
    minValue: propsTypeNotRequired
};

export default InputForm;