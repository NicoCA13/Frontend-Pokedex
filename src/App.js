import Main from "./Componentes/Main/Main.jsx";
import Login from "./Componentes/Login/Login.jsx";
import Tarjeta from "./Componentes/Tarjeta/Tarjeta.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemones from "./Componentes/Pokemones/Pokemones";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="tarjeta/:nombre"
            element={<Tarjeta pokemones={Pokemones} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
