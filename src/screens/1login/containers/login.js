import React, {Component} from 'react';
import {connect} from 'react-redux';

import Logo from '../components/logo';
import Layout from '../components/layout';
import NameInput from '../components/name-input';
import CelInput from '../components/cel-input';
import OkBtn from '../components/ok-btn';
import moment from "moment";

function mapStateToProps(state){
	console.log(state)
	return{
		name:state.userName,
		cel:state.userCel,
	}
}

class Login extends Component {
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
				</Layout>
			</Layout>
		)
	}
}

export default connect(mapStateToProps)(Login);