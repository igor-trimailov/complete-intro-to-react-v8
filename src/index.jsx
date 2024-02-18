import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css"

const container = document.getElementById("root");

// this will run React in legacy mode
// ReactDOM.render(container, <App />)

// this will opt into React 18 features
const root = createRoot(container);
root.render(<App />);
