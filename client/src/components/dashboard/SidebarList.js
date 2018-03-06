import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#212121',
        color: '#FFFFFF'
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    navIcons: {
        fill:'#FFFFFF',
    },
    navTitles:{
        color:'#FFFFFF'
    }
});

class SidebarList extends React.Component {
    state = {open: true};

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <List
                    component="nav"
                    subheader={<ListSubheader className={classes.navTitles} component="div">Select from options</ListSubheader>}
                >
                    <ListItem button>
                        <ListItemIcon >
                            <SendIcon className={classes.navIcons}/>
                        </ListItemIcon>
                        <ListItemText
                            inset
                            primary={<Typography className={classes.navTitles} variant='subheading'>Posts</Typography>}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon className={classes.navIcons}/>
                        </ListItemIcon>
                        <ListItemText
                            inset
                            primary={<Typography className={classes.navTitles} variant='subheading'>Contacts</Typography>}/>
                    </ListItem>
                </List>
            </div>
        );
    }
}

SidebarList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarList);