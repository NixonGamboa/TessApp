import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';

import Load from '../../sections/loading';


class Log extends Component {
	sleep = () => {
			var milliseconds = 3000;
			var start = new Date().getTime();
			for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds) {
			   	break;
		  	}
		}
	}
	componentDidMount(){
		firebase.auth().onAuthStateChanged((user) => {
	  		console.log(user)
	  		//por poner al estado redux usuario actiuvo o no activo
	  		if (user) {
		    // Signed in
		    	console.log('autenticado')
		    	this.props.dispatch({
					type:'SET_USERGOOGLE',
					payload:{
						user:user._user,
					}
				})
		    	this.props.navigation.navigate('App');
		  	} else {
		    // Signed out
		    	console.log('no autenticado')
		    	this.props.dispatch({
					type:'SET_USERGOOGLE',
					payload:{
						user:{},
					}
				})

				this.sleep()
				this.props.navigation.navigate('Login');

		  	}
		});
	}
  	render() {
    	return (
      	<Load />
    	);
  	}
}

function mapStateToProps(state) {
	return{
		//user:state.userName
	}
}


export default connect(mapStateToProps)(Log);