import ProyectItem from "./proyectItem/ProyectItem"
import './proyects.css'

export default function Proyects(){
    return (
        <section id='proyects' className="proyects-margin proyects-layout">
            <h2 className='proyects--h2-text' data-aos="zoom-in-up">PROYECTS</h2>
            <article>
                <ProyectItem 
                    id='magichy' 
                    position='left' 
                    img='https://i.ibb.co/dQ3ZHtv/magichy-Index.jpg' 
                    title='Magichy - Bookstore' 
                    description='My first proyect with React Js. An E-commerce of books' 
                />
                <ProyectItem 
                    id='datafilms' 
                    position='right' 
                    img="https://i.ibb.co/VYtnb76/datafilmshome.png" 
                    title='DataFilm' 
                    description='Proyect created as a preparation for a technical screening of Alkemy' 
                />
                <ProyectItem 
                    id='ave' 
                    position='left' 
                    img='https://i.ibb.co/tQMYfCJ/avehome.png' 
                    title='Ave Silver and Crystals' 
                    description='Freelance proyect with a mate for a little entrepreneurship of accessories' 
                />
            </article>
        </section>
    )
};