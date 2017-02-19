var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    nombre: String,
    socketid: String,
    userid: String,
    idroom: String,
    fecha_desconect: {type:Date},
    fecha_conect: {type:Date}
});

module.exports = mongoose.model('usernames', userSchema);