import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';

/**
 * Local Components
 * */
import SidebarList from '../components/dashboard/SidebarList';
import PostCard from '../containers/dashboard/PostCard';
import TagsList from '../containers/dashboard/TagsList';
import NewPostField from '../containers/dashboard/NewPostField';
import ChatHalf from '../containers/dashboard/ChatHalf';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        // height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
        maxHeight: '100vh',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        backgroundColor: '#212121',

    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
        backgroundColor: '#212121'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        height: 'inherit',
    },
    logoArea: {
        backgroundColor: 'black'
    },
    scrollable: {
        maxHeight: '100vh',
        overflow: 'auto'
    },
    paddingBottom: {
        paddingBottom: '20px !important'
    }
});

class DashboardPage extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {classes, theme} = this.props;

        const drawer = (
            <div>
                <div className={[classes.toolbar, classes.logoArea].join(' ')}/>
                <SidebarList />
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Posts
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Grid container spacing={24}>
                        <Grid className={classes.scrollable} item md={8}>
                            <Grid container spacing={24}>
                                <Grid item md={12}>
                                    <TagsList/>
                                </Grid>
                                <Grid item md={12}>
                                    <NewPostField/>
                                </Grid>
                                <Grid item md={6}>
                                    <PostCard url="https://farm6.staticflickr.com/5131/5391445158_a502135d37_z.jpg"/>
                                </Grid>
                                <Grid item md={6}>
                                    <PostCard url="https://farm8.staticflickr.com/7213/7163283745_421bba225b_z.jpg"/>
                                </Grid>
                                <Grid item md={6}>
                                    <PostCard url="https://farm9.staticflickr.com/8740/16695514860_7265af2df8_z.jpg"/>
                                </Grid>
                                <Grid item md={6}>
                                    <PostCard url="https://farm7.staticflickr.com/6202/6130427835_2eb09772c6_z.jpg"/>
                                </Grid>
                                <Grid item md={6}>
                                    <PostCard url="https://farm9.staticflickr.com/8645/30258570285_ac3f31a116_z.jpg"/>
                                </Grid>
                                <Grid item md={6}>
                                    <PostCard url="https://farm6.staticflickr.com/5628/20137790814_35f3c87ed2_z.jpg"/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4}>
                            <Grid container spacing={0}>
                                <Grid item md={12}>
                                    <ChatHalf />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </main>
            </div>
        );
    }
}

DashboardPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(DashboardPage);