import './proyects.css'
import ProyectItem from "./proyectItem/ProyectItem"

export default function Proyects(){
    return (
        <section id='proyects' className="proyects-margin proyects-layout">
            <h2 className='proyects--h2-text' data-aos="zoom-in-up">PROYECTS</h2>
            <ProyectItem id='magichy' side='left' img='https://i.ibb.co/dQ3ZHtv/magichy-Index.jpg' title='Magichy - Bookstore' description='My first proyect with React Js. An E-commerce of books' />
        </section>
    )
};