import { Routes, Route } from "react-router";

// Components
import Title from "./components/Title/Title";
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
