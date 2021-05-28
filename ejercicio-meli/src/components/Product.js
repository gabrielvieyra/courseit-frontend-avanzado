import React from "react";

function Product(props) {
    const { title, image } = props;

    return (
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
    );
}

export default Product;
