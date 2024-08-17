import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumit Kumar </span>
            from <span className="purple"> Rajgir, Bihar.</span>
            <br />
             I am a final year student at IIIT kalyani West Bengal
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Cricket
          </li>
          <li className="about-activity">
            <ImPointRight /> Watching Movies
          </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Always try to learn from previous mistakes"{" "}
          </p>
          <footer className="blockquote-footer">Sumit Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
