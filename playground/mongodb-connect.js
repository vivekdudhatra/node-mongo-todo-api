//const MongoClient = require('mongodb').MongoClient;

 const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

    if(err){
    return  console.log('Unable to connect to MdB server');
    }
    console.log('Connected to MDB server');



    db.collection('Users').insertOne({
      name:'VIVEK',
      age:'25',
      location:'surat'
      },(err,res)=>{
      if(err)
      {
        return console.log('Unable to insert User',err);
      }
      console.log(res.ops[0]._id.getTimestamp());
    });

  db.close();
});
