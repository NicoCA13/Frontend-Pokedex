import React from "react";
import "./Agregar.css";
import { Link } from "react-router-dom";
import silueta from "../../iconos/silueta.png";

export default function Agregar() {
  return (
    <Link style={{ textDecoration: "none" }} to={`/formulario`}>
      <div className="padre-agregar">
        <div className="elemento">
          <div className="elementob">
            <h4> ???</h4>
          </div>
        </div>
        <div>
          <img
            className="img
          "
            src={silueta}
            alt={silueta}
          />
        </div>
        <div className="numero">#???</div>
        <div className="nombre">Agregar</div>
      </div>
    </Link>
  );
}
