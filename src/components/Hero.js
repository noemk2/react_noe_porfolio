import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button } from "react-bootstrap";

function Hero() {
  return (
    <Jumbotron>
      <h1>Hello, Im Noe</h1>
      <p>I am a web developer</p>
      <p>
        <Button variant="primary">about me</Button>
      </p>
    </Jumbotron>
  );
}

export default Hero;
