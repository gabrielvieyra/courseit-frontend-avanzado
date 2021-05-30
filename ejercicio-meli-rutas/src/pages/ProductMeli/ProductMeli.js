import React, { useEffect } from "react";

function ProductMeli(props) {
    const { id } = props.match.params;

    async function fetchData() {
        const getData = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const getJson = await getData.json();

        console.log(getJson);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <p>Soy un producto</p>;
}

export default ProductMeli;
