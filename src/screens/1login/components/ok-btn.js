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
		borderRadius: 40,
		marginVertical: 4,
		justifyContent: 'center',
		alignItems: 'center',

		borderWidth: 3,
		borderBottomWidth: 2,
		borderColor: '#000000',
		backgroundColor: '#15aebb',
		marginBottom: 40,
		marginTop: 10
	},
	txtBtn:{
		color:'#ffffff',
		fontStyle: 'normal',
		fontSize: 32,
		fontWeight: 'bold', 
		fontFamily: 'cursive',
		fontWeight:'bold',
		textAlignVertical: 'center',
		justifyContent: 'center',  
	}
})
export default OkBtn;