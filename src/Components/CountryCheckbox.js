import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginRight: '40px',
    }
})

const CountryCheckBox = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h4>{props.value}</h4>
            <Checkbox value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default CountryCheckBox;