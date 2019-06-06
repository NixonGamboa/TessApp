import React from 'react';
import {View, StyleSheet, ImageBackground, ScrollView, Dimensions} from 'react-native';

function LayoutView (props){
  return(
    <ScrollView>
      <View style={styles.container} >
        <ImageBackground 
        source={require('../../../assets/images/back1.jpg')}
        style ={styles.background} >
          {props.children}
            </ImageBackground>

      </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    height: Dimensions.get('window').height-24,
    backgroundColor: '#4c4c4c22',
    borderWidth: 2
  },
  background:{
    width: '100%',
    height: '100%',
  },
})

export default LayoutView;