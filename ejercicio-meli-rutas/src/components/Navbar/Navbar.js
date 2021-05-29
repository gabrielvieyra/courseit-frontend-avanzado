import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    function handleChange(e) {
        props.handleCallback(e.target.value);
    }

    return (
        <>
            <Link to="/">img</Link>
            <input type="text" onChange={handleChange} />
            <p>Compra hoy y pagá depués</p>
        </>
    );
}

export default Navbar;
