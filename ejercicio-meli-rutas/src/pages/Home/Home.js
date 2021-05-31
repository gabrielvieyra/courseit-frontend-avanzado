import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    const countries = [
        {
            name: "Argentina",
            site: "MLA"
        },
        {
            name: "Bolivia",
            site: "MBO"
        },
        {
            name: "Brasil",
            site: "MLB"
        },
        {
            name: "Chile",
            site: "MLC"
        },
        {
            name: "Colombia",
            site: "MCO"
        },
        {
            name: "Costa Rica",
            site: "MCR"
        },
        {
            name: "Ecuador",
            site: "MEC"
        }
    ];

    return (
        <>
            <div className="logo"></div>
            <ul>
                {countries.map((country, key) => {
                    return (
                        <li key={key}>
                            <Link to={`/producto/${country.site}`}>
                                {country.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Home;
