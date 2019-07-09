import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GoogleSigninButton } from 'react-native-google-signin';
import moment from "moment";

import Logo from '../components/logo';
import Layout from '../components/layout-view';

//import Layout from '../components/layout';
import SkipButton from '../components/skip-button';
import GButton from '../components/google-button';

import googleLogin from '../../../firebase/google-signin';

function mapStateToProps(state){
	console.log(state)
	return{
		name:state.user.userName,
		cel:state.user.userCel,
	}
	console.log(state)
}

class Login extends Component {
	componentDidMount(){
	
	}
	onSkip = () => {
		console.log('Skip Login')
		this.props.navigation.navigate('App');
		//por poner al estado redux usuario no activo
		
	}
	signIn = () => {
		console.log('iniciando signIn')
		googleLogin()
		this.props.navigation.navigate('Verify')
		
	}
	render(){
		return(
			<Layout>
				<Logo>
					<SkipButton
					   	onSkip={this.onSkip} />
					<GButton
					   	onPress={this.signIn} />
				</Logo>
			</Layout>
		)
	}
}

export default connect(mapStateToProps)(Login);