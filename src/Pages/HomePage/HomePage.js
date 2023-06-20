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
                <button>Sign Up Now!</button>
                <button>Start Your Library</button>
            </div>
        </section>
        <section className="public__items">
            
        </section>
        </>
    );
};

export default HomePage;