import React,{Component} from 'react';
import {StatusBar} from 'react-native';

import Layout from '../../sections/layout-view';
import ShoppingList from './containers/shopping-list';



class ShoppingView extends Component {
	
    static navigationOptions = ({ navigation }) => {
    return {
        title: 'CARRITO'
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
				<ShoppingList 
                    navigation={this.props.navigation} />
			</Layout>
		);
	}
}
export default ShoppingView;
