import React,{Component} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';

import {connect} from 'react-redux';

import Category from '../components/category';
import Layout from '../components/categories-layout';


function mapStateToProps(state){
	console.log(state)
	return {
		list:state.categories
	}
}

class Categories extends Component {
	keyExtractor = item => item.id.toString()
	handlePress = item=> {
		console.log('Cambiando a vista de categoria')
		this.props.navigation.navigate('Category',{
			title:'Categorias' })
		this.props.dispatch({
			type:'SET_SELECTED_CATEGORY',
			payload:{
				category:item,
			}
		})
	}
	renderItem = ({item}) => {
		return(
			<Category
				{...item} 
				onPress={()=>{this.handlePress(item)}} 
				/>
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