(function(){
  //list variables
  var amount = 99

  var twenties = Math.trunc(amount/20);

  var tens = Math.trunc((amount - (twenties*20))/10);

  var fives = Math.trunc((amount - (twenties*20) - (tens*10))/5);

  var ones = Math.trunc((amount - (twenties*20) - (tens*10) - (fives*5))/1);


  var array = [twenties, tens, fives, ones]

console.log(array)

})()
