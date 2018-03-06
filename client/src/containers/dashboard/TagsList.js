import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import Paper from 'material-ui/Paper';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },

});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
    {
        img: 'https://farm9.staticflickr.com/8751/16942195552_d27bc55d69_c.jpg',
        title: 'flowers',
        author: 'someone'
    },
    {
        img: 'https://farm3.staticflickr.com/2872/9667274895_5389996106_z.jpg',
        title: 'laptop',
        author: 'someone'
    },
    {
        img: 'https://farm5.staticflickr.com/4096/5413263933_fdde29184f_z.jpg',
        title: 'photography',
        author: 'someone'
    },
    {
        img: 'https://farm7.staticflickr.com/6046/6297905929_d3d66a1c37_z.jpg',
        title: 'spiral',
        author: 'someone'
    },
    {
        img: 'https://farm3.staticflickr.com/2820/8752172138_ddd0abdd7c_z.jpg',
        title: 'pizza',
        author: 'someone'
    }
];


function SingleLineGridList(props) {
    const {classes} = props;

    return (
        <div>
            <Paper>
                <div className={classes.root}>
                    <GridList className={classes.gridList} cols={2.5}>
                        {tileData.map(tile => (
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title}/>
                                <GridListTileBar
                                    title={tile.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton>
                                            <StarBorderIcon className={classes.title}/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Paper>
        </div>
    );
}

SingleLineGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);