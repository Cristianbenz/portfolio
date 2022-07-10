import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {

  const FooterLink = ( { href, children } ) => {
    return <li>
              <a href={href} className="footer--link-text">{children}</a>
            </li>
  }

  return (
    <footer className="footer-bg footer-layout">
      <section className="footer--map-layout">
        <article>
          <h2 className="footer--h2-text">Sections</h2>
          <ul className="footer--ul-style">
            <FooterLink href="#header" >Inicio</FooterLink>
            <FooterLink href="#aboutMe" >About Me</FooterLink>
            <FooterLink href="/#proyects" >Proyects</FooterLink>
            <FooterLink href="/#skills" >Skills</FooterLink>
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
