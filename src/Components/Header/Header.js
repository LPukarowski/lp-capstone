import { NavLink } from "react-router-dom";
import portalImg from '../../assets/images/portal logo.jpg'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__navi">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create/item">Item</NavLink>
                <NavLink to="/create/monster">Monster</NavLink>
                <NavLink to="/:user">Your Library</NavLink>
            </div>
            <div className="header__setup">
                <img src={portalImg} alt='capstone app logo' className="header__logo"/>
                <h1>WEBSITE NAME</h1>
                <img src={portalImg} alt='cpastone app logo' className="header__logo"/>
            </div>
        </header>
    );
};

export default Header;