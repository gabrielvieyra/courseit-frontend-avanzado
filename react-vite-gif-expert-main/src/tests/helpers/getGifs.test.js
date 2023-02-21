import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("getGifs debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");
    // console.log(gifs, "gifs");
    // Probamos que el arreglo tenga una longitud de mas de 1 elemento
    expect(gifs.length).toBeGreaterThan(0);
    // Probamos que los gifs tengan un id, title, url
    // console.log(gifs[0]);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
