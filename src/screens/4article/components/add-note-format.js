import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';


function AddNote (props) {
    return (
      <View style={styles.container}>
      		<Text style={styles.txtTitle}>
      		   Notas Adicionales:
      		</Text>
      		<TextInput 
      			style={styles.txt}
      			onChangeText={props.onChangeNote}/>
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
		fontSize: 16,
		fontFamily: 'serif',
		fontStyle: 'italic', 
		fontWeight:'bold',
		color: '#000',
		textAlign:'right',
		paddingRight: 32,
		

	},
	txt:{
		height: 25,
		marginHorizontal:8,
		paddingVertical: 0,
		fontSize: 13,
		textAlign:'right',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#000',
		fontWeight:'normal',
		borderBottomColor: '#362779',
		borderBottomWidth: 2,
	},
});
export default AddNote;