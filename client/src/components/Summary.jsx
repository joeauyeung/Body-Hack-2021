import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
       display: "inline-block",
       max_width: "30%"
    },
    title: {
        fontSize: "2rem"
    },
    number: {
        fontSize: "1.5rem"
    }
 })


export default function Summary() {
    const classes = useStyles();
    return(
        <div className={ classes.root }>
            <Card>
                <CardContent>
                    <Typography className={ classes.title } varient="h3" color="secondary" gutterBottom>
                        Clients in your caseload
                    </Typography>
                    <Typography className={ classes.number } varient="h5">
                        3
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )

}