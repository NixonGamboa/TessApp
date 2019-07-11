import React,{Component} from 'react';
import {StatusBar} from 'react-native';

import Layout from '../../sections/layout-view';
import PhotoList from './containers/photo-list';
import Description from './containers/description';

class ProductView extends Component {
	static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title')
        
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
				<PhotoList />
				<Description 
          navigation={this.props.navigation} />
			</Layout>
		);
	}
}
export default ProductView;
