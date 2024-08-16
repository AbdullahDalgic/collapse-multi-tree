import styled from "styled-components";

export const transitionTime = 250;
export const headerHeight = 60;
const paddingLeft = 30;
const paddingTop = 10;
const borderPx = 2;
const borderRadius = 5;
const hoverBgColor = "#ff2e63";
const hoverTextColor = "#fff";
const defaultBorderColor = "#ececec";
const boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.1)";
const buttonPrimaryColor = "#ff2e63";
const buttonPrimaryHoverColor = "#f4003e";

export const StyledSkeleton = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border-radius: ${borderRadius}px;
  background: linear-gradient(90deg, #ececec, #e0e0e0, #ececec);
  background-size: 400% 400%;
  background-position: 100% 50%;
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${buttonPrimaryColor};
  color: #fff;
  cursor: pointer;
  transition: all ${transitionTime}ms ease-in-out;

  &:hover {
    background-color: ${buttonPrimaryHoverColor};
  }
`;

export const StyledCollapseContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
  transition: all ${transitionTime}ms ease-in-out;

  > .Collapse {
    margin-bottom: 10px;
    margin-left: -${paddingLeft}px;
  }

  > .Collapse > .Collapse-Header > .Collapse-Header-Border {
    display: none !important;
  }

  .Collapse-Body
    > .Collapse:last-child
    > .Collapse-Header
    > .Collapse-Header-Border {
    display: none !important;
  }

  .Collapse-Empty > .Collapse-Border {
    display: none !important;
  }

  > .Collapse-Add {
    margin-left: 0 !important;
  }
`;

export const StyledCollapseAddButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledCollapse = styled.div`
  border-radius: ${borderRadius}px;
  color: #000;
  position: relative;
  overflow: hidden;
  height: auto;
  display: grid;
  padding-left: ${paddingLeft}px;

  &.Collapsed {
    > .Collapse-Border {
      display: block;
    }

    > .Collapse-Header {
      z-index: 1;

      .Collapse-Header-Icon {
        > :nth-child(1) {
          display: none;
        }
        > :nth-child(2) {
          display: flex;
        }
      }
    }

    > .Collapse-Body {
      height: auto !important;
      padding-top: ${paddingTop}px;
      grid-template-rows: 1fr !important;

      > .Empty {
        width: 100%;
        padding: 10px !important;
        margin: 0 !important;
        margin-bottom: 10px !important;
        margin-left: ${paddingLeft}px !important;
        border-radius: ${borderRadius}px;
        border: 1px solid ${defaultBorderColor};
      }
    }
  }
`;

export const StyledCollapseBorder = styled.div`
  width: 100%;
  height: 100%;
  bottom: ${headerHeight / 2 + paddingTop}px;
  left: ${paddingLeft + 2}px;
  display: none;
  position: absolute;
  transition: all ${transitionTime}ms ease-in-out;

  &::before {
    content: "";
    border: ${borderPx}px solid #ff0000;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 10px;
    display: block;
    width: 30px;
    height: calc(100%);
    position: absolute;
    left: 0px;
  }
`;

export const StyledCollapseHeader = styled.div`
  border-radius: ${borderRadius}px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: ${hoverTextColor};
  border: 1px solid ${defaultBorderColor};
  height: ${headerHeight}px;
  margin-bottom: 10px;
  box-shadow: ${boxShadow};
  transition: all ${transitionTime}ms ease-in-out;

  &:hover {
    color: ${hoverTextColor};

    .Collapse-Header-Buttons {
      margin-right: 0;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 7px;
    height: 100%;
    background-color: #ff0000;
    border-top-left-radius: ${borderRadius}px;
    border-bottom-left-radius: ${borderRadius}px;
  }

  &.No-Border::before {
    display: none;
  }

  &:hover::before {
    transition: all ${transitionTime}ms ease-in-out;
    width: 100%;
  }

  &.Active {
    background-color: ${hoverBgColor};
    color: ${hoverTextColor};
    transition: ${transitionTime}ms all linear;

    .Collapse-Header-Buttons {
      margin-right: 0;
    }
  }

  .Collapse-Header-Buttons {
    position: absolute;
    right: 10px;
    margin-right: -140px;
    transition: ${headerHeight}px all linear;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &.Active {
      margin-right: 0px;
    }
  }

  .Collapse-Header-Icon {
    position: relative !important;
    width: 40px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    > :nth-child(1) {
      display: flex;
    }
    > :nth-child(2) {
      display: none;
    }
  }
`;

export const StyledCollapseHeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0px;
  position: relative;
  z-index: 1;
  pointer-events: none;

  span:nth-child(1) {
    font-weight: bold;
  }
`;

export const StyledCollapseHeaderBorder = styled.div`
  position: absolute;
  width: ${paddingLeft - 2}px;
  height: 2px;
  background-color: #ff0000;
  top: ${headerHeight / 2}px;
  left: -${paddingLeft - 2}px;
`;

export const StyledCollapseHeaderButtons = styled.div`
  position: absolute;
  z-index: 2;
  right: 10px;
  margin-right: -140px;
  transition: ${transitionTime}ms all linear;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledCollapseHeaderIcon = styled.div`
  position: relative !important;
  width: 40px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCollapseBody = styled.div`
  padding: 0;
  overflow: hidden;
  display: grid;
  height: 0;
  grid-template-rows: 0fr;
  transition: height ${transitionTime}ms ease-in-out,
    grid-template-rows ${transitionTime}ms ease-in-out;
`;

export const StyledCollapseAdd = styled.div<{ status?: boolean }>`
  margin-top: ${paddingTop}px;
  margin-bottom: ${paddingTop}px;
  margin-left: ${paddingLeft}px;
  padding: 30px;
  padding-top: 60px;
  border: 2px dashed #ff0000;
  transition: all ${transitionTime}ms ease-in-out;
  border-radius: ${borderRadius}px;
  position: relative;
  min-height: 100px;
`;

export const StyledCollapseAddCloseButton = styled(StyledButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  height: 30px;
  width: 30px;

  &::before {
    content: "X";
  }
`;
