import React from "react";
import { makeStyles } from "@material-ui/core";
import Summary from "./Summary";
import Graph from "./Graph";
import Pie from "./Pie";
import Logo from "./Logo"

const useStyles = makeStyles({
   root: {
      marginTop: "100px"
   },
   graph: {
      marginTop: "100px"
   }
})

function Welcome() {
   const classes = useStyles();
   return (
      <div className={ classes.root }>
         <Logo/>
         <Summary/>
         <div className={ classes.graph}>
         <Graph />
         <Pie/>
         </div>
         
      </div>
   ) 
}

export default Welcome;