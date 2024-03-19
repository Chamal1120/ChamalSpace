import "./Homepage.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import StickyNavbar from "react-sticky-navbar";
import { Link, Element } from "react-scroll";

import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const Homepage = () => {
  const [isOpen, setOpen] = useState(false);

  const handleHamburgerClick = () => {
    setOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setOpen(false); // Close the navbar when a navigation link is clicked
  };

  return (
    <>
      <StickyNavbar
        showOnTop={true}
        showOnScrollDown={false}
        showOnScrollUp={true}
        zIndex={100}
        duration={500}
        stickyBackground="#e5e5e5"
        classNames={{
          scrollTop: "custom-scroll-top",
          scrollDown: "custom-scroll-down",
        }}
      >
        <div>
          <a id="navLogo" href="/">
            {"<Chamal/>"}
          </a>
        </div>
        <div>
          <ul id="navItems" className={isOpen ? "active" : ""}>
            <li>
              <div>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Skills
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Projects
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div id="hamburger" onClick={handleHamburgerClick}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </StickyNavbar>
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="contacts" className="element">
        <Contacts />
      </Element>
      <Footer />
    </>
  );
};

export default Homepage;
