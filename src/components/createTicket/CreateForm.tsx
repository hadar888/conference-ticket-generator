import React from "react";
import InputWithLabel from "./InputWithLabel";
import UploadImage from "./UploadImage";

const CreateForm = () => {
    return (
        <section>
            <UploadImage/>
            <InputWithLabel inputType="text" label="Full Name" value={""} />
            <InputWithLabel inputType="email" label="Email Address" value={""} placeholder="example@email.com" />
            <InputWithLabel inputType="text" label="GitHub Username" value={""} placeholder="@yourusername" />

            <button onClick={() => {}}>
                Generate My Ticket
            </button>
        </section>
    );
}

export default CreateForm;