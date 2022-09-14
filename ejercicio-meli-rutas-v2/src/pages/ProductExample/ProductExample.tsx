import { Routes, Route, useParams } from "react-router-dom";

// Components
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const ProductExample: React.FC = () => {
  // obtenemos el objeto tipo clave:valor
  const params = useParams();
  // console.log(params);

  // desestructuramos el objeto y capturamos solamente la propiedad id
  const { id } = useParams();
  // console.log(id);

  // leemos el id de la url y le pegamos al endpoint de meli correspondiente
  // logica
  return (
    <>
      <h1>Soy un producto = {id}</h1>
      {/* <Routes>
        <Route path="/:productId" element={<ProductDetail />} />
      </Routes> */}
    </>
  );
};

export default ProductExample;
