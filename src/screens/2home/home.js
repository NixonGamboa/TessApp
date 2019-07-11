import React,{Component} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';


import Categories from './containers/categories-list';
import CarouselAds from './containers/carousel-ads';
import Layout from '../../sections/layout-view';
import API from '../../utils/api';
import firebaseConfig from '../../firebase/firebase-config';

//se cuadro google signin pero la app se cierra al abrirla en la version release



class Home extends Component {
  componentWillMount(){
    this.focus = this.props.navigation.addListener('didFocus',()=> {
      StatusBar.setBarStyle('light-content')
      StatusBar.setBackgroundColor('#362779')
    });
  }
  componentWillUnmount(){
    this.focus.remove();
  }
  async componentDidMount(lista){
    console.log('Componente Home montado')
  
    var database = firebase.database()
    
    database.ref('Lista_Anuncios').once('value',(data)=>{
    const adsList = data.toJSON();
    const list = Object.values(adsList)
    this.props.dispatch({
      type:'SET_SUGGESTION_LIST',
      payload:{ ads:list }
      })
    }).catch((error)=>{
      console.log(error);
    })

    database.ref('Lista_Categorias').once('value',(data)=>{
    const categoryList = data.toJSON();
    const list = Object.values(categoryList)
    this.props.dispatch({
      type:'SET_CATEGORY_LIST',
      payload:{ categories:list }
      })
    }).catch((error)=>{
      console.log(error);
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