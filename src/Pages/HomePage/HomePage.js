import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Row from "../../Components/Row/Row";
import "./HomePage.scss";

const HomePage = () => {
    const [ user, setUser ] = useState({})
    const [publicMonsters, setPublicMonsters] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/public')
        .then(res => {
            setPublicMonsters([...res.data])
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div className="homepage">
        <section className="hero">
            <div className="hero__div">
                <p className="hero__web-desc">
                    Welcome to GM Portal, your ultimate destination for simplifying the creation of homebrew content for tabletop role-playing games (TTRPGs),
                    with a primary focus on Dungeons and Dragons (D&D). Our mission is to empower a wider community of players to unleash their creative ideas and seamlessly incorporate them into their own game sessions.
                    Whether you're a seasoned game master or just starting your TTRPG journey, GM Portal provides a user-friendly platform that equips you with the tools and resources needed to bring your unique concepts to life, fostering a vibrant world of imagination and limitless possibilities.
                </p>
            </div>
            <div className="hero__cta-buttons">
                <Link to={"/login"}><button className="button">Login/Sign Up</button></Link>
                <Link to={'/library'}><button className="button">Start Your Library</button></Link>
            </div>
        </section>
        <TableContainer className="public__tabs">
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{ '& > *': { borderBottom: 'none' }, color: '#F5F5F5' }}>
                        <TableCell align="right"></TableCell>
                        <TableCell align="center"sx={{borderBottom: 'none' }}>Name</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">CR</TableCell>
                        <TableCell align="right">Creator</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {publicMonsters && publicMonsters.map((row) => (
                        <Row key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default HomePage;