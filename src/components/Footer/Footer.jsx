import "./Footer.css";
import link from "../../assets/footer-link.svg";
import linkedin from "../../assets/linkedinicon.svg";

function Footer({}) {
  return (
    <div className="footer">
      <p className="footer__text">© 2026 Supersite, Powered by News API</p>
      <div className="footer__btns">
        <button className="footer__btn">Home</button>
        <button className="footer__btn">Tripleten</button>
      </div>
      <div className="footer__links">
        <button className="footer__link-btn">
          <img src={link} alt="" className="footer__link" />
        </button>
        <button className="footer__link-btn">
          <img src={linkedin} alt="" className="footer__link" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
