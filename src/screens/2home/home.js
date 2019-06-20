import React,{Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';


import Categories from './containers/categories-list';
import CarouselAds from './containers/carousel-ads';
import Layout from '../../sections/layout-view';
import API from '../../utils/api';
import firebaseConfig from '../../firebase/firebase-config';




class Home extends Component {
  async componentDidMount(lista){
  
    firebase.initializeApp(firebaseConfig)
    var database = firebase.database()
    database.ref('Lista_Anuncios').once('value',(data)=>{
    const lista = data.toJSON();
    console.log(lista)
    const list = Object.values(lista)
    console.log(list)
    debugger
      this.props.dispatch({
        type:'SET_SUGGESTION_LIST',
        payload:{
          ads:list
        }
      })
     }).then((list)=>  {
      console.log('Upload')
     }).catch((error)=>{
      console.log(error);
     })
    const ads = await API.getAds(10);
    const categories = await API.getCategories();
    this.props.dispatch({
      type:'SET_CATEGORY_LIST',
      payload:{
        categories
      }
    })
      }
  static navigationOptions = ({ navigation }) => {
    return {
        //title: navigation.getParam('name')
    	header: null,
    	}
	}
	render(){
   
    
		return (
			<Layout>
        		<CarouselAds />
        		<Categories
        			navigation={this.props.navigation} />
			</Layout>
		);
	}
}
export default connect(null)(Home);