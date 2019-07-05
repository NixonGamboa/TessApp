import React,{Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {connect} from 'react-redux';

import Product from '../components/product';
import Layout from '../components/layout';

function mapStateToProps(state){
	console.log(state)
	  return {
	    list:state.products
	  }
	}

class Products extends Component {
	
	handlePress = ()=> {
		console.log('Cambiando a vista de articulo')
		this.props.navigation.navigate('Article',{
			title:'Nombre del Articulo'
		})
		console.log('Vista de articulo')

	}
	renderItem = ({item}) => {
		return(
			<Product 
				onPress={this.handlePress}
				{...item} />
		)
	}
	

	render(){
		const list=[
		{
			title:'La Caneca',
			price:60,
			dir: require('../../../../assets/images/products/para-ellos/bote.jpg'),
			key:'1',
		},
		{
			title:'Sentidos',
			price:40,
			dir: require('../../../../assets/images/products/para-ellos/cincosentidos.jpg'),
			key:'2',
		},
		{
			title:'Cupones',
			price:20,
			dir: require('../../../../assets/images/products/para-ellos/cupones.jpg'),
			key:'3',
		},
		{
			title:'Globos',
			price:40,
			dir: require('../../../../assets/images/products/para-ellos/globos.jpg'),
			key:'4',
		},
		{
			title:'Machotel',
			price:120,
			dir: require('../../../../assets/images/products/para-ellos/pack.jpg'),
			key:'5',
		},
		{
			title:'Recuerda',
			price:50,
			dir: require('../../../../assets/images/products/para-ellos/portaretrato.jpg'),
			key:'6',
		},
		{
			title:'Ramo',
			price:40,
			dir: require('../../../../assets/images/products/para-ellos/ramo.jpg'),
			key:'7',
		},
		{
			title:'Para Todos',
			price:80,
			dir: require('../../../../assets/images/products/para-ellos/torta.jpg'),
			key:'8',
		},
		
		]
		return(
			<Layout 
			title= "Tap en el producto para mas informacion"
			>
				<FlatList
				 	data={list}
				 	numColumns={2}
				 	renderItem={this.renderItem}
				 	scrollEnabled={true}
				 	nestedScrollEnabled={true}
				/>
			</Layout>
		);
	}
}

export default connect(mapStateToProps)(Products);