import React,{Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
import { NavigationActions } from 'react-navigation';

import ProfileEmpty from '../components/profile-empty';
import ProfileComponent from '../components/profile-component';
import stateInit from '../../../redux/state-init';


function mapStateToProps(state){
  return {
    user:state.user
  }
}

const navigateAction = NavigationActions.navigate({
  routeName: 'Verify',
});

const thankText="Tu apoyo nos hace cada dia mejores personas, esperamos que tu confianza aumente con cada uno de nuestros servicios. Te contactaremos para confirmar tú pedido."
class Finish extends Component {
  signOutFirebase = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
        console.log(e);
    }
  }

  //// Configurando signout de Google signin,
  //borrando credenciales y revocando permisos de la app
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess(); //para eliminar permisos de la aplicacion
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  }
  handlePress = ()=> {
    this.signOutFirebase()
    this.signOut()

    this.props.dispatch({
          type:'LOG_OUT',
          payload: stateInit,
        })
    this.props.navigation.navigate('Verify'); 
    console.log(this.props.state)
    
    //console.log('pedido finalizado, volviendo a home')
    //this.props.navigation.navigate('Home')
    //console.log('Home')
    }
  toLogin = ()=> {
    console.log('to login')
    console.log(this.props.navigation.dangerouslyGetParent().state)
    console.log(this.props.navigation.navigate('Login'))
    this.props.navigation.navigate('Login');
    }
  result = (isVerify)=>{
    if (isVerify) {
      return(
        <ProfileComponent
          handlePress={this.handlePress}
          user={this.props.user} />
        );
    }else{
      return(
        <ProfileEmpty
          toLogin={this.toLogin} />
        );
    }
  }
  render(){
    return this.result(this.props.user.emailVerified);
  }
}
export default connect(mapStateToProps)(Finish);