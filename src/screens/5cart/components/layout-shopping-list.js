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
		margin:4,
    marginHorizontal: 8,
		flex:1,
	},
	txtTitle:{
		fontSize: 16,
    textAlign:'left',
    textAlignVertical: 'center', 
    fontFamily: 'sans-serif',
    color: '#000',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowColor: '#000',
    textShadowRadius: 2,
    marginTop: 8,
    marginBottom: 8,
	}
})

export default Layout;