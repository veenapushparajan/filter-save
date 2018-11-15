import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './ContentData';

import './Content.css';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

  class Content extends Component {
    render() {
        const { classes } = this.props;
        return (
        <div className={classes.root}>
            <GridList cellHeight={180} cols={3}>
            {tileData.map(tile => (
                <GridListTile key={tile.img} className="cardHolder">
                <img src={tile.img} alt={tile.title} />
                </GridListTile>
            ))}
            </GridList>
        </div>
      );
    }
  }
  
  Content.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Content);