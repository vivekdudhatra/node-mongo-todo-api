var express =require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  })

todo.save().then((doc)=>{
  res.send(doc);
},(e)=>{
    res.status(400).send(e);
});

});





app.listen(3000,()=>{
  console.log('Stared on port 3000')
});

module.exports = {app};
