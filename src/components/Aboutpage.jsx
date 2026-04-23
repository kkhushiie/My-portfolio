import { Container, Row, Col, Image } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import abt from '/src/Assets/img31.png';
import "../pages/style.css";
function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> I am a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. I am pursuing my bachelor's from Rajasthan Technical University in Computer Science Engineering. I am a keen learner and creative enough to visualise new ideas. I put my views with others by writing and enrich my thoughts by reading. I am currently in my final year of bachelor's degree with a cumulative academic score of 9.92 CGPA. I am good at doing mandala art. I love travelling and listening to acoustic music.
                        </p>
                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={60}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="left"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                   
                    <img className="webimage" src={abt}/>
                  
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage