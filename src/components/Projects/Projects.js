import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";

// import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
        Feel free to explore my projects..
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Calorie Tracker"
              description="Easily manage your health journey with our React-based food and weight tracker. Log meals, track calories, and monitor your weight effortlessly."
              ghLink="https://github.com/Lmr1499/tracker"
              demoLink="https://tracker-chi-six.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Lunch Box"
              description="Indulge in the ultimate fast food experience with our restaurant website. From mouthwatering burgers to crispy fries, we've got your cravings covered. Explore our menu, place orders online, and savor the convenience of quick, delicious meals delivered to your doorstep."
              ghLink="https://github.com/Lmr1499/lunch-box"
              demoLink="https://lunch-box-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Shape up Gym"
              description=""
             // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
