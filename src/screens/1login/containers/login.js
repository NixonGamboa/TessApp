import React, {Component} from 'react';

import Logo from '../components/logo';
import Layout from '../components/layout';
import NameInput from '../components/name-input';
import CelInput from '../components/cel-input';
import OkBtn from '../components/ok-btn';
import moment from "moment";

class Login extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	name:'',
	    	cel:'',
	    }
	}
	handlePress = ()=> {
			//funcion para el boton de login
		if (this.state.name === '' ){
			alert('Por favor ingrese un nombre valido')
		}
		else if (this.state.cel.length !== 10){
			alert('Por favor ingrese un numero de celular valido')
		}
		else{
			console.log('valido')
			console.log(this.state)
			console.log('cambiando a Home')
			this.props.navigation.navigate('Home')
			console.log('Home')
		}

	}
	onChangeName = (text) => this.setState({name:text})
	onChangeCel = (text) => this.setState({cel:text})
	render(){
		return(
			<Layout>
				<Logo/>
				<Layout> 
					<NameInput
						onChangeName= {this.onChangeName} />
					<CelInput
						onChangeCel={this.onChangeCel} />
					<OkBtn 
						onPress={this.handlePress}/>
				</Layout>
			</Layout>
		)
	}
}

export default Login;