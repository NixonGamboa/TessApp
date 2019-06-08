import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Layout from '../components/description-layout';
import DetailFormat from '../components/description-format';
import AddNote from '../components/add-note-format';
import ILikeBtn from '../components/i-like-it-button';

class Description extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	note:'', 
	    }
	}
	handlePress = ()=> {
		console.log(this.state)
		alert('Agregado al carrito')
		console.log('Cambiando a vista de carrito')
		this.props.navigation.navigate('Cart')
		console.log('Vista de carrito')
		}
	onChangeNote = (text) => this.setState({note:text})
 	render() {
    	return (
    		<Layout>
	      		<DetailFormat
	      		 	detail= {this.props.detail}/>
	      		<AddNote
	      			onChangeNote= {this.onChangeNote} />
	      		<ILikeBtn
	      			onPress={this.handlePress}/>
      		</Layout>
    	);
  	}
}

export default Description;