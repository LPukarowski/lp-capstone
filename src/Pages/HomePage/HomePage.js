import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Row from "../../Components/Row/Row";


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
        <TableContainer className="public__tabs">
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="right">Name</TableCell>
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
        </>
    );
};

export default HomePage;