import React from 'react';
import { View,ImageBackground, Text,TouchableOpacity,StyleSheet} from 'react-native';



function Photo (props) {
    return (
      	<View style={styles.containerAdd} >
            <ImageBackground 
              source = { props.dir }
              style = {styles.add} >
               	{/*<View style={styles.txtContainer} >
                  	<Text style={styles.txtTitle} >{ props.title }</Text>
                  	<Text style={styles.txtSubtitle} >{ props.subtitle }</Text>
                </View>*/}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
 containerAdd:{
    margin:0,
    borderRadius: 10,
    overflow: 'hidden', 
    height:350,
  },
  add:{
    width: '100%',
    height: '100%',
    justifyContent:'flex-end',
    alignItems: 'flex-start', 
    resizeMode:'cover',
  },
  /*txtContainer:{
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
  */
});

export default Photo;
