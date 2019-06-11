import React from 'react';
import {View,Text, StyleSheet } from 'react-native';



function DescriptionFormat (props) {
    return (
      	<View style={styles.container}>
      		<Text style={styles.txtTitle}>
      		   Descripcion:
      		</Text>
	      	<Text style={styles.txt}>
	        	{props.detail}
	      	</Text>
      	</View>
    )
}

const styles = StyleSheet.create({
	container:{
		flex:3,
		paddingVertical: 4,
	},
	txtTitle:{
		fontSize: 20,
		textAlign:'left',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#fff',
		fontWeight:'bold',
		textShadowOffset: {
			width: 1,
			height: 1
		},
		textShadowColor: '#000',
		textShadowRadius: 8,
	},
	txt:{
		marginHorizontal:8,
		fontSize: 16,
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
});

export default DescriptionFormat;