import React  from 'react';
import {View, Image, StyleSheet} from 'react-native';

function Logo (props){
	return(
		<View style={styles.logo} >
			<Image
				style={styles.imageLogo}
				source = {require('../../../../assets/images/logo5.png')} />
		</View>
	)
}

const styles =StyleSheet.create({
	logo:{
		flex: 1,
		margin:10,
		padding:0,
		justifyContent: 'flex-start',
		alignItems: 'center', 
	},
	imageLogo:{
		width:240,
		height:240,
		resizeMode: 'contain',
	},
})
export default Logo;