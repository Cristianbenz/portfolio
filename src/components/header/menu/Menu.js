import './menu.css'

export default function Menu(){
    return <div className="header--menu-position header--menu-layout">
        <a href='#aboutMe' className={'menu--link-size menu--link-margin menu--link-bg menu--link-text'} data-aos="fade-right" data-aos-delay={0} >
            {'About Me'}
        </a>
        <a href='#proyects' className={'menu--link-size menu--link-margin menu--link-bg menu--link-text'} data-aos="fade-right" data-aos-delay={200} >
            {'Proyects'}
        </a>
        <a href='#skills' className={'menu--link-size menu--link-margin menu--link-bg menu--link-text'} data-aos="fade-right" data-aos-offset={50} data-aos-delay={300} >
            {'Skills'}
        </a>
    </div>
}