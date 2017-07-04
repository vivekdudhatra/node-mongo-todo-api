const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

   if(err){
   return  console.log('Unable to connect to MdB server');
   }
   console.log('Connected to MDB server');

  //  var collection = db.collection('Todos');
   //
  //  collection.findOneAndUpdate({
  //    _id: new ObjectID('595b658b13cfd3045fb2cd17')
  //  },{
  //    $set:{
  //      text:"Go to hell"
  //    }
  //  },{
  //    returnOrigional:false
  //  }).then((result)=>{
  //    console.log(result);
  //  });



//   db.collection('Users').find().forEach( function (x) {
//     x.age = parseInt(x.age);
//     db.collection('Users').save(x);
// });


   db.collection('Users').findOneAndUpdate({
     _id:new ObjectID('595b6b5713cfd3045fb2ceef')
   },{
     $set:{name:'Steve'},
     $inc:{ age:5 }
   }).then((result=>{
     console.log(result);
   }))

// db.close();
});
