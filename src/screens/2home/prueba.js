import React,{Component} from 'react';
import {View,ImageBackground, StyleSheet, Dimensions, Text,TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

class MyCarousel extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      activeSlide :0,
    };
  }

    
    get pagination () {
        const {  activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={6}
              activeDotIndex={activeSlide}
              containerStyle={styles.dotContainer}
              dotStyle={styles.dot}
              inactiveDotOpacity={0.4}
              inactiveDotStyle={styles.dotInactive}
            />
        );
    }
    _renderItem ({item, index}) {
        return (
            <View style={styles.containerAdd} >
              <TouchableOpacity
                activeOpacity={0.8}
                >
                <ImageBackground 
                  source = { item.dir }
                  style = {styles.add} >
                   <View style={styles.txtContainer} >
                      <Text style={styles.txtTitle} >{ item.title }</Text>
                      <Text style={styles.txtSubtitle} >{ item.subtitle }</Text>
                    </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
        );
    }

    render () 
    {
      const list=[
      {
      title:'¡Vamos a celebrar!',
      subtitle:'Tenemos todo para hacer que ese momento sea especial...',
      dir: require('../../../assets/images/add1.jpg'),
      key:'5',
    },
    {
      title:'Sorpresas',
      subtitle:'Sorprende a esa persona unica en su día',
      dir: require('../../../assets/images/add23.jpg'),
      key:'1',
    },
    {
      title:'Licores',
      subtitle:'Encuentra una gran variedad en vinos y licores',
      dir: require('../../../assets/images/add33.jpg'),
      key:'2',
    },
    {
      title:'Flores',
      subtitle:'Hoy es un buen momento para regalar sonrisas',
      dir: require('../../../assets/images/add43.jpg'),
      key:'3',
    },
    {
      title:'Decoracion',
      subtitle:'Lo que no puede faltar en una verdadera fiesta',
      dir: require('../../../assets/images/add56.jpg'),
      key:'4',
    },
    
    {
      title:'Hakuna matata ;)',
      subtitle:'Descubre la felicidad regalando sonrisas',
      dir: require('../../../assets/images/add6.jpg'),
      key:'6',
    },
    ]
        return (
            <View style={styles.totalContainer} >
              <Carousel
               ref={(c) => { this._carousel = c; }}
               data={list}
               renderItem={this._renderItem}
               onSnapToItem={(index) => this.setState({ activeSlide: index }) }
               sliderWidth={Dimensions.get('window').width}
               itemWidth={Dimensions.get('window').width-16}
               firstItem={this.state.activeSlide}
               useScrollView={true}
               autoplay={true}
               lockScrollWhileSnapping={true}
               autoplayInterval={5000}
               inactiveSlideScale={0.98}

              >
              </Carousel>
                { this.pagination }
            </View>
        );
    }
}
const styles = StyleSheet.create ({
  totalContainer:{
    backgroundColor: '#fff1',
    justifyContent:'center',
    alignItems: 'center',
    padding: 4
  },
  containerAdd:{
    margin:0,
    borderRadius: 18,
    overflow: 'hidden', 
    height:200,
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
  dotContainer:{
    position: 'absolute',
    top: 180,
    left: 24, 
    },
  dot:{
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 0,
    backgroundColor: '#fff'
  },
  dotInactive:{
    backgroundColor: '#fff0'
  }
})
export default MyCarousel;