import React from "react";
import "./Formulario.css";
import { useState } from "react";
export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [imagen, setImagen] = useState("");
  const [color, setColor] = useState("");
  const [elementoPrincipal, setElementoPrincipal] = useState("");
  const [elementoSecundario, setElementoSecundario] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [movimiento1, setMovimiento1] = useState("");
  const [movimiento2, setMovimiento2] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [hp, setHp] = useState("");
  const [def, setDef] = useState("");
  const [sdef, setSdef] = useState("");
  const [atk, setAtk] = useState("");
  const [satk, setSatk] = useState("");
  const [spd, setSpd] = useState("");

  const onchageNombre = (ev) => {
    setNombre(ev.target.value);
  };
  const onchageNumero = (ev) => {
    setNumero(ev.target.value);
  };
  const onChangeImagen = (ev) => {
    setImagen(ev.target.value);
  };
  const onchageColor = (ev) => {
    setColor(ev.target.value);
  };
  const onchangeElementoPricipal = (ev) => {
    setElementoPrincipal(ev.target.value);
  };
  const onchangeElementoSecundario = (ev) => {
    setElementoSecundario(ev.target.value);
  };
  const onchangePeso = (ev) => {
    setPeso(ev.target.value);
  };
  const onchangeAltura = (ev) => {
    setAltura(ev.target.value);
  };
  const onchangeMovimiento1 = (ev) => {
    setMovimiento1(ev.target.value);
  };
  const onchangeMovimiento2 = (ev) => {
    setMovimiento2(ev.target.value);
  };
  const onchangeDescripcion = (ev) => {
    setDescripcion(ev.target.value);
  };
  const onchangeHp = (ev) => {
    setHp(ev.target.value);
  };
  const onchangeDef = (ev) => {
    setDef(ev.target.value);
  };
  const onchangeSdef = (ev) => {
    setSdef(ev.target.value);
  };
  const onchangeAtk = (ev) => {
    setAtk(ev.target.value);
  };
  const onchangeSatk = (ev) => {
    setSatk(ev.target.value);
  };
  const onchangeSpd = (ev) => {
    setSpd(ev.target.value);
  };

  const insertarPokemon = async () => {
    const token = localStorage.getItem("token");
    try {
      await fetch("http://localhost:6789/pokemons", {
        method: "POST",
        body: JSON.stringify({
          nombre: nombre,
          numero: numero,
          imagen: imagen,
          color: color,
          elementoPrincipal: elementoPrincipal,
          elementoSecundario: elementoSecundario,
          peso: peso,
          altura: altura,
          movimiento1: movimiento1,
          movimiento2: movimiento2,
          descripcion: descripcion,
          hp: hp,
          def: def,
          sdef: sdef,
          atk: atk,
          satk: satk,
          spd: spd,
        }),

        headers: { "auth-token": token, "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="bod">
      <form action="">
        <div className="div_pegado">
          <label htmlFor="Nombre">Nombre</label>
          <input
            onChange={onchageNombre}
            className="texto"
            type="text"
            placeholder=""
          />
          <label htmlFor="Numero">Numero</label>
          <input
            onChange={onchageNumero}
            className="stats"
            type="text"
            placeholder=""
          />

          <label htmlFor="Color">Color</label>
          <input
            onChange={onchageColor}
            className="stats"
            type="text"
            placeholder=""
          />
        </div>
        <label htmlFor="Imagen">Imagen</label>
        <input
          onChange={onChangeImagen}
          className="texto"
          type="url"
          placeholder="https://example.com"
        />

        <div>
          <label htmlFor="Elemento principal">Elemento Principal</label>
          <input
            onChange={onchangeElementoPricipal}
            className="texto"
            type="text"
            placeholder=""
          />
          <label htmlFor="Elemento secundario ">Elemento secundario </label>
          <input
            onChange={onchangeElementoSecundario}
            className="texto"
            type="text"
            placeholder="Opcional."
          />
        </div>
        <div className="div_pegado">
          <label htmlFor="peso ">Peso </label>
          <input
            onChange={onchangePeso}
            className="stats"
            type="number"
            placeholder=""
          />
          <label htmlFor="Altura ">Altura </label>
          <input
            onChange={onchangeAltura}
            className="stats"
            type="number"
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="Movimiento principal ">Movimiento principal </label>
          <input
            onChange={onchangeMovimiento1}
            className="texto"
            type="text"
            placeholder=""
          />
          <label htmlFor="Movimiento secundario ">Movimiento secundario </label>
          <input
            onChange={onchangeMovimiento2}
            className="texto"
            type="text"
            placeholder="Opcional."
          />
        </div>
        <div>
          <label htmlFor="Descripcion ">Descripcion </label>
          <input
            onChange={onchangeDescripcion}
            className="descripcion"
            type="text"
            placeholder=""
          />
        </div>
        <div className="padre_stats">
          <div>
            <label htmlFor="hp">HP</label>
            <input onChange={onchangeHp} className="stats" type="number" />
            <label htmlFor="atk">ATK</label>
            <input onChange={onchangeAtk} className="stats" type="number" />
          </div>
          <div>
            <label htmlFor="def">DEF</label>
            <input onChange={onchangeDef} className="stats" type="number" />
            <label htmlFor="satk">SATK</label>
            <input onChange={onchangeSatk} className="stats" type="number" />
          </div>
          <div>
            <label htmlFor="sdef">SDEF</label>
            <input onChange={onchangeSdef} className="stats" type="number" />
            <label htmlFor="spd">SPD</label>
            <input onChange={onchangeSpd} className="stats" type="number" />
          </div>
        </div>
      </form>
      <button onClick={insertarPokemon} className="btn_agg">
        Agregar
      </button>
    </div>
  );
}
