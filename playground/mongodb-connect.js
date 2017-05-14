// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Inserting a new document in Users Collection
    db.collection('Users').insertOne({
      name: 'Qamber Abbas',
      age: 23,
      location: 'Melbourne'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert user', err);
      }

      //Result.ops saves all the arrays inserted in the Users document
      // console.log(JSON.stringify(result.ops, undefined, 2));
      console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});
