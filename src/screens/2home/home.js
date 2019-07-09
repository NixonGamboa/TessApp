import React,{Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';


import Categories from './containers/categories-list';
import CarouselAds from './containers/carousel-ads';
import Layout from '../../sections/layout-view';
import API from '../../utils/api';
import firebaseConfig from '../../firebase/firebase-config';

//se cuadro google signin pero la app se cierra al abrirla en la version release



class Home extends Component {
  async componentDidMount(lista){
    console.log('Componente Home montado')
  
    firebase.initializeApp(firebaseConfig)
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