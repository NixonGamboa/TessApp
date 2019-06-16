import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';




function LoadingInit (props) {
	return (
		<View style={styles.container}>
			<Icons style={styles.icon} name={'home-city'} size={150} color={'#7d2181'} />
			<Text style={styles.txt} >DETALLITOS!</Text>
      <ActivityIndicator size={50} color={'#7d2181'}  />
		</View>
	)
}
const styles = StyleSheet.create({
  container:{
  	flex:1,
  	justifyContent: 'center',
  	alignItems: 'center',
  	backgroundColor: '#fff',
  },
  icon:{
  	margin:8,
  },
  txt:{
    height: 40,
    color:'#7d2181',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 'bold', 
    fontFamily: 'cursive',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginBottom: 32,  
  }
});

export default LoadingInit;