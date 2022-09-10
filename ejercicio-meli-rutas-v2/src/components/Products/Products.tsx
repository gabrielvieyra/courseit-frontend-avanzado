import { useState, useEffect } from "react";

// Components
import Title from "../Title/Title";
import Product from "../Product/Product";

interface Product {
  thumbnail: string;
  title: string;
  id: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData(): Promise<void> {
    const getData = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=auriculares&limit=5"
    );
    const getJson = await getData.json();
    // console.log(getJson.results);
    setProducts(getJson.results);
  }

  // console.log(products);
  return (
    <>
      <Title text="Products" />
      {products.map((product, key) => {
        const { title, thumbnail, id } = product;
        return <Product key={id ? id : key} title={title} image={thumbnail} />;
      })}
    </>
  );
};

export default Products;
