import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Categories from "./Categories";

describe("testar alguma coisa :3", () => {
    it("testando...", () => {
        const { container } = render(<Categories />);
        expect(container).toBeTruthy();
    });

    it("category title render", () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={["categories/Art"]}>
                <Routes>
                    <Route path="categories/:category" element={<Categories />}></Route>
                </Routes>
            </MemoryRouter>
        );
        console.log(getByTestId("custom-element"));
    });
});
