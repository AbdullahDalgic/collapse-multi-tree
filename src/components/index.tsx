import React from "react";
import {
  StyledButton,
  StyledCollapseAdd,
  StyledCollapseAddButtonContainer,
  StyledCollapseAddCloseButton,
  StyledCollapseContainer,
  StyledSkeleton,
} from "./index.styled";
import CollapseComponent from "./CollapseComponent";
import { ICollapse } from "../interfaces";

const Collapse: React.FC<ICollapse> = (props) => {
  const { isLoading = false, AddItemComponent, AddItemButtonTitle } = props;
  const [openAddMessageModal, setOpenAddMessageModal] = React.useState(false);

  const toggleAddMessage = (status?: boolean) => {
    setOpenAddMessageModal(status ?? !openAddMessageModal);
  };

  return (
    <>
      <StyledCollapseContainer className="Collapse-Container">
        <StyledCollapseAddButtonContainer>
          <StyledButton onClick={() => toggleAddMessage()}>
            <AddItemButtonTitle />
          </StyledButton>
        </StyledCollapseAddButtonContainer>

        {isLoading ? <StyledSkeleton /> : <CollapseComponent {...props} />}

        {openAddMessageModal && (
          <>
            {AddItemComponent && (
              <StyledCollapseAdd className="Collapse-Add">
                <StyledCollapseAddCloseButton
                  onClick={() => setOpenAddMessageModal(false)}
                />

                <AddItemComponent />
              </StyledCollapseAdd>
            )}
          </>
        )}
      </StyledCollapseContainer>
    </>
  );
};

export default Collapse;
