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
      {countries.map((country, key) => {
        return <a key={key}>{country}</a>;
      })}
    </div>
  );
};

export default Home;
