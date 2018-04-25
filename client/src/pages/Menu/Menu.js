import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from '../../components/GridList';

class Menu extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<GridList />
			</MuiThemeProvider>
		)
		
	}
};

export default Menu