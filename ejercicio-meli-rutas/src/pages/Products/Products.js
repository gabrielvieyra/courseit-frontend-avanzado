import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductsData from "../../components/ProductsData/ProductsData";

function Products() {
    const [inputValue, setInputValue] = useState("");

    function handleCallback(inputValue) {
        setInputValue(inputValue);
    }

    return (
        <>
            <Navbar handleCallback={handleCallback} />
            <ProductsData inputValue={inputValue} />
        </>
    );
}

export default Products;
