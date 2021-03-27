import React from "react";
import User from "./User";
import Navbar from "./Navbar/Navbar";
import Welcome from "./Welcome";
import Stories from "./Stories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// Create the theme colors
const theme  = createMuiTheme({
    palette: {
        primary: {
            main: "#f9a825"
        },
        secondary: {
            main: "#2196f3"
        }
    }
})


function App() {
    return (
    <ThemeProvider theme={ theme }>
        <Router>    
        <Navbar/>
            <Switch>
                <Route path="/" exact component={ Welcome } />
                <Route path="/user" component={ User } />
                <Route path="/stories" component={ Stories } />
            </Switch>
        </Router>

    </ThemeProvider>

    )
}

export default App;
