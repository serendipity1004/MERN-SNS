import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {
        // background: '#2b5876',
        // background: '-webkit-linear-gradient(to right, #4e4376, #2b5876)',
        // background: 'linear-gradient(to right, #4e4376, #2b5876)',
        backgroundColor: 'hsl(2, 57%, 40%)',
        backgroundImage: `repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.2) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px)`,
        height: '100vh',
        // display:'flex',
        // flexDirection:'column',
        // justifyContent:'center'
    },
    image:{
        width:'50em'
    }
});

class RightHalf extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                {/*<img className={classes.image} src="/laptop-image.png"/>*/}
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(RightHalf);