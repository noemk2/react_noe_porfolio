import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

import { Card, CardDeck, Navbar, Form, Button } from "react-bootstrap";
import React from "react";
// import {Container} from "react-bootstrap";

// import { Button } from "./Button";
// import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>
      <CardDeck>
        <Card className="footer-social">
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        {/**/}
        <Card className="footer-social">
          <Card.Body>
            <Card.Title>Social</Card.Title>
            <Card.Text>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Facebook</Navbar.Brand>
              </Navbar>
              <br />
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Github</Navbar.Brand>
              </Navbar>
              <br />
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                  {" "}
                  Instagram
                  {/*
<img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />

					*/}
                </Navbar.Brand>
              </Navbar>
              <br />
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                  {/*
<img                   alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
					*/}
                  Youtube
                </Navbar.Brand>
              </Navbar>
              {/**/}
            </Card.Text>
          </Card.Body>
        </Card>

        {/**/}
        <Card className="footer-social">
          <Card.Body>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>say hello:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  SendMe
                </Button>
              </Form>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>

      {/**/}
      <div className="container-footer">
        <div className="footer">
          <div className="copyright">
            R 2020 Todos los derechos reservados <a href="">noemk2</a>
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
