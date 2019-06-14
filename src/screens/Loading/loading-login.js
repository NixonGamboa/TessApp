import React, { Component } from 'react';
import {connect} from 'react-redux';

import Load from '../../sections/loading';


class Log extends Component {
	componentDidMount(){
		if(this.props.user){
			this.props.navigation.navigate('App');
		}else{
			this.props.navigation.navigate('Login');
		}
	}
  	render() {
    	return (
      	<Load />
    	);
  	}
}

function mapStateToProps(state) {
	return{
		user:state.userName
	}
}


export default connect(mapStateToProps)(Log);