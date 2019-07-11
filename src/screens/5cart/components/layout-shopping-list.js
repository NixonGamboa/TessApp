import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Layout (props){
	return(
  		<View style ={styles.containerLayout}>
  			<Text style={styles.txtTitle}>
  				{props.title}
  			</Text>
  			{props.children}
  		</View>
	)
}

const styles = StyleSheet.create({
	containerLayout:{
		marginHorizontal: 8,
		flex:1,
	},
	txtTitle:{
		fontSize: 16,
    textAlign:'left',
    textAlignVertical: 'center', 
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#000',
    marginVertical: 4,
	}
})

export default Layout;