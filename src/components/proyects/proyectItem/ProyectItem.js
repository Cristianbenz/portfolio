import { Link } from 'react-router-dom';
import './proyectItem.css'

const ProyectItem = ( { position, title, description, img, id } ) => {

    const side = !(position === 'right') ? 'Left' : 'Right'

    return (
        <Link className='proyectItem--link' to={`/proyects/${id}`}>
            <article className={`proyectItemContainer-layout proyectItemContainer${side}-layout`}>
                <div className={`proyectItem-width proyectItem-text proyectItem${side}-position proyectItem${side}-layout proyectItem${side}-border`}>
                    <img className='proyectItem--portada-size' src={img} alt={`portada de ${title}`} />
                    <div>
                    <h3 className='proyectItem--h3-text'>{title}</h3>
                    <p className='proyectItem--p-text'>{description}</p>
                    </div>
                </div>
            </article>
        </Link>
        
    )
};

export default ProyectItem;