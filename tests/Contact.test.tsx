import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "../src/app/(pages)/contact/page"

describe("Contact Page", () => {
  it("renders the UserForm component", () => {
    render(<Contact />);
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });
});
