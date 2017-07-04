const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

   if(err){
   return  console.log('Unable to connect to MdB server');
   }
   console.log('Connected to MDB server');

 var collection = db.collection('Users');

 // collection.deleteMany({name:'VIVEK'}).then((result)=>{
 //   console.log(result);
 // });

 // collection.deleteOne({name:'Rajesh'}).then((result)=>{
 //   console.log(result);
 // });

  db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
   console.log(result);
 });
// db.close();
});
