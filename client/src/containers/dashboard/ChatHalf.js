import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Input, {InputAdornment, InputLabel} from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui-icons/Send';
import {FormControl} from 'material-ui/Form';

/**
 * Local Imports
 * */
import EachChat from './EachChat';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        // marginTop: theme.spacing.unit * 3,
        height: '90vh',
    }),
    chatTitle: {
        color: '#000000',
        fontWeight: 'bold'
    },
    smaller: {
        fontSize: '0.8em'
    },
    chatParent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    chatTextField: {
        width: '100%'
    }
});

function ChatHalf(props) {
    const {classes} = props;

    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography className={classes.chatTitle} variant="display1" gutterBottom={10}>
                    #Chat
                </Typography>
                <Divider/>
                <div className={classes.chatParent}>
                    <div>
                        <EachChat title={<Typography><span className={classes.chatTitle}>Somebody Somebody</span> <span
                            className={classes.smaller}>September 27, 2017</span></Typography>}
                                  content={<div><Typography>Lorem Ipsum is simply dummy text of the printing and
                                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                      since the 1500s, when an unknown printer took a galley </Typography></div>}/>
                        <EachChat title={<Typography><span className={classes.chatTitle}>Somebody Somebody</span> <span
                            className={classes.smaller}>September 27, 2017</span></Typography>}
                                  content={<div><Typography>Lorem Ipsum is simply dummy text of the printing and
                                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                      since the 1500s, when an unknown printer took a galley </Typography></div>}/>
                        <EachChat title={<Typography><span className={classes.chatTitle}>Somebody Somebody</span> <span
                            className={classes.smaller}>September 27, 2017</span></Typography>}
                                  content={<div><Typography>Lorem Ipsum is simply dummy text of the printing and
                                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                      since the 1500s, when an unknown printer took a galley </Typography></div>}/>
                        <EachChat title={<Typography><span className={classes.chatTitle}>Somebody Somebody</span> <span
                            className={classes.smaller}>September 27, 2017</span></Typography>}
                                  content={<div><Typography>Lorem Ipsum is simply dummy text of the printing and
                                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                      since the 1500s, when an unknown printer took a galley </Typography></div>}/>
                        <EachChat title={<Typography><span className={classes.chatTitle}>Somebody Somebody</span> <span
                            className={classes.smaller}>September 27, 2017</span></Typography>}
                                  content={<div><Typography>Lorem Ipsum is simply dummy text of the printing and
                                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                      since the 1500s, when an unknown printer took a galley </Typography></div>}/>
                        <EachChat title={<Typography><span className={classes.chatTitle}>Somebody Somebody</span> <span
                            className={classes.smaller}>September 27, 2017</span></Typography>}
                                  content={<div><Typography>Lorem Ipsum is simply dummy text of the printing and
                                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                      since the 1500s, when an unknown printer took a galley </Typography></div>}/>
                    </div>
                    <div>
                        <FormControl className={classes.chatTextField}>
                            <InputLabel htmlFor="name-input">Enter Your Message</InputLabel>
                            <Input label="Type In Your Message" margin="normal" className={classes.chatTextField}
                                   endAdornment={
                                       <InputAdornment position="end">
                                           <IconButton >
                                               <SendIcon/>
                                           </IconButton>
                                       </InputAdornment>
                                   }/>
                        </FormControl>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

ChatHalf.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatHalf);