import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CountryCheckbox from "./CountryCheckbox";
import Customer from "./Customer";

const CAMEROON = "Cameroon";
const ETHIOPIA = "Ethiopia";
const MOROCCO = "Morocco";
const MOZAMBIQUE = "Mozambique";
const UGANDA = "Uganda";
const NOT_VALID = "Not Valid";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    checkbox: {
        display: 'flex'
    },
    btn: {
        backgroundColor: '#89CFF0',
        marginBottom: '20px'
    }
})

const Phone = () => {
    const classes = useStyles();

    const [customers, setCustomers] = useState([]);
    const [countries, setCountries] = useState([]);
    const [isValid, setIsValid] = useState(true);

    const renderCustomers = () => {
        return customers.map((value, index) => (
            <Customer key={index} name={value.customerName} phone={value.phone} />
        ));
    }

    const handleOnChange = (e) => {
        let filteredCountries = [...countries];
        const country = e.target.value;
        const isChecked = e.target.checked

        if(country === NOT_VALID) {
            return setIsValid(!isChecked);
        }
        if(isChecked && !filteredCountries.includes(country)) {
            filteredCountries.push(country);
            setCountries(filteredCountries);
        } else if(!isChecked) {
            filteredCountries = filteredCountries.filter((e) => e !== country);
            setCountries(filteredCountries);
        }

    }

    const handleOnClick = () => {
        const url = `/api/v1/customers/phone?countries=${countries}&isValid=${isValid}`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setCustomers(data);
        });
    }

    return (
        <div className={classes.root}>
            <div className={classes.checkbox}>    
                <CountryCheckbox value={CAMEROON} onChange={handleOnChange} />
                <CountryCheckbox value={ETHIOPIA} onChange={handleOnChange} />
                <CountryCheckbox value={MOROCCO} onChange={handleOnChange}/>
                <CountryCheckbox value={MOZAMBIQUE} onChange={handleOnChange}/>
                <CountryCheckbox value={UGANDA} onChange={handleOnChange}/>
                <CountryCheckbox value={NOT_VALID} onChange={handleOnChange}/>
            </div>
            <Button className={classes.btn} size="large" onClick={handleOnClick}>Filter</Button>
            {renderCustomers()}
        </div>
    )
}

export default Phone;