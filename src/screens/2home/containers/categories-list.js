import React,{Component} from 'react';
import {FlatList, TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';

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
	handlePress = (item) => {
		this.props.dispatch({
			type:'SET_SELECTED_CATEGORY',
			payload:{
				category:item.title,
				nameList:item.nombreLista,
			}
		})
		console.log('Cambiando a vista de categoria')
		this.props.navigation.navigate('Category',{
			title:item.title })
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
				 	ListEmptyComponent={<ActivityIndicator size={32} color={'#362779'}  />}
				 	numColumns={2}
				 	renderItem={this.renderItem}
				 	scrollEnabled={true}
				 	nestedScrollEnabled={true}
				/>
			</Layout>
		);
	}
}

export default connect(mapStateToProps)(Categories);