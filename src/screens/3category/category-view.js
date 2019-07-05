import React,{Component} from 'react';
import firebase from 'firebase';
import {connect} from 'react-redux';


import Layout from '../../sections/layout-view'
import ProductsList from './containers/products-list';


class VistaCat extends Component {
	static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title')
    	}
	}
	async componentDidMount(lista){
	  
	    var database = firebase.database()
	    
	    database.ref('Lista_1').once('value',(data)=>{
	    const adsList = data.toJSON();
	    const list = Object.values(adsList)
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
export default connect(null)(VistaCat);