import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avi from '../../components/Avi';
import Avi2 from '../../components/Avi2';
import Avi3 from '../../components/Avi3';
import BottomNav from '../../components/BottomNav';
import Form from '../../components/Form'
import Input from '../../components/Input'
import "../../components/signin.css"; 
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
			<MuiThemeProvider >
			<div className="profile-div">
				<div className="name-form">
					<Avi/>
					<Form />
					<DropForm />
				</div>
				<Avi2 />
				<div className="car-form">
					<Input />
				</div>
				<div className="bottom-nav">
					<BottomNav />
				</div>
				

			</div>
			</MuiThemeProvider>
		)
	}
};

export default Profile