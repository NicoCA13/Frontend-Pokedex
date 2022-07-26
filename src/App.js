import Main from "./Componentes/Main/Main.jsx";
import Login from "./Componentes/Login/Login.jsx";
import Registrar from "./Componentes/Registrar/Registrar.jsx";
import Tarjeta from "./Componentes/Tarjeta/Tarjeta.jsx";
import Formulario from "./Componentes/Formulario/Formulario.jsx";
import NotFound from "./Componentes/NotFound/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemones from "./Componentes/Pokemones/Pokemones";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/registrar" element={<Registrar />}></Route>
          <Route path="/formulario" element={<Formulario />}></Route>
          <Route
            path="pokemons/:id"
            element={<Tarjeta pokemones={Pokemones} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
