import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppClient from "./AppClient";

export default function render(url, opts) {
    const stream = renderToPipeableStream(
        <StaticRouter location={url}>
            <AppClient />
        </StaticRouter>,
        opts,
    );
    return stream;
}
