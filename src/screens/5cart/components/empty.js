import React from 'react';
import{View, Text, StyleSheet} from 'react-native';

function Empty (props) {
	return (
	<View style={styles.container} >
		<Text style={styles.text} > {props.text} </Text>
	</View>
)
}
const styles = StyleSheet.create ({
	container:{
		padding:10,

	},
	text:{
		fontSize: 12,
	    textAlign:'left',
	    textAlignVertical: 'center', 
	    fontFamily: 'serif',
	    fontStyle: 'italic', 
	    color: '#000',
	    marginTop: 8,
	    marginBottom: 8,
	},
})

export default Empty;