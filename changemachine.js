  function changeMachine(amount){
    var twenties = Math.trunc(amount/20);
    var tens = Math.trunc((amount - (twenties*20))/10);
    var fives = Math.trunc((amount - (twenties*20) - (tens*10))/5);
    var ones = Math.trunc((amount - (twenties*20) - (tens*10) - (fives*5))/1);
    
    var array = [twenties, tens, fives, ones]

    return array
  }

  module.exports = changeMachine;


// (function(){
//   //list variables
//   var amount = 164

//   var twenties = Math.trunc(amount/20);

//   var tens = Math.trunc((amount - (twenties*20))/10);

//   var fives = Math.trunc((amount - (twenties*20) - (tens*10))/5);

//   var ones = Math.trunc((amount - (twenties*20) - (tens*10) - (fives*5))/1);


//   var array = [twenties, tens, fives, ones]

// console.log(array)

//erics shitty way I so sorry for doubting you thank you for following up.
//I am human and i made a mistake. I love you!
// var twenties = Math.floor(amount/20);
// var remainder = amount % 20;
//
// var tens = Math.floor(remainder/10)
// remainder = remainder % 10;
//
// var fives = Math.floor(remainder/5)
// remainder = remainder % 5;
//
// var ones = Math.floor(remainder/1)
//
// console.log([twenties, tens, fives, ones])
//


// })()
