import React, {Component} from 'react';

import Layout from '../../sections/layout-view';
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
			<Layout>
				<Login
					navigation={this.props.navigation}/>
			</Layout>
		)
	}
}

export default LoginView;