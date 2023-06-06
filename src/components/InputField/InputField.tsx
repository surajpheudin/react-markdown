import React from "react";
import { ReactElement } from "react";

export const InputField = (props: InputFieldProps): ReactElement => {
    const { value, onChange } = props;

    return (
        <textarea
            className="markdown-editor"
            style={{
                height: "100%",
                border: "none",
                padding: "10px 25px",
                outline: "none",
                resize: "none",
                overflow: "hidden",
            }}
            value={value}
            onChange={onChange}
        ></textarea>
    );
};

interface InputFieldProps {
    value: string;
    onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}
