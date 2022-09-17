import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

// Components
import Title from "../../components/Title/Title";

// Interfaces
import { Product } from "../../types/types";

const SearchResult: React.FC = () => {
  const { site } = useParams();
  const [searchParams] = useSearchParams();
  // le pasamos a get el nombre del parametro que queremos capturamos su valor
  //   console.log(searchParams.get("inputValue"));

  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    getData();
    // le tengo que indicar que cuando el searchParams cambie vuelvo a hacer el llamado a la API
  }, []);

  async function getData(): Promise<void> {
    const getResponse = await fetch(
      `https://api.mercadolibre.com/sites/${site}/search?q=${searchParams.get(
        "inputValue"
      )}&limit=5`
    );
    const getJson = await getResponse.json();
    setProducts(getJson.results);
    // console.log(getJson.results);
  }

  //   console.log(products);
  return (
    <>
      <Title text="Resultados de la busqueda:" />
      {products.length === 0 && <em>No se encontraron productos</em>}
      {products.length > 1 &&
        products.map((product, key) => {
          const { title, thumbnail, id } = product;
          return (
            <div key={id ? id : key}>
              <img src={thumbnail} alt={title} />
              <p>{title}</p>
            </div>
          );
        })}
      <Link to={`/search/${site}`}>Volver a la pagina de productos</Link>
    </>
  );
};

export default SearchResult;
