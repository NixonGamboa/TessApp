import React, { Component } from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/layout-shopping-list';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Article from '../components/article';
import Buttons from '../components/buttons';

class ShoppingList extends Component {
	renderEmpty = () => <Empty text = "No hay articulos" />
	itemSeparator = () => <Separator />
	renderItem = ({item})=> {
		return (
			<Article {...item} />
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
					data= {this.props.list}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent = {this.itemSeparator}
					renderItem={this.renderItem} />
				<Buttons
					onPressAddMore={this.onPressAddMore}
					onPressContinue={this.onPressContinue} />
			</Layout>
	)}
}

export default ShoppingList;