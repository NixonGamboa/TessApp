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
	    justifyContent:'center',
	    alignItems: 'center',
	    paddingVertical: 8
	  },
})
export default CarouselLayout;