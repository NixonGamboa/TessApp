import React from 'react';
import {
	View,
	ImageBackground,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';


function Product (props) {
	return (
		<View style={styles.container} >
			<TouchableOpacity
			onPress={props.onPress} 
			activeOpacity={0.7} >
				<ImageBackground
					style = {styles.category}
					source = {props.dir}
					>
						<View style={styles.textContainer} >
							<Text style={styles.textTitle} > {props.title} </Text>
							<Text style={styles.textPrice} > $ {props.price} </Text>
						</View>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		margin:4,
		marginHorizontal: 8,
		borderRadius: 12,
		overflow: 'hidden',
		borderColor: '#6666',
		borderWidth: 1, 
		height: 220,
		flex:1,		
		
	},
	category:{
		width: '100%',
		height: '100%',
		justifyContent:'flex-end',
		alignItems: 'center', 
		resizeMode:'cover',
	},
	textContainer:{
		justifyContent:'space-between', 
		alignItems:'baseline', 
		backgroundColor: '#0007',
		borderColor: '#0002',
		flexDirection:'row',
		width:'100%',
		paddingLeft: 4,
		paddingRight: 4,
		paddingVertical: 4,


	},
	textTitle:{
		fontSize: 25,
		fontFamily: 'cursive',
		color: '#fff',
		fontWeight:'bold',
		textShadowOffset: {
			width: 1,
			height: 1
		},
		textShadowColor: '#fff7',
		textShadowRadius: 3
	},
	textPrice:{
		fontSize: 15,
		fontFamily: 'cursive',
		color: '#fff',
		fontWeight:'bold',
		textShadowOffset: {
			width: 1,
			height: 1
		},
		textShadowColor: '#fff7',
		textShadowRadius: 3
	},
})
export default Product;