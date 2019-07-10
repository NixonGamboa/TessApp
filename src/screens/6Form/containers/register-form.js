import React,{Component} from 'react';
import moment from "moment";
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';


import Form from '../components/form';

function mapStateToProps(state){
  console.log(state)
  return {
      name:state.user.displayName,
      uid:state.user.uid,
      data:state.dataForSend,
      cart:state.cart,
  }
}

class RegisterForm extends Component {
  onCelChange = (text) => {
    this.props.dispatch({
      type:'DATA_FOR_SEND',
      payload:{  celular:text, }
    })
  }
  onAddressChange = (text) => {
    this.props.dispatch({
      type:'DATA_FOR_SEND',
      payload:{  address:text, }
    })
  }
  onDateChange = (date) => {
    this.props.dispatch({
      type:'DATA_FOR_SEND',
      payload:{  date, }
    })
  }
  onTimeChange = (time) => {
    var HHmm24 = moment(time, "h:mm a").format("HHmm")
    var Hm24 = parseFloat(HHmm24, 10)
    if (Hm24 < 600) {
      alert('Lo sentimos... Este horario no esta disponible')
      this.props.dispatch({
        type:'DATA_FOR_SEND',
        payload:{  time:'' }
      })
    }
    else if (Hm24 > 2200) {
      alert('Lo sentimos... Este horario no esta disponible')
      this.props.dispatch({
        type:'DATA_FOR_SEND',
        payload:{  time:'' }
      })
    }
    else{
      this.props.dispatch({
        type:'DATA_FOR_SEND',
        payload:{ time, }
      })
    }
  }
  onPaymentMethod = (itemValue) =>{
    this.props.dispatch({
      type:'DATA_FOR_SEND',
      payload:{  paymentMethod:itemValue, }
    })
  } 
  handlePress = ()=> {
    if (this.props.data.celular.length !== 10  ){
      alert('Por favor ingrese un numero de celular valido')
    }
    else if ( this.props.data.address === ''){
      alert('Por favor ingrese una direccion valida')
    }
    else if ( this.props.data.date === ''){
      alert('Por favor ingrese una fecha de entrega')
    }
    else if ( this.props.data.time === ''){
      alert('Por favor ingrese una hora de entrega')
    }
    else if ( this.props.data.paymentMethod === ''){
      alert('Por favor ingrese un metodo de pago')
    }
    else{
      console.log('valido')
      
      var uid =this.props.uid
      var name =this.props.name
     
      firebase.database().ref('Lista_Usuarios/'+name+uid).push().set(
          {
              datos:this.props.data,
              cart:this.props.cart,
          }
      ).then(()=>{
          console.log('INSERTED!');
          console.log('Vista final')
          this.props.dispatch({
            type:'CLEAR_CART',
          })
          this.props.dispatch({
            type:'CLEAR_DATA_FOR_SEND',
            payload:{
              address: '',
              celular: '',
              date: '',
              paymentMethod: '',
              time: '',
            }
          })
          this.props.navigation.navigate('Finish')
      }).catch((error)=>{
          console.log(error);
          alert('lo sentimos, algo ha salido mal')
      });

      
    }
  }

    
  render(){
    return(
      <Form onCelChange
        celular={this.props.data.celular}
        onCelChange={this.onCelChange}
        address={this.props.data.address}
        onAddressChange={this.onAddressChange}
        date={this.props.data.date}
        onDateChange={this.onDateChange}
        time={this.props.data.time}
        onTimeChange={this.onTimeChange}
        paymentMethod={this.props.data.paymentMethod}
        onPaymentMethod={this.onPaymentMethod}
        handlePress={this.handlePress}
        />
      );
  }
}
export default connect(mapStateToProps)(RegisterForm);