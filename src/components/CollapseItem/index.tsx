import { useEffect, useRef, useState } from "react";
import CollapseComponent from "../CollapseComponent";
import {
  StyledCollapse,
  StyledCollapseAdd,
  StyledCollapseAddCloseButton,
  StyledCollapseBody,
  StyledCollapseBorder,
  StyledCollapseHeader,
  StyledCollapseHeaderBorder,
  StyledCollapseHeaderContent,
  StyledCollapseHeaderIcon,
} from "../index.styled";
import {
  applyCssVariables,
  collapseColorClassWithIndex,
  Observer,
  onClickListener,
  toggleCollapse,
  toggleCollapseHandler,
} from "../utils";
import CollapseHeaderButtons from "./CollapseHeaderButtons";
import { ICollapse } from "../../interfaces";

const CollapseItemComp = (props: ICollapse) => {
  const {
    item,
    parentIndex,
    showBodyBorder = true,
    showHeaderBorder = true,
    colors = ["#ff2e63", "#08d9d6", "#252a34", "#0f4c75", "#95e1d3", "#f08a5d"],
    AddItemComponent,
    HoverComponent,
    EmptyComponent,
    HeaderOpenIcon,
    HeaderCloseIcon,
  } = props;

  const collapseRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [observer, setObserver] = useState<MutationObserver | null>(null);
  const [openAddMessageModal, setOpenAddMessageModal] = useState(false);

  const toggleAddMessage = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    toggleCollapse(target, true);
    setOpenAddMessageModal(true);
  };

  useEffect(() => {
    if (!observer) {
      const collapse = collapseRef.current;
      if (collapse) {
        const _observer = Observer({ borderRef, bodyRef });

        _observer.observe(collapse, {
          childList: true,
          subtree: true,
          attributes: true,
        });

        setObserver(_observer);
      }
    }

    document.addEventListener("click", onClickListener, true);

    return () => {
      if (observer) observer.disconnect();
      document.removeEventListener("click", onClickListener);
    };
  }, [collapseRef, borderRef, bodyRef]);

  useEffect(() => {
    localStorage.setItem("nested-collapse-colors", JSON.stringify(colors));
    applyCssVariables(colors);
  }, [colors]);

  return (
    <StyledCollapse
      className={`Collapse ${collapseColorClassWithIndex(
        colors,
        parentIndex,
        item?.children?.length
      )}`}
      ref={collapseRef}
      onClick={toggleCollapseHandler}
    >
      {showBodyBorder && (
        <StyledCollapseBorder className="Collapse-Border" ref={borderRef} />
      )}

      <StyledCollapseHeader
        className={`Collapse-Header ${showHeaderBorder ? "" : "No-Border"}`}
      >
        {showBodyBorder && (
          <StyledCollapseHeaderBorder className="Collapse-Header-Border" />
        )}
        <StyledCollapseHeaderIcon className="Collapse-Header-Icon">
          <>
            <HeaderOpenIcon />
          </>
          <>
            <HeaderCloseIcon />
          </>
        </StyledCollapseHeaderIcon>
        <StyledCollapseHeaderContent>
          <span>{item.title}</span>
        </StyledCollapseHeaderContent>

        <CollapseHeaderButtons
          item={item}
          toggleAddMessage={toggleAddMessage}
          HoverComponent={HoverComponent}
        />
      </StyledCollapseHeader>
      <StyledCollapseBody className="Collapse-Body" ref={bodyRef}>
        {item.children && item.children.length > 0 && (
          <CollapseComponent
            {...props}
            parentIndex={parentIndex + 1}
            data={item.children}
          />
        )}

        {!item?.children?.length &&
          !openAddMessageModal &&
          !!EmptyComponent && <EmptyComponent />}

        {openAddMessageModal && (
          <>
            {AddItemComponent && (
              <StyledCollapseAdd className="Collapse-Add">
                <StyledCollapseAddCloseButton
                  onClick={() => setOpenAddMessageModal(false)}
                />

                <AddItemComponent parentId={item.id} />
              </StyledCollapseAdd>
            )}
          </>
        )}
      </StyledCollapseBody>
    </StyledCollapse>
  );
};

export default CollapseItemComp;
