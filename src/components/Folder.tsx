import React from "react";
import type { ExplorerItem } from "../types/ExplorerItem.type";

interface FolderProps {
  item: ExplorerItem;
}

const Folder: React.FC<FolderProps> = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  if (item.isFolder) {
    return (
      <section>
        <div className="folder" onClick={() => setExpanded(!expanded)}>
          <span>📂{item.name}</span>
        </div>
        <div
          style={{ paddingLeft: "20px", display: expanded ? "block" : "none" }}
        >
          {item.items &&
            item.items.map((childItem) => {
              return <Folder key={childItem.id} item={childItem} />;
            })}
        </div>
      </section>
    );
  } else {
    return <span className="file">📄{item.name}</span>;
  }
};

export default Folder;
