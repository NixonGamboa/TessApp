import React from 'react';
import {View, ImageBackground, Text, StyleSheet,}from 'react-native';

function Article (props) {
	return (
		<View style = {styles.container} > 
			<View style = {styles.left} >
				<ImageBackground
					style = {styles.photo}
					source = {props.ph1}
					/>		
				<View style = {styles.titleContain} >
					<Text style = {styles.titleTxt} >{props.title}</Text>
				</View>
			</View>

			<View style = {styles.right} >
				<Text style= {styles.detailTxt} >Descripcion: {props.detail} </Text>
				<Text style= {styles.addNoteTxt} >Notas Adicionales: {props.addNote} </Text>
				<Text style= {styles.priceTxt} >$ {props.price}.</Text>
			</View>
		</View>

		)
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		flex:1,
		padding: 8,

	},
	left:{
		width:140,
		height:180,
	},
	photo:{
		width:'100%',
		height:'100%',
		resizeMode:'contain',
	},
	titleContain:{
		position:'absolute',
		left:0,
		top:0,
		backgroundColor:'black',
		paddingVertical:5,
		paddingHorizontal:8,
	},
	titleTxt:{
		color:'white',
		fontSize:11,
	},
	right:{
		flex:1,
		paddingLeft:8,
		paddingVertical: 2,
		justifyContent:'space-between',
	},
	detailTxt:{
		fontSize: 12,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#fff',
		fontWeight:'normal',
		textShadowOffset: {
			width: 1,
			height: 1
		},
		textShadowColor: '#000',
		textShadowRadius: 8,
	},
	addNoteTxt:{
		fontSize: 12,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#fff',
		fontWeight:'normal',
		textShadowOffset: {
			width: 1,
			height: 1
		},
		textShadowColor: '#000',
		textShadowRadius: 8,
	},
	priceTxt:{
		fontSize: 20,
		fontFamily: 'serif',
		fontStyle: 'italic', 
		textAlign:'right',
		marginRight: 16,
		color: '#4c4c4c',
		fontWeight:'bold',
		textShadowOffset: {
			width: 1,
			height: 1
		},
		textShadowColor: '#fff7',
		textShadowRadius: 3
	}

})

export default Article;