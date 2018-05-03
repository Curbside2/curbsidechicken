import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avi from '../../components/Avi';
import Avi2 from '../../components/Avi2';
import BottomNav from '../../components/BottomNav';
import Form from '../../components/Form'
import Input from '../../components/Input'
import "../../components/signin.css"; 
import DropForm from '../../components/DropForm';
import { userNameBlock } from '../../components/SignUp';


class Profile extends Component {

	render() {
		return (
			<MuiThemeProvider >
			<div className="profile-div">
				<div>
					<userNameBlock />
				</div>
				<div className="name-form">
					<Avi/>
					<Form />
				</div>
				<div className="car-form">
					<Avi2 />
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