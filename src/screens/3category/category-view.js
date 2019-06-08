import React,{Component} from 'react';

import Layout from '../../sections/layout-view'
import ProductsList from './containers/products-list';


class VistaCat extends Component {
	static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title')
    	}
	}
	render(){
		return(
			<Layout>
				<ProductsList
					navigation={this.props.navigation}/>
			</Layout>
			);
	}
}
export default VistaCat;