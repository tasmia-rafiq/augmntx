import "./Header.css";
import logo from "../../assets/AugmntX-Logo.png";
import { FiMenu } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const isMobile = window.length < 992;

  useEffect(() => {
    const handleScroll = () => {
        window.scrollY > 250 ? setIsHeaderFixed(true) : setIsHeaderFixed(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  }

  return (
    <header className={isHeaderFixed ? "fixed": ""}>
      <nav className={`navbar container ${isMobile ? "responsive" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Augmntx" />
          </Link>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? "show" : ""}`}>
          <div className="mobile_menu_top">
            <h3>AugmntX</h3>
            <button onClick={toggleMenu}>
              <MdOutlineClose className="close_icon" />
            </button>
          </div>
          <li>
            <a href="#">Why</a>
          </li>
          <li>
            <a id="submenu-link">Industries <BiChevronDown className="chevron" /></a>
            <ul className="submenu">
              <li><a href="#">Travel</a></li>
              <li><a href="#">Automative</a></li>
              <li><a href="#">Banking</a></li>
              <li><a href="#">Capital Markets</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Digital Commerce</a></li>
              <li><a href="#">View All</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Find Dev</a>
          </li>
          <li>
            <a href="#">Apply as Vendor</a>
          </li>
          <li>
            <a href="#" className="btn btn-primary">
              Hire Dev
            </a>
          </li>
          <li>
            <Link to="admin/auth/login">Login</Link>
          </li>

          {/* MENU FOOTER */}
          <div className="menu_footer">
            <a href="mailto:hello@augmntx.com">hello@augmntx.com</a>
            <a href="tel:+919820045154">+91 982 004 5154</a>
            <div className="socials">
              <a href="#"><i class="uil uil-linkedin"></i></a>
              <a href="#"><i class="uil uil-twitter"></i></a>
              <a href="#"><i class="uil uil-facebook-f"></i></a>
              <a href="#"><i class="uil uil-instagram"></i></a>
            </div>
          </div>
        </ul>

        {/* MOBILE NAVBAR */}
        <ul className="nav-mobile-menu">
          <li>
            <a href="#" className="btn btn-primary">
              Hire Talent
            </a>
          </li>
          <li>
            <button className="hamburger_icon" onClick={toggleMenu}>
              <span></span>
            </button>
          </li>
        </ul>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
