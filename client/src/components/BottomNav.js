import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
// import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { Link } from 'react-router-dom'

const recentsIcon = <FontIcon className="material-icons">Place</FontIcon>;
const settingsIcon = <FontIcon className="material-icons">Settings</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNav extends Component {
  state = {
    
  };

  render() {
    return (
        <Paper zDepth={4}>
          <BottomNavigation >
            <Link to='/menu'>
              <BottomNavigationItem
                 label="New Order"
                 icon={recentsIcon}
              />
            </Link>
            <Link to='/menu'>
              <BottomNavigationItem
                 label="Update Settings"
                 icon={settingsIcon}
              />
            </Link>
          </BottomNavigation>
        </Paper>
    );
  }
}

export default BottomNav;