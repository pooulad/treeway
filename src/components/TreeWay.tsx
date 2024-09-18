import { Fragment } from "react/jsx-runtime";
import TreeItem from "./TreeItem";
import { ITreeWay } from "./ts/type";

interface TreeWayProps {
  items: ITreeWay[];
  backgroundColor?: string;
  direction?: "rtl" | "ltr";
}

function TreeWay({
  items,
  backgroundColor = "#f0f0f0",
  direction = "ltr",
}: TreeWayProps) {
  return (
    <Fragment>
      {items.map((item, index) => {
        return (
          <TreeItem
            key={index}
            item={item}
            backgroundColor={backgroundColor}
            direction={direction}
          />
        );
      })}
    </Fragment>
  );
}

export default TreeWay;
