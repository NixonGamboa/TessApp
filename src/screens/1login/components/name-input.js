import React  from 'react';
import {TextInput, View,StyleSheet} from 'react-native';

function NameInput (props){
	return(
		<View style={styles.layout}> 
			<TextInput
				style={styles.txtName}
				placeholder="Nombre:"
				placeholderTextColor= "#4c4c4c88"
				autoCapitalize = "words"
				onChangeText={props.onChangeName} >
					{props.name}
				</TextInput>
		</View>
	)
}
const styles =StyleSheet.create({
	layout:{
		width: 240, 
		height: 50,
		marginVertical: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	txtName:{
		color:'#000',
		fontStyle: 'italic',
		fontSize: 20,
		fontFamily: 'sans-serif',
		//fontWeight:'bold',
		textAlignVertical: 'center',
		textAlign:'center',
		width: '100%',
		paddingLeft: '4%',
		borderRadius: 7,
		//borderTopLeftRadius: 20,
		//borderTopRightRadius: 20,
		borderWidth: 2,
		//borderBottomWidth: 2,
		borderColor: '#000',
	}
})
export default NameInput;