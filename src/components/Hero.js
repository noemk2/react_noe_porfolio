import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button  } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Jumbotron className="Card">
        <h1 className="display-4">Hi, Im Noe</h1>
        <p>
          Im Software Developer Junior. I try to build web programs, <br />
          <span className="font-weight-bold"> Hey show my projects!</span>
        </p>
        <p>
          <Button variant="primary">
            <Link to="projects" smooth duration={1000}>
              Projects
            </Link>
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Hero;
