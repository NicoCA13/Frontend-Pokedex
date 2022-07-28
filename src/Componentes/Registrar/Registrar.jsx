import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registrar.css";
import { Link } from "react-router-dom";

export default function Registrar() {
  const navegar = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const verify = async (ev) => {
    ev.preventDefault();
    try {
      const res = await fetch("http://localhost:6789/register", {
        method: "POST",
        body: JSON.stringify({ name, mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userFetch = await res.json();
      localStorage.setItem("token", userFetch.token);
      navegar("/login");
    } catch (error) {}
  };
  const handleName = (ev) => {
    setName(ev.target.value);
  };
  const handleEmail = (ev) => {
    setMail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };
  return (
    <div id="body">
      <form action="" className="formRegister">
        <h1 className="tituloRegister">Sign up</h1>
        <div className="divDatos">
          <label>Name</label>
          <input
            className="inputRegis"
            onChange={handleName}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="divDatos">
          <label>Email</label>
          <input
            className="inputRegis"
            onChange={handleEmail}
            type="mail"
            placeholder="Email@gmail.com"
          />
        </div>
        <div className="divDatos">
          <label></label>
          Password
          <input
            className="inputRegis"
            onChange={handlePassword}
            type="password"
            placeholder="Exampl3.123"
          />
        </div>
      </form>
      <Link style={{ textDecoration: "none" }} to={`/login`}>
        <button onClick={verify} className="butRegister">
          Register now
        </button>
      </Link>
    </div>
  );
}
