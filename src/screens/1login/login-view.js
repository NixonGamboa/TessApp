import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import Login from './containers/login'

class LoginView extends Component {
	 constructor(props) {
    super(props);
    this.cel = React.createRef();
	}
	static navigationOptions = ({ navigation }) => {
	    return {
	        header: null,
	    	}
	}
	componentWillMount(){
		this.focus = this.props.navigation.addListener('didFocus',()=> {
			StatusBar.setBarStyle('light-content')
			StatusBar.setBackgroundColor('#362779')
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