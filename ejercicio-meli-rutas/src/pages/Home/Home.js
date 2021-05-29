import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    const countries = [
        "Argentina",
        "Bolivia",
        "Brasil",
        "Chile",
        "Colombia",
        "Costa Rica",
        "Dominicana",
        "Ecuador"
    ];

    return (
        <>
            <div className="logo"></div>
            {countries.map((country, key) => {
                return (
                    <Link to="/products" key={key}>
                        {country}
                    </Link>
                );
            })}
        </>
    );
}

export default Home;
