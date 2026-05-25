import "./styles.css";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 1023.5
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023.5);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (!isOpen) {
        setScrolled(scrollPosition > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    if (isOpen) {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    } else {
      setScrolled(false);
    }

    setIsOpen(!isOpen);
  };

  const navItemClass = (path: string) =>
    location.pathname === path ? "active" : "";

  return (
    <div
      className={`navbarContainer ${
        scrolled && !isOpen ? "scrolled" : ""
      }`}
    >
      {/* LOGO */}
      <div className="logoContainer z-30">
        <Link
          to="/home"
          onClick={() => setIsOpen(false)}
          className="navbarText"
        >
          <span className="d">D</span>
          <span className="amp">&</span>
          <span className="j">J</span>
        </Link>
      </div>

      {/* MOBILE */}
      {isMobile ? (
        <>
          <div className="navbarToggle">
            <button
              className="z-30 transition-all duration-300"
              onClick={handleMenuToggle}
            >
              <div
                className={`relative h-5 w-7 transition-all duration-300 prueba ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full bg-[white] transition-all duration-300 ${
                    isOpen
                      ? "top-1/2 -translate-y-1/2 rotate-90 navbarToggleOpen"
                      : "top-0"
                  }`}
                />

                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-full bg-[white] -translate-y-1/2 transition-all duration-300 ${
                    isOpen
                      ? "left-1/2 -translate-x-1/2 rotate-0 navbarToggleOpen"
                      : "left-0"
                  }`}
                />
              </div>
            </button>
          </div>

          <CSSTransition
            in={isOpen}
            timeout={200}
            classNames="menu-transition"
            unmountOnExit
          >
            <div className="menu">
              <ul className="lista">
                <li className={navItemClass("/our-story")}>
                  <Link
                    to="/our-story"
                    onClick={() => setIsOpen(false)}
                  >
                    OUR STORY
                  </Link>
                </li>
                <li className={navItemClass("/event")}>
                  <Link
                    to="/event"
                    onClick={() => setIsOpen(false)}
                  >
                    EVENT
                  </Link>
                </li>
                <li className={navItemClass("/gifts")}>
                  <Link
                    to="/gifts"
                    onClick={() => setIsOpen(false)}
                  >
                    REGISTRY
                  </Link>
                </li>

                <li className={navItemClass("/travel")}>
                  <Link
                    to="/travel"
                    onClick={() => setIsOpen(false)}
                  >
                    TRAVEL AND STAY
                  </Link>
                </li>


                <li className={navItemClass("/faqs")}>
                  <Link
                    to="/faqs"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQS
                  </Link>
                </li>

              </ul>

              <div className="rsvp-button">
                <Link
                  to="/rsvp"
                  className="rsvp-button-style"
                  onClick={() => setIsOpen(false)}
                >
                  RSVP
                </Link>
              </div>
            </div>
          </CSSTransition>
        </>
      ) : (
        <>
          {/* DESKTOP */}
          <div className="desktop-menu">
            <ul className="lista">
              <li className={navItemClass("/our-story")}>
                <Link to="/our-story">
                  OUR STORY
                </Link>
              </li>


              <li className={navItemClass("/event")}>
                <Link to="/event">
                  EVENT
                </Link>
              </li>
                <li className={navItemClass("/gifts")}>
                <Link to="/gifts">
                  REGISTRY
                </Link>
              </li>
              <li className={navItemClass("/travel")}>
                <Link to="/travel">
                  TRAVEL AND STAY
                </Link>
              </li>
              <li className={navItemClass("/faqs")}>
                <Link to="/faqs">
                  FAQS
                </Link>
              </li>

            </ul>
          </div>

          {/* RSVP */}
          <div className="rsvp-button">
            <Link
              to="/rsvp"
              className="rsvp-button-style"
            >
              RSVP
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;