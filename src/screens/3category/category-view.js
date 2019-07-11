import React,{Component} from 'react';
import {StatusBar} from 'react-native';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';


import Layout from '../../sections/layout-view'
import ProductsList from './containers/products-list';

function mapStateToProps(state){
	console.log(state)
	  return {
	    sCat:state.selectedCategory
	  }
	}

class VistaCat extends Component {
	static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title'),
        headerStyle: {
	      backgroundColor: '#362779',
	    },
	    headerTintColor: '#fff',
	    headerTitleStyle: {
	    	fontSize: 28,
			fontFamily: 'cursive',
			color: '#fff',
	      	//fontWeight: 'bold',
	    },
	}
	}
	componentWillMount(){
		this.focus = this.props.navigation.addListener('didFocus',()=> {
			StatusBar.setBarStyle('light-content')
			StatusBar.setBackgroundColor('#00000033')
      		StatusBar.setTranslucent(true)
		});
		console.log('categoria willmount')
		this.props.dispatch({
        type:'SET_PRODUCT_LIST',
        payload:{ products:[] }
        })
	}
	componentWillUnmount(){
		this.focus.remove();
	}

	async componentDidMount(lista){
		console.log('categoria didmount')
	  	
	    var database = firebase.database()
	    
	    database.ref(this.props.sCat.nameList).once('value',(data)=>{
	    const productList = data.toJSON();
	    const list = Object.values(productList)
	    this.props.dispatch({
	      type:'SET_PRODUCT_LIST',
	      payload:{ products:list }
	      })
	    }).catch((error)=>{
	      console.log(error);
	    })

	    }
	render(){
		return(
			<Layout>
				<ProductsList
					navigation={this.props.navigation}/>
			</Layout>
			);
	}
}
export default connect(mapStateToProps)(VistaCat);