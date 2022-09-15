import { useState, useEffect } from "react";

// Components
import Title from "../Title/Title";
import Product from "../Product/Product";

interface Product {
  thumbnail: string;
  title: string;
  id: number;
}

interface ProductsProps {
  inputValue: string;
  site: string;
}

const Products: React.FC<ProductsProps> = ({ inputValue, site }) => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData(): Promise<void> {
    const getData = await fetch(
      `https://api.mercadolibre.com/sites/${site}/search?q=auriculares&limit=10`
    );
    const getJson = await getData.json();
    // console.log(getJson.results);
    setProducts(getJson.results);
  }

  return (
    <>
      <Title text="Products" />
      {products
        .filter((product) => {
          const { title } = product;
          return title.toLowerCase().includes(inputValue.toLowerCase());
        })
        .map((product, key) => {
          const { title, thumbnail, id } = product;
          return (
            <Product key={id ? id : key} title={title} image={thumbnail} />
          );
        })}
    </>
  );
};

export default Products;
