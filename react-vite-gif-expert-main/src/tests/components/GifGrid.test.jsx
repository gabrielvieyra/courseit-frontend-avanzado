import { render, screen } from "@testing-library/react";

// Components
import { GifGrid } from "../../components/GifGrid";

// Custom Hooks
import { useFetchGifs } from "../../hooks/useFetchGifs";

// Con esto lo que hacemos es hacer un mock completo de el path '../../hooks/useFetchGifs'
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One Punch";

  test("debe de mostrar el loading inicialmente", () => {
    // Dentro de mockReturnValue tenemos lo que retorna el custom hook
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText("Cargando...")).toBeTruthy();
  });

  test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
