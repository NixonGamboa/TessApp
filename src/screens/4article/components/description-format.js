import React from 'react';
import {View,Text, StyleSheet } from 'react-native';



function DescriptionFormat (props) {
    return (
      	<View style={styles.container}>
      		<Text style={styles.txtTitle}>
      		   Descripción:
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
		width: '100%',
		paddingVertical: 4,
	},
	txtTitle:{
		marginHorizontal:8,
		fontSize: 16,
		textAlign:'left',
		fontFamily: 'serif',
		fontStyle: 'italic', 
		color: '#000',
		fontWeight:'bold',
	},
	txt:{
		marginHorizontal:8,
		marginTop: 4,
		fontSize: 13,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#000',
		fontWeight:'normal',
		
	},
});

export default DescriptionFormat;