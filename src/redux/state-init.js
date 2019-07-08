const stateInit = {
	user:{
		userName:'',
		userCel:'',
		userActive:false,
	},
	ads:[],
	categories:[],
	products:[],
	cart:[],
	dataForSend:{
		address: '',
		celular: '',
		date: '',
		paymentMethod: '',
		time: '',
	},
}
export default  stateInit;