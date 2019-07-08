import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GoogleSigninButton } from 'react-native-google-signin';

import Logo from '../components/logo';
import Layout from '../components/layout';
import moment from "moment";

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
	signIn = () => {
		console.log('iniciando signIn')
		var us =  googleLogin()
		console.log('Afuera')
		console.log(us)
		this.props.navigation.navigate('Verify')
		
	}
	render(){
		return(
			<Layout>
				<Logo/>
				<Layout> 
					
					<GoogleSigninButton
					    style={{ width: 240, height: 50 }}
					    size={GoogleSigninButton.Size.Wide}
					    color={GoogleSigninButton.Color.Light}
					    onPress={this.signIn}
					    disabled={false} />
				</Layout>
			</Layout>
		)
	}
}

export default connect(mapStateToProps)(Login);