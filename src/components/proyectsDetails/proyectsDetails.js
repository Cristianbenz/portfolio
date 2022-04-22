import Slider from "../slider/Slider";
import "./proyectsDetails.css";

export default function ProyectsDetails( {title, description, github, webLink, images} ) {
  return (
    <section className="proyectDetails-layout">
      <article>
        <Slider images={images}/>
      </article>
      <article>
        <div>
          <h1 className="proyectDetails--Title-text">{title}</h1>
          <h2 className="proyectDetails--SubTitle-text">Description</h2>
          <p className="proyectDetails--P-text">{description}</p>
        </div>
        <div className="proyectDetails--links-layout">
          <a className="proyectDetails--links-text" href={github} target={'_blank'}>GitHub repository</a>
          <a className="proyectDetails--links-text" href={webLink} target={'_blank'}>Link to the website</a>
        </div>
        
      </article>
    </section>
  );
}
