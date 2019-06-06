import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

function Header (props) {
	return(
		<View style= {styles.container} >
			<View style = {styles.containLogo} >
				<Image 
				source = {require('../../../../../assets/images/logo5.png')}
				style = {styles.logoImage}
				/>
			</View>
			<View style = {styles.name} >
				<Text style ={styles.nameText}>
					{props.titulo}
				</Text>
			</View>
		</View>
		)
}

const styles =StyleSheet.create({
	container:{
		flexDirection: 'row',
	},
	containLogo:{
		padding:2,
		paddingLeft: 16,
	},
	logoImage:{
		height:55,
		width: 55,
		resizeMode:'contain',
	},
	name:{
		flex:1,
		justifyContent: 'center',

	},
	nameText:{
		fontSize: 27,
		textAlign:'left',
		textAlignVertical: 'center', 
		fontFamily: 'cursive',
		color: '#fff',
		fontWeight:'bold',
		textShadowOffset: {
			width: 2,
			height: 2
		},
		textShadowColor: '#00000077',
		textShadowRadius: 3,
		marginRight: 30,
	},
})

export default Header;