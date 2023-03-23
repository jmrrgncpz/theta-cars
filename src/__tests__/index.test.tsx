import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages/index";

test("should filter by VIN and show Mazda3", async () => {
  render(<Home />);

  await userEvent.selectOptions(await screen.findByRole("combobox"), "VIN");
  await userEvent.type(await screen.findByRole("textbox"), "BBBBBBBBBB1111111");

  expect(await screen.findByText("BBBBBBBBBB1111111")).toBeVisible();
  expect(await screen.findByText("Mazda3")).toBeVisible();
  expect(await screen.findByText("$30,000")).toBeVisible();
});
