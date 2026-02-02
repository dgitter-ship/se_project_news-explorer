import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import logoutBlack from "../../assets/logout-black.svg";
import menu from "../../assets/menu.svg";

function Navigation({ onSignInClick, isLoggedIn, userData, handleSignOut }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";
  return (
    <nav className="navigation">
      <button className="navigation__menu">
        <img src={menu} alt="menu-icon" className="navigation__menu-logo" />
      </button>
      <div className="navigation__btns">
        <Link to="/">
          <button
            className={`navigation__home-btn ${isSavedNewsPage ? "navigation__home-btn--saved" : ""}`}
          >
            Home
          </button>
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/saved-news">
              <button
                className={`navigation__saved-articles-btn ${isSavedNewsPage ? "navigation__saved-articles-btn--saved" : ""}`}
              >
                Saved articles
              </button>
            </Link>
            <button
              onClick={handleSignOut}
              className={`navigation__signout-btn ${isSavedNewsPage ? "navigation__signout-btn--saved" : ""}`}
            >
              {userData.name}
              <img
                src={isSavedNewsPage ? logoutBlack : logoutIcon}
                alt="logout-icon"
                className="navigation__signout-logo"
              />
            </button>
          </>
        ) : (
          <button onClick={onSignInClick} className="navigation__signin-btn">
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
