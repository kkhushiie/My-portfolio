import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Js Developer",
          "Computer Science Undergraduate",
          "Front End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text