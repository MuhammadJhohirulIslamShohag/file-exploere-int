import { useState } from "react";
import explorer from "./data/folderData.ts";
import Folder from "./components/Folder.js";
import "./App.css";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  console.log(explorerData);

  return (
    <>
      <section>
        <Folder item={explorerData} />
      </section>
    </>
  );
}

export default App;
