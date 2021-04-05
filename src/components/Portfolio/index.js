import React from "react";
import Media from "react-bootstrap/Media";
import { Container, Row, Col } from "react-bootstrap";
import Photo from "./photos/gym-rats.png";
import Photo1 from "./photos/urban-fiesta.PNG";
import Photo2 from "./photos/run-buddy.PNG";
import Photo3 from "./photos/password-generator.png";
import Photo4 from "./photos/note-taker.png";
import Photo5 from "./photos/weather-dashboard.png";
import { capitalizeFirstLetter } from '../../utils/helpers';


function Portfolio(props) {

  return (
    <section className="my-5" >
    <h1 id="about" className="text-color port-style">Portfolio</h1>
    <Container className=" center-spacing">
      
      <Row className="flex-row">
        <Col className="flex-row">
          <a href="https://gym-rats-1.herokuapp.com/" target="_blank">
          <img width={200} height={200} className="center-spacing img-thumbnail mx-1" src={Photo} />
          </a>
        </Col>

        <Col className="flex-row">
        <a href="https://kenneththelarson.github.io/urban-fiesta/" target="_blank">
          <img width={200} height={200} className="center-spacing img-thumbnail mx-1" src={Photo1} />
          </a>
        </Col>

        <Col className="flex-row">
        <a href="https://bbec0689.github.io/weather-dashboard-2/" target="_blank">
          <img width={200} height={200} className="center-spacing img-thumbnail mx-1" src={Photo5} />
          </a>
        </Col>
      </Row>
      <Row className='flex-row'>
        <Col className="flex-row">
        <a href="https://bbec0689.github.io/run-buddy/" target="_blank">
          <img width={200} height={200} className="center-spacing img-thumbnail mx-1" src={Photo2} />
          </a>
        </Col>
        <Col className="flex-row">
        <a href="https://bbec0689.github.io/password-generator/" target="_blank">
          <img width={200} height={200} className="center-spacing img-thumbnail mx-1" src={Photo3} />
          </a>
        </Col>

        <Col className="flex-row">
        <a href="https://bbec0689.github.io/note-taker/" target="_blank">
          <img width={200} height={200} className="center-spacing img-thumbnail mx-1" src={Photo4} />
          </a>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default Portfolio;
