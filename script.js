$(document).ready(function() {

var $ageInput = $('.form input');
var $submitBtn = $('.form .submit');
var $resultMessage = $('.main h1');
var $secondaryMessage = $('.main h2');
var $mainContent = $('.main');
var $wrapper = $('.wrapper');

var submitted = false;

  //ask user for age

  $submitBtn.on('click', function(event) {
    event.preventDefault();


    var age = getAge($ageInput[0]);
    if(age || age === 0){
      message = showMessage(age);

      $resultMessage.html(message[0]);

      $secondaryMessage.text(message[1]);
      // $ageInput.addClass('is-hidden');
      hideThis($ageInput);


    }else{
      $resultMessage.text(message);
      console.log(message);
      hideThis($ageInput, $secondaryMessage);
    }

    console.log('workin');
    blackout($mainContent, $wrapper);

    if(!submitted){
      $submitBtn.text('try again');
      submitted = true;
    }else{
      $submitBtn.text('submit');
      submitted = false;
      restart();
    }



  });


  function getAge(input){
    // var age = prompt('please enter your age as a number!');
    var age = input.value;
    // check if age entered is not empty
    if (age === null || age === ''){
      message = 'you did not enter anything try again!';
      return;
    }else{
      // change age to number
      //
      // age = parseInt(age);
      age = age * 1;

      //ask to try again if a number is not entered
      if(isNaN(age) || typeof(age) === 'string'){
        message = 'you did not enter a number! Try again!';
        return;
      };
      // return;
    }
    console.log('you are ' + age + ' yrs old!');
    console.warn(typeof(age));
    return age;
  };

  function showMessage(age) {
    //check age and produce proper message
    if( age >= 19 ){
      var message = 'you are <span>' + age + '</span> years old!\n You are old enough to drive, vote and drink!';
      var secondaryMessage = '3 out of 3, Congratulations!'
    }else if( age > 16 && age < 19 ){
      var message = 'you are <span>' + age + '</span> years old!\n You are old enough to drive and vote but  <span class="underline">can\'t</span> drink!';
      var secondaryMessage = '2 out of 3, so close, sorry!';
    }else if( age === 16 ){
      var message = 'you are <span>' + age + '</span> years old!\n You are old enough to drive but  <span class="underline">can\'t</span> drink or vote!';
      var secondaryMessage = '1 out of 3, damn, sorry!';
    }else{
      console.log(age);
      var message = 'you are <span>' + age + '</span> years old!\n You are <span class="underline">not</span> old enough to drive, drink or vote!';
      var secondaryMessage = 'you can\'t do anything, sorry!';


    }

    return [message, secondaryMessage];
  }

  function hideThis(){
    //hide each argument passed in this function
    $.each( arguments, function(index, el) {
      el.hide('fast');
    });
  }

  function showThis() {
    $.each( arguments, function(index, el) {
      el.show('fast');
      console.log(el);
    });
  }

  function blackout() {
    $.each( arguments, function(index, el) {
      el.toggleClass('blackout');
    });
  }

  function restart(){
    $resultMessage.text('how old are you?');
    $secondaryMessage.show().text('enter age as a number');
    $ageInput.show('fast');
    console.log($resultMessage);
  }


});
