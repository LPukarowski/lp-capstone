import { useEffect, useState } from "react";
import axios from "axios";
import Row from "../Row/Row";
import { TableBody } from "@mui/material";
const UserProfile = ({isLoggedIn}) => {
    const [userLibrary, setUserLibrary] = useState([])
    useEffect(() => {
        const token = sessionStorage.token;
        if (isLoggedIn){
            axios.get('http://localhost:8080/monster', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                setUserLibrary(...userLibrary, res.data)
                console.log(userLibrary);
            })
            .catch(err => console.log(err))
        }

    },[isLoggedIn])
    return (
        <>
            <TableBody>
                {userLibrary && userLibrary.map((row) => {
                    <Row key={row.id} row={row} />
                })}
            </TableBody>
        </>
    );
};

export default UserProfile;