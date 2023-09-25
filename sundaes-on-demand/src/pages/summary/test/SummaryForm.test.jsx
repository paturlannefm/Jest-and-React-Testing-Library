import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial conditions", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole("button", { name: /confirm order/i });
  expect(button).toBeDisabled();
});

test("Checkbox enables button on click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  fireEvent.click(checkbox);

  const button = screen.getByRole("button", { name: /confirm order/i });
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
