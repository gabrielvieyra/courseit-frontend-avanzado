import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Interfaces
import { Product } from "../../types/types";

const ProductDetail: React.FC = () => {
  // como valor inicial mi estado va a tener un null por que se que no tengo ningun producto
  const [product, setProduct] = useState<null | Product>(null);

  const { id, productId } = useParams();

  useEffect(() => {
    getData();
    // cuando el productId cambie voy a hacer un fetch
  }, [productId]);

  async function getData(): Promise<void> {
    const getData = await fetch(
      `https://api.mercadolibre.com/items/${productId}`
    );
    const getJson = await getData.json();
    setProduct(getJson);
  }

  console.log(product);
  return (
    <>
      {/* ej de un caso 
    si tengo product quiero mostrar esto, si no tengo product muestro ej un loading
    por que planteo en este caso un condicional? por que al principio product es nulo y product solamente tiene valores cuando se hace el 
    llamado a la API, como la API es un llamado asincronico entonces nesecito esperar a que se cargue y que llegue la informacion, aca
    es un buen momento para mostrar ej un loading */}
      {!product && <em>Loading...</em>}
      {product && (
        <>
          <h2>Nombre del producto: {product.title}</h2>
          <h2>Precio del producto: {product.price}</h2>
          <img src={product.thumbnail} alt={product.title} />
          <Link to={`/search/${id}`}>Volver a la pagina de productos</Link>
        </>
      )}
    </>
  );
};

export default ProductDetail;
