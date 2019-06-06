import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Layout from '../components/description-layout';
import DetailFormat from '../components/description-format';
import AddNote from '../components/add-note-format';
import ILikeBtn from '../components/i-like-it-button';

class Description extends Component {
	handlePress = ()=> {
		alert('Agregado al carrito')
		console.log('Cambiando a vista de carrito')
		this.props.navigation.navigate('Cart')
		console.log('Vista de carrito')
		}
 	render() {
    	return (
    		<Layout>
	      		<DetailFormat detail= {this.props.detail}/>
	      		<AddNote />
	      		<ILikeBtn
	      			onPress={this.handlePress}/>
      		</Layout>
    	);
  	}
}

export default Description;