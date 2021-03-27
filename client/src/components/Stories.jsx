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
        let storyList = [];
        const response= db.collection("recordings/mfBmHBgbpH6ZP7F7YgWv/archives");
        const data = await response.get();
        data.docs.forEach(item => {
            // console.log(item.data());
            storyList.push(item.data());
        })
        setStories(storyList);
    }
    useEffect(() => {
        fetchStories();
        console.log(stories);
    }, []);

    return (
        <div className={ classes.root }>
        <h1>Your Entries</h1>
        <TableContainer component={Paper} >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Id</TableCell>
                        <TableCell> Uploaded At</TableCell>
                        <TableCell> Transcript</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stories.map((story) => {
                        return(
                            <TableRow key={ story.id }>
                            <TableCell>{story.uploaded_at}</TableCell>
                            <TableCell>{story.id}</TableCell>
                            <TableCell>{story.transcript}</TableCell>
                            <TableCell>See more</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
}



export default Stories;
