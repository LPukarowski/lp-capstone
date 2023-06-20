import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const [ user, setUser ] = useState({})
    return (
        <div>
            <div>
                <img src='#' alt='capstone app logo' className="header__logo"/>
                <h1>WEBSITE NAME</h1>
                <img src='#' alt='cpastone app logo' className="header__logo"/>
            </div>
            <div>
                <p className="header__web-desc"></p>
            </div>
            <div className="header__cta-buttons">
                <button>Sign Up Now!</button>
                <button>Start Your Library</button>
            </div>
        </div>
    );
};

export default HomePage;