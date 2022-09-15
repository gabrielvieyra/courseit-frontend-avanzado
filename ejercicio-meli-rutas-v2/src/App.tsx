import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./templates/Layout";

// Pages
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import ProductExample from "./pages/ProductExample/ProductExample";

// Styles
import "./App.scss";

function App() {
  return (
    // TODO: refactor layout
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:id" element={<Search />} />
        {/* con /* (barra asteristo) lo que hacemos es habilitar a tener nuevas rutas adentro de esta ruta, es decir tener subrutas */}
        <Route path="/products/*" element={<ProductExample />} />
        {/* la libreria react-router-dom nos va a pasar por props la informacion de nuestra ruta
            ej Route es el componente padre y le va a pasar a ProductExample que es el componente hijo informacion sobre la ruta */}
        <Route path="/product/:id" element={<ProductExample />} />
      </Routes>
    </Layout>
  );
}

export default App;

// ejercicio
// a medida que busquen deberian filtrarse los resultados
// por defecto nos traiga cargando algo, no importa que por el momento

// ej de un flujo
// la magia de las rutas dinamicas es que vos puedas tener una variable en la url y que vos despues puedas leer esa variable desde el codigo, para
// que? para saber que el usario entro ej a /producto/1, entonces leo ese 1 para pegarle a la API y decirle che traeme la informacion del producto 1
