import React  from 'react';
import {TouchableOpacity, Text, View,StyleSheet} from 'react-native';

function OkBtn (props){
	return(
		<View style={styles.layout}>
			<TouchableOpacity 
			  	onPress={props.onPress}
			  	activeOpacity = {0.8}>
					<Text style={styles.txtBtn} >OK!</Text>
			</TouchableOpacity>	
		</View>
	)
}
const styles =StyleSheet.create({
	layout:{
		width: 81, 
		height: 81,
		borderWidth: 3,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#000000',
		backgroundColor: '#15aebb',
		marginVertical: 8,
	},
	txtBtn:{
		color:'#fff',
		fontSize: 32,
		fontStyle: 'normal',
		fontWeight: 'bold', 
		fontFamily: 'cursive',
		textAlignVertical: 'center',
		justifyContent: 'center',  
	}
})
export default OkBtn;