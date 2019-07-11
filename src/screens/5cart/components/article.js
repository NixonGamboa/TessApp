import React from 'react';
import {View, ImageBackground, Text, StyleSheet,TouchableOpacity}from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function Article (props) {
	return (
		<View style = {styles.container} > 
			<View style = {styles.left} >
				<ImageBackground
					style = {styles.photo}
					source = {{uri:props.photos.ph1.dir}}
					/>		
				<View style = {styles.titleContain} >
					<Text style = {styles.titleTxt} >{props.title}</Text>
				</View>
			</View>

			<View style = {styles.right} >
				<Text style= {styles.detailTxt} >{props.description} </Text>
				<Text style= {styles.addNoteTxt} >{props.note} </Text>
				<Text style= {styles.priceTxt} >$ {props.price}.</Text>
			</View>
			
			<TouchableOpacity
				style={styles.iconRemove}
				onPress={props.onPress}
				activeOpacity = {0.8}
				>
				<Icons  name={'close-circle-outline'} size={24} color={'#000'} />
			</TouchableOpacity>
		</View>

		)
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		flex:1,
		paddingVertical: 8,

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
		fontFamily: 'serif',
		fontStyle: 'italic',
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
		color: '#000',
		paddingTop: 4,
		
	},
	addNoteTxt:{
		fontSize: 12,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#000',
		
	},
	priceTxt:{
		fontSize: 20,
		fontFamily: 'serif',
		fontStyle: 'italic', 
		textAlign:'right',
		marginRight: 16,
		color: '#4c4c4c',
		fontWeight:'bold',
	},
	iconRemove:{
		position:'absolute',
		right:0,
		top:0,
		paddingVertical:5,
	}

})

export default Article;