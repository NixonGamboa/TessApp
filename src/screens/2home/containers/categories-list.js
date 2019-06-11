import React,{Component} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';

import {connect} from 'react-redux';

import Category from '../components/category';
import Layout from '../components/categories-layout';


function mapStateToProps(state){
	return {
		list:state.categories
	}
}

class Categories extends Component {
	handlePress = ()=> {
		console.log('Cambiando a vista de categoria')
		this.props.navigation.navigate('Category',{
			title:'Categorias'
		})
		console.log('Vista de categoria')
		//this.props.dispatch({
		//	type:'SET_SELECTED_CATEGORY',
		//	payload:{
		//		category:'item',
		//	}
		//})
	}
	keyExtractor = item => item.id.toString()
	renderItem = ({item}) => {
		return(
			<Category
				onPress={this.handlePress()} 
				{...item} />
		)
	}
	render(){
		
		return(
			<Layout 
			title= "Bienvenido! Selecciona una categoría."
			>
				<FlatList
				 	data={this.props.list}
				 	keyExtractor = {this.keyExtractor}
				 	numColumns={2}
				 	renderItem={this.renderItem}
				 	scrollEnabled={true}
				/>
			</Layout>
		);
	}
}

export default connect(mapStateToProps)(Categories);