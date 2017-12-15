import React from 'react';
import { PropTypes } from '../../../../node_modules/prop-types'

const InputForm = ({fieldId, nameField, value, error, type, onChange, label}) => {
    return (
        <div className="input-field col s12">
            <input
                id={fieldId}
                name={nameField}
                type={type}
                defaultValue={value}
                onChange={onChange}
                className="validate"
                required
            />
            <label htmlFor={fieldId}>{label}</label>

            { error && <span className="red-text accent-1">{error}</span> }
        </div>
    );
};

const requiredPropTypeString = PropTypes.string.isRequired;
const requiredPropTypeFunc = PropTypes.func.isRequired;

InputForm.propTypes = {
    fieldId: requiredPropTypeString,
    nameField: requiredPropTypeString,
    value: requiredPropTypeString,
    error: requiredPropTypeString,
    type: requiredPropTypeString,
    onChange: requiredPropTypeFunc,
    label: requiredPropTypeString
};

export default InputForm;