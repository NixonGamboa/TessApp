import React, { Component } from 'react';
import { View, Text} from 'react-native';
import {connect} from 'react-redux';

import Layout from '../components/description-layout';
import DetailFormat from '../components/description-format';
import AddNote from '../components/add-note-format';
import ILikeBtn from '../components/i-like-it-button';

function mapStateToProps(state){
	console.log(state)
	  return {
	    article:state.article
	}
}

class Description extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	note:'', 
	    }
	}
	handlePress = (article)=> {
		this.props.dispatch({
			type:'ADD_TO_CART',
			payload:{
				pr:article,
			}
		})
		console.log('Vista de carrito')
		this.props.navigation.navigate('Cart')
		}
	onChangeNote = (text) => {
		this.props.dispatch({
			type:'ADD_NOTE_TO_PRODUCT',
			payload:{
				note:text,
			}
		})
	}
 	render() {
    	return (
    		<Layout>
	      		<DetailFormat
	      		 	detail= {this.props.article.description}/>
	      		<AddNote
	      			onChangeNote= {this.onChangeNote} />
	      		<ILikeBtn
	      			onPress={()=>{this.handlePress(this.props.article)}}/>
      		</Layout>
    	);
  	}
}

export default connect(mapStateToProps)(Description);