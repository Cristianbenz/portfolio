import './header.css';
import Menu from './menu/Menu';

const Header = () => {
    return (
        <section id='header' className='header-size header-layout'>
            <Menu />
            <div className='header--img-size header--img-position header--img-bg' data-aos="fade-up-left" ></div>
        </section>
    )
}

export default Header;