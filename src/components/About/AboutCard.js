import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi <span className="purple">Shaka Senaji </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently freelancing......
            <br />
            I am completing Bsc Computer Science at Saint Paul's University,
            Limuru.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
          </ul>

          <p style={{ color: "rgb(95 158 160)" }}>
            "Never too dumb to learn Code!"{" "}
          </p>
          <footer className="blockquote-footer">shaka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
