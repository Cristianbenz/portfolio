import "./network.css";

const NETWORK_ICONS = [
  {
    id: "N1",
    logoUrl: "https://i.ibb.co/2djYDhx/linkedin.png",
    href: 'https://www.linkedin.com/in/cristian-benitez/'
  },
  {
    id: "N2",
    logoUrl: "https://i.ibb.co/GC2L5kx/github.png",
    href: 'https://github.com/Cristianbenz'
  },
  {
    id: "N3",
    logoUrl: "https://i.ibb.co/9VJ4b3X/email.png",
    href: 'mailto:contactocbenitez@gmail.com'
  },
  {
    id: "N4",
    logoUrl: "https://i.ibb.co/z4B6J1G/whatsapp.png",
    href: 'https://wa.me/59897270360'
  }
];

export default function Networks() {
  return (
    <section id="networks">
      <h2 className="networks--h2-text" data-aos="zoom-in-up">NETWORKS</h2>
      <article className="networksIconContainer-layout">
        {NETWORK_ICONS.map((el) => (
          <a href={el.href} target={'_blank'} rel="noreferrer" key={el.id} className="networksIcon-size">
            <img src={el.logoUrl} className="networksIcon--Img-size" alt={el.id} />
            <h3>{el.name}</h3>
          </a>
        ))}
      </article>
    </section>
  );
}
