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
	componentDidMount(){
		
	}
	
	handlePress = (item) => {
		this.props.dispatch({
			type:'SET_SELECTED_PRODUCT',
			payload:{
				article:item,
			}
		})
		console.log('Cambiando a vista de articulo')
		this.props.navigation.navigate('Article',{
			title:item.title })
		console.log('Vista de articulo')

	}
	renderItem = ({item}) => {
		return(
			<Product 
				{...item}
				onPress={()=>{this.handlePress(item)}} 
				/>
		)
	}
	

	render(){

		return(
			<Layout 
			title= "Tap en el producto para mas informacion"
			>
				<FlatList
				 	data={this.props.list}
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