import React,{Component} from 'react';

import Layout from './finish-layout'
import Finish from './containers/finish';


class FinishView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Gracias por tu compra.'
      }
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