interface ProductProps {
  title: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ title, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Product;
