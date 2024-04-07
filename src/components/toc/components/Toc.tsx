import {
  useMemo,
  useCallback,
  Fragment,
  CSSProperties,
  useEffect,
} from "react";
import { useToc } from "../hooks/useToc";
import { TocElement } from "../type";

export interface TocProps<ContentSelector> {
  contentSelector: ContentSelector | string;
  activeStyle?: CSSProperties;
  headingSelector: ("h1" | "h2" | "h3" | "h4" | "h5")[];
}

export const Toc = <ContentSelector extends HTMLElement = HTMLElement>(
  props: TocProps<ContentSelector>,
) => {
  const content = useMemo(() => {
    return typeof props.contentSelector === "string"
      ? window.document.querySelector(props.contentSelector)!
      : props.contentSelector;
  }, [props]);

  const generateHierachy = useToc({
    content,
    headingSelector: props.headingSelector,
  });
  const renderToc = useCallback(
    (hierachy: TocElement[], indent = 0) => {
      const scrollToSubTitle = (tocRef: string) => {
        content
          ?.querySelector(`[data-toc="${tocRef}"]`)
          ?.scrollIntoView({ block: "start", behavior: "smooth" });
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
                ...(h.active ? props.activeStyle : {}),
              }}
            >
              {h.text}
            </div>
            {renderToc(h.children ?? [], indent + 1)}
          </Fragment>
        );
      });
    },
    [content],
  );

  if (!content) {
    return null;
  }

  return <>{renderToc(generateHierachy())}</>;
};
