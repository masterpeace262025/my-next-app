import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { UserForm } from "../src/app/components/UserForm";

describe("UserForm Component", () => {
  it("renders form with all fields", () => {
    render(<UserForm />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
 });

  it("updates input fields when typing", () => {
    render(<UserForm />);

    const nameInput = screen.getByLabelText(/full name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput).toHaveValue("John Doe");

    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    expect(emailInput).toHaveValue("john@example.com");

    const messageTextarea = screen.getByLabelText(/message/i);
    fireEvent.change(messageTextarea, { target: { value: "Hello there!" } });
    expect(messageTextarea).toHaveValue("Hello there!");
  });

  it("calls handleSubmit when form is submitted", () => {
    console.log = vi.fn(); // Mock console.log

    render(<UserForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello!" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(console.log).toHaveBeenCalledWith(
      "Form Submitted:",
      expect.objectContaining({
        name: "John Doe",
        email: "john@example.com",
        message: "Hello!",
      })
    );
  });
});
