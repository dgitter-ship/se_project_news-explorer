import "./About.css";

import myImage from "../../assets/about-me.jpeg";

function About() {
  return (
    <div className="about__section">
      <img src={myImage} alt="Author Image" className="about__image" />
      <div className="about__section-content">
        <h1 className="about__section-title">About the author</h1>
        <p className="about__section-text">
          My name is Devin Protain and I am a 27 year old software developer
          who has been learning full-stack development for the past year and I am
          excited to begin my career in tech.
        </p>
        <p className="about__section-text">
          I have been training with Tripleten bootcamp where I have built hands-on
          experience with modern web technologies, problem solving, and real
          world projects. With the skills I have gained, I am focused on creating
          reliable user-friendly solutions and helping future clients bring
          their ideas to life.
        </p>
      </div>
    </div>
  );
}

export default About;
