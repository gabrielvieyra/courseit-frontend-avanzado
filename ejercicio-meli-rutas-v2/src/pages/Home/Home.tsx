import { Link } from "react-router-dom";

// Styles
import "./_home.scss";

// Interfaces
import { Country } from "../../types/types";

const Home: React.FC = () => {
  const countries: Array<Country> = [
    {
      name: "Argentina",
      id: "MLA",
    },
    {
      name: "Brasil",
      id: "MLB",
    },
    {
      name: "Peru",
      id: "MPE",
    },
    {
      name: "Chile",
      id: "MLC",
    },
    {
      name: "Colombia",
      id: "MCO",
    },
    {
      name: "Ecuador",
      id: "MEC",
    },
    {
      name: "Mexico",
      id: "MLM",
    },
    {
      name: "Uruguay",
      id: "MLU",
    },
  ];

  // ejercicio 01
  // cuando clickeamos en un pais distinto que nos traiga los productos de ese pais
  // / --> home
  // /products/:country (ej MLA, MLC)

  // ejercicio 02
  // cuando clickeamos en uno de los productos que nos lleve a la pagina del producto, la pagina del producto debe mostrar el titulo, el precio y el descuento

  return (
    <div className="home">
      <ul>
        {countries.map((country, key) => {
          const { name, id } = country;
          return (
            <li key={id ? id : key}>
              <Link to={`/search/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
