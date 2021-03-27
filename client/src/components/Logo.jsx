import React from "react";
import logo from "./images/logo.png"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "inline-block",
       height: "auto",
       width: "100px"
    }
 })

export default function Logo() {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <img  src={ logo } />
        </div>
    ) 
}