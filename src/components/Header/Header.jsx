import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ onSignInClick, isLoggedIn, userData, handleSignOut }) {
  return (
    <header className="header">
      <h1 className="header__logo">NewsExplorer</h1>

      <Navigation
        onSignInClick={onSignInClick}
        isLoggedIn={isLoggedIn}
        userData={userData}
        handleSignOut={handleSignOut}
      />
      {/* <div className="header__btns">
        <button className="header__home-btn">Home</button>

        {isLoggedIn ? (
          // Show when user is logged in
          <>
            <button className="header__saved-articles-btn">
              Saved articles
            </button>
            <button className="header__signout-btn">Sign out</button>
          </>
        ) : (
          // Show when user is NOT logged in
          <button onClick={onSignInClick} className="header__signin-btn">
            Sign In
          </button>
        )}
      </div> */}
    </header>
  );
}

export default Header;
