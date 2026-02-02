import React from "react";
import { createRoot } from "react-dom/client";
import { DokanPluginDemo, WeMailPluginDemo } from "./App";
import "./style.css";

function init() {
  // Mount Plugin A (Dokan - Purple Theme)
  const dokanMount = document.getElementById("plugin-dokan-app");
  if (dokanMount) {
    const root = createRoot(dokanMount);
    root.render(<DokanPluginDemo />);
  }

  // Mount Plugin B (WeMail - Blue Theme)
  const wemailMount = document.getElementById("plugin-wemail-app");
  if (wemailMount) {
    const root = createRoot(wemailMount);
    root.render(<WeMailPluginDemo />);
  }
}

// Handle both cases: DOM already loaded or still loading
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
