import CollapseItemComp from "../CollapseItem";
import { ICollapse } from "../../interfaces";

const CollapseComponent = (props: ICollapse) => {
  const { data, parentIndex = 1, EmptyComponent } = props;
  if (data && !data.length) {
    if (!EmptyComponent) return null;
    return <EmptyComponent />;
  }

  return (
    <>
      {data &&
        data.map((item, index) => (
          <CollapseItemComp
            key={index}
            {...props}
            parentIndex={parentIndex}
            item={item}
          />
        ))}
    </>
  );
};

export default CollapseComponent;
