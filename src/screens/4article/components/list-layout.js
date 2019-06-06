import React from 'react';
import { View, StyleSheet } from 'react-native';



function ListLayout (props) {
	return (
	  	<View style={styles.totalContainer}>
	  		{props.children}
		</View>
	)
}

const styles = StyleSheet.create({
	totalContainer:{
	    backgroundColor: '#4c4c4c22', 
	    borderColor: '#4c4c4c1f',
	    borderTopWidth: 2,
	    borderBottomWidth: 2,
	    justifyContent:'center',
	    alignItems: 'center',
	    paddingLeft: 8,
	    paddingVertical: 2,
	},
});

export default ListLayout;