import React, { useState, useEffect } from "react";
import db from "./config";
import { makeStyles } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
   root: {
      marginTop: "100px"
   }
})


function User() {
    const classes = useStyles();
    const [ users, setUsers ] = useState([]);
    const fetchUsers = async() => {
        let usersList = [];
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach(item => {
            console.log(item.data());
            usersList.push(item.data());
        })
        setUsers(usersList);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    
    console.log(users);
    return(
        <div className={ classes.root }>
            <h1>Users</h1>
            <TableContainer component={Paper} >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Id</TableCell>
                        <TableCell> Name</TableCell>
                        <TableCell> Learn More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => {
                        return(
                            <TableRow key={ user.id }>
                            <TableCell component="th" scope="row">
                                { user.id }
                            </TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>See more</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
            </div>
        );
}

export default User;
