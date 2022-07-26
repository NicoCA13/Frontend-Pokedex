import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={`/`}>
        <button className="goBack">Go to Pokemons list</button>
      </Link>
      <h1 className="notFound">Error 404, Pokemon Not Found...</h1>
    </div>
  );
}
