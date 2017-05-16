// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //delete many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });


    //delete many
    // db.collection('Users').deleteMany({name: 'Qamber Abbas'}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID("590f52d97a2b520da84a2b30")}).then((result) => {
      console.log(result);
      console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});
