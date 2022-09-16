import { Link, useParams } from "react-router-dom";

// Styles
import "./_product.scss";

interface ProductProps {
  title: string;
  image: string;
  productId: string;
}

const Product: React.FC<ProductProps> = ({ title, image, productId }) => {
  const { id } = useParams();

  return (
    <div className="product">
      <img src={image} alt={title} />
      <p>{title}</p>
      <Link to={`/search/${id}/${productId}`}>Más detalles</Link>
    </div>
  );
};

export default Product;
