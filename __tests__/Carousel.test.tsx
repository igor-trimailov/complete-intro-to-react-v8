import React from "react";
import { expect, it, describe } from "vitest";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Carousel from "../src/components/Carousel";

describe("Carousel", () => {
    it("displays a default thumbnail", async () => {
        const images = [
            "image-1.jpg",
            "image-2.jpg",
            "image-3.jpg",
            "image-4.jpg",
        ];

        const carousel = render(<Carousel images={images} />);
        const hero = await carousel.findByTestId("hero");
        expect(hero.src).toContain([images[0]]);

        for (let i = 0; i < images.length; i++) {
            const image = images[i];

            const thumb = await carousel.findByTestId(`thumbnail-${i}`);
            await thumb.click();

            expect(hero.src).toContain(image);
            expect(Array.from(thumb.classList)).toContain("active");
        }
        carousel.unmount();
    });
});
