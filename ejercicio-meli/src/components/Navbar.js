import React from "react";

function Navbar(props) {
    function handleChange(e) {
        //console.log(e.target.value);
        props.handleCallback(e.target.value);
    }

    return <input type="text" onChange={handleChange} />;
}

export default Navbar;
