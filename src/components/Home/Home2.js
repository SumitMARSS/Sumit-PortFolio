import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple">INTRODUCE</span> MYSELF
    </h1>
    <p className="home-about-body">
      Hi there! I'm Sumit Kumar, a passionate software developer from Rajgir, Bihar, with a strong foundation in computer science and engineering.
      <span className="purple"> Currently pursuing my B.Tech degree at the Indian Institute of Information Technology Kalyani, I've maintained an impressive CGPA of 8.85.</span>
      <br/>
      <br/>
      My journey into the world of technology began during my secondary education at Birla Vidya Mandir, where I excelled with a remarkable percentage of 93.8. Since then,
       I've been driven by a relentless curiosity to explore and innovate in the realm of technology.
      <br/>
      <br/>

      Throughout my academic and professional journey, I've undertaken several noteworthy projects that
      showcase my skills and expertise.<b className="purple"> From developing seamless learning platforms like Coding Web to contributing to 
      the backend systems of social media platforms like SocialIntraction, 
      I've always aimed to create impactful solutions that enhance user experiences.</b>

      <br/>
      <br/>

      <i>With a strong command over a plethora of programming languages and technologies,
       including C, C++, Python, HTML, CSS, JavaScript, and frameworks like ReactJS and Express.js, 
       I'm well-equipped to tackle diverse challenges in web development and beyond. My proficiency extends 
       to database management systems like MySQL and MongoDB, allowing me to design robust and scalable solutions.
      </i>
      <br />
      <br />
      <b className="purple">
        Looking ahead, I'm excited to continue my journey as a software developer, leveraging my skills and 
        experiences to drive innovation and make a positive difference in the world.
      </b>
      
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SumitMARSS"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sumit-kumar-975b37220/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
