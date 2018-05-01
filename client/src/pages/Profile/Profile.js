import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avi from '../../components/Avi';
import BottomNav from '../../components/BottomNav';
import Form from '../../components/Form'
import Input from '../../components/Input'

class Profile extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Avi />
					<Form />
				</div>
				<div>
					<Avi />
					<Input />
				</div>
				<div>
					<BottomNav />
				</div>
			</MuiThemeProvider>
		)
	}
};

export default Profile