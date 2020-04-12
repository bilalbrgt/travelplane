import React from "react";
import Caravanes from "../Caravanes";
import Myicons from "../Myicons";
import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <section id="main-images">
      <div className="wrapper">
        <h2>
          Organiser Votre <strong> VOYAGES SUR MESURE </strong>
          <Link to="/Destinations" className="buttons-1">
            Par ici
          </Link>
        </h2>
      </div>
      <Myicons />
      <Caravanes />
    </section>
  );
}

export default Acceuil;
