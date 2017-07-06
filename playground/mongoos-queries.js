const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '595db51602835903e413e0a91';

if(!ObjectID.isValid(id)){
  console.log('id is not valid');
}
Todo.find({
  _id :id
}).then((todos)=>{
  console.log('Todos',todos);
})

Todo.findOne({
  _id :id
}).then((todo)=>{
  console.log('Todos',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo)
  {
    return console.log('Id not found');
  }
  console.log('Todo by Id',todo);
}).catch((e)=>{
  console.log(e);
});
