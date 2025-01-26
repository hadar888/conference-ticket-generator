import React from "react";

interface InputWithLabelProps {
    inputType: string;
    label: string;
    value: string;
    placeholder?: string;
}

const InputWithLabel = (props: InputWithLabelProps) => {
    const { inputType, label, value, placeholder } = props;
    return (
        <div className="form-item">
            <label>
                {label}
            </label>
            <input type={inputType} placeholder={placeholder} value={value}/>
        </div>
    );
};

export default InputWithLabel;