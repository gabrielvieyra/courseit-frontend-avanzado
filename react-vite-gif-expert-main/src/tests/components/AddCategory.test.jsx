import { render, screen, fireEvent } from "@testing-library/react";

// Components
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    // screen.debug();
    const input = screen.getByRole("textbox");
    // console.log(input, "input");
    fireEvent.input(input, {
      target: { value: "Saitama" },
    });
    expect(input.value).toBe("Saitama");
    // screen.debug();
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // Cambiamos el valor de la caja de texto
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");
    // Probamos que esa funcion haya sido llamada
    expect(onNewCategory).toHaveBeenCalled();
    // Probamos que la funcion haya sido llamada solo 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // Probamos que la funcion haya sido llamada con x valor
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar el onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
