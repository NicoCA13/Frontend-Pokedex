import React from "react";
import "./Formulario.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { valoresStats, valorNumero } from "./validator";
export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegar = useNavigate();
  const insertarPokemon = async (data) => {
    const token = localStorage.getItem("token");
    try {
      await fetch("http://localhost:6789/pokemons", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "auth-token": token, "Content-Type": "application/json" },
      });

      navegar("/");
    } catch (error) {
      alert("Por favor rellenar los campos marcados con (*)");
    }
  };

  return (
    <div id="bod">
      <form onSubmit={handleSubmit(insertarPokemon)} id="form-agregar">
        <div className="nombre-numero-peso-altura">
          <div className="nnpa">
            <label htmlFor="Nombre">Nombre</label>
            <input
              className="in-a "
              type="text"
              placeholder="*"
              {...register("nombre", { required: true, maxLength: 20 })}
            />
            {errors.nombre?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            {errors.nombre?.type === "maxLength" && (
              <p className="p-formulario">Nombre entre 2 y 20 caracteres</p>
            )}
            <label htmlFor="Numero">Numero</label>
            <input
              className="in-a "
              type="text"
              placeholder="*"
              {...register(
                "numero",
                { validate: valorNumero },
                { required: true, maxLength: 4 }
              )}
            />
            {errors.numero?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            {errors.numero && (
              <p className="p-formulario">El dato debe ser entre 1 y 905</p>
            )}
          </div>
          <div className="nnpa">
            <label htmlFor="peso ">Peso </label>
            <input
              className="in-a "
              type="double"
              placeholder="*"
              {...register("peso", { min: 0.1, required: true, maxLength: 4 })}
            />
            {errors.peso?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            {errors.peso?.type === "min" && (
              <p className="p-formulario">El peso debe ser mayor a 0</p>
            )}
            <label htmlFor="Altura ">Altura </label>
            <input
              className="in-a "
              type="double"
              placeholder="*"
              {...register("altura", {
                required: true,
                maxLength: 4,
                min: 0.1,
              })}
            />
            {errors.altura?.type === "required" && <p>Campo obligatorio</p>}
            {errors.altura?.type === "min" && (
              <p className="p-formulario">La altura debe ser mayor a 0</p>
            )}
          </div>
        </div>
        <div className="elementos-movimientos">
          <div className="em">
            <label htmlFor="elemento1">Elemento Principal</label>
            <input
              className="in-a "
              type="text"
              placeholder="*"
              {...register("elemento1", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.elemento1?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            <label htmlFor="elemento2 ">Elemento secundario </label>
            <input
              className="in-a "
              type="text"
              placeholder=""
              {...register("elemento2", { maxLength: 20 })}
            />
          </div>
          <div className="em">
            <label htmlFor="movimiento1 ">Movimiento principal </label>
            <input
              className="in-a "
              type="text"
              placeholder="*"
              {...register("movimiento1", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.movimiento1?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            <label htmlFor="movimiento2 ">Movimiento secundario </label>
            <input
              className="in-a "
              type="text"
              placeholder=""
              {...register("movimiento2", { maxLength: 20 })}
            />
          </div>
        </div>
        <div className="color-imagen">
          <div className="cm">
            <label htmlFor="Color">Color</label>
            <input
              className="in-a "
              type="text"
              placeholder="Ejemplo:#000000  *"
              {...register("color", { required: true, maxLength: 7 })}
            />{" "}
            {errors.color?.type === "required" && (
              <p className="p-formulario">Campo obligatorio </p>
            )}
          </div>
          <div className="cm">
            <label htmlFor="Imagen">Imagen</label>
            <input
              className="in-a "
              type="url"
              placeholder="https://example.png *"
              {...register("imagen", { required: true })}
            />
            {errors.imagen?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
          </div>
        </div>

        <div className="descripcion">
          <label htmlFor="Descripcion ">Descripcion </label>
          <textarea
            className="textarea"
            placeholder="*"
            id="descripcion-input"
            {...register("descripcion", { required: true, minLength: 1 })}
          />
          {errors.descripcion?.type === "required" && (
            <p className="p-formulario">Campo obligatorio</p>
          )}
        </div>
        <div className="stats">
          <div className="hp-atk">
            <label htmlFor="hp">HP</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register(
                "hp",
                { validate: valoresStats },
                { required: true, maxLength: 3 }
              )}
            />
            {errors.hp?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            {errors.hp && (
              <p className="p-formulario">El dato debe ser entre 1 y 250</p>
            )}
            <label htmlFor="atk">ATK</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register(
                "atk",
                { validate: valoresStats },
                { required: true, maxLength: 3 }
              )}
            />
            {errors.atk?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            {errors.atk && (
              <p className="p-formulario">El dato debe ser entre 1 y 250</p>
            )}
          </div>

          <div className="def-satk">
            <label htmlFor="def">DEF</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register(
                "def",
                { validate: valoresStats },
                { required: true, maxLength: 3 }
              )}
            />
            {errors.def?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            {errors.def && (
              <p className="p-formulario">El dato debe ser entre 1 y 250</p>
            )}
            <label htmlFor="satk">SATK</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register(
                "satk",
                { validate: valoresStats },
                { required: true, maxLength: 3 }
              )}
            />
            {errors.satk?.type === "required" && (
              <p className="p-formulario">Campo obligatorio</p>
            )}
            {errors.satk && (
              <p className="p-formulario">El dato debe ser entre 1 y 250</p>
            )}
          </div>
          <div className="sdef-spd">
            <div className="sDefens">
              <label htmlFor="sdef">SDEF</label>
              <input
                className="in-stats"
                type="number"
                placeholder="*"
                {...register(
                  "sdef",
                  { validate: valoresStats },
                  { required: true, maxLength: 3 }
                )}
              />
              {errors.sdef?.type === "required" && (
                <p className="p-formulario">Campo obligatorio</p>
              )}
              {errors.sdef && (
                <p className="p-formulario">El dato debe ser entre 1 y 250</p>
              )}
            </div>
            <div className="sSpeed">
              <label htmlFor="spd">SPD</label>
              <input
                className="in-stats"
                type="number"
                placeholder="*"
                {...register(
                  "spd",
                  { validate: valoresStats },
                  { required: true }
                )}
              />
              {errors.spd?.type === "required" && (
                <p className="p-formulario">Campo obligatorio</p>
              )}
              {errors.spd && (
                <p className="p-formulario">El dato debe ser entre 1 y 250</p>
              )}
            </div>
          </div>
        </div>
        <button type="submit" to={`/`} className="btn_agg">
          Agregar
        </button>
      </form>
    </div>
  );
}
