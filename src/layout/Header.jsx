import Navigation from "../components/Navigation";

import "../styles/Header.css";

const Header = () => {
  console.log("header mounted");

  return (
    <header className="header" role="banner">
      <nav aria-label="Primary" role="navigation">
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
