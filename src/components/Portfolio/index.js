import React from "react";
import Media from "react-bootstrap/Media";
import { Container, Row, Col } from "react-bootstrap";
import Photo from "./photos/gym-rats.png";
import Photo1 from "./photos/urban-fiesta.PNG";
import Photo2 from "./photos/run-buddy.PNG";
import Photo3 from "./photos/password-generator.png";
import Photo4 from "./photos/note-taker.png";
import Photo5 from "./photos/weather-dashboard.png";


function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <img width={300} height={300} className="" src={Photo} />
        </Col>

        <Col>
          <img width={300} height={300} className="" src={Photo1} />
        </Col>

        <Col>
          <img width={300} height={300} className="mr-3" src={Photo5} />
        </Col>
      </Row>
      <Row>
        <Col>
          <img width={300} height={300} className="mr-3" src={Photo2} />
        </Col>
        <Col>
          <img width={300} height={300} className="mr-3" src={Photo3} />
        </Col>

        <Col>
          <img width={300} height={300} className="mr-3" src={Photo4} />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
