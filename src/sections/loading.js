import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Image, ImageBackground} from 'react-native';





function LoadingInit (props) {
	return (
		<View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/diseno/loader.png')}
        />
        <ActivityIndicator size={56} color={'#fff'}  />
    </View>
	)
}
const styles = StyleSheet.create({
  container:{
  	flex:1,
  	justifyContent: 'center',
  	alignItems: 'center',
    backgroundColor: '#362779',
  },
  image:{
    width:'90%',
    height: '56%',
    resizeMode: 'contain',
  },
});

export default LoadingInit;