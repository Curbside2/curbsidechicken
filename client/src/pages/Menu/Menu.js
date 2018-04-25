import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from '../../components/GridList';
import Steps from '../../components/Steps';

class Menu extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Steps />
			</MuiThemeProvider>
		)
		
	}
};

export default Menu