import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__navi">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create/item">Item</NavLink>
                <NavLink to="/create/monster">Monster</NavLink>
                <NavLink to="/:user">Your Library</NavLink>
            </div>
        </header>
    );
};

export default Header;