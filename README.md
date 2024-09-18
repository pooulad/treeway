# treeway🌴

Show your files and directories like tree branches🌴

# install with npm

```bash
npm install @poouladorbit/treeway
```

# install with yarn

```bash
yarn add @poouladorbit/treeway
```

# Usage

To use the treeway🌴, use the following example:

```javascript
import React from "react";
import Treeway from "@poouladorbit/treeway";

function Test() {
  const items = [
    {
      name: "folder1",
      type: "directory",
      children: [
        {
          name: "file-1",
          type: "file",
        },
      ],
    },
  ];
  return (
    <div>
      <Treeway items={items} />
    </div>
  );
}

export default Test;
```

![treeway_props_image](https://github.com/pooulad/treeway/blob/main/images/Treeway_Props.png)

## props

- items: array of objects(node data).
- backgroundColor: background color for the buttons.
- direction: direction of treeway to open subitems in left or right.

# sample image of the project

![treeway_preview_image](https://github.com/pooulad/treeway/blob/main/images/Treeway_Screenshot.png)

# Contributing

This is my first package😁. So if you find any issues or have suggestions for improvements, please open an issue or submit a pull request on [GitHub](https://github.com/pooulad/treeway).

# License

This project is licensed under the MIT [License](LICENSE) - see the [License](LICENSE) file for details.
