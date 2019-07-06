import React,{Component} from 'react';
import {StyleSheet } from 'react-native';

import Layout from '../../sections/layout-view';
import PhotoList from './containers/photo-list';
import Description from './containers/description';

class ProductView extends Component {
	static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title')
        
      }
  }

	render(){
		return(
			<Layout>
				<PhotoList />
				<Description 
          navigation={this.props.navigation} />
			</Layout>
		);
	}
}
export default ProductView;
