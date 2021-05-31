import React, { useState, useEffect } from "react";
import HeaderOne from "../../components/HeaderOne/HeaderOne";
import Product from "../../components/Product/Product";
import { useParams } from "react-router-dom";

function ProductsData(props) {
    const { site } = useParams();
    const [products, setProducts] = useState([]);

    async function fetchData() {
        const getData = await fetch(
            `https://api.mercadolibre.com/sites/${site}/search?q=auriculares&limit=20`
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
            {products
                .filter((product) => {
                    return product.title
                        .toLowerCase()
                        .includes(props.inputValue.toLowerCase());
                })
                .map((product, key) => {
                    return (
                        <Product
                            title={product.title}
                            image={product.thumbnail}
                            key={product.id ? product.id : key}
                        />
                    );
                })}
        </>
    );
}

export default ProductsData;
