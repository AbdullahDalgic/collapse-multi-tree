import NestedCollapse from "./components";
export default NestedCollapse;

export { ICollapseData } from "./interfaces";
export { TreeData } from "./helpers";

const data = [
  {
    id: 1,
    title: "Collapse 1",
  },
  {
    id: 2,
    title: "Collapse 2",
  },
  {
    id: 3,
    title: "Collapse 1.1",
    parentId: 1,
  },
  {
    id: 4,
    title: "Collapse 1.2",
    parentId: 1,
  },
  {
    id: 5,
    title: "Collapse 1.1.1",
    parentId: 3,
  },
  {
    id: 6,
    title: "Collapse 1.1.2",
    parentId: 3,
  },
  {
    id: 5,
    title: "Collapse 1.1.1.1",
    parentId: 5,
  },
];
