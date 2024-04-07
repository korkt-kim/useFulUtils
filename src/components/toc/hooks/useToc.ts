import { TocProps } from "../components/Toc";
import { useCallback } from "react";
import { TocElement } from "../type";

export type UseToc = Pick<TocProps<unknown>, "headingSelector">;

export const useToc = ({ headingSelector }: UseToc) => {
  const headings = headingSelector.sort((a, b) => {
    const [num1, num2] = [a.match(/\d+$/)?.[0], b.match(/\d+$/)?.[0]];
    if (!num1 || !num2) {
      throw new Error("invalid heading selector");
    }

    return Number(num1) - Number(num2);
  });

  return useCallback(
    <ContentSelector extends Element = Element>(content: ContentSelector) => {
      const hierarchy: TocElement[] = [
        { tag: "H0", tocRef: "undefined", children: [] },
      ];

      for (const header of Array.from(
        content.querySelectorAll(headings.join(", ")),
      )) {
        const { tagName: tag, textContent: text } = header;
        // TODO: Math.random 대신 uniqueId()로 변경
        const tocRef = `toc-${Math.random()}`;
        (header as HTMLElement).setAttribute("data-toc", tocRef);
        const node = { tag, text, tocRef };
        let last = hierarchy.at(-1)!;

        while (last.tag >= node.tag) {
          hierarchy.pop();
          last = hierarchy.at(-1)!;
        }

        last.children = last.children || [];
        last.children.push(node);
        hierarchy.push(node);
      }

      return hierarchy.filter((item) => item.tag !== "H0");
    },
    [],
  );
};
