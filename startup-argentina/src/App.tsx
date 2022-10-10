// Dependencies
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AddStartup from './pages/AddStartup';

// Styles
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddStartup />} />
    </Routes>
  );
}

export default App;

// ejercicio
// maquetado del ejercicio*
// agregar filtrado dinamico
// agregar rutas, vamos a agregar la ruta / (home) y /agregar*
// maquetado de la pagina agregar*

// cuando le damos al btn enviar tenemos que hacer la validacion de que todos los campos obligatorios salvo web, twitter y instagram tengan algo escrito
// y no esten vacios, si las validaciones se cumplen lo tiene que agregar al localStorage, sino nos tiene que mostrar un mensaje de error general o individual

// TIPS:
// usar 2 custom hooks, uno para el localStorage y el otro para validar los campos requeridos y los nos requeridos
// logica para los inputs vacios o completos se van a reutilizar en muchos lados

// la longitud ej es > a 0
