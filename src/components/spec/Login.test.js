import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { useHistory } from "react-router-dom";
import reducer from "../../reducer";
import Login from "../Login";

test("Login renders without any errors", () => {
  const store = createStore(reducer);
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
});

test("Functionality of the form", () => {
  const store = createStore(reducer);

  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(screen.getByText(/sign in here/i)).toBeVisible();

  //username field
  const username = screen.getByPlaceholderText(/username/i);
  userEvent.click(username);
  userEvent.type(username, "patty");
  expect(username).toHaveValue("patty");

  //password field
  const password = screen.getByPlaceholderText(/password/i);
  userEvent.click(password);
  userEvent.type(password, "123ave");
  expect(password).toHaveValue("123ave");

  //button
  const button = screen.getByRole("button", { name: /sign in/i });
  expect(button).toBeVisible();
  //  userEvent.click(button);
});
