import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

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
		flex:1,
	},
	txtTitle:{
		fontSize: 14,
    textAlign:'center',
    textAlignVertical: 'center', 
    fontFamily: 'serif',
    fontStyle: 'italic', 
    color: '#000',
    marginBottom: 4,
	}
})

export default Layout;