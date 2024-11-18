import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document, Node } from "@contentful/rich-text-types";
import React from "react";

interface RichTextRendererProps {
  richTextContent: Document;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({
  richTextContent,
}) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <p>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
        <h1 className="my-4 text-3xl font-bold">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
        <h2 className="my-3 text-2xl font-semibold">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
        <h3 className="my-2 text-xl font-medium">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
        <ul className="ml-6 list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
        <ol className="ml-6 list-decimal">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
        <li className="my-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: Node, children: React.ReactNode) => (
        <blockquote className="my-4 border-l-4 pl-4 italic">
          {children}
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
        <a
          href={(node.data as { uri: string }).uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {children}
        </a>
      ),
    },
  };

  return <div>{documentToReactComponents(richTextContent, options)}</div>;
};

export default RichTextRenderer;
