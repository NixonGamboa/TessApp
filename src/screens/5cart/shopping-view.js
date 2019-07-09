import React,{Component} from 'react';

import Layout from '../../sections/layout-view';
import ShoppingList from './containers/shopping-list';



class ShoppingView extends Component {
	
    static navigationOptions = ({ navigation }) => {
    return {
        title: 'Tu Carrito'
      }
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
