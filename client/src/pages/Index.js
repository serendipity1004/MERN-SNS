import React from 'react';
import {Grid} from 'material-ui';
import {withStyles} from 'material-ui/styles';

/**
 * Local Imports
 * */
import LeftHalf from '../containers/index/LeftHalf';
import RightHalf from '../components/index/RightHalf';

const styles = theme => ({
    root: {
        height: '100%',
        backgroundColor:'white'
    },
    gridGeneral:{
        height:'100vh'
    }
});

class IndexPage extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item md={6}>
                        <LeftHalf/>
                    </Grid>
                    <Grid item md={6}>
                        <RightHalf/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme:true})(IndexPage)