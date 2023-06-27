import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/Standard Logo Files/Original on Transparent.png'
import './Header.scss'

const Header = ({isLoggedIn}) => {
    const logOrLibrary = () => {
        if (!isLoggedIn) {
            return (
                <NavLink to="/login" className='header__link'>Login</NavLink>
            )
        } else {
            return (
                <NavLink to="/library" className="header__link">Your Library</NavLink>
            )
        } 
    }
    return (
        <header className="header">
            <div className="header__navi">
                <NavLink to="/" className='header__link'>Home</NavLink>
                <NavLink to="/create/item" className='header__link'>Item</NavLink>
                <NavLink to="/create/monster" className='header__link'>Monster</NavLink>
                {logOrLibrary()}
                
            </div>
            <div className="header__setup">
                <img src={Logo} alt="gm portal logo" className="header__logo"/>
            </div>
        </header>
    );
};

export default Header;