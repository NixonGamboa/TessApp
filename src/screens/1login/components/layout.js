import React  from 'react';
import {View, StyleSheet} from 'react-native';

function InputLayout (props){
	return(
		<View style={styles.layout} > 
			{props.children}
		</View>	
	)
}

const styles =StyleSheet.create({
	layout:{
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
	}	
})
export default InputLayout;