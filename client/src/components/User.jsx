import React, { useState, useEffect } from "react";
import db from "./config";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   root: {
      marginTop: "100px"
   }
})


function User() {
    const classes = useStyles();
    const [ users, setUsers ] = useState([]);
    const fetchUsers = async() => {
        console.log("Testing");
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach(item => {
            setUsers([ ...users, item.data() ])
        })
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    return(
        <div>
            <h1>Users</h1>
            {
                users && users.map(user => {
                    return (
                        <div>
                            <h4>{ user.first_name }</h4>
                        </div>
                    )
                })
            }
            </div>
        );
}

export default User;
