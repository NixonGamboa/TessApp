import React,{Component} from 'react';
import moment from "moment";

import Form from '../components/form';


class RegisterForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:'',
      time:'',
      paymentMethod:'',
      address:'',
      }
    }
  onAddressChange = (text) => this.setState({address:text})
  onDateChange = (date) => this.setState({date: date})
  onTimeChange = (time) => {
    var HHmm24 = moment(time, "h:mm a").format("HHmm")
    var Hm24 = parseFloat(HHmm24, 10)
    if (Hm24 < 600) {
      alert('Lo sentimos... Este horario no esta disponible')
      this.setState({time: ''}) 
    }
    else if (Hm24 > 2200) {
      alert('Lo sentimos... Este horario no esta disponible')
      this.setState({time: ''}) 

    }
    else{
      this.setState({time: time})
    }
  }
  onPaymentMethod = (itemValue) => this.setState({paymentMethod: itemValue})
  handlePress = ()=> {
    console.log('Vista final')
    this.props.navigation.navigate('Finish')
    }
  render(){
    return(
      <Form
        date={this.state.date}
        onAddressChange={this.onAddressChange}
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