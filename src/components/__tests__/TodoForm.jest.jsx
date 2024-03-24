// TodoForm.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "../TodoForm";

test("renders TodoForm component", () => {
  const { getByPlaceholderText } = render(<TodoForm />);
  const inputElement = getByPlaceholderText("Add new todo...");
  expect(inputElement).toBeInTheDocument();
});

test("input value updates on change", () => {
  const { getByPlaceholderText } = render(<TodoForm />);
  const inputElement = getByPlaceholderText("Add new todo...");
  fireEvent.change(inputElement, { target: { value: "Test Todo" } });
  expect(inputElement.value).toBe("Test Todo");
});
