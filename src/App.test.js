import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import App from "./App"

afterEach(cleanup);

it("matches snapshot", () => {
   const { asFragment } = render(<App />);

   expect(asFragment()).toMatchSnapshot();
});

it('it displays default todo items', () => {
   const { getByTestId } = render(<App />);
   const todoList = getByTestId('todos-ul');

   expect(todoList.children.length).toBe(2);
});

it('user can enter values in the text field', () => {
   const { getByTestId } = render(<App />);
   const inputField = getByTestId("todo-input");
   inputField.value = "value";

   fireEvent.change(inputField);
   expect(inputField.value).toBe("value")
});

it("user can add items", () => {
   const { getByTestId } = render(<App />);
   const inputElement = getByTestId("todo-input");
   const button = getByTestId("add-task");
   const todoList = getByTestId('todos-ul');

   inputElement.value = "value";
   fireEvent.change(inputElement);

   fireEvent.click(button);

   expect(todoList.children.length).toBe(3);
} );


