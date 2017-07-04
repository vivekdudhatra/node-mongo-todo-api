var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schema = new Schema({
     email: {
       type: String,
       required: true,
       trim:true,
       minlength :1
     }
   });
 var Users = mongoose.model('Users', schema);

 module.exports = {Users}

 
