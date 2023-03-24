import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages/index";

jest.mock("../hooks", () => ({
  useCarsQuery: () => ({
    data: {
      items: [
        {
          id: 1,
          vin: "AAAAAAAAAA3333333",
          year: 2023,
          make: "Mazda",
          model: "Mazda2",
          price: 25000,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Mazda2_%28DJ%29_Homura_1X7A0345.jpg",
        },
        {
          id: 2,
          vin: "BBBBBBBBBB1111111",
          year: 2022,
          make: "Mazda",
          model: "Mazda3",
          price: 30000,
          img: "https://upload.wikimedia.org/wikipedia/commons/8/88/2019_Mazda3_SE-L_2.0_Front.jpg",
        },
      ],
      totalItemCount: 2,
    },
    isLoading: false,
  }),
}));

test("should filter by VIN and show Mazda3", async () => {
  render(<Home />);

  await userEvent.selectOptions(await screen.findByRole("combobox"), "VIN");
  await userEvent.type(await screen.findByRole("textbox"), "BBBBBBBBBB1111111");
  await userEvent.click(await screen.findByRole("button"));

  expect(await screen.findByText("BBBBBBBBBB1111111")).toBeVisible();
  expect(await screen.findByText(/mazda3/i)).toBeVisible();
  expect(await screen.findByText("$30,000.00")).toBeVisible();
});
