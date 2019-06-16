import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GoogleSigninButton } from 'react-native-google-signin';

import Logo from '../components/logo';
import Layout from '../components/layout';
import NameInput from '../components/name-input';
import CelInput from '../components/cel-input';
import OkBtn from '../components/ok-btn';
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
	onChangeName = (text) => {
		this.props.dispatch({
			type:'SET_USERNAME',
			payload:{
				userName:text,
			}
		})
	}
	onChangeCel = (text) => {
		this.props.dispatch({
			type:'SET_USERCEL',
			payload:{
				userCel:text,
			}
		})
	}
	handlePress = ()=> {
		if (this.props.name === '' ){
			alert('Por favor ingrese un nombre valido')
		}
		else if (this.props.cel.length !== 10){
			alert('Por favor ingrese un numero de celular valido')
		}
		else{
			console.log('valido')
			//AQUI ES DONDE SE PUEDE HACER UN LLAMADO FETCH AL API PARA VALIDAR
			this.props.dispatch({
				type:'SET_ACTIVEUSER',
				payload:{
					userActive:true,
				}
			})
			this.props.navigation.navigate('Home')
			console.log('Home')
		}

	}
	signIn = () => {
		console.log('iniciando signIn')
		googleLogin()
		this.props.navigation.navigate('Verify')
		
	}
	render(){
		return(
			<Layout>
				<Logo/>
				<Layout> 
					<NameInput
						onChangeName= {this.onChangeName}
						name={this.props.name} />
					<CelInput
						onChangeCel={this.onChangeCel} 
						cel={this.props.cel} />
					<OkBtn 
						onPress={this.handlePress} />
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