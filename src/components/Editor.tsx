import React, { ReactElement } from "react";
import { InputField } from "./InputField/InputField";
import { PreviewMarkdown } from "./Preview/Preview";
import Toolbar from "./Toolbar/Toolbar";

export type ModeTypes = "editor" | "preview" | "both";

export const Editor = (props: EditorProps): ReactElement => {
    const { onChange, className, hideToolbar = false } = props;

    const [value, setValue] = React.useState("");
    const [mode, setMode] = React.useState<ModeTypes>("editor");

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
        onChange(e);
    };

    let comp = <></>;

    switch (mode) {
        case "both":
            comp = (
                <div
                    style={{
                        flexGrow: 1,
                        overflowX: "hidden",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                >
                    <InputField
                        value={value}
                        onChange={handleChange}
                    ></InputField>
                    <PreviewMarkdown>{value}</PreviewMarkdown>
                </div>
            );
            break;

        case "editor":
            comp = (
                <div
                    style={{
                        flexGrow: 1,
                        overflowX: "hidden",
                        display: "grid",
                    }}
                >
                    <InputField
                        value={value}
                        onChange={handleChange}
                    ></InputField>
                </div>
            );
            break;

        case "preview":
            comp = (
                <div
                    style={{
                        flexGrow: 1,
                        overflowX: "hidden",
                        display: "grid",
                    }}
                >
                    <PreviewMarkdown>{value}</PreviewMarkdown>
                </div>
            );
            break;

        default:
            break;
    }

    return (
        <>
            <div
                className={`${className} ${"markdown-root"}`}
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #ccc",
                }}
            >
                {hideToolbar ? <></> : <Toolbar setMode={setMode}></Toolbar>}
                {comp}
            </div>
        </>
    );
};

export interface EditorProps {
    onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
    className?: string;
    hideToolbar?: boolean;
}
