import React  from 'react';
import {TextInput, View,StyleSheet} from 'react-native';

function CelInput (props){
	return(
		<View style={styles.layout}> 
			<TextInput
				style={styles.txtCelular}
				keyboardType="phone-pad"
				placeholder="Celular:"
				placeholderTextColor= "#4c4c4c88"
				onSubmitEditing={props.onEndCel}
				onChangeText={props.onChangeCel} >
					{props.cel}
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
	txtCelular:{
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
		//borderBottomLeftRadius: 20,
		//borderBottomRightRadius: 20,
		borderWidth: 2,
		//borderBottomWidth: 2,
		borderColor: '#000000',
	}
})
export default CelInput;