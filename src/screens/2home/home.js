import React,{Component} from 'react';

import Categories from './containers/categories-list';
import CarouselAds from './containers/carousel-ads';
import Layout from '../../sections/layout-view';

const LISTA_DE_CATEGORIAS = [
	{	title:'Para Ella',
		dir: require('../../../assets/images/para-ella3.jpg'),
		key:'1',},
	{	title:'Para El',
		dir: require('../../../assets/images/para-el2.jpg'),
		key:'2',},
	{	title:'Mamá',
		dir: require('../../../assets/images/mama3.jpg'),
		key:'3',},
	{	title:'Papá',
		dir: require('../../../assets/images/papa2.jpg'),
		key:'4',},
	{	title:'Cumpleaños',
		dir: require('../../../assets/images/cumpleanos.jpg'),
		key:'5',},
	{	title:'Aniversario',
		dir: require('../../../assets/images/aniversarios.jpg'),
		key:'6',},
	{	title:'Bodas',
		dir: require('../../../assets/images/bodas.jpg'),
		key:'7',},
	{	title:'Empresas',
		dir: require('../../../assets/images/empresas.jpg'),
		key:'8',},]

const LISTA_DE_ANUNCIOS = [
    {	title:'¡Vamos a celebrar!',
    	subtitle:'Tenemos todo para hacer que ese momento sea especial...',
    	dir: require('../../../assets/images/add1.jpg'),
    	key:'1',},
	{
	    title:'Sorpresas',
	    subtitle:'Sorprende a esa persona unica en su día',
	    dir: require('../../../assets/images/add23.jpg'),
	    key:'2',},
	{
	   	title:'Licores',
	    subtitle:'Encuentra una gran variedad en vinos y licores',
	    dir: require('../../../assets/images/add33.jpg'),
	    key:'3',},
	{
	    title:'Flores',
	    subtitle:'Hoy es un buen momento para regalar sonrisas',
	    dir: require('../../../assets/images/add43.jpg'),
	    key:'4',},
	{
	    title:'Decoracion',
	    subtitle:'Lo que no puede faltar en una verdadera fiesta',
	    dir: require('../../../assets/images/add56.jpg'),
	    key:'5',},  
	{
	    title:'Hakuna matata ;)',
	    subtitle:'Descubre la felicidad regalando sonrisas',
	    dir: require('../../../assets/images/add6.jpg'),
	    key:'6',},]

class Home extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		categoryList:LISTA_DE_CATEGORIAS,
    		adsList:LISTA_DE_ANUNCIOS,
    	}
    }
    static navigationOptions = ({ navigation }) => {
    return {
        //title: navigation.getParam('name')
    	title:'TessApp',
    	}
	}
	render(){
		return (
			<Layout>
        		<CarouselAds
        			list={this.state.adsList} />
        		<Categories
        			navigation={this.props.navigation}
        			list={this.state.categoryList} />
			</Layout>
		);
	}
}
export default Home;