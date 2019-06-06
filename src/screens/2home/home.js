import React,{Component} from 'react';
import {ImageBackground,  View,Text} from 'react-native';

import Categories from './categories/containers/categories-list';
import MyCarousel from './prueba';

import Layout from './layout-home';

const lista=[{	title:'Para Ella',
				dir: require('../../../assets/images/para-ella3.jpg'),
				key:'1',},
			{	title:'Para El',
				dir: require('../../../assets/images/para-el2.jpg'),
				key:'2',},
			{	title:'Mamá',
				dir: require('../../../assets/images/mama3.jpg'),
				key:'3',},
			{	title:'Papá',
				dir: require('../../../assets/images/papa2.jpg'),
				key:'4',},
			{	title:'Cumpleaños',
				dir: require('../../../assets/images/cumpleanos.jpg'),
				key:'5',},
			{	title:'Aniversario',
				dir: require('../../../assets/images/aniversarios.jpg'),
				key:'6',},
			{	title:'Bodas',
				dir: require('../../../assets/images/bodas.jpg'),
				key:'7',},
			{	title:'Empresas',
				dir: require('../../../assets/images/empresas.jpg'),
				key:'8',},]

class Home extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		list:lista,
    	}
    }
    static navigationOptions = ({ navigation }) => {
    return {
        //title: navigation.getParam('name')
    	title:'TessApp',
    	}
	}
	render(){
		return (
			<Layout>
        		<MyCarousel/>
        		<Categories
        			navigation={this.props.navigation}
        			list={this.state.list}
        			/>
			</Layout>
		);
	}
}
export default Home;