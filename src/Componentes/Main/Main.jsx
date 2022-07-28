import "./Main.css";
import React, { useState, useEffect } from "react";
import pokeball from "../../iconos/Pokeball.png";
import CardPokemon from "../CardPokemon/CardPokemon";
import Agregar from "../Agregar/Agregar";
import PokeballRodante from "../../iconos/Poké_Ball_icon.svg.png";
import Ash from "../../iconos/ash.png";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  border: "1rem dashed black",
  borderRight: "0",
  display: "block",
  margin: "0 auto",
};
export default function Main() {
  const [listaDePokemones, setListaDePokemones] = useState([]);
  const [pokemonesFiltrado, setPokemonesFiltrado] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("nombre");

  useEffect(() => {
    cargarPokemones();
  }, []);

  const cargarPokemones = async () => {
    try {
      const respuesta = await fetch("http://localhost:6789/Pokemons", {});
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const pokemonesFetch = await respuesta.json();
      setListaDePokemones(pokemonesFetch);
      setPokemonesFiltrado(pokemonesFetch);
      setLoading(false);
    } catch (error) {
      console.log("No se pudo conectar con el backend");
    }
  };

  const ordenarPorNumero = () => {
    const listaActualizadaPorNumero = [...listaDePokemones].sort(
      (a, b) => a.numero - b.numero
    );
    setPokemonesFiltrado(listaActualizadaPorNumero);
    setOrderBy("nombre");
  };
  const ordenarPorNombre = () => {
    const listaActualizadaPorNombre = [...listaDePokemones].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
    setPokemonesFiltrado(listaActualizadaPorNombre);
    setOrderBy("numero");
  };

  const buscarNombre = (ev) => {
    if (ev.target.value === "") {
      setPokemonesFiltrado(listaDePokemones);
    } else {
      const listaFiltrada = [...listaDePokemones].filter((pokemon) => {
        const buscar = new RegExp(`.*${ev.target.value}.*`, "gi");
        return pokemon.nombre.match(buscar);
      });
      setPokemonesFiltrado(listaFiltrada);
    }
  };

  return (
    <div className="padre-div">
      <div className="headerCard">
        <div>
          <img className="pokeball" src={pokeball} alt="logo_pokemon" />
        </div>
        <h1 className="titulo-pokedex">Pokédex</h1>
        <div className="colaboradores">
          <h4> De: Pablito and Nico</h4>
        </div>
        <div className="pokeballDivId">
          {" "}
          <img className="pokeballDiv" src={PokeballRodante} alt="" />
        </div>
        <Link style={{ textDecoration: "none" }} to={`/login`}>
          <button
            onClick={() => localStorage.removeItem("token")}
            className="log"
          >
            {localStorage.getItem("token") ? "Salir" : "Iniciar"}
          </button>
        </Link>
        <button
          onClick={orderBy === "numero" ? ordenarPorNumero : ordenarPorNombre}
          id="button-ordenar"
        >
          {orderBy === "numero" ? "⬇🔢" : "⬇🔠"}
        </button>
      </div>
      <div className="input">
        <input
          onChange={buscarNombre}
          className="input-buscador"
          type="text"
          placeholder=" 🔎  Search Pokémon.."
        />
      </div>

      {pokemonesFiltrado == false ? (
        <div className="pokemonNoEncontrado">
          <img className="ash" src={Ash} alt={Ash} />
          <h1>Pokémon no encontrado :C.....</h1>{" "}
        </div>
      ) : null}
      {loading ? (
        <ClipLoader loading={loading} cssOverride={override} size={150} />
      ) : (
        <div className="lista-pokemones">
          {localStorage.getItem("token") && (
            <div>
              <Agregar></Agregar>
            </div>
          )}
          {pokemonesFiltrado.map((pokemon) => {
            return (
              <>
                <CardPokemon
                  pokemon={pokemon}
                  key={pokemon.nombre}
                  cargarPokemones={cargarPokemones}
                ></CardPokemon>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
