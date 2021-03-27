import React, { useState, useEffect } from "react";
import db from "./config";

function App() {
    const [ users, setUsers ] = useState([]);
    const fetchUsers = async() => {
        const response= db.collection("users");
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

export default App;
