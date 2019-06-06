import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';


function AddNote (props) {
    return (
      <View style={styles.container}>
      		<Text style={styles.txtTitle}>
      		   Notas Adicionales:
      		</Text>
      		<TextInput style={styles.txt}/>
	  </View>
    )
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		width: '100%',
		paddingHorizontal: 8,
		paddingVertical: 4,
		justifyContent:'flex-end',
	},
	txtTitle:{
		fontSize: 18,
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		fontWeight:'bold',
		color: '#fff',
		textAlign:'right',
		paddingRight: 32,
		textShadowOffset: {
			width: 1,
			height: 1
		},
		textShadowColor: '#000',
		textShadowRadius: 8,

	},
	txt:{
		height: 30,
		marginHorizontal:8,
		paddingVertical: 0,
		fontSize: 16,
		textAlign:'right',
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
		borderBottomColor: '#4c4c4c',
		borderBottomWidth: 2,
	},
});
export default AddNote;