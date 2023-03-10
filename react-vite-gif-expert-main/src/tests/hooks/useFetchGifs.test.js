import { renderHook, waitFor } from "@testing-library/react";

// Custom Hooks
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  const category = "One Punch";

  test("debe de regresar el estado inicial", () => {
    // renderHook regresa varias cosas ej result es el resultado que regresa el hook cuando ya se monta, unmont es el resultado que se dispara cuando el hook es
    // desmontado, rerender en el caso que quieran renderizar nuevamente el hook
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;
    // console.log(images, "images");
    // console.log(isLoading, "isLoading");
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs(category));
    // waitFor espera a que algo suceda
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
