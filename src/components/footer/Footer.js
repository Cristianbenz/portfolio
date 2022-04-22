import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-bg footer-layout">
      <section className="footer--map-layout">
        <article>
          <h2 className="footer--h2-text">Sections</h2>
          <ul className="footer--ul-style">
            <li>
              <a href="/#header" className="footer--link-text">Inicio</a>
            </li>
            <li>
              <a href="/#aboutMe" className="footer--link-text">About Me</a>
            </li>
            <li>
              <a href="/#proyects" className="footer--link-text">Proyects</a>
            </li>
            <li>
              <a href="/#skills" className="footer--link-text">Skills</a>
            </li>
          </ul>
        </article>
        <article>
          <h2 className="footer--h2-text">Proyects</h2>
          <ul className="footer--ul-style">
            <li>
              <Link to={"/proyects/magichy"} className="footer--link-text">Magichy</Link>
            </li>
          </ul>
        </article>
      </section>
        <span className="footer--copy-text">&copy; 2022 Cbenz</span>
    </footer>
  );
}
