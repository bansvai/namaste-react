import React from "react";
import ReactDOM from "react-dom/client";

const ReactComponent = () => <h1 id="heading">Hello from JSX and React</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent />);
