import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppClient from "./AppClient";

hydrateRoot(
    document.getElementById("root"),
    <BrowserRouter>
        <AppClient />
    </BrowserRouter>,
);
