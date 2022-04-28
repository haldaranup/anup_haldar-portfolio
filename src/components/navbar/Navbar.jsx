import "./navbar.scss";

export default function Navbar({ toggleMenu, setToggleMenu }) {
  return (
    <div className={"navbar " + (toggleMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Anup
          </a>
        </div>

        <div className="links">
            <ul>
                <li>
                    <a href="#intro">About</a>
                </li>
                <li>
                    <a href="#portfolio">Resume</a>
                </li>
                <li>
                    <a href="#works">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setToggleMenu(!toggleMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
