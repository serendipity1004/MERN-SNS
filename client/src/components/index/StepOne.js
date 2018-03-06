import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import green from 'material-ui/colors/green';
import {FormGroup, FormControlLabel} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Typography from 'material-ui/Typography';

const styles = {
    checked: {
        color: green[500],
    },
};

class StepOne extends React.Component {
    state = {
        checkedA: true,
        checkedB: true,
        checkedC: true,
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Typography>
                    What would you like to achieve from this website?
                </Typography>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkedA}
                                onChange={this.handleChange('checkedA')}
                                value="checkedA"
                            />
                        }
                        label="Socialize"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkedB}
                                onChange={this.handleChange('checkedB')}
                                value="checkedB"
                            />
                        }
                        label="Professional Advice"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkedC}
                                onChange={this.handleChange('checkedC')}
                                value="checkedC"
                            />
                        }
                        label="Share Ideas"
                    />
                </FormGroup>
            </div>

        );
    }
}

StepOne.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepOne);