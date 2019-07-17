import React,{Component} from 'react';
import {StatusBar} from 'react-native';

import Layout from '../../sections/layout-view'
import Profile from './containers/profile';


class ProfileView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Gracias por tu compra.'
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
        <Profile
          navigation={this.props.navigation}
        />
      </Layout>
      );
  }
}
export default ProfileView;