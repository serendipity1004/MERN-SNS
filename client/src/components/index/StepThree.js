import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {}
});

class StepThree extends React.Component {

    render() {
        return (
            <div>
                <Typography>An Email has been sent to <strong>"Email"</strong>.
                    <br/>
                    You will be notified through the same email address once you are approved by the administrator.</Typography>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(StepThree);