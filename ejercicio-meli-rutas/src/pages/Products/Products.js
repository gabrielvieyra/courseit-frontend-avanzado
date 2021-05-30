import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductsData from "../../components/ProductsData/ProductsData";

function Products(props) {
    const { site } = props.match.params;
    const [inputValue, setInputValue] = useState("");

    function handleCallback(inputValue) {
        setInputValue(inputValue);
    }

    return (
        <>
            <Navbar handleCallback={handleCallback} />
            <ProductsData inputValue={inputValue} site={site} />
        </>
    );
}

export default Products;
