# nested-collapse

> `nested-collapse` is a versatile and visually appealing UI package designed for creating collapsible nested content structures in your React applications. This package offers an easy-to-use and flexible interface, allowing you to create complex and nested UI components with minimal effort.

## Features

- **Nested Collapsible Content:** Easily create nested sections that can be expanded or collapsed.
- **Flexible and Customizable:** Modify the appearance and behavior to suit your application’s needs.
- **Simple Integration:** Lightweight and easy to integrate with any React project.

## Install

```bash
    npm install nested-collapse
    yarn add nested-collapse
```

## Example Usage

Here's an example of how `nested-collapse` looks in action:

![Nested Collapse Screenshot](https://github.com/AbdullahDalgic/nested-collapse/raw/master/images/collapse.jpg)

## Usage

```tsx
import React from 'react';
import NestedCollapse from "nested-collapse";

const App: React.FC = () => {
  return (
    <>
      <NestedCollapse
        showHeaderBorder={true} // optional
        showBodyBorder={true} // optional
        colors={[
          // A string array containing colors, sorted according to the branch structure of the tree.
        ]} // optional

        data={data}
        isLoading={isLoading}

        AddItemButtonTitle={() => (<>Add Item</>)}
        AddItemComponent={({ parentId }) => (
          // The form component required to add a new object is coded here.
        )}
        HeaderOpenIcon={() => <>{/** Icon Component */}</>}
        HeaderCloseIcon={() =>  <>{/** Icon Component */}</>}
        HoverComponent={({ parentId, addChild }) => (
          <>
            // The area where operations such as adding a new item and deleting the selected item can be performed.
            // When the addChild function is executed, it creates a new child object field.
          </>
        )}
        EmptyComponent={() => (
          // If the children object is empty, the component required to provide the empty appearance.
        )}
      />
    </>
  );
}
```

### Props
`NestedCollapse` component accepts the following props:
- **showHeaderBorder** (boolean, optional): Controls whether the borders around the collapse headers are visible. When set to true, borders are shown.;
- **showBodyBorder** (boolean, optional): Determines whether the border on the left side of the collapsible area is visible. When set to true, a left border is displayed.;
- **colors** (string[], optional): An array of strings representing colors, sorted according to the tree's branch structure, used to visually distinguish different levels.;
- **data** (array, required): Contains the data structure for the collapsible content, including titles, content, and child elements for each collapse.;
- **isLoading** (boolean, optional): Indicates the loading state of the data. When set to true, a loading indicator is shown instead of the collapse content.;
- **AddItemButtonTitle** (React.ReactNode, optional): Defines the content of the button used to add a new main collapse. This could be a text or icon component.;
- **AddItemComponent** (React.FC, required): The form component required to add a new object within the collapse, providing necessary fields to the user.;
- **HeaderOpenIcon** (React.ReactNode, optional): The icon displayed when the collapse header is open, such as a downward-facing arrow.;
- **HeaderCloseIcon** (React.ReactNode, optional): The icon displayed when the collapse header is closed, such as a right-facing arrow.;
- **HoverComponent** (React.FC, required): A menu that appears when hovering over the collapse, allowing actions like adding a new item or deleting an existing one. The addChild function creates a new child element.;
- **EmptyComponent** (React.ReactNode, optional): The component displayed when a collapse has no child elements, such as a message saying 'No items added yet.'



### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

### Contributing

Contributions are welcome! If you have any suggestions or find any issues, feel free to open an issue or submit a pull request on [GitHub](https://github.com/AbdullahDalgic/nested-collapse).

### Author

Created by [Abdullah Dalgıç](https://abdullahdalgic.com.tr).

### Acknowledgements

Special thanks to all the contributors and open-source projects that made this package possible.
