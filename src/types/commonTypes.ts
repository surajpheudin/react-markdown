export interface nodeType {
    tag: tagType;
    body: string;
}

export type tagType =
    | "div"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "blockquote"
    | "br"
    | "hr"
    | "li"
    | "ul"
    | "ol"
    | "code";
