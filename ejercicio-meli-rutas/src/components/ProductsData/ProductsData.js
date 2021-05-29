import React, { useState, useEffect } from "react";
import HeaderOne from "../../components/HeaderOne/HeaderOne";
import Product from "../../components/Product/Product";

function ProductsData() {
    const [products, setProducts] = useState([]);

    async function fetchData() {
        const getData = await fetch(
            "https://api.mercadolibre.com/sites/MLA/search?q=auriculares&limit=5"
        );
        const getJson = await getData.json();

        setProducts(getJson.results);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <HeaderOne />
            {products.map((product, key) => {
                return (
                    <Product
                        image={product.thumbnail}
                        title={product.title}
                        key={product.id ? product.id : key}
                    />
                );
            })}
        </>
    );
}

export default ProductsData;
