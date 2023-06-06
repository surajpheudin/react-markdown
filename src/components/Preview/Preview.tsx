import { ReactElement } from "react";
import { nodesToHtml, toArrayOfNodes } from "../../utils/functions";

export const PreviewMarkdown = (props: PreviewMarkdownProps): ReactElement => {
    const { children, className = "" } = props;
    return (
        <div
            className={`${className} ${"markdown-preview"}`}
            style={{
                height: "100%",
                padding: "10px 25px",
                wordWrap: "break-word",
                overflow: "hidden",
                border: "1px solid #ccc",
            }}
        >
            {nodesToHtml(toArrayOfNodes(children))}
        </div>
    );
};

export interface PreviewMarkdownProps {
    children: string;
    className?: string;
}
