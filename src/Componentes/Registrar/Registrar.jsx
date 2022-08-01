import React from "react";
import { useNavigate } from "react-router-dom";
import "./Registrar.css";
import { useForm } from "react-hook-form";
export default function Registrar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegar = useNavigate();

  const verify = async (data) => {
    try {
      const res = await fetch("http://localhost:6789/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      navegar("/login");
    } catch (error) {}
  };

  return (
    <div id="body">
      <form onSubmit={handleSubmit(verify)} className="formRegister">
        <h1 className="tituloRegister">Sign up</h1>
        <div className="divDatos">
          <label htmlFor="name">Name</label>
          <input
            className="inputRegis"
            type="text"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
          />{" "}
          {errors.nombre?.type === "required" && <p>nombre no valido</p>}
        </div>
        <div className="divDatos">
          <label>Email</label>
          <input
            className="inputRegis"
            type="mail"
            placeholder="Email@gmail.com"
            {...register("mail", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })}
          />
          {errors.mail?.type === "required" && <p>formato incorrecto</p>}
        </div>
        <div className="divDatos">
          <label></label>
          Password
          <input
            className="inputRegis"
            type="password"
            placeholder="Exampl3.123"
            {...register("password", { required: true, maxLength: 20 })}
          />
        </div>
        {errors.password?.type === "required" && <p>formato incorrecto</p>}
        <button type="submit" className="butRegister">
          Register now
        </button>
      </form>
    </div>
  );
}
