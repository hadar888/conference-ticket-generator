import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputWithLabelProps {
    inputType: string;
    label: string;
    placeholder?: string;
    name: string;
    register: UseFormRegister<any>;
    rules?: object;
    error?: FieldError;
}

const InputWithLabel = (props: InputWithLabelProps) => {
    const { inputType, label, placeholder, name, register, rules, error} = props;
    return (
        <div className="form-item">
            <label>
                {label}
            </label>
            <input type={inputType} placeholder={placeholder} {...register(name, rules)}/>
            {error && <p style={{ color: 'red', marginTop: '4px' }}>{error.message}</p>}
        </div>
    );
};

export default InputWithLabel;