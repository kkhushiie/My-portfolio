import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import home from '/src/Assets/img12.png';

import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";


function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Khushi Sharma</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/kkhushiie");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/khushiie-sharma/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/ihsuhk_k?t=AbT0fTDd_-ZEAJHptRfWsg&s=09");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
           
          </Col>

          <Col md={5}>
            <div >
            <img className="imagedeveloper" src={home}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home