import React, { ReactElement } from "react";
import { ModeTypes } from "../Editor";

const eyeSvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        height={"16px"}
        width="16px"
    >
        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
    </svg>
);

const splitSvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        height={"16px"}
        width="16px"
    >
        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm8.5-1v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5zm-1 0H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2z"></path>
    </svg>
);

const editSvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        height={"16px"}
        width="16px"
    >
        <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
    </svg>
);

const Toolbar = (props: ToolbarProps): ReactElement => {
    const { setMode } = props;

    return (
        <div
            className="markdown-toolbar"
            style={{
                display: "flex",
                gap: "16px",
                height: "40px",
                alignItems: "center",
                padding: "0px 12px",
                borderBottom: "1px solid #ccc",
            }}
        >
            <span>Modes:</span>
            <div
                className="action-wrapper"
                style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                }}
            >
                <button
                    style={{
                        cursor: "cursor",
                        border: "none",
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setMode("editor");
                    }}
                >
                    {editSvg}
                </button>
                <button
                    style={{
                        cursor: "cursor",
                        border: "none",
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setMode("both");
                    }}
                >
                    {splitSvg}
                </button>
                <button
                    style={{
                        cursor: "cursor",
                        border: "none",
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setMode("preview");
                    }}
                >
                    {eyeSvg}
                </button>
            </div>
        </div>
    );
};

export default Toolbar;

interface ToolbarProps {
    setMode: (param: ModeTypes) => void;
}
