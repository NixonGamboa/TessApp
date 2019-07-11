import React,{Component} from 'react';
import {StatusBar} from 'react-native';

import Layout from '../../sections/layout-view'
import Finish from './containers/finish';


class FinishView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Gracias por tu compra.'
      }
  }
  componentWillMount(){
    this.focus = this.props.navigation.addListener('didFocus',()=> {
      StatusBar.setBarStyle('light-content')
      StatusBar.setBackgroundColor('#362779')
    });
  }
  componentWillUnmount(){
    this.focus.remove();
  }
  render(){
    return(
      <Layout>
        <Finish
          navigation={this.props.navigation}
        />
      </Layout>
      );
  }
}
export default FinishView;