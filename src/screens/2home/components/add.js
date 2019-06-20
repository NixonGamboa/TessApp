import React  from 'react';
import {View,ImageBackground, StyleSheet, Text} from 'react-native';

function Add (props){
  return(
		<View style={styles.containerAdd} >
            <ImageBackground 
              source = {{uri:props.url}}
              style = {styles.add} >
               <View style={styles.txtContainer} >
                  <Text style={styles.txtTitle} >{ props.title}</Text>
                  <Text style={styles.txtSubtitle} >{/* props.title */}</Text>
                </View>
            </ImageBackground>
         </View>	
	)
}

const styles =StyleSheet.create({
 containerAdd:{
    height:230,
    //borderRadius: 18,
    //overflow: 'hidden', 
  },
  add:{
    width: '100%',
    height: '100%',
    justifyContent:'flex-end',
    alignItems: 'flex-start', 
    resizeMode:'cover',
  },
  txtContainer:{
    justifyContent:'center',
    alignItems:'flex-start', 
    marginBottom: 27,
    marginLeft:20,
  },
  txtTitle:{
    fontSize: 28,
    textAlign:'left',
    textAlignVertical: 'center', 
    fontFamily: 'serif',
    color: '#fff',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowColor: '#000',
    textShadowRadius: 3
  },
  txtSubtitle:{
    fontSize: 10,
    textAlign:'left',
    textAlignVertical: 'center', 
    fontFamily: 'serif',
    color: '#fff',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowColor: '#000',
    textShadowRadius: 2
  },	
})
export default Add;