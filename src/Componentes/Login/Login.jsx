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
      alert("Usuario no registrado");
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
      <Link style={{ textDecoration: "none" }} to={`/registrar`}>
        <button className="registrar">Click to Register</button>
      </Link>
      <div className="papa">
        <form className="formRegister" action="" onSubmit={verify}>
          <h1 className="bienvenidos">Welcome</h1>
          <div className="inputs">
            <label>Email</label>
            <input
              id="iputLogin"
              onChange={handleEmail}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              id="iputLogin"
              onChange={handlePassword}
              type="password"
              placeholder="Password"
            />
          </div>
          <button id="btn" className="butRegister" onClick={verify}>
            {" "}
            Log in
          </button>
          <Link style={{ textDecoration: "none" }} to={`/`}>
            <button id="btn" className="butRegister">
              Continue without Log in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
