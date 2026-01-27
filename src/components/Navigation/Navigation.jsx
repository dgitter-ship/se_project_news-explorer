import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onSignInClick, isLoggedIn, userData, handleSignOut }) {
  return (
    <nav className="navigation">
      <Link to="/">
        <button className="navigation__home-btn">Home</button>
      </Link>

      {isLoggedIn ? (
        <>
          <Link to="/saved-news">
            <button className="navigation__saved-articles-btn">
              Saved articles
            </button>
          </Link>
          <button onClick={handleSignOut} className="navigation__signout-btn">
            Sign out
          </button>
        </>
      ) : (
        <button onClick={onSignInClick} className="navigation__signin-btn">
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navigation;
