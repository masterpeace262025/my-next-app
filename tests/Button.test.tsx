import Button from "../src/app/components/ui/Button";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Button Component", () => {
  it("renders the button correctly", () => {
    render(<Button />);

    // Check if the button is displayed
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Submit");
    expect(buttonElement).toHaveClass(
      "w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
    );
  });
});
