//overall self invoking function
(function(){
  //define basic variables
  var word = "chocolate";
  var wordArray = word.split("")
  var letter = "e";

  //create  a new array with only occurances of the letter
  let matchArray = wordArray.filter(function(potato){
    return potato == letter;
  })

  //if statement to determine what message to show
  if(matchArray.length > 0) {
    console.log("Yeah, the letter " + letter + " exists " + matchArray.length + " times in my word");
  }
  else {
    console.log("Nope, that letter doesn't exist in my word")
  }
})()
