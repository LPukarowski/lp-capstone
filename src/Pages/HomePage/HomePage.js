import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const [ user, setUser ] = useState({})
    return (
        <>
        <section className="hero">
            <div>
                <p className="hero__web-desc"></p>
            </div>
            <div className="hero__cta-buttons">
                <button className="button">Sign Up Now!</button>
                <button className="button">Start Your Library</button>
            </div>
        </section>
        <section className="public__tabs">
            
        </section>
        </>
    );
};

export default HomePage;