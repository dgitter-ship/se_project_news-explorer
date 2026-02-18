import "./Footer.css";
import link from "../../assets/footer-link.svg";
import linkedin from "../../assets/linkedinicon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">© 2026 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__btns">
          <Link to="/">
            <button className="footer__btn">Home</button>
          </Link>
          <a
            href="https://www.tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="footer__btn">Tripleten</button>
          </a>
        </div>
        <div className="footer__links">
          <a
            href="https://www.github.com/dgitter-ship"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link-btn"
          >
            <img src={link} alt="GitHub" className="footer__link" />
          </a>
          <a
            href="https://www.linkedin.com/in/devin-protain-24a138166"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link-btn"
          >
            <img src={linkedin} alt="LinkedIn" className="footer__link" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
