import { useEffect, useState } from "react";
import axios from "axios";
import { TableBody, TableContainer, Table, TableHead, TableRow, TableCell, Typography } from "@mui/material";
import PersonalRow from "../Row/PersonalRow";
import "./UserProfile.scss";

const UserProfile = ({isLoggedIn, user}) => {
const [populate, setPopulate] = useState(false)
const [userLibrary, setUserLibrary] = useState([])


useEffect(() => {
    const token = sessionStorage.token;
        axios.get('http://localhost:8080/monster', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setUserLibrary([...(res.data)])

        })
        .catch(err => console.log(err))

},[])

useEffect(() => {
    console.log(userLibrary)
    if (userLibrary.length === 0) {
        setPopulate(false)
    } else {
        setPopulate(true)
    }

}, [userLibrary])

if (!populate) {
return (
    <section className="userpage">
        <h1 className="userpage__loading">.......Loading......</h1>
    </section>
)
}
    return (
        <section className="userpage">
        <TableContainer className="public__tabs">
            <Typography variant="h4" sx={{color: 'primary.light'}}>Personal Beastiary</Typography>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{ '& > *': { borderBottom: 'none' }, color: '#F5F5F5' }}>
                        <TableCell align="right" sx={{borderBottom: 'none'}} />
                        <TableCell align="left"sx={{borderBottom: 'none', fontSize: '18px' }}>Name</TableCell>
                        <TableCell align="left" sx={{borderBottom: 'none', fontSize: '18px' }}>Type</TableCell>
                        <TableCell align="left" sx={{borderBottom: 'none', fontSize: '18px' }}>Size</TableCell>
                        <TableCell align="left" sx={{borderBottom: 'none', fontSize: '18px'}}>CR</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userLibrary && userLibrary.map((monster) => {
                        return (
                            <PersonalRow key={monster.monster_name} monster={monster} />
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <button className="button">Logout</button>
        </section>
    );

};

export default UserProfile;