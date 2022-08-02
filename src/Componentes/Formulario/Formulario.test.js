import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Formulario from "./Formulario";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

const history = createMemoryHistory();
const formularioWithRouter = (
  <Router location={history.location} navigator={history}>
    <Formulario />
  </Router>
);
it("renders formulario", async () => {
  render(formularioWithRouter);

  await waitFor(() => {
    expect(screen.getByTestId("form-agregar")).toBeInTheDocument();
  });
});

describe("validations", () => {
  describe("name field", () => {
    it("should throw error if name is not filled", async () => {
      render(formularioWithRouter);

      const nameField = screen.getByTestId("name-field");
      const submitButton = screen.getByTestId("submit-button");

      expect(nameField).toBeInTheDocument();

      nameField.focus();

      userEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByTestId("nombre-required")).toBeInTheDocument();
      });
    });

    it("should not throw error if name is filled", async () => {
      render(formularioWithRouter);

      const nameField = screen.getByTestId("name-field");
      const submitButton = screen.getByTestId("submit-button");

      expect(nameField).toBeInTheDocument();

      nameField.focus();
      userEvent.type(nameField, "Facu");

      userEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.queryByTestId("nombre-required")).not.toBeInTheDocument();
      });
    });

    it("should throw error if name is not respecting max length", async () => {
      render(formularioWithRouter);

      const nameField = screen.getByTestId("name-field");
      const submitButton = screen.getByTestId("submit-button");

      expect(nameField).toBeInTheDocument();

      nameField.focus();
      userEvent.type(nameField, "123456789012345678901");

      userEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByTestId("nombre-max-length")).toBeInTheDocument();
      });
    });

    it("should not throw error if name is respecting max length", async () => {
      render(formularioWithRouter);

      const nameField = screen.getByTestId("name-field");
      const submitButton = screen.getByTestId("submit-button");

      expect(nameField).toBeInTheDocument();

      nameField.focus();
      userEvent.type(nameField, "Facu");

      userEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.queryByTestId("nombre-max-length")
        ).not.toBeInTheDocument();
      });
    });
  });

  it("should throw error if number is not respecting max length", async () => {
    render(formularioWithRouter);

    const numberField = screen.getByTestId("number-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(numberField).toBeInTheDocument();

    numberField.focus();
    userEvent.type(numberField, "12345");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("number-max-length")).toBeInTheDocument();
    });
  });

  it("should not throw error if number is respecting max length", async () => {
    render(formularioWithRouter);

    const numberField = screen.getByTestId("number-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(numberField).toBeInTheDocument();

    numberField.focus();
    userEvent.type(numberField, "Facu");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByTestId("number-max-length")).not.toBeInTheDocument();
    });
  });

  it("should throw error if number is not entered", async () => {
    render(formularioWithRouter);

    const numberField = screen.getByTestId("number-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(numberField).toBeInTheDocument();

    numberField.focus();

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("number-required")).toBeInTheDocument();
    });
  });

  it("should not throw error if number is entered", async () => {
    render(formularioWithRouter);

    const numberField = screen.getByTestId("number-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(numberField).toBeInTheDocument();

    numberField.focus();
    userEvent.type(numberField, "#123");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByTestId("number-required")).not.toBeInTheDocument();
    });
  });

  it("should throw error if weight is not entered", async () => {
    render(formularioWithRouter);

    const weightField = screen.getByTestId("weight-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(weightField).toBeInTheDocument();

    weightField.focus();

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("weight-required")).toBeInTheDocument();
    });
  });

  it("should not throw error if weight is entered", async () => {
    render(formularioWithRouter);

    const weightField = screen.getByTestId("weight-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(weightField).toBeInTheDocument();

    weightField.focus();
    userEvent.type(weightField, "1234");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByTestId("weight-required")).not.toBeInTheDocument();
    });
  });

  it("should throw error if weight is not respecting max length", async () => {
    render(formularioWithRouter);

    const weightField = screen.getByTestId("weight-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(weightField).toBeInTheDocument();

    weightField.focus();
    userEvent.type(weightField, "12345");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("weight-max-length")).toBeInTheDocument();
    });
  });

  it("should not throw error if weight is respecting max length", async () => {
    render(formularioWithRouter);

    const weightField = screen.getByTestId("weight-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(weightField).toBeInTheDocument();

    weightField.focus();
    userEvent.type(weightField, "1234");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByTestId("weight-max-length")).not.toBeInTheDocument();
    });
  });

  it("should throw error if height is not entered", async () => {
    render(formularioWithRouter);

    const heightField = screen.getByTestId("height-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(heightField).toBeInTheDocument();

    heightField.focus();

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("height-required")).toBeInTheDocument();
    });
  });

  it("should not throw error if height is entered", async () => {
    render(formularioWithRouter);

    const heightField = screen.getByTestId("height-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(heightField).toBeInTheDocument();

    heightField.focus();
    userEvent.type(heightField, "1234");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByTestId("height-required")).not.toBeInTheDocument();
    });
  });

  it("should throw error if height is not respecting max length", async () => {
    render(formularioWithRouter);

    const heightField = screen.getByTestId("height-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(heightField).toBeInTheDocument();

    heightField.focus();
    userEvent.type(heightField, "12345");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("height-max-length")).toBeInTheDocument();
    });
  });

  it("should not throw error if height is respecting max length", async () => {
    render(formularioWithRouter);

    const heightField = screen.getByTestId("height-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(heightField).toBeInTheDocument();

    heightField.focus();
    userEvent.type(heightField, "1234");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByTestId("height-max-length")).not.toBeInTheDocument();
    });
  });

  it("should throw error if elemento1 is not entered", async () => {
    render(formularioWithRouter);

    const elemento1Field = screen.getByTestId("elemento1-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(elemento1Field).toBeInTheDocument();

    elemento1Field.focus();

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("elemento1-required")).toBeInTheDocument();
    });
  });

  it("should not throw error if elemento1 is entered", async () => {
    render(formularioWithRouter);

    const elemento1Field = screen.getByTestId("elemento1-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(elemento1Field).toBeInTheDocument();

    elemento1Field.focus();
    userEvent.type(elemento1Field, "1234");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryByTestId("elemento1-required")
      ).not.toBeInTheDocument();
    });
  });

  it("should throw error if elemento1 is not respecting max length", async () => {
    render(formularioWithRouter);

    const elemento1Field = screen.getByTestId("elemento1-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(elemento1Field).toBeInTheDocument();

    elemento1Field.focus();
    userEvent.type(elemento1Field, "123456789012345678901");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("elemento1-max-length")).toBeInTheDocument();
    });
  });

  it("should not throw error if elemento1 is respecting max length", async () => {
    render(formularioWithRouter);

    const elemento1Field = screen.getByTestId("elemento1-field");
    const submitButton = screen.getByTestId("submit-button");

    expect(elemento1Field).toBeInTheDocument();

    elemento1Field.focus();
    userEvent.type(elemento1Field, "1234");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryByTestId("elemento1-max-length")
      ).not.toBeInTheDocument();
    });
  });
});
