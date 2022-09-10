import { Link } from "react-router-dom";

// Styles
import "./_home.scss";

const Home: React.FC = () => {
  const countries: Array<string> = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Dominicana",
    "Ecuador",
    "Guatemala",
  ];

  return (
    <div className="home">
      <ul>
        {countries.map((country, key) => {
          return (
            <li>
              <Link to="/search" key={key}>
                {country}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
