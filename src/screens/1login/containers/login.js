import React, {Component} from 'react';
import {ScrollView, TouchableOpacity,ImageBackground, Text, View, StyleSheet,Image} from 'react-native';

import Layout from '../layout-login';
import NameInput from '../components/name-input';
import CelInput from '../components/cel-input';
import OkBtn from '../components/ok-btn';

class Login extends Component {
	 constructor(props) {
    super(props);
    this.cel = React.createRef();
	}
	handlePress = ()=> {
		//funcion para el boton de login
		console.log('cambiando a Home')
		this.props.navigation.navigate('Home')
		console.log('Home')
	}
	onEndName = ()=> {		 //verificar un nombre valido 
 		console.log('nombre escrito') 
	}
	render(){
		return(
			<Layout>
				<View style={styles.logo} >
					<Image
						style={styles.imageLogo}
						source = {require('../../../../assets/images/logo5.png')} />
				</View>		
				<View style={styles.layout} > 
					<NameInput
						onEndName= {this.onEndName} />
					<CelInput

					/>
					<OkBtn 
						onPress={this.handlePress}/>
				</View>
			</Layout>
			)
	}

}

const styles =StyleSheet.create({
	
	logo:{
		flex: 1,
		/*borderColor: 'red',
		borderWidth: 3,*/
		margin:10,
		padding:0,
		justifyContent: 'flex-start',
		alignItems: 'center',  


	},
	imageLogo:{
		width:280,
		height:280,
		resizeMode: 'contain',
		borderColor: '#000000',
		
	},
	layout:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',

		/*borderColor: 'red',
		borderWidth: 3,*/
	}
})

export default Login;