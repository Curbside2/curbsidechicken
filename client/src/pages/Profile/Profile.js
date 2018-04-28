import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avi from '../../components/Avi';

class Profile extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Avi />
			</MuiThemeProvider>
		)
	}
};

export default Profile