import "./About.css";
import placeholder from "../../assets/about-placeholder.svg";
import myImage from "../../assets/about-me.jpeg";

function About({}) {
  return (
    <div className="about__section">
      <img src={myImage} alt="Author Image" className="about__image" />
      <div className="about__section-content">
        <h1 className="about__section-title">About the author</h1>
        <p className="about__section-text">
          My name is Devin Protain and I am a 27 year old software developer
          who's been learning full-stack development for the past year and I am
          excited to begin my career in tech.
        </p>
        <p className="about__section-text">
          Iv'e been training with Tripleten bootcamp where Iv'e built hands-on
          experience with modern web technologies, problem solving, and real
          world projects. With the skills Iv'e gained, I'm focused on creating
          reliable user-friendly solutions and helping future clients bring
          their ideads to life.
        </p>
      </div>
    </div>
  );
}

export default About;
