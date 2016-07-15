var express = require ('express')
var fs = require('fs');
var app = express();
var dbConfig = require('./db.js');
var mongoose = require('mongoose');
 var User = require('./models/user.js');
//var bCrypt = require('bcrypt');

	
	mongoose.connect(dbConfig.url);

	app.use(express.static(__dirname + '/public'));
	app.get('/', function(peticion, respuesta){
	
	respuesta.render('index.jade');


var newUser1 = new User();
// set the user's local credentials
newUser1.userlongname = "Juan Ernesto";
newUser1.password = "12345";
newUser1.email = "miemail@gmail.com";
// save the user
newUser1.save(function(err) {
if (err){
console.log('No se pudo guardar el usuario: '+err);
throw err;
}
console.log('Se registró correctamente el usuario');
});


});



app.listen(3000, function(){
	console.log('escuchando en el puerto 3000');
});
