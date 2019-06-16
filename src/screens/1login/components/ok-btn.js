import React  from 'react';
import {TouchableOpacity, Text, View,StyleSheet} from 'react-native';

function OkBtn (props){
	return(
		<TouchableOpacity 
		  	onPress={props.onPress}
			activeOpacity = {0.8}>
				<View style={styles.layout}>
					<Text style={styles.txtBtn} >OK!</Text>
				</View>
		</TouchableOpacity>	
	)
}
const styles =StyleSheet.create({
	layout:{
		width: 240, 
		height: 40,
		borderRadius: 7,
		justifyContent: 'center',
		alignItems: 'center',
		//borderWidth: 3,
		//borderColor: '#000000',
		backgroundColor: '#15aebb',
		marginVertical: 4,
		marginBottom: 32,
	},
	txtBtn:{
		color:'#fff',
		fontSize: 28,
		fontStyle: 'normal',
		fontWeight: 'bold', 
		fontFamily: 'cursive',
		textAlignVertical: 'center',
		justifyContent: 'center',  
	}
})
export default OkBtn;