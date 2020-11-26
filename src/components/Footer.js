import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

import React from "react";
// import {Container} from "react-bootstrap";

// import { Button } from "./Button";
// import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container-footer-all">
        <div className="container-body">
          <div className="colum1">
            <h1>Mas informacion</h1>
            <p>
              esta compania se dedica a la venta de software integrado con un
              conjunto de cosas que no se lo que ....
            </p>
          </div>
          <div className="colum2">
            <h1>Redes Sociales</h1>

            <div className="row">
              <img src="" />
              <label>Siguenos en Facebok</label>
            </div>
            <div className="row">
              <img src="" />
              <label>Siguenos en Twitter</label>
            </div>
            <div className="row">
              <img src="" />
              <label>Siguenos en Instagram</label>
            </div>
            <div className="row">
              <img src="" />
              <label>Siguenos en Google</label>
            </div>
            <div className="row">
              <img src="" />
              <label>Siguenos en Pinteres</label>
            </div>
          </div>
          <div className="colum3">
            <h1> Imformacion Contactos</h1>
            <div className="row2">
              <img src="" />
              <label htmlFor="">
                La Romana, Republica Dominicana Manuel del Cabral Casa #27{" "}
              </label>
            </div>
            <div className="row2">
              <img src="" />
              <label htmlFor="">+ 1 - 820 - 395 - 2312 </label>
            </div>
            <div className="row2">
              <img src="" />
              <label htmlFor="">noemk2 @gmail.com</label>
            </div>
          </div>
        </div>
      </div>
      <div className="container-footer">
        <div className="footer">
          <div className="copyright">
            R 2017 Todos los derechos reservados <a href="">Magtimus</a>
          </div>
          <div className="information">
            <a href="">Informacion compania </a> |
            <a href=""> Privacion y Politica </a> |
            <a href=""> Terminos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
