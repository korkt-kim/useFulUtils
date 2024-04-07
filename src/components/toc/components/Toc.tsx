import { useMemo, useCallback, Fragment } from "react";
import { useToc } from "../hooks/useToc";
import { TocElement } from "../type";

export interface TocProps<ContentSelector> {
  contentSelector: ContentSelector | string;
  headingSelector: ("h1" | "h2" | "h3" | "h4" | "h5")[];
}

export const Toc = <ContentSelector extends HTMLElement = HTMLElement>(
  props: TocProps<ContentSelector>,
) => {
  const content = useMemo(() => {
    return typeof props.contentSelector === "string"
      ? window.document.querySelector(props.contentSelector)
      : props.contentSelector;
  }, [props]);

  const generateHierachy = useToc({ headingSelector: props.headingSelector });
  const renderToc = useCallback((hierachy: TocElement[], indent = 0) => {
    const scrollToSubTitle = (tocRef: string) => {
      content
        ?.querySelector(`[data-toc="${tocRef}"]`)
        ?.scrollIntoView({ block: "start" });
    };

    return hierachy.map((h) => {
      return (
        <Fragment key={h.tocRef}>
          <div
            key={h.tocRef}
            onClick={(e) => {
              scrollToSubTitle(h.tocRef);
            }}
            style={{
              cursor: "pointer",
              textIndent: `${indent * 10}px`,
              textDecoration: "underline",
            }}
          >
            {h.text}
          </div>
          {renderToc(h.children ?? [], indent + 1)}
        </Fragment>
      );
    });
  }, []);

  if (!content) {
    return null;
  }

  return <>{renderToc(generateHierachy(content))}</>;
};
