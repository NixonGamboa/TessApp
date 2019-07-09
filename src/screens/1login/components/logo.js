import React  from 'react';
import {View, Image, StyleSheet} from 'react-native';

function Logo (props){
	return(
		<View style={styles.logo} >
			<Image
				style={styles.imageLogo}
				source = {require('../../../../assets/diseno/fondo2.jpg')} />
				{props.children}
		</View>
	)
}

const styles =StyleSheet.create({
	logo:{
		flex: 1,
		width:'100%',
		height:'100%',
		justifyContent: 'center',
		//borderWidth: 3,
		alignItems: 'center', 
	},
	imageLogo:{
		width:'90%',
		height: '65%',
		resizeMode: 'contain',
		marginBottom: 100,
	},
})
export default Logo;