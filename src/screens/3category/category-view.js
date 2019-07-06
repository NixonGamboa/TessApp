import React,{Component} from 'react';
import firebase from 'firebase';
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
        title: navigation.getParam('title')
    	}
	}

	async componentDidMount(lista){
	  
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