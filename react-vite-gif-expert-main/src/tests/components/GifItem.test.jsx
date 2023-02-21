import { render, screen } from "@testing-library/react";

// Components
import { GifItem } from "../../components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  //   test("should render GifItem component", () => {
  //     render(<GifItem title={title} />);
  //   });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });
});
