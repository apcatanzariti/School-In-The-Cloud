import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "../../reducer";
import Signup from "../SignUp";

test("Sign up component renders with out errors", () => {
  const store = createStore(reducer);
  render(
    <Provider store={store}>
      <Signup />
    </Provider>
  );

  expect(screen.getByText("New Here? Sign up as:")).toBeVisible();
  expect(screen.getByText(/an administrator/i)).toBeVisible();
  expect(screen.getByText(/a student/i)).toBeVisible();
  expect(screen.getByText(/a volunteer/i)).toBeVisible();
});

test("Able to Access the Admin Registration Form", () => {
  const store = createStore(reducer);
  const { debug } = render(
    <Provider store={store}>
      <Signup />
    </Provider>
  );
  debug();
  //before the selection is made
  const admin = screen.getByText(/an admin/i);
  expect(admin).toBeVisible();
  userEvent.click(admin);

  //once we click on text
  const username = screen.getByPlaceholderText(/admin username/i);
  expect(username).toHaveValue("");

  const password = screen.getByPlaceholderText(/admin password/i);
  expect(password).toHaveValue("");
});
