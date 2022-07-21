import "./Login.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navegar = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const verify = async (ev) => {
    ev.preventDefault();
    try {
      const res = await fetch("http://localhost:6789/login", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("invalid User data ");
      }
      const userFetch = await res.json();
      localStorage.setItem("token", userFetch.token);
      navegar("/");
    } catch (error) {
      console.log("Error");
    }
  };
  const handleEmail = (ev) => {
    setMail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  return (
    <div className="papaDiv">
      <div className="papa">
        <h1 className="bienvenidos">Bienvenidos</h1>
        <form action="" onSubmit={verify}>
          <div className="inputs">
            <h3>Email</h3>
            <input id="iputLogin" onChange={handleEmail} type="email" name="" />
          </div>
          <div className="inputs">
            <h3>Password</h3>
            <input id="iputLogin" onChange={handlePassword} type="password" />
          </div>
          <button id="btn" onClick={verify}>
            {" "}
            Iniciar
          </button>
        </form>
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <button id="btn">Continuar sin iniciar</button>
        </Link>
      </div>
    </div>
  );
}
