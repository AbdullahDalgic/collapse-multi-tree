import { headerHeight, transitionTime } from "./index.styled";

/**
 * Collapse Color Class With Index
 * @param colors colors array
 * @param index index of the color
 * @param children number of children
 * @returns Collapse-Color-{index} Collapse-Empty
 */
export const collapseColorClassWithIndex = (
  colors: string[],
  index: number,
  children?: number
) => {
  if (index > colors.length) index -= colors.length;
  let className = `Collapse-Color-${index}`;
  if (children === 0) className += " Collapse-Empty";

  return className;
};

/**
 * Toggle Collapse
 * @param target
 * @param status
 * @returns
 */
export const toggleCollapse = (target: HTMLElement, status?: boolean) => {
  const collapse = target.closest(".Collapse") as HTMLElement;
  if (status !== undefined) {
    if (!status) {
      collapse.classList.remove("Collapsed");
    } else {
      collapse.classList.add("Collapsed");
    }
    return;
  }
  collapse.classList.toggle("Collapsed");
};

export const toggleCollapseHandler = (event) => {
  event.stopPropagation();
  const target = event.target as HTMLElement;
  const collapse = target.closest(".Collapse");
  const header = target.closest(".Collapse-Header");
  if (!!collapse && !!header) {
    toggleCollapse(target);
  }
};

export const collapseBorderResizer = ({ borderRef, bodyRef }) => {
  if (borderRef.current && bodyRef.current) {
    const totalChild = bodyRef.current?.children?.length;
    const lastChild = bodyRef.current?.children[totalChild - 1];
    const lastChildBodyHeight =
      lastChild?.querySelector(".Collapse-Body")?.clientHeight || 0;
    const bottomBorderHeight = lastChildBodyHeight + headerHeight / 2 + 5;

    borderRef.current.style.bottom = `${bottomBorderHeight}px`;
  }
};

export const Observer = ({ borderRef, bodyRef }) => {
  return new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (mutation.attributeName === "class") {
        setTimeout(() => {
          collapseBorderResizer({ borderRef, bodyRef });
        }, transitionTime / 2);
        setTimeout(() => {
          collapseBorderResizer({ borderRef, bodyRef });
        }, transitionTime);
      }
    }
  });
};

export const onClickListener = (event: Event) => {
  document.querySelectorAll(".Collapse-Header").forEach((el) => {
    el.classList.remove("Active");
  });

  const target = event.target as HTMLElement;
  const header = target.closest(".Collapse-Header");
  if (header) {
    header.classList.add("Active");
  }
};

export const applyCssVariables = (colors: string[]) => {
  const style = document.createElement("style");
  style.innerHTML = `
    .Collapse-Container .Collapse {
      ${colors
        .map(
          (color, index) => `
        &.Collapse-Color-${index + 1} {
          .Collapse-Border::before {
            border-color: ${color};
          }
  
          .Collapse-Header {
            &::before {
              background-color: ${color};
            }
  
            &:hover {
              background-color: ${color};
            }
  
            &.Active {
              background-color: ${color};
            }
  
            >.Collapse-Header-Border {
              background-color: ${colors[index - 1] || color};
            }
          }
  
          .Collapse-Add {
            border-color: ${color};
          }
        }
      `
        )
        .join("")}
    }
  `;
  document.head.appendChild(style);
};
