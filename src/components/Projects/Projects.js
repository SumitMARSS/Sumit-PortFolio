import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png"
import cart from "../../Assets/Projects/cart.png"
import bitsOfCode from "../../Assets/Projects/weatherApp.png";
import edtech from "../../Assets/Projects/edtech.png";
import social from "../../Assets/Projects/socialMedia.png";
import password from "../../Assets/Projects/password.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", fontFamily: "Calibri" }}>
  


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edtech}
              isBlog={false}
              title="Coding Web"
              description="The MERN E-Learning Platform is a dynamic web application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. 
              It features secure authentication with OTP-based login, seamless payment integration through Razorpay's API, and 
              intuitive features for both instructors and students. With a user-friendly interface, tag-based course organization, and
              robust admin capabilities, it provides a versatile and interactive platform for online education."
              ghLink="https://github.com/SumitMARSS/Ed-Tech-Project.git"
              demoLink="https://edtechproject.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Media"
              description="SocialIntraction (Backend) drives the SocialIntraction social media platform, 
              overseeing user data and interactions. It leverages Express.js, Node.js, MongoDB, and Postman for testing. 
              Features include secure authentication, profile management, follow system, post interactions, and image 
              storage on Cloudinary."
              ghLink="https://github.com/SumitMARSS/Social-Media-BackEnd.git"
              demoLink="https://github.com/SumitMARSS/Social-Media-BackEnd.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Shopping App Demo"
              description="The Shopping App offers secure user authentication, an intuitive interface, and dynamic product fetching and filtering for an enjoyable shopping experience. With responsive design and an interactive shopping cart, users can seamlessly navigate and manage their purchases across different devices."
              ghLink="https://github.com/SumitMARSS/shopping-app-demo"
              demoLink="https://shopping-app-by-sumit.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog App"
              description="A dynamic web application delivering efficient API integration and intuitive navigation facilitate quick access to relevant content, enhancing user engagement, while leveraging multiple APIs for an enhanced user experience with an attractive design and rich features."
              ghLink="https://github.com/SumitMARSS/Blog-context-fetch"
              demoLink="https://blog-context-fetch-by-sumit.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="weatherApp"
              description="A dynamic web application delivering real-time weather information through OpenWeatherMap API. Integrated geolocation for automatic updates based on user coordinates. Implemented a robust search functionality for retrieving weather data."
              ghLink="https://github.com/SumitMARSS/Weather-App"
              demoLink="https://sumitmarss.github.io/Weather-App/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password"
              description="The password generator tool creates customizable secure passwords with adjustable 
              length and character type selection. 
              It includes a password strength indicator for real-time feedback on password robustness."
              ghLink="https://github.com/SumitMARSS/password_generator.git"
              demoLink="https://sumitmarss.github.io/password_generator/"
            />
          </Col>

          
  
</Row>


      </Container>
    </Container>
  );
}

export default Projects;
