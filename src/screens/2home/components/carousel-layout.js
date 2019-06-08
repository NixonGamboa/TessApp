import React  from 'react';
import {View, StyleSheet} from 'react-native';

function CarouselLayout (props){
	return(
		<View style={styles.layout} > 
			{props.children}
		</View>	
	)
}

const styles =StyleSheet.create({
	layout:{
	    backgroundColor: '#fff1',
	    justifyContent:'center',
	    alignItems: 'center',
	    padding: 4
	  },
})
export default CarouselLayout;