import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';

import Load from '../../sections/loading';


class Log extends Component {
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
				this.props.navigation.navigate('Login');

		  	}
		});
	  	
  		//usando redux en la actualizacin V2.0
		/*if(this.props.user){
			this.props.navigation.navigate('App');
		}else{
			this.props.navigation.navigate('Login');
		}*/
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