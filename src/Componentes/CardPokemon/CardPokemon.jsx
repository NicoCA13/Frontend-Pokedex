import React from "react";
import { Link } from "react-router-dom";
import "./CardPokemon.css";
export default function CardPokemon({ pokemon, cargarPokemones }) {
  const borrarPokemon = async () => {
    const token = localStorage.setItem("token");
    await fetch(`http://localhost:6789/Pokemons/${pokemon.id}`, {
      method: "DELETE",
      headers: { "auth-token": token },
    });
    await cargarPokemones();
  };

  return (
    <>
      <div
        className="padrePokemones"
        style={{
          fontWeight: "900",
          width: "300px",
          border: "solid 4px",
          borderColor: pokemon.color,
          borderRadius: "25px",
        }}
        key={pokemon.numero.toString()}
      >
        {localStorage.getItem("token") && (
          <button className="delete" onClick={borrarPokemon}>
            X
          </button>
        )}
        <div className="elementosPokemones">
          {pokemon.elementos.map(
            (el) =>
              el && (
                <div key={el} className={`elemento1 ${el.toLowerCase()}`}>
                  <h4>{el}</h4>
                </div>
              )
          )}
        </div>
        <Link style={{ textDecoration: "none" }} to={`/pokemons/${pokemon.id}`}>
          <img
            className="imagenPokemon"
            src={pokemon.imagen}
            alt={pokemon.imagen}
          />
        </Link>
        <div className="numeroPokemon" style={{ color: pokemon.color }}>
          #{pokemon.numero}
        </div>{" "}
        <div
          className="cardBorder"
          style={{
            backgroundColor: pokemon.color,
            borderRadius: " 0 0 15px 15px",
            color: "white",
            fontSize: "25px",
            padding: "10px",
          }}
        >
          {pokemon.nombre}
        </div>
      </div>
    </>
  );
}
