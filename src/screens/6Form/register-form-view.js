import React,{Component} from 'react';
import {StatusBar} from 'react-native';

import Layout from '../../sections/layout-view'
import Form from './containers/register-form';


class RegisterView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Un ultimo paso...',
      headerStyle: {
        backgroundColor: '#362779',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 28,
      fontFamily: 'cursive',
      color: '#fff',
          //fontWeight: 'bold',
      },
      }
  }
  componentWillMount(){
    this.focus = this.props.navigation.addListener('didFocus',()=> {
      StatusBar.setBarStyle('light-content')
      StatusBar.setBackgroundColor('#00000033')
      StatusBar.setTranslucent(true)
    });
  }
  componentWillUnmount(){
    this.focus.remove();
  }
  render(){
    return(
      <Layout>
        <Form
          navigation={this.props.navigation}/>
      </Layout>
      );
  }
}
export default RegisterView;