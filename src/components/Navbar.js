import "./Navbar.css";
import "./Media.css";
import cart from "../images/shopping-cart.png";
import user from "../images/user.png";
import heart from "../images/heart-black-shape-for-valentines.png";
import menu from "../images/menu.png";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <input type="checkbox" id="toggler" />
        <img
          src={menu}
          alt="x"
          className="bars"
          onClick={() => setOpen(!open)}
        />

        <a href="f" className="flower">
          Flowers<span>.</span>
        </a>

        <nav
          className="navbar"
          style={{ display: (isMobile ? open : true) ? "block" : "none" }}
        >
          <Link
            className="link"
            activeClass="activeLink"
            to="home"
            spy={true}
            smooth={true}
            offset={-69.7}
            duration={500}
          >
            home
          </Link>
          <Link
            className="link"
            activeClass="activeLink"
            to="about-us"
            spy={true}
            smooth={true}
            offset={-69.7}
            duration={500}
          >
            About
          </Link>

          <Link
            className="link"
            activeClass="activeLink"
            to="products"
            spy={true}
            smooth={true}
            offset={-69.7}
            duration={500}
          >
            Products
          </Link>
          <Link
            className="link"
            activeClass="activeLink"
            to="review"
            spy={true}
            smooth={true}
            offset={-69.7}
            duration={500}
          >
            Review
          </Link>
          <Link
            className="link"
            activeClass="activeLink"
            to="contact"
            spy={true}
            smooth={true}
            offset={-69.7}
            duration={500}
          >
            Contact
          </Link>
        </nav>

        <div className="icons">
          <a href="heart" className="heart">
            <img src={heart} alt="heart" />
          </a>
          <a href="heart" className="heart">
            <img src={cart} alt="cart" />
          </a>
          <a href="heart" className="heart">
            <img src={user} alt="user" />
          </a>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
