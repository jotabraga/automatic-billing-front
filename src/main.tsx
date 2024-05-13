import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FileProvider } from "./components/contexts/file-context";

import * as Components from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FileProvider>
      <BrowserRouter>
        <Components.Layout />
      </BrowserRouter>
    </FileProvider>
  </React.StrictMode>
);
