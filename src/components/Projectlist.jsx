import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import i1 from '/src/Assets/image1.png';
import i2 from "/src/Assets/image2.png";
import i3 from '/src/Assets/image3.png';
import i4 from '/src/Assets/image4.png';
import i5 from '/src/Assets/image5.png';
import i6 from '/src/Assets/image6.png';
import "../pages/style.css";
function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
              imgPath={i1}
                isBlog={false}
                title="IT Consultancy Website"
                description="This is the frontend of the website I designed and created for an IT Consultancy firm during my summer internship. It contains various sections such as the services provided, domains, testimonials and blogs. It uses React Framework and MaterialUI . It is a single page responsive design with consistent spacings throughout the page. "
                ghLink="https://kkhushiie.github.io/JKCS_Demo_2/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
              imgPath={i2}
                isBlog={false}
                title="YouTube Clone"
                description="This is currently an ongoing project. It is a full stack project with both frontend and backend integration which is fully responsive. responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App."
                ghLink="https://kkhushiie.github.io/YouTubeClone/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
              imgPath={i3}
                isBlog={false}
                title="Food Delivery App Landing Page"
                description="This is the frontend of the website I created for a food delivery startup during my summer internship. This project is a simplie, minimalist display of the landing page for a food delivery business. It uses React Framework and MaterialUI. It is a single page responsive design with consistent spacings throughout the page. "
                ghLink="https://kkhushiie.github.io/FLAC_DEMO/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
              imgPath={i4}
                isBlog={false}
                title="Pizza Listing site"
                description="A dynamic single web page for listing pizzas using React Framework. It is a single page responsive design.
                display area is generated with details such as, image of the Pizza, name, description, rating Stars, price
                type, add button."
                ghLink="https://kkhushiie.github.io/Pizza_Listing_site/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
              imgPath={i5}
                isBlog={false}
                title="Blog Website"
                description="Blog Website is a static webpage completely build with bootstrap with fully responsive, maintaining the consistent spacings throughout the page. It contains few of my best blogs which I find worthy to be pondered upon."
                ghLink="https://kkhushiie.github.io/blogwebsite/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
              imgPath={i6}
                isBlog={false}
                title="Banking Website"
                description="A bank management system with a dynamic user interface which leads to a money transfer page containing bank details of 10 customers and their transaction history. It is a virtual bank, main focus was on designing in its UI."
                ghLink="https://kkhushiie.github.io/bank/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;