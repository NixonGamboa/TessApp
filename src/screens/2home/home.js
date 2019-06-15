import React,{Component} from 'react';
import {connect} from 'react-redux';


import Categories from './containers/categories-list';
import CarouselAds from './containers/carousel-ads';
import Layout from '../../sections/layout-view';
import API from '../../utils/api';



class Home extends Component {
	async componentDidMount(){
        const ads = await API.getAds(10);
        this.props.dispatch({
          type:'SET_SUGGESTION_LIST',
          payload:{
            ads
          }
        })
        const categories = await API.getCategories();
        this.props.dispatch({
          type:'SET_CATEGORY_LIST',
          payload:{
            categories
          }
        })
      }
    static navigationOptions = ({ navigation }) => {
    return {
        //title: navigation.getParam('name')
    	title:'TessApp',
    	header: null,
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
export default connect(null)(Home);