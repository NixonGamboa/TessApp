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
		height:230,
        justifyContent:'center',
	    alignItems: 'center',
	},
})
export default CarouselLayout;