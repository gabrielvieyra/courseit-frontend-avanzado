import React from "react";

function Product(props) {
    const { title, image } = props;

    return (
        <>
            <img src={image} alt="" />
            <p>{title}</p>
        </>
    );
}

export default Product;
