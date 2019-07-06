import React,{Component} from 'react';
import {Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {connect} from 'react-redux';

import ListLayout from '../components/list-layout';
import Photo from '../components/photo';

function mapStateToProps(state){
  console.log(state)
  const photo = state.article.photos
  const photos = Object.values(photo).reverse()
  console.log('mostrando fotos')
  console.log(photos)
  return {
      photos,
  }
}

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide :(this.props.photos.length)-1,
      };
    }
  renderItem = ({item}) => {
      return (
        <Photo {...item} />
      )}
  render (){
      return (
        <ListLayout >
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.props.photos}
              renderItem={this.renderItem}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              sliderWidth={(Dimensions.get('window').width)-8}
              itemWidth={((Dimensions.get('window').width)-8)*.85}
              firstItem={this.state.activeSlide}
              useScrollView={true}
              autoplay={false}
              lockScrollWhileSnapping={true}
              autoplayInterval={5000}
              inactiveSlideScale={0.8}
              layout={'stack'}
              layoutCardOffset= {18}
              >
          </Carousel>
        </ListLayout>
    );}
  }
export default connect(mapStateToProps)(PhotoList);