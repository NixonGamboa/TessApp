import React,{Component} from 'react';

import Form from '../components/form';


class RegisterForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:'',
      time:'',
      paymentMethod:'',
      }
    }
  onDateChange = (date) => this.setState({date: date})
  onTimeChange = (time) => this.setState({time: time})
  onPaymentMethod = (itemValue) => this.setState({paymentMethod: itemValue})
  handlePress = ()=> {
    console.log(this.state)
    alert('Finalizando la compra')
    console.log('Cambiando a vista final')
    this.props.navigation.navigate('Finish')
    console.log('Vista final')
    }
  render(){
    return(
      <Form
        date={this.state.date}
        onDateChange={this.onDateChange}
        time={this.state.time}
        onTimeChange={this.onTimeChange}
        paymentMethod={this.state.paymentMethod}
        onPaymentMethod={this.onPaymentMethod}
        handlePress={this.handlePress}
        />
      );
  }
}
export default RegisterForm;