import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          FindMyApt | Montreal
        </Link>
        <nav className="header__nav">
          <Link to="/map" className="header__nav-item">
            Map
          </Link>
          <Link to="/favorites" className="header__nav-item">
            Favorites
          </Link>
          <button className="header__nav-item header__nav-item--button">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};
