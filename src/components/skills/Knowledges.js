import "./knowledges.css";

const SKILLS = [
  {
    id: "S1",
    name: "HTML5",
    logoUrl: "https://i.ibb.co/1zxhpjf/html-5.png",
  },
  {
    id: "S2",
    name: "CSS3",
    logoUrl: "https://i.ibb.co/fv3JzsZ/css-3.png",
  },
  {
    id: "S3",
    name: "SASS",
    logoUrl: "https://i.ibb.co/0BptPgW/sass.png",
  },
  {
    id: "S4",
    name: "JavaScript",
    logoUrl: "https://i.ibb.co/vLBBFGt/js.png",
  },
  {
    id: "S5",
    name: "React Js",
    logoUrl: "https://i.ibb.co/3vVxQHP/atom.png",
  },
  {
    id: "S6",
    name: "TypeScript",
    logoUrl: "https://i.ibb.co/cLkG7P4/tsLogo.png",
  },
  {
    id: "S7",
    name: "React Native",
    logoUrl: "https://i.ibb.co/3vVxQHP/atom.png",
  }
];

export default function Knowledges () {
  return (
    <section id="skills">
      <h2 className="skills--h2-text" data-aos="zoom-in-up">KNOWLEDGES</h2>
      <article className="skillsIconContainer-layout">
        {SKILLS.map((el) => (
          <div key={el.id} className="skillIcon-size">
            <img src={el.logoUrl} alt={el.name} className="skillIcon--Img-size" />
            <h3>{el.name}</h3>
          </div>
        ))}
      </article>
    </section>
  );
};