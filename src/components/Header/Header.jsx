import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({
  onSignInClick,
  isLoggedIn,
  userData,
  handleSignOut,
  activeModal,
  onCloseClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={`header${menuOpen ? " header--menu-open" : ""}`}>
      <h1 className="header__logo">NewsExplorer</h1>

      <Navigation
        onSignInClick={onSignInClick}
        isLoggedIn={isLoggedIn}
        userData={userData}
        handleSignOut={handleSignOut}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        modalOpen={!!activeModal}
        onCloseClick={onCloseClick}
      />
    </header>
  );
}

export default Header;
