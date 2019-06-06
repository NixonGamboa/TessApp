import React from 'react';
import { View, StyleSheet } from 'react-native';



function DescriptionLayout (props) {
	return (
	  	<View style={styles.totalContainer}>
	  		{props.children}
		</View>
	)
}

const styles = StyleSheet.create({
	totalContainer:{
		flex:1,
		paddingTop: 4,
		paddingBottom: 32,
		paddingHorizontal: 8,
		marginHorizontal: 8,
	    justifyContent:'center',
	    alignItems: 'center',
	},
});

export default DescriptionLayout;