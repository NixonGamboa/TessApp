import React from 'react';
import {
	View,
	ImageBackground,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';


function Category (props) {
	return (
		<View style={styles.container} >
			<TouchableOpacity
			   	onPress={props.onPress}
				activeOpacity = {0.8}>
			<ImageBackground
				style = {styles.category}
				source = {{uri:props.medium_cover_image}}
			>
			<View style={styles.textContainer} >
				<Text style={styles.text} > {props.genres[0]} </Text>
			</View>
			</ImageBackground>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		margin:4,
		borderRadius: 12,
		overflow: 'hidden',
		borderColor: '#6664',
		borderWidth: 2, 
		height: 110,
		flex:1,		
		
	},
	category:{
		width: '100%',
		height: '100%',
		justifyContent:'center',
		alignItems: 'center', 
		resizeMode:'cover',
	},
	textContainer:{
		justifyContent:'center',
		alignItems: 'center', 
		backgroundColor: '#fff7',
		borderColor: '#fff2',
		borderWidth: 3,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 25,


	},
	text:{
		fontSize: 30,
		textAlign:'center',
		textAlignVertical: 'center', 
		fontFamily: 'cursive',
		color: '#000000',
		fontWeight:'bold',
		textShadowOffset: {
			width: 2,
			height: 2
		},
		textShadowColor: '#00000077',
		textShadowRadius: 3


	},
})
export default Category;
