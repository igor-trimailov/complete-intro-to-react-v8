import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
        React.createElement(Pet, { name: "Nacho", animal: "Cat", breed: "Tabby" }),
        React.createElement(Pet, { name: "Garik", animal: "Bird", breed: "Cockatiel" }),
    ]);
};

const container = document.getElementById("root");

// this will run React in legacy mode
// ReactDOM.render(container, <App />)

// this will opt into React 18 features
const root = createRoot(container);
root.render(React.createElement(App));
