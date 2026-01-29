import { createRoot } from "@wordpress/element";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const domNode = document.getElementById("plugin-ui-test-app");
  if ( domNode ) {
    const root = createRoot( domNode! );
    root.render( <App /> );
  }
})