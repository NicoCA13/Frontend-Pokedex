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
          />
          {errors.name?.type === "required" && (
            <p className="p-formulario">nombre no valido</p>
          )}
        </div>
        <div className="divDatos">
          <label htmlFor="mail">Email</label>
          <input
            className="inputRegis"
            type="mail"
            placeholder="Email@gmail.com"
            {...register("mail", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.mail?.type === "required" && (
            <p className="p-formulario">formato incorrecto</p>
          )}
          {errors.mail?.type === "pattern" && (
            <p className="p-formulario">formato incorrecto</p>
          )}
        </div>
        <div className="divDatos">
          <label htmlFor="password">Password</label>
          <input
            className="inputRegis"
            type="password"
            placeholder="Exampl3123"
            {...register("password", { required: true, maxLength: 20 })}
          />
          {errors.password?.type === "required" && (
            <p className="p-formulario">formato incorrecto</p>
          )}
        </div>
        <button type="submit" className="butRegister">
          Register now
        </button>
      </form>
    </div>
  );
}
