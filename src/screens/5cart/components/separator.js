import React from 'react';
import {View, StyleSheet} from 'react-native';

function Separator (props) {
	return (
		<View style={styles.container} > 
		</View>
		)
}
const styles = StyleSheet.create ({
	container:{
		borderTopWidth:1,
		marginHorizontal: 8,
	}
})

export default Separator;