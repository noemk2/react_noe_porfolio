import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

import { Card, CardDeck, Container } from "react-bootstrap";

function Projects() {
  function activeLink(e) {
    e.preventDefault();
    //console.log("te estoy redireccionando");
    window.location = "https://noemk2.github.io/calculator/";
  }
  return (
    <Container className="projects">
      <h2 className="display-4 text-center">Projects</h2>
      <CardDeck className="card-deck">
        {/**/}
        <Card className="one-card" onClick={activeLink}>
          <Card.Img variant="top" src="https://res.cloudinary.com/dpg8egz7r/image/upload/v1606479249/calculator.png" />
          <Card.Body>
            <Card.Title>Calculator</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      {/*
        <div className="card-deck">
          <Cards className="card" />
          <Cards className="card" />
          <Cards className="card" />
          <Cards className="card" />
        </div>
*/}
    </Container>
  );
}

export default Projects;
