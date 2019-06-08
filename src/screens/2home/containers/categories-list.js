import React,{Component} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';

import Category from '../components/category';
import Layout from '../components/categories-layout';

class Categories extends Component {
	handlePress = ()=> {
		console.log('Cambiando a vista de categoria')
		this.props.navigation.navigate('Category',{
			title:'Nombre de Categoria'
		})
		console.log('Vista de categoria')

	}
	renderItem = ({item}) => {
		return(
			<Category
				onPress={this.handlePress} 
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
				 	numColumns={2}
				 	renderItem={this.renderItem}
				 	scrollEnabled={true}
				/>
			</Layout>
		);
	}
}

export default Categories;