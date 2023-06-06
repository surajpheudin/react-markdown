import React, { ReactElement } from "react";
import { nodeType } from "../types/commonTypes";

export const toArrayOfNodes = (data: string): nodeType[] => {
    const nodes: nodeType[] = [];

    data.split("\n").forEach((line) => {
        if (line.startsWith("# ")) {
            nodes.push({
                tag: "h1",
                body: line.slice(2),
            });
        } else if (line.startsWith("## ")) {
            nodes.push({
                tag: "h2",
                body: line.slice(3),
            });
        } else if (line.startsWith("### ")) {
            nodes.push({
                tag: "h3",
                body: line.slice(4),
            });
        } else if (line.startsWith("#### ")) {
            nodes.push({
                tag: "h4",
                body: line.slice(5),
            });
        } else if (line.startsWith("##### ")) {
            nodes.push({
                tag: "h5",
                body: line.slice(6),
            });
        } else if (line.startsWith("###### ")) {
            nodes.push({
                tag: "h6",
                body: line.slice(7),
            });
        } else if (line.startsWith("> ")) {
            nodes.push({
                tag: "blockquote",
                body: line.slice(2),
            });
        } else if (line.startsWith("`") && line.endsWith("`")) {
            nodes.push({
                tag: "code",
                body: line.slice(1, line.length - 1),
            });
        } else if (line.startsWith("- ") || /^\d\s/.test(line)) {
            nodes.push({
                tag: "li",
                body: line.slice(2),
            });
        } else if (line.trim() === "---") {
            nodes.push({
                tag: "hr",
                body: "",
            });
        } else if (line.trim() === "") {
            nodes.push({
                tag: "br",
                body: "",
            });
        } else {
            nodes.push({
                tag: "p",
                body: line.slice(0),
            });
        }
    });

    return nodes;
};

const checkForInlineStyles = (line: string): boolean => {
    if (line.includes("**")) return true;
    return false;
};

interface replaceTextProps {
    symbol: "**" | "*";
    tag: string[];
    line: string;
}
const replaceText = (props: replaceTextProps): string => {
    const { tag, symbol } = props;
    let line = props.line;
    let count = 0;
    let prev = "";

    if (symbol.length === 1) {
        line.split("").map((char) => {
            if (char === symbol) {
                count += 1;
            }
        });
    } else if (symbol.length === 2) {
        line.split("").map((char) => {
            if (char === symbol[0]) {
                if (prev === symbol[0]) {
                    count += 1;
                } else {
                    prev = symbol[0];
                }
            }
        });
    }

    for (let i = 1; i <= count; i++) {
        if (i % 2 == 1) {
            line = line.replace(symbol, tag[0]);
        } else {
            line = line.replace(symbol, tag[1]);
        }
    }

    return line;
};

const getInlineStylesElement = (node: nodeType) => {
    let lineWithInlineTags = node.body;

    lineWithInlineTags = replaceText({
        symbol: "**",
        tag: ["<strong>", "</strong>"],
        line: lineWithInlineTags,
    });

    lineWithInlineTags = replaceText({
        symbol: "*",
        tag: ["<em>", "</em>"],
        line: lineWithInlineTags,
    });

    const element = React.createElement(node.tag, {
        key: Math.random().toString() + node.body,
        dangerouslySetInnerHTML: { __html: lineWithInlineTags },
    });

    return element;
};

export const nodesToHtml = (nodes: nodeType[]) => {
    const children: ReactElement[] = [];

    nodes.forEach((node: nodeType) => {
        let element: ReactElement = React.createElement(React.Fragment);

        if (node.tag === "br" || node.tag === "hr") {
            element = React.createElement(node.tag, {
                key: Math.random().toString() + node.body,
            });
        } else if (
            node.tag === "h1" ||
            node.tag === "h2" ||
            node.tag === "h3" ||
            node.tag === "h4" ||
            node.tag === "h5" ||
            node.tag === "h6"
        ) {
            element = React.createElement(
                node.tag,
                { key: Math.random().toString() + node.body },
                node.body
            );
        } else if (node.tag === "blockquote") {
            let childElement: ReactElement = React.createElement(
                React.Fragment,
                {}
            );

            childElement = nodesToHtml(toArrayOfNodes(node.body));

            element = React.createElement(
                node.tag,
                {
                    key: Math.random().toString() + node.body,
                    style: {
                        borderLeft: "5px solid #ccc",
                        margin: "0px",
                        paddingLeft: "12px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                    },
                },
                childElement
            );
        } else {
            if (checkForInlineStyles(node.body)) {
                element = getInlineStylesElement(node);
            } else {
                element = React.createElement(
                    node.tag,
                    { key: Math.random().toString() + node.body },
                    node.body
                );
            }
        }

        children.push(element);
    });

    return React.createElement(React.Fragment, {}, children);
};
