import React,{Component} from 'react';

import Layout from '../../sections/layout-view'
import Profile from './containers/about';


class ProfileView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Detallitos App.'
      }
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