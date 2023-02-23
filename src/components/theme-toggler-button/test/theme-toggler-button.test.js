import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeTogglerButton } from "..";
import { ThemeProvider } from "../../../contexts/theme-context";

test("Initial state should be light theme by default", async () => {
  render(<ThemeTogglerButton />, { wrapper: ThemeProvider });

  const themeButton = screen.getByRole("img", { name: "Theme icon" });

  expect(themeButton.src).toContain("light-theme-icon.svg");
});

test("Should switch to dark theme on button click", async () => {
  const user = userEvent.setup();
  render(<ThemeTogglerButton />, { wrapper: ThemeProvider });

  const themeButton = screen.getByRole("img", { name: "Theme icon" });

  await user.click(themeButton);
  expect(themeButton.src).toContain("dark-theme-icon.svg");
});

test("Should switch back to light theme on button click", async () => {
  const user = userEvent.setup();
  render(<ThemeTogglerButton />, { wrapper: ThemeProvider });

  const themeButton = screen.getByRole("img", { name: "Theme icon" });

  await user.click(themeButton);
  expect(themeButton.src).toContain("dark-theme-icon.svg");

  await user.click(themeButton);
  expect(themeButton.src).toContain("light-theme-icon.svg");
});
