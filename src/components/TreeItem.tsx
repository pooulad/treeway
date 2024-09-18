import React, { useState, memo } from "react";
import { ITreeWay } from "./ts/type";
import { CaretDownSolidIcon, FolderSolidIcon } from "./assets/index";

interface TreeItemProps {
  item: ITreeWay;
  backgroundColor: string;
  direction: "rtl" | "ltr";
}

const TreeItem: React.FC<TreeItemProps> = memo(({ item, backgroundColor, direction }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hasChildFolder = (node: ITreeWay) =>
    node.children && node.children.length > 0 && node.type === "directory";

  const handleClick = () => {
    if (item.children) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minWidth: "100px" }}>
      <button
        style={{
          width: "100%",
          borderRadius: "10px",
          height: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
          textTransform: "none",
          border: "none",
          backgroundColor,
          margin: "1px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: direction === "ltr" ? "row" : "row-reverse",
            justifyContent: hasChildFolder(item) ? "space-between" : "center",
            alignItems: "center",
            textAlign: "center",
            gap: "10px",
            width: "100%",
            height: "100%",
          }}
        >
          {hasChildFolder(item) && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <FolderSolidIcon style={{ fill: "#001D35", height: "15px" }} />
            </div>
          )}
          <div>{item.name}</div>
          {hasChildFolder(item) && (
            <div
              style={{
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleClick}
            >
              <CaretDownSolidIcon
                style={{
                  transform: isOpen
                    ? direction === "ltr"
                      ? "rotate(-90deg)"
                      : "rotate(90deg)"
                    : undefined,
                }}
              />
            </div>
          )}
        </div>
      </button>
      {isOpen && (
        <div
          style={{
            width: "100%",
            position: "relative",
            [direction === "rtl" ? "right" : "left"]: "20px",
          }}
        >
          {item.children && item.children.map((subItem, index) => (
            <TreeItem
              key={index}
              direction={direction}
              backgroundColor={backgroundColor}
              item={subItem}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default TreeItem;
