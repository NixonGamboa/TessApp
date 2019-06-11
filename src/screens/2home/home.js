import React,{Component} from 'react';

import Categories from './containers/categories-list';
import CarouselAds from './containers/carousel-ads';
import Layout from '../../sections/layout-view';



class Home extends Component {
	
    static navigationOptions = ({ navigation }) => {
    return {
        //title: navigation.getParam('name')
    	title:'TessApp',
    	}
	}
	render(){
		return (
			<Layout>
        		<CarouselAds />
        		<Categories
        			navigation={this.props.navigation} />
			</Layout>
		);
	}
}
export default Home;