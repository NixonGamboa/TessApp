import React,{Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';


import TahnkYou from '../components/thank-you';
import stateInit from '../../../redux/state-init';


function mapStateToProps(state){
  return {
    state:state
  }
}


const thankText="Tu apoyo nos hace cada dia mejores personas, esperamos que tu confianza aumente con cada uno de nuestros servicios. Te contactaremos para confirmar tú pedido."
class Finish extends Component {
    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }
  handlePress = ()=> {
    this.props.dispatch({
      type:'SET_LOGOUT',
      payload:{
        state : stateInit,
      }
    })
    
    this.signOutUser()
    this.props.navigation.navigate('Verify'); 
    console.log(this.props.state)
    
    //console.log('pedido finalizado, volviendo a home')
    //this.props.navigation.navigate('Home')
    //console.log('Home')
    }
  render(){
    return(
      <TahnkYou
        handlePress={this.handlePress}
        txt={thankText}
        />
      );
  }
}
export default connect(mapStateToProps)(Finish);