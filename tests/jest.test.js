import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/svelte";

import Counter from "../src/lib/Counter.svelte";

test("shows proper text in button", () => {
  render(Counter);
  const textButton = screen.getByText("count is 0");
  expect(textButton).toBeInTheDocument();
});

test("changes button text on click", async () => {
  render(Counter);
  const button = screen.getByRole("button");

  await fireEvent.click(button);

  // with jest-dom
  expect(button).toHaveTextContent("count is 1");

  expect(button.textContent).toBe("count is 1");
});
