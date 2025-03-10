import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import mermaid from "mermaid";
import "survey-core/survey.min.css";
import "survey-core/defaultV2.min.css";

interface MarkdownRendererProps {
  content: string;
  copyToClipboard: (text: string) => void;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  copyToClipboard
}) => {
  const mermaidRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false }); // Asegurar que no se renderiza automáticamente
  }, []);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaid.run({ nodes: [mermaidRef.current] }).catch((error) => {
        console.error("Error renderizando Mermaid:", error);
      });
    }
  }, [content]); // ✅ Se ejecuta solo cuando `content` cambia

  return (
    <ReactMarkdown
      children={content}
      
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        table({ children }) {
          return (
            <table className="table table-striped table-bordered">
              {children}
            </table>
          );
        },
        thead({ children }) {
          return <thead className="table-dark">{children}</thead>;
        },
        tbody({ children }) {
          return <tbody className="table-group-divider">{children}</tbody>;
        },
        tr({ children }) {
          return <tr>{children}</tr>;
        },
        th({ children }) {
          return <th className="text-center">{children}</th>;
        },
        td({ children }) {
          return <td className="text-center">{children}</td>;
        },
        blockquote({ children }) {
          return (
            <blockquote className="border-start border-4 ps-3 text-muted">
              {children}
            </blockquote>
          );
        },
        //code({ node, inline, className, children, ...props }) {
        code({ node, className, children, ...props }) {
          
          const match = /language-(\w+)/.exec(className || "");
          
          if (match && match[1] === "mermaid") {
            return (
              <div ref={mermaidRef} className="mermaid">
                {String(children)}
              </div>
            );
          }


          //return !inline && match ? (
          return match ? (
            <div className="position-relative">
              <button
                className="btn btn-sm btn-light position-absolute top-0 end-0 m-2"
                onClick={() => copyToClipboard(String(children))}
              >
                Copiar
              </button>
                <SyntaxHighlighter language={match as any} style={docco} >
                {String(children).replace(/$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default MarkdownRenderer;
