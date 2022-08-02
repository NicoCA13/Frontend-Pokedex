import React from "react";
import "./Formulario.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
      <form
        onSubmit={handleSubmit(insertarPokemon)}
        id="form-agregar"
        data-testid="form-agregar"
      >
        <div className="nombre-numero-peso-altura">
          <div className="nnpa">
            <label htmlFor="Nombre">Nombre</label>
            <input
              className="in-a "
              type="text"
              placeholder="*"
              data-testid="name-field"
              {...register("nombre", { required: true, maxLength: 20 })}
            />
            {errors.nombre?.type === "required" && (
              <p data-testid="nombre-required">Campo obligatorio</p>
            )}
            {errors.nombre?.type === "maxLength" && (
              <p data-testid="nombre-max-length">Maximo de 20 caracteres</p>
            )}
            <label htmlFor="Numero">Numero</label>
            <input
              className="in-a "
              type="text"
              placeholder="*"
              data-testid="number-field"
              {...register("numero", { required: true, maxLength: 4 })}
            />
            {errors.numero?.type === "required" && (
              <p data-testid="number-required">Campo obligatorio</p>
            )}
            {errors.numero?.type === "maxLength" && (
              <p data-testid="number-max-length">Maximo de 4 caracteres</p>
            )}
          </div>
          <div className="nnpa">
            <label htmlFor="peso ">Peso </label>
            <input
              className="in-a "
              type="double"
              placeholder="*"
              data-testid="weight-field"
              {...register("peso", { required: true, maxLength: 4 })}
            />
            {errors.peso?.type === "required" && (
              <p data-testid="weight-required">Campo obligatorio</p>
            )}
            {errors.peso?.type === "maxLength" && (
              <p data-testid="weight-max-length">Maximo de 4 caracteres</p>
            )}
            <label htmlFor="Altura ">Altura </label>
            <input
              className="in-a "
              type="double"
              placeholder="*"
              data-testid="height-field"
              {...register("altura", { required: true, maxLength: 4 })}
            />
            {errors.altura?.type === "required" && (
              <p data-testid="height-required">Campo obligatorio</p>
            )}
            {errors.altura?.type === "maxLength" && (
              <p data-testid="height-max-length">Maximo de 4 caracteres</p>
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
              data-testid="elemento1-field"
              {...register("elemento1", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.elemento1?.type === "required" && (
              <p data-testid="elemento1-required">Campo obligatorio</p>
            )}
            {errors.elemento1?.type === "maxLength" && (
              <p data-testid="elemento1-max-length">Maximo de 20 caracteres</p>
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
              <p>Campo obligatorio</p>
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
              placeholder="*"
              {...register("color", { required: true, maxLength: 7 })}
            />{" "}
            {errors.color?.type === "required" && <p>Campo obligatorio</p>}
          </div>
          <div className="cm">
            <label htmlFor="Imagen">Imagen</label>
            <input
              className="in-a "
              type="url"
              placeholder="https://example.com *"
              {...register("imagen", { required: true })}
            />
            {errors.imagen?.type === "required" && <p>Campo obligatorio</p>}
          </div>
        </div>

        <div className="descripcion">
          <label htmlFor="Descripcion ">Descripcion </label>
          <textarea
            className="textarea"
            placeholder="*"
            id="descripcion-input"
            {...register("descripcion", { required: true })}
          />
          {errors.descripcion?.type === "required" && <p>Campo obligatorio</p>}
        </div>
        <div className="stats">
          <div className="hp-atk">
            <label htmlFor="hp">HP</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register("hp", { required: true, maxLength: 3 })}
            />
            {errors.hp?.type === "required" && <p>Campo obligatorio</p>}
            <label htmlFor="atk">ATK</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register("atk", { required: true, maxLength: 3 })}
            />
            {errors.atk?.type === "required" && <p>Campo obligatorio</p>}
          </div>

          <div className="def-satk">
            <label htmlFor="def">DEF</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register("def", { required: true, maxLength: 3 })}
            />
            {errors.def?.type === "required" && <p>Campo obligatorio</p>}
            <label htmlFor="satk">SATK</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register("satk", { required: true, maxLength: 3 })}
            />
            {errors.satk?.type === "required" && <p>Campo obligatorio</p>}
          </div>
          <div className="sdef-spd">
            <label htmlFor="sdef">SDEF</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register("sdef", { required: true, maxLength: 3 })}
            />
            {errors.sdef?.type === "required" && <p>Campo obligatorio</p>}
            <label htmlFor="spd">SPD</label>
            <input
              className="in-stats"
              type="number"
              placeholder="*"
              {...register("spd", { required: true, maxLength: 3 })}
            />
            {errors.spd?.type === "required" && <p>Campo obligatorio</p>}
          </div>
        </div>
        <button
          type="submit"
          to={`/`}
          className="btn_agg"
          data-testid="submit-button"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
