import React from "react";
import InputWithLabel from "./InputWithLabel";
import UploadImage from "./UploadImage";
import { useForm } from 'react-hook-form';

type FormValues = {
    fullName: string;
    email: string;
    gitHubUsername: string;
};

const CreateForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        mode: 'onBlur',
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <section>
            <UploadImage />
            <InputWithLabel
                inputType="text"
                label="Full Name"
                name="fullName"
                register={register}
                rules={{
                    required: 'Full Name is required',
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Only letters are allowed',
                    }
                }}
                error={errors.fullName}
            />
            <InputWithLabel
                inputType="email"
                label="Email Address"
                placeholder="example@email.com"
                name="email"
                register={register}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Please enter a valid email addres.',
                    },
                }}
                error={errors.email}
            />
            <InputWithLabel
                inputType="text"
                label="GitHub Username"
                placeholder="@yourusername"
                name="gitHubUsername"
                register={register}
                rules={{
                    required: 'GitHub username is required',
                    pattern: {
                        value: /^\S*$/,
                        message: 'Valid name cannot contain space'
                    }
                }}
                error={errors.gitHubUsername}
            />
            {/* <input type="submit" className="submit" value="Generate My Ticket"/> */}
            <button onClick={handleSubmit(onSubmit)}>
                Generate My Ticket
            </button>
        </section>
    );
}

export default CreateForm;