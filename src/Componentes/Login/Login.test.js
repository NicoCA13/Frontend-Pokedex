import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();
const loginWithRouter = (
  <Router location={history.location} navigator={history}>
    <Login />
  </Router>
);
it("renders login message", async () => {
  render(loginWithRouter);

  await waitFor(() => {
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });
});
