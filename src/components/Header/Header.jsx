import "./Header.css";

function Header({}) {
  return (
    <header className="header">
      <h1 className="header__logo">NewsExplorer</h1>
      <div className="header__btns">
        <button className="header__home-btn">Home</button>
        <button className="header__signin-btn">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
