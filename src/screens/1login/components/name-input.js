import React  from 'react';
import {TextInput, View,StyleSheet} from 'react-native';

function NameInput (props){
	return(
		<View style={styles.layout}> 
			<TextInput
				style={styles.txtName}
				placeholder="Nombre:"
				placeholderTextColor= "#f5fffa88"
				onSubmitEditing={props.onEndName}
			>
			Nixon Gamboa
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
	txtName:{
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
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderWidth: 3,
		borderBottomWidth: 2,
		borderColor: '#000000',
	}
})
export default NameInput;