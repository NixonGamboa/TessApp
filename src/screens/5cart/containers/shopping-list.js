import React, { Component } from 'react';
import {FlatList, Alert} from 'react-native';
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
      userActive:state.user.emailVerified,
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
		if(this.props.userActive === true){
			if (this.props.cart.length > 0){
				console.log('pasando a vista de formulario')
				this.props.navigation.navigate('RegisterForm')
				console.log('formulario')
			}else{
				Alert.alert(
					'CARRITO VACIO',
					'Por favor agregue elementos al carrito',
					[
						{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
					    {text: 'OK', onPress: () => this.props.navigation.navigate('Home')}
					],
				);
			}
		}else{
			Alert.alert(
					'REGISTRATE',
					'Por favor accede con google para continuar con tu compra',
					[
						{text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), },
						{text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
					    
					],
				);
		}
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