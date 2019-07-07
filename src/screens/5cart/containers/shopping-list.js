import React, { Component } from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import Layout from '../components/layout-shopping-list';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Article from '../components/article';
import Buttons from '../components/buttons';

function mapStateToProps(state){
  console.log(state)
  return {
      cart:state.cart,
  }
}

class ShoppingList extends Component {
	renderEmpty = () => <Empty text = "No hay articulos" />
	itemSeparator = () => <Separator />
	handlePress = (item) => {
		this.props.dispatch({
			type:'REMOVE_TO_CART',
			payload:{
				id:item.key,
			}
		})
	}
	renderItem = ({item})=> {
		return (
			<Article 
				{...item}
				onPress={()=>{this.handlePress(item)}}
				/>
			)}
	onPressContinue = () => {
		console.log('pasando a vista de formulario')
		this.props.navigation.navigate('RegisterForm')
		console.log('formulario')
		} 
	onPressAddMore = () => {
		console.log('regresando a la Home')
		this.props.navigation.navigate('Home')
		console.log('Home')
		}
	render() {
		return (
			<Layout
			title = "Algun subtitulo para el carrito" >
				<FlatList
					data= {this.props.cart}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent = {this.itemSeparator}
					renderItem={this.renderItem}
					nestedScrollEnabled={true} />
				<Buttons
					onPressAddMore={this.onPressAddMore}
					onPressContinue={this.onPressContinue} />
			</Layout>
	)}
}

export default connect(mapStateToProps)(ShoppingList);