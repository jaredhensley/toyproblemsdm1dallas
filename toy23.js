/*
var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);*/


//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
//Answer Here

/*undefined*/
//In the example above, what is the 'this keyword' bound to when getUsername runs?
/*window object*/
//Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

/*setTimeout(getMyUsername, 5000).bind(myUser);*/