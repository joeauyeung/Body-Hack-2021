import React, { useState, useEffect } from 'react';
import db from "./config";
import { makeStyles } from '@material-ui/core/styles';
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

function Stories() {
    const classes = useStyles();
    const [ stories, setStories ] = useState([]);
    const fetchStories = async() => {
        const response= db.collection("recordings/mfBmHBgbpH6ZP7F7YgWv/archives");
        const data = await response.get();
        console.log(data);
        data.docs.forEach(item => {
            console.log(item.data());
            setStories([ ...stories, item.data() ])
        })
    }
    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <TableContainer component={Paper} className={ classes.root }>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Testing (Log of individual's story)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stories.map((story) => {
                        <TableCell component="th" scope="row">
                            {story.id}
                        </TableCell>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}



export default Stories;
