import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "./reducer";
import App from "./App";

test("renders learn react link", () => {
  const store = createStore(reducer);
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  const titleElement = screen.getByText(/who we are/i);
  expect(titleElement).toBeInTheDocument();
});
