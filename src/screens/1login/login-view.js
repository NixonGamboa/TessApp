import React, {Component} from 'react';

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
	render(){
		return(
			<Login
					navigation={this.props.navigation}/>
		)
	}
}

export default LoginView;