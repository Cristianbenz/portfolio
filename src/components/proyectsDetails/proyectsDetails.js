import Slider from "../slider/Slider";

import "./proyectsDetails.css";

export default function ProyectsDetails( details ) {
  
  return (
    <section className="proyectDetails-layout">
      <article>
        <Slider images={details.images} imagesAlt={'proyect screenshots'}/>
      </article>
      <article>
        <div>
          <h1 className="proyectDetails--Title-text">{details.title}</h1>
          <h2 className="proyectDetails--SubTitle-text">Description</h2>
          <p className="proyectDetails--P-text">{details.description}</p>
          <h2 className="proyectDetails--SubTitle-text">Tools</h2>
          <ul className="proyectDetails--toolsList">
            {
              (details.tools).map( tool => {
                return <li key={`${tool}key`}>{tool}</li>
              } )
            }
          </ul>
        </div>
        <div className="proyectDetails--links-layout">
          <a className="proyectDetails--links-text" href={details.github} target={'_blank'} rel='noreferrer' >GitHub repository</a>
          <a className="proyectDetails--links-text" href={details.weblink} target={'_blank'} rel='noreferrer' >Link to the website</a>
        </div>
        
      </article>
    </section>
  );
}
