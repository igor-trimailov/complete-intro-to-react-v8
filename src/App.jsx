import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Nacho" animal="Cat" breed="Tabby" />
            <Pet name="Garik" animal="Bird" breed="Cockatiel" />
        </div>
    );
};

const container = document.getElementById("root");

// this will run React in legacy mode
// ReactDOM.render(container, <App />)

// this will opt into React 18 features
const root = createRoot(container);
root.render(<App />);
