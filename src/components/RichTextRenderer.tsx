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
        <h1 className="text-3xl font-bold my-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
        <h2 className="text-2xl font-semibold my-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
        <h3 className="text-xl font-medium my-2">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
        <ul className="list-disc ml-6">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
        <ol className="list-decimal ml-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
        <li className="my-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: Node, children: React.ReactNode) => (
        <blockquote className="border-l-4 pl-4 italic my-4">
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
      // Add more custom renderings as needed
    },
  };

  return <div>{documentToReactComponents(richTextContent, options)}</div>;
};

export default RichTextRenderer;
