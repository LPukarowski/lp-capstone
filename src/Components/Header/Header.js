import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/Standard Logo Files/Black on Transparent.png'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__navi">
                <NavLink to="/" className='header__link'>Home</NavLink>
                <NavLink to="/create/item" className='header__link'>Item</NavLink>
                <NavLink to="/create/monster" className='header__link'>Monster</NavLink>
                <NavLink to="/:user" className='header__link'>Your Library</NavLink>
            </div>
            <div className="header__setup">
                <img src={Logo} alt="gm portal logo" className="header__logo"/>
            </div>
        </header>
    );
};

export default Header;