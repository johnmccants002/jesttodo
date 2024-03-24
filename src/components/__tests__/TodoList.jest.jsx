// TodoList.test.js
import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import TodoList from "../TodoList";

test("renders TodoList component with no todos", () => {
  const { queryByTestId } = render(<TodoList todos={[]} />);
  const noTodoText = queryByTestId("no-todos");
  expect(noTodoText).toBeInTheDocument();
});

test("renders TodoList component with todos", () => {
  const todos = [
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: true },
  ];
  const { getByText } = render(<TodoList todos={todos} />);
  const todo1 = getByText("Todo 1");
  const todo2 = getByText("Todo 2");
  expect(todo1).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();
});

test("toggleTodo function gets called when todo item is clicked", () => {
  const toggleTodoMock = jest.fn();
  const todos = [{ id: 1, text: "Test Todo", completed: false }];
  const { getByTestId } = render(
    <TodoList todos={todos} toggleTodo={toggleTodoMock} />
  );
  const todoItem = getByTestId("todo-1");
  fireEvent.click(todoItem);
  expect(toggleTodoMock).toHaveBeenCalled();
});

test("deleteTodo function gets called when delete button is clicked", () => {
  const deleteTodoMock = jest.fn();
  const todos = [{ id: 1, text: "Test Todo", completed: false }];
  const { getByText } = render(
    <TodoList todos={todos} deleteTodo={deleteTodoMock} />
  );
  const deleteButton = getByText("Delete");
  fireEvent.click(deleteButton);
  expect(deleteTodoMock).toBeCalledWith(1);
});
