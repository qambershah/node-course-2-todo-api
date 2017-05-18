var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  }
});


var newUser = new User ({
  email: 'test@test.com'
});

newUser.save().then((doc) => {
  console.log('User saved');
  console.log(JSON.stringify(doc, undefined,  2));
}, (e) => {
  console.log('Unable to save user', e);
});
