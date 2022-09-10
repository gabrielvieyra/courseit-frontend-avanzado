import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./templates/Layout";

// Pages
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

// Styles
import "./App.scss";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Layout>
  );
}

export default App;

// ejercicio
// a medida que busquen deberian filtrarse los resultados
// por defecto nos traiga cargando algo, no importa que por el momento
