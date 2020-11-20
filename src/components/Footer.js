import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";

import "./Footer.css";
//import { Button } from "./Button";
//import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/*titulo*/}
        <hr />
        {/*letras pequenas*/}
        <p className="footer__text">
          © {new Date().getFullYear()} - created by{" "}
          <a
            href="https://github.com/noemk2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Noe huaccharque
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
