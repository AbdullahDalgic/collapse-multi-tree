import { ICollapseData } from "../interfaces";

/**
 * @description Converts a flat array of objects into a hierarchical tree structure based on parent-child relationships.
 *
 * @param data - An array of objects, where each object represents a node with properties such as `id`, `title`, `parentId`, and other optional properties.
 * @param parentId - The `id` of the parent node for which the child nodes should be found. If omitted, the function will find the root nodes (those without a `parentId`).
 *
 * @returns An array of objects structured as a tree, where each object may contain a `children` array representing its nested children.
 */
export const TreeData = (
  data: Partial<ICollapseData>[],
  parentId?: number | string
): ICollapseData[] => {
  return data
    .filter((item) => {
      if (parentId !== undefined) {
        return item.parentId === parentId;
      }
      return !item.parentId;
    })
    .map((item) => {
      return {
        ...item,
        children: TreeData(data, item.id),
      };
    }) as ICollapseData[];
};
