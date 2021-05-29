import React from "react";
import "./Home.css";

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
            <ul>
                {countries.map((country, key) => {
                    return <li key={key}>{country}</li>;
                })}
            </ul>
        </>
    );
}

export default Home;
