var app = angular.module('facturacionApp.notificaciones',[]);

app.factory('Notificaciones', ['$http', '$q', function($http, $q){
	var self = {
		notificaciones:[{
			icon:"fa-user",
			notificacion: "Nuevo usuario registrado."
		},
		{
			icon:"fa-save",
			notificacion: "Se esta utilizando el 50% de disco duro."
		}]
	};
	return self;
}])