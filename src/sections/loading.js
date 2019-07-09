import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Image, ImageBackground} from 'react-native';





function LoadingInit (props) {
	return (
		<View style={styles.container}>
    <ImageBackground 
      source={require('../../assets/diseno/load.jpg')}
      style ={styles.background} >
        <Image
          style={styles.image}
          source={require('../../assets/diseno/loader.png')}
        />
        <ActivityIndicator size={56} color={'#fff'}  />
      </ImageBackground>
		</View>
	)
}
const styles = StyleSheet.create({
  container:{
  	flex:1,
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  background:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:'90%',
    height: '56%',
    resizeMode: 'contain',
  },
});

export default LoadingInit;