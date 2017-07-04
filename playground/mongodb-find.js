const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

   if(err){
   return  console.log('Unable to connect to MdB server');
   }
   console.log('Connected to MDB server');


   //// Selection on id
   db.collection('Todos').find({
      _id : new ObjectID('595b398cc887c28298ccf0ad')
    }).toArray().then((docs)=>{

     console.log('Todos:');
     console.log(JSON.stringify(docs,undefined,2));
   },(err)=>{
     if(err)
     {
       console.log('Unable to find todos',  err);
     }
   });
//Count total records

db.collection('Todos').find().count().then((count)=>{
  console.log(`Total todos: ${count}`);
},(err)=>{
  console.log('Unable to find todos');
});

// db.close();
});
