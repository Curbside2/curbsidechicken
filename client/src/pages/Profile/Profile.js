import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avi from '../../components/Avi';
import BottomNav from '../../components/BottomNav';
import Form from '../../components/Form';
import Input from '../../components/Input';
import DropForm from '../../components/DropForm';

const styles = {
	carForm: {
		marginBottom: 150,
		marginLeft:50,
		marginRight: 50
	},
	nameForm: {
		marginBottom: 50,
		marginLeft: 50,
		marginRight: 50
	},
	BottomNav: {
		textAlign: 'center'
	},
}

class Profile extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div style={styles.nameForm}>
					<Avi/>
					<Form />
					<DropForm />
				</div>
				<div style={styles.carForm}>
					<Avi />
					<Input />
				</div>
				<div style={styles.BottomNav}>
					<BottomNav />
				</div>
			</MuiThemeProvider>
		)
	}
};

export default Profile