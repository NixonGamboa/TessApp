import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';




function LoadingInit (props) {
	return (
		<View style={styles.container}>
			<Icon style={styles.icon} name={'trophy'} size={150} color={'#7d2181'} />
			<ActivityIndicator size={50} color={'#7d2181'}  />
		</View>
	)
}
const styles = StyleSheet.create({
  container:{
  	flex:1,
  	justifyContent: 'center',
  	alignItems: 'center',
  	backgroundColor: '#4c4c4c55',
  },
  icon:{
  	margin:20,
  }
});

export default LoadingInit;