import { Link, useLocation } from "react-router-dom";
// useState removed, now using props from Header
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import logoutBlack from "../../assets/logout-black.svg";

import closeIcon from "../../assets/close.svg";

function Navigation({
  onSignInClick,
  isLoggedIn,
  userData,
  handleSignOut,
  menuOpen,
  setMenuOpen,
  modalOpen = false,
  onCloseClick,
}) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav>
        <ul className="navigation">
          <div
            className={`navigation__btns${menuOpen ? " navigation__btns--open" : ""}`}
          >
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
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onSignInClick();
                }}
                className="navigation__signin-btn"
              >
                Sign In
              </button>
            )}
          </div>
        </ul>
        {modalOpen ? (
          <button className="navigation__close-btn" onClick={onCloseClick}>
            <img src={closeIcon} alt="Close menu" />
          </button>
        ) : menuOpen ? (
          <button className="navigation__close-btn" onClick={handleCloseClick}>
            <img src={closeIcon} alt="Close menu" />
          </button>
        ) : (
          <div
            className={`navigation__hamburger${isSavedNewsPage ? " navigation__hamburger--saved" : ""}`}
            onClick={handleHamburgerClick}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navigation;
