import { Routes, Route } from "react-router";

// Components
import Layout from "./templates/Layout";

// Pages
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";

// Styles
import "./App.scss";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Layout>
  );
}

export default App;

// ejercicio
// a medida que busquen deberian filtrarse los resultados
// por defecto nos traiga cargando algo, no importa que por el momento
