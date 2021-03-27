import React from "react";
import { makeStyles } from "@material-ui/core";
import Summary from "./Summary";

const useStyles = makeStyles({
   root: {
      marginTop: "100px"
   }
})

function Welcome() {
   const classes = useStyles();
   return (
      <div className={ classes.root }>
         <h1>Welcome!</h1>
         <Summary/>
      </div>
   ) 
}

export default Welcome;