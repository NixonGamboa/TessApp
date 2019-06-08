import React,{Component} from 'react';

import Layout from '../../sections/layout-view';
import ShoppingList from './containers/shopping-list';

const listaDeCompras=[
      articulo1={
        title:'Producto 1',
        ph1:require('../../../assets/images/products/para-ellos/bote.jpg'),
        detail:'Esto es una descripcion. Describir es explicar o exponer de manera adecuada, detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve para ambientar la acción y hacer más creíbles los hechos que se narran.',
        addNote:'Cerveza Heineken y Corona, bien frias',
        price:60,
        key:'1',
      },
      articulo2={
        title:'Producto 2',
        ph1:require('../../../assets/images/products/para-ellos/pack.jpg'),
        detail:'Esto es otra descripcion. Describir es explicar o exponer de manera adecuada, detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve para ambientar la acción y hacer más creíbles los hechos que se narran.',
        addNote:'Camisa talla L',
        price:120,
        key:'2',
      },
      articulo3={
        title:'Producto 3',
        ph1:require('../../../assets/images/products/para-ellos/globos.jpg'),
        detail:'Esto es una descripcion. Describir es explicar o exponer de manera adecuada, detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve para ambientar la acción y hacer más creíbles los hechos que se narran.',
        addNote:'Para los numeros son 27 años',
        price:40,
        key:'3',
      },
    ]

class ShoppingView extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		list:listaDeCompras,
    	}
    }
    static navigationOptions = ({ navigation }) => {
    return {
        title: 'Tu Carrito'
      }
    }
	render(){
		return(
			<Layout>
				<ShoppingList 
                    list={this.state.list}
                    navigation={this.props.navigation} />
			</Layout>
		);
	}
}
export default ShoppingView;
