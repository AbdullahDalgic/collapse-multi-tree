import { StyledCollapseHeaderButtons } from "../index.styled";
import { ICollapseButtons } from "../../interfaces";

const CollapseHeaderButtons = (props: ICollapseButtons) => {
  const { item, toggleAddMessage, HoverComponent } = props;

  return (
    <StyledCollapseHeaderButtons className="Collapse-Header-Buttons">
      {HoverComponent && (
        <HoverComponent parentId={item.id} addChild={toggleAddMessage} />
      )}
    </StyledCollapseHeaderButtons>
  );
};

export default CollapseHeaderButtons;
