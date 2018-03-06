import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class StepTwo extends React.Component {
    state = {
        age: '',
        name: 'hai',
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleTextFieldChange = name => event => {
        this.setState({[name]: event.target.value})
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-input">Email Address</InputLabel>
                    <Input id="name-input"/>
                    <FormHelperText>Enter Your Email Address</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-input">Phone Number</InputLabel>
                    <Input id="name-input"/>
                    <FormHelperText>Enter Your Phone Number</FormHelperText>
                </FormControl>
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-input">Name</InputLabel>
                    <Input id="name-input"/>
                    <FormHelperText>Enter Your Full Name</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Year of Birth</InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'year',
                            id: 'year-simple',
                        }}
                    >
                        <MenuItem value={50}>1950</MenuItem>
                        <MenuItem value={50}>1951</MenuItem>
                        <MenuItem value={50}>1952</MenuItem>
                        <MenuItem value={50}>1953</MenuItem>
                        <MenuItem value={50}>1954</MenuItem>
                        <MenuItem value={50}>1955</MenuItem>
                        <MenuItem value={50}>1956</MenuItem>
                        <MenuItem value={50}>1957</MenuItem>
                        <MenuItem value={50}>1958</MenuItem>
                        <MenuItem value={50}>1959</MenuItem>
                        <MenuItem value={50}>1960</MenuItem>
                        <MenuItem value={50}>1961</MenuItem>
                    </Select>
                    <FormHelperText>Year of Birth</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Year of Birth</InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'month',
                            id: 'month-simple',
                        }}
                    >
                        <MenuItem value={50}>1</MenuItem>
                        <MenuItem value={50}>2</MenuItem>
                        <MenuItem value={50}>3</MenuItem>
                        <MenuItem value={50}>4</MenuItem>
                        <MenuItem value={50}>5</MenuItem>
                        <MenuItem value={50}>6</MenuItem>
                        <MenuItem value={50}>7</MenuItem>
                        <MenuItem value={50}>8</MenuItem>
                        <MenuItem value={50}>9</MenuItem>
                        <MenuItem value={50}>10</MenuItem>
                        <MenuItem value={50}>11</MenuItem>
                        <MenuItem value={50}>12</MenuItem>
                    </Select>
                    <FormHelperText>Month of Birth</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Year of Birth</InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'day',
                            id: 'day-simple',
                        }}
                    >
                        <MenuItem value={50}>1</MenuItem>
                        <MenuItem value={50}>2</MenuItem>
                        <MenuItem value={50}>3</MenuItem>
                        <MenuItem value={50}>4</MenuItem>
                        <MenuItem value={50}>5</MenuItem>
                        <MenuItem value={50}>6</MenuItem>
                        <MenuItem value={50}>7</MenuItem>
                        <MenuItem value={50}>8</MenuItem>
                        <MenuItem value={50}>9</MenuItem>
                        <MenuItem value={50}>10</MenuItem>
                        <MenuItem value={50}>11</MenuItem>
                        <MenuItem value={50}>12</MenuItem>
                        <MenuItem value={50}>13</MenuItem>
                        <MenuItem value={50}>14</MenuItem>
                        <MenuItem value={50}>15</MenuItem>
                    </Select>
                    <FormHelperText>Day of Birth</FormHelperText>
                </FormControl>
            </form>
        );
    }
}

StepTwo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepTwo);