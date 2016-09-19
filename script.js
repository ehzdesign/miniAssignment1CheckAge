$(document).ready(function() {



  //ask user for age
  var age = getAge();

  //check if age entered is not empty
  if (age === null || age === ''){
    alert('you did not enter anything try again!');
    return;
  }else{
    // change age to number
    age = parseInt(age);
    //keep prompting for age if a number is not entered
    while(isNaN(age) || typeof(age) === 'string'){
      alert('you did not enter a number!')
      age = getAge();
      // console.warn(typeof(age));
    };
    return;
  }
  //display what user is old enough to do
  var message = showMessage(age);
  alert(message);
  // console.log(age);

});


function getAge(){
  var age = prompt('please enter your age as a number!');
  return age;
};

function showMessage(age) {
  //check age and produce proper message
  if( age >= 19 ){
    var message = 'you are ' + age + ' years old!\n You are old enough to drive, vote and drink!';
  }else if( age > 16 && age < 19 ){
    var message = 'you are ' + age + ' years old!\n You are old enough to drive and vote but can\'t drink sorry!';
  }else if( age === 16 ){
    var message = 'you are ' + age + ' years old!\n You are old enough to drive but can\'t drink and vote sorry!';
  }else{
    var message = 'you are ' + age + ' years old!\n You are not old enough to drive, drink or vote sorry!'
  }
  return message;
}
