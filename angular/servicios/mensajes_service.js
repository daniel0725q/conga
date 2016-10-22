var app = angular.module('facturacionApp.mensajes',[]);

app.factory('Mensajes', ['$http', '$q', function($http, $q){
	var self = {
		mensaje: [{
			img: 'dist/img/user3-128x128.jpg',
			nombre: "Juan Carlos",
			mensaje: 'Bienvenido a nuestro servicio de facturación',
			fecha: '5-marzo'
		},
		{
			img: 'dist/img/user4-128x128.jpg',
			nombre: "Maria Soto",
			mensaje: 'Lorem ipsum dolor sit amet, consectetur.',
			fecha: '8-marzo'
		},
		{
			img: 'dist/img/user5-128x128.jpg',
			nombre: "Victor Martinez",
			mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			fecha: '15-abril'
		}]
	};
	return self;
}])