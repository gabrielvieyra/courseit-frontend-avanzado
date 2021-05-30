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
            {countries.map((country, key) => {
                return (
                    <Link to={`/producto/${country.site}`} key={key}>
                        {country.name}
                    </Link>
                );
            })}
        </>
    );
}

export default Home;
