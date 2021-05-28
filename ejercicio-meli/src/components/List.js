import React, { useState, useEffect } from "react";
import Product from "./Product";

function List(props) {
    const { inputValue } = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const getData = await fetch(
            "https://api.mercadolibre.com/sites/MLA/search?q=auriculares&limit=50"
        );
        const getJson = await getData.json();

        //console.log(getJson.results);
        setProducts(getJson.results);
    }

    return (
        <>
            {products
                .filter((product) => {
                    return product.title
                        .toLowerCase()
                        .includes(inputValue.toLowerCase());
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

export default List;
