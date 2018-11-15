import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import Content from '../Content/Content';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: '5px 20px',
        marginLeft: '100px'
      },
  });

class Sidebar extends Component {
   constructor(props) {
    super(props);
    this.state = {
        checked: []
    };
   }

   handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        >
        <div/>
        <div className="sidebarHeader"> 
            Filters
        </div>
        <Divider />
        <div className="sidebarListHeader">
            Gender
        </div>
        <List>
        {['Men', 'Women', 'Boys', 'Girls'].map(value => (
            <ListItem key={value} className="sidebarList" role={undefined} dense button onClick={this.handleToggle(value)}>
                <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText primary={`${value}`} />
            </ListItem>
        ))}
        </List>
        <Divider />
        <div className="sidebarListHeader">
            Categories
        </div>
        <List>
        {['Trousers', 'Skirts', 'Saree', 'Shirt'].map(value => (
            <ListItem key={value} className="sidebarList" role={undefined} dense button onClick={this.handleToggle(value)}>
                <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText primary={`${value}`} />
            </ListItem>
        ))}
        </List>
        <Divider />
        <div className="sidebarListHeader">
            Brands
        </div>
        <List>
        {['Fab India', 'Zara', 'Vero Moda', 'Forever 21'].map(value => (
            <ListItem key={value} className="sidebarList" role={undefined} dense button onClick={this.handleToggle(value)}>
                <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText primary={`${value}`} />
            </ListItem>
        ))}
        </List>
        </Drawer>
        <main className={classes.content}>
          <Content />
        </main>
    </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);