import React,{Component} from 'react';
import {StyleSheet } from 'react-native';

import Layout from '../../sections/layout-view';
import PhotoList from './containers/photo-list';
import Description from './containers/description';

const listaDelProducto=[
    { dir: require('../../../assets/images/products/para-ellos/cupones/ta6.jpg'),
      key:'5',},
    { dir: require('../../../assets/images/products/para-ellos/cupones/ta5.jpg'),
      key:'1',},
    { dir: require('../../../assets/images/products/para-ellos/cupones/ta4.jpg'),
      key:'2',},
    { dir: require('../../../assets/images/products/para-ellos/cupones/ta3.jpg'),
      key:'3',},
    { dir: require('../../../assets/images/products/para-ellos/cupones/ta2.jpg'),
      key:'4',},
    { dir: require('../../../assets/images/products/para-ellos/cupones/ta1.jpg'),
      key:'6',},
    ]

const detalle = "Esto es una descripcion. Describir es explicar o exponer de manera adecuada, detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve para ambientar la acción."

class ProductView extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		list:listaDelProducto,
    		detail:detalle,
    	}
    }
  static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title')
        
      }
  }

	render(){
		return(
			<Layout>
				<PhotoList 
          list={this.state.list} />
				<Description 
          detail={this.state.detail}
          navigation={this.props.navigation} />
			</Layout>
		);
	}
}
export default ProductView;
