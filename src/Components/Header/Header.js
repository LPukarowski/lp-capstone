import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img src='#' alt='capstone app logo' className="header__logo"/>
            <div className="header__navi">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create/item">Item</NavLink>
                <NavLink to="/create/monster">Monster</NavLink>
                <NavLink to="/:user">Your Library</NavLink>
            </div>
        </div>
    );
};

export default Header;