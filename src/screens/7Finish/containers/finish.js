import React,{Component} from 'react';
import {connect} from 'react-redux';

import TahnkYou from '../components/thank-you';
import stateInit from '../../../redux/state-init';



const thankText="Tu apoyo nos hace cada dia mejores personas, esperamos que tu confianza aumente con cada uno de nuestros servicios. Te contactaremos para confirmar tú pedido."
class Finish extends Component {
  handlePress = ()=> {
    alert('Volviendo a Home')
    this.props.dispatch({
      type:'SET_LOGOUT',
      payload:{
        state : stateInit,
      }
    })
    this.props.navigation.navigate('Verify')
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
export default connect(null)(Finish);