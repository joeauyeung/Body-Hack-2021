import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   root: {
      marginTop: "100px"
   }
})

function Welcome() {
   const classes = useStyles();
   return <h1 className={ classes.root }>Welcome! (Therapist)</h1>
}

export default Welcome;