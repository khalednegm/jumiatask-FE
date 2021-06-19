import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    customerName: {
        marginRight: '20px'
    }
})

const Customer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.customerName}>{props.name}</div>
            <div>{props.phone}</div>
        </div>
    )
}

export default Customer;