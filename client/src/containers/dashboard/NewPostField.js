import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 30,
        // marginTop: theme.spacing.unit * 3,
    }),
    avatar: {
        margin: '30% 10px 10px 10px'
    },
    textField: {
        width: '100%'
    }
});

class PaperSheet extends React.Component{


    handleChange = (event, value) => {
        this.setState({ value });
    };

    render(){
        const {classes} = this.props;
        const {value} = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Grid container spacing={0}>
                        <Grid item md={1}>
                            <Avatar className={classes.avatar}>H</Avatar>
                        </Grid>
                        <Grid item md={11}>
                            <TextField
                                id="multiline-static"
                                label="Write Your Post"
                                multiline
                                rows="4"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                            />
                            <BottomNavigation
                                value={value}
                                onChange={this.handleChange}
                                showLabels
                            >
                                <BottomNavigationAction label="Recents" icon={<RestoreIcon />}/>
                                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />}/>
                                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />}/>
                            </BottomNavigation>
                        </Grid>
                    </Grid>

                </Paper>
            </div>
        );
    }
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);