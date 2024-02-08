import { describe, expect, it } from "vitest";
import { Counter } from "./counter";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("<Counter />", () => {
  it("renders initial counter value at 0", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increments counter by 1 correctly", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const counter = screen.getByText("0");

    await userEvent.click(incrementButton);

    expect(counter.textContent).toEqual("1");
  });

  it("decrements counter by 1 correctly", async () => {
    render(<Counter />);
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    const counter = screen.getByText("0");

    await userEvent.click(decrementButton);

    expect(counter.textContent).toEqual("-1");
  });

  it("increments counter by 3 correctly", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const counter = screen.getByText("0");

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);

    expect(counter.textContent).toEqual("3");
  });
});
