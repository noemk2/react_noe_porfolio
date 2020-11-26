import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

function Projects() {
  return (
    <Container>
      <div>
        <h2 className="textTitle">Projects</h2>
      </div>
      <div className="card-deck">
        <Cards className="card"/>
        <Cards className="card"/>
        <Cards className="card"/>
      </div>
    </Container>
  );
}

export default Projects;
