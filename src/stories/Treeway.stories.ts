import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TreeWay from "../components/TreeWay";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "TreeWay",
  component: TreeWay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof TreeWay>;

export default meta;
type TreeWayType = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: TreeWayType = {
  args: {
    direction: "rtl",
    backgroundColor: "",
    items: [
      {
        name: "folder-1",
        type: "directory",
        children: [
          {
            name: "inside-folder-1",
            type: "directory",
            children: [
              {
                name: "inside-folder-2",
                type: "directory",
                children: [
                  {
                    name: "inside-folder-3",
                    type: "directory",
                    children: [
                      {
                        name: "inside-folder-4",
                        type: "directory",
                        children: [
                          {
                            name: "inside-folder-5",
                            type: "directory",
                            children: [
                              {
                                name: "inside-folder-6",
                                type: "directory",
                                children: [
                                  {
                                    name: "inside-folder-7",
                                    type: "directory",
                                    children: [
                                      { name: "file-1", type: "file" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "folder-2",
            type: "directory",
            children: [{ name: "file item", type: "file" }],
          },
          {
            name: "folder-3",
            type: "directory",
            children: [{ name: "file item", type: "file" }],
          },
          {
            name: "folder-4",
            type: "directory",
            children: [{ name: "file item", type: "file" }],
          },
          {
            name: "folder-5",
            type: "directory",
            children: [{ name: "file item", type: "file" }],
          },
          {
            name: "folder-6",
            type: "directory",
            children: [{ name: "file item", type: "file" }],
          },
          {
            name: "folder-7",
            type: "directory",
            children: [{ name: "file item", type: "file" }],
          },
          {
            name: "folder-8",
            type: "directory",
            children: [{ name: "file item", type: "file" }],
          },
          {
            name: "folder-9",
            type: "directory",
            children: [{ name: "file item", type: "file" }],
          },
        ],
      },
    ],
  },
};
