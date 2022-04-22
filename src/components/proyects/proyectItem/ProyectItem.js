import { Link } from 'react-router-dom';
import './proyectItem.css'

const ProyectItem = ( { side, title, description, img, id } ) => {

    const SIDE = () =>{
        switch(side){
            case 'right':
                return 'Right';
            default:
                return 'Left'
        }
    };

    return (
        <Link className='proyectItem--link' to={`/proyects/${id}`}>
            <article className='proyectItemContainer-layout'>
                <div className={`proyectItem-width proyectItem-text proyectItem${SIDE()}-position proyectItem${SIDE()}-layout proyectItem${SIDE()}-border`}>
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