import React from "react";
import Product from "./Product";

function Carousel() {
    return (
        <div className="carousel">
            <Product title="Producto 1" />
            <Product title="Producto 2" />
            <Product title="Producto 3" />
        </div>
    );
}

export default Carousel;
