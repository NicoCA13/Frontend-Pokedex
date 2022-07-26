import React from "react";
import "./Tarjeta.css";
import { Link } from "react-router-dom";
import imgPeso from "../../iconos/Weight.svg";
import imgTamaño from "../../iconos/Height.svg";
import { useParams } from "react-router-dom";
import pokeball from "../../iconos/Pokeball.png";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override = {
  border: "1rem dashed black",
  borderRight: "0",
  borderLeft: "red",
  display: "block",
  margin: "0 auto",
};
export default function Tarjeta() {
  const { id } = useParams();
  const [pokemon, setPokemonSeleccionado] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const pokemonEncontrado = async () => {
      try {
        const token = localStorage.getItem("token");
        const respuesta = await fetch(`http://localhost:6789/pokemons/${id}`, {
          headers: { "auth-token": token },
        });
        if (!respuesta.ok) {
          throw new Error("Error en el servidor");
        }
        const pokemonesFetch = await respuesta.json();

        setPokemonSeleccionado(pokemonesFetch);
        setLoading(false);
      } catch (error) {
        console.log("No se pudo conectar con el backend");
      }
    };
    pokemonEncontrado();
  }, [id]);

  return (
    <div className="body">
      <div className="contenedorTarjeta">
        {loading ? (
          <ClipLoader loading={loading} cssOverride={override} size={150} />
        ) : (
          <div className="tarjeta" style={{ backgroundColor: pokemon.color }}>
            <div className="superior">
              <>
                <Link style={{ textDecoration: "none" }} to={"/"}>
                  <div className="arrow"> ← </div>
                </Link>
                <h1 className="pokemonYSuNombre"> {pokemon.nombre}</h1>
                <span className="pokemonYSuNumero">#{pokemon.numero}</span>
              </>
            </div>
            <div>
              <img
                className="pokeballFondo pepe"
                src={pokeball}
                style={{ opacity: "40%" }}
              />
              <img
                className="pokemonImagen"
                src={pokemon.imagen}
                alt={pokemon.imagen}
              />
              <div className="contenedorDatos">
                <div className="flechas">
                  {pokemon.prev && (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/pokemons/${pokemon.prev}`}
                    >
                      <button className="botonesDeMover">←</button>
                    </Link>
                  )}
                  {pokemon.next && (
                    <Link
                      className="next"
                      style={{ textDecoration: "none" }}
                      to={`/pokemons/${pokemon.next}`}
                    >
                      <button
                        className="botonesDeMover
                  "
                      >
                        →
                      </button>
                    </Link>
                  )}
                </div>
                <div className="contenedorElementos">
                  {pokemon.elementos?.map(
                    (el) =>
                      el && (
                        <div
                          className={`elemento1 ${el.toLowerCase()}`}
                          key={el}
                        >
                          <h4 className="elementosh4">{el}</h4>
                        </div>
                      )
                  )}
                </div>
                <h4 className="about" style={{ color: pokemon.color }}>
                  About
                </h4>

                <div className="contendorDatosPokemon">
                  <div className="p">
                    <div className="c">
                      <img className="imgPeso" src={imgPeso} alt={imgPeso} />
                      <h5 className="peso">{pokemon.peso} Kg</h5>
                    </div>
                    <h6 className="h6Stats">Weight</h6>
                  </div>
                  <div className="p">
                    <div className="c">
                      <img className="imgTamaño" src={imgTamaño} alt="" />
                      <h5 className="tamaño">{pokemon.altura} m</h5>
                    </div>
                    <h6 className="h6Stats">Height</h6>
                  </div>
                  <div className="movimientos">
                    <h5>{pokemon.movimientos?.movimiento1}</h5>
                    <h5>{pokemon.movimientos?.movimiento2}</h5>
                    <h6>Moves</h6>
                  </div>
                </div>
                <div className="descripcionPokemon">
                  <p>{pokemon.descripcion}</p>
                </div>
                <div className="baseStats">
                  <h3 className="basestatss" style={{ color: pokemon.color }}>
                    Base Stats
                  </h3>
                  <div
                    className="datosDePokemon"
                    style={{ color: pokemon.color }}
                  >
                    <ul className="listaLetras">
                      {pokemon.stats &&
                        Object.entries(pokemon.stats).map(
                          ([nombreDeLaProp, valorDeLaProp]) => (
                            <li key={nombreDeLaProp}>
                              {nombreDeLaProp.toUpperCase()}
                            </li>
                          )
                        )}
                    </ul>
                    <ul className="listaNumeros" style={{ color: "black" }}>
                      {pokemon.stats &&
                        Object.entries(pokemon.stats).map(
                          ([nombreDeLaProp, valorDeLaProp]) => (
                            <li key={nombreDeLaProp}>
                              {" "}
                              {`${valorDeLaProp}`.padStart(3, 0)}
                            </li>
                          )
                        )}
                    </ul>
                    <div className="barras">
                      {pokemon.stats &&
                        Object.entries(pokemon.stats).map(
                          ([nombreDeLaProp, valorDeLaProp]) => (
                            <div className="barra1" key={nombreDeLaProp}>
                              <div
                                className="barra2"
                                style={{
                                  backgroundColor: pokemon.color,
                                  width: `${valorDeLaProp / 2}%`,
                                }}
                              ></div>
                              <div
                                className="barra3"
                                style={{
                                  backgroundColor: pokemon.color,
                                  opacity: "30%",
                                }}
                              ></div>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
