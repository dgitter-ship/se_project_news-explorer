import "./About.css";
import placeholder from "../../assets/about-placeholder.svg";

function About({}) {
  return (
    <div className="about__section">
      <img src={placeholder} alt="Author Image" className="about__image" />
      <div className="about__section-content">
        <h1 className="about__section-title">About the author</h1>
        <p className="about__section-text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__section-text">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
