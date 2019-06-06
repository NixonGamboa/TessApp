import React  from 'react';
import {TextInput, View,StyleSheet} from 'react-native';

function CelInput (props){
	return(
		<View style={styles.layout}> 
			<TextInput
				style={styles.txtCelular}
				keyboardType="phone-pad"
				placeholder="Celular:"
				placeholderTextColor= "#f5fffa88"
			>
			
			</TextInput>
		</View>
	)
}
const styles =StyleSheet.create({
	layout:{
		width: '70%', 
		height: 50,
		marginVertical: 4,
		justifyContent: 'center',
		alignItems: 'flex-start',
		

	},
	txtCelular:{
		color:'#000',
		fontStyle: 'normal',
		fontSize: 24,
		fontWeight: 'bold', 
		fontFamily: 'cursive',
		fontWeight:'bold',
		textAlignVertical: 'center',
		width: '100%',
		paddingLeft: '4%',
		borderRadius: 7,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderWidth: 3,
		borderBottomWidth: 2,
		borderColor: '#000000',
	}
})
export default CelInput;