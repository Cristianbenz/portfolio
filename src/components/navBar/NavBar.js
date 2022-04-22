import { Link } from "react-router-dom";
import './navBar.css'

export default function NavBar(){
    return <div className="navBar-position navBar-layout navBar-bg">
                <Link to={'/'}>
                    <img src="https://i.ibb.co/QmKjkLm/logo.png" />
                </Link>
            </div>
}