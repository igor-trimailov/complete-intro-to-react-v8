import React from "react";
import { expect, it, describe } from "vitest";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Pet from "../src/components/Pet";

describe("Pet", () => {
    it("displays a default thumbnail", async () => {
        const pet = render(
            <StaticRouter>
                <Pet />
            </StaticRouter>,
        );
        const petThumbnail = await pet.findByTestId("thumbnail");
        expect(petThumbnail.src).toContain("none.jpg");
        pet.unmount();
    });

    it("displays a non default thumbnail", async () => {
        const pet = render(
            <StaticRouter>
                <Pet images={["image1.jpg"]}/>
            </StaticRouter>,
        );
        const petThumbnail = await pet.findByTestId("thumbnail");
        expect(petThumbnail.src).toContain("image1.jpg");
        pet.unmount();
    });
});
