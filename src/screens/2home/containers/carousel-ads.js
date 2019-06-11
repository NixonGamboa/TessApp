import React,{Component} from 'react';
import {Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {connect} from 'react-redux';

import Add from '../components/add';
import styles from '../components/pagination-styles';
import CarouselLayout from '../components/carousel-layout';


function mapStateToProps(state){
  return {
    list:state.movies
  }
}

class CarouselAds extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      activeSlide :0,
    };
  }
  keyExtractor = item => item.id.toString()
  _renderItem ({item}) {
      return (
        <Add {...item} />
      );
  }
  
  render () {
    return (
      <CarouselLayout >
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.props.list}
          keyExtractor = {this.keyExtractor}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width-16}
          firstItem={this.state.activeSlide}
          useScrollView={true}
          autoplay={true}
          lockScrollWhileSnapping={true}
          autoplayInterval={5000}
          inactiveSlideScale={0.98} />
        <Pagination
          dotsLength={this.props.list.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          inactiveDotOpacity={0.4}
          inactiveDotStyle={styles.dotInactive} />
      </CarouselLayout>
    );
  }
}

export default connect(mapStateToProps)(CarouselAds);