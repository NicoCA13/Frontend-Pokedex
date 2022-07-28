import React from "react";
import "./Formulario.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [imagen, setImagen] = useState("");
  const [color, setColor] = useState("");
  const [elemento1, setElemento1] = useState("");
  const [elemento2, setElemento2] = useState("");
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
  const onchangeElemento1 = (ev) => {
    setElemento1(ev.target.value);
  };
  const onchangeElemento2 = (ev) => {
    setElemento2(ev.target.value);
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
  const navegar = useNavigate();
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
          elemento1: elemento1,
          elemento2: elemento2,
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
      navegar("/");
    } catch (error) {
      alert("Por favor rellenar los campos marcados con (*)");
    }
  };
  return (
    <div id="bod">
      <form id="form-agregar" action="">
        <div className="nombre-numero-peso-altura">
          <div className="nnpa">
            <label htmlFor="Nombre">Nombre</label>
            <input
              className="in-a "
              onChange={onchageNombre}
              type="text"
              placeholder="*"
            />
            <label htmlFor="Numero">Numero</label>
            <input
              className="in-a "
              onChange={onchageNumero}
              type="text"
              placeholder="*"
            />
          </div>
          <div className="nnpa">
            <label htmlFor="peso ">Peso </label>
            <input
              className="in-a "
              onChange={onchangePeso}
              type="number"
              placeholder="*"
            />
            <label htmlFor="Altura ">Altura </label>
            <input
              className="in-a "
              onChange={onchangeAltura}
              type="number"
              placeholder="*"
            />
          </div>
        </div>
        <div className="elementos-movimientos">
          <div className="em">
            <label htmlFor="Elemento principal">Elemento Principal</label>
            <input
              className="in-a "
              onChange={onchangeElemento1}
              type="text"
              placeholder="*"
            />
            <label htmlFor="Elemento secundario ">Elemento secundario </label>
            <input
              className="in-a "
              onChange={onchangeElemento2}
              type="text"
              placeholder=""
            />
          </div>
          <div className="em">
            <label htmlFor="Movimiento principal ">Movimiento principal </label>
            <input
              className="in-a "
              onChange={onchangeMovimiento1}
              type="text"
              placeholder="*"
            />
            <label htmlFor="Movimiento secundario ">
              Movimiento secundario{" "}
            </label>
            <input
              className="in-a "
              onChange={onchangeMovimiento2}
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="color-imagen">
          <div className="cm">
            <label htmlFor="Color">Color</label>
            <input
              className="in-a "
              onChange={onchageColor}
              type="text"
              placeholder="*"
            />
          </div>
          <div className="cm">
            <label htmlFor="Imagen">Imagen</label>
            <input
              className="in-a "
              onChange={onChangeImagen}
              type="url"
              placeholder="https://example.com *"
            />
          </div>
        </div>

        <div className="descripcion">
          <label htmlFor="Descripcion ">Descripcion </label>
          <textarea
            className="textarea"
            onChange={onchangeDescripcion}
            placeholder="*"
            id="descripcion-input"
          />
        </div>
        <div className="stats">
          <div className="hp-atk">
            <label htmlFor="hp">HP</label>
            <input
              className="in-stats"
              onChange={onchangeHp}
              type="number"
              placeholder="*"
            />
            <label htmlFor="atk">ATK</label>
            <input
              className="in-stats"
              onChange={onchangeAtk}
              type="number"
              placeholder="*"
            />
          </div>

          <div className="def-satk">
            <label htmlFor="def">DEF</label>
            <input
              className="in-stats"
              onChange={onchangeDef}
              type="number"
              placeholder="*"
            />
            <label htmlFor="satk">SATK</label>
            <input
              className="in-stats"
              onChange={onchangeSatk}
              type="number"
              placeholder="*"
            />
          </div>
          <div className="sdef-spd">
            <label htmlFor="sdef">SDEF</label>
            <input
              className="in-stats"
              onChange={onchangeSdef}
              type="number"
              placeholder="*"
            />
            <label htmlFor="spd">SPD</label>
            <input
              className="in-stats"
              onChange={onchangeSpd}
              type="number"
              placeholder="*"
            />
          </div>
        </div>
        <button onClick={insertarPokemon} to={`/`} className="btn_agg">
          Agregar
        </button>
      </form>
    </div>
  );
}
