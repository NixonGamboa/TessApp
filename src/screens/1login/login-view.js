import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import Login from './containers/login'

class LoginView extends Component {
	
	static navigationOptions = ({ navigation }) => {
	    return {
	        header: null,
	    	}
	}
	componentWillMount(){
		this.focus = this.props.navigation.addListener('didFocus',()=> {
			StatusBar.setBarStyle('light-content')
			StatusBar.setBackgroundColor('#00000033')
			StatusBar.setTranslucent(true)
		});
	}
	componentWillUnmount(){
		this.focus.remove();
	}
	render(){
		return(
			<Login
					navigation={this.props.navigation}/>
		)
	}
}

export default LoginView;