import React,{Component} from 'react';

import Layout from './register-form-layout'
import Form from './containers/register-form';


class RegisterView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Un ultimo paso...'
      }
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