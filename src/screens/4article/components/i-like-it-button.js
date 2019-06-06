import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity } from 'react-native';

function ILikeButton (props) {
    return (
      <View style={styles.container} >
      	<TouchableOpacity
  			onPress = {props.onPress}
	  		style = {styles.button}
	  		activeOpacity = {0.8}
	  		hitSlop = {{
	  			left:5,
	  			top:5,
	  			bottom: 5,
	  			right: 5,
	  			}}
	  			>
	  			<Text style ={styles.buttonTxt} >Lo quiero!</Text> 
  	</TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
	container:{
		width: '100%',
		height:64,
		alignItems:'flex-end',
		justifyContent: 'center',
	},
	button:{
		justifyContent: 'center',
		alignItems: 'center',
		height: 56,
		width: 140,
		marginRight: 8,
		borderWidth: 1,
		borderRadius: 28,
		borderColor: '#00ff0077',
		backgroundColor: 'green',
	},
	buttonTxt:{
		fontSize: 24,
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		fontWeight:'bold',
		color: '#fff',
		textAlign: 'center' ,
		textAlignVertical:'center',
		textShadowOffset: {
			width: 2,
			height: 2
		},
		textShadowColor: '#000',
		textShadowRadius: 3,
	},
});

export default ILikeButton;