(function(){

  function palindrome(word){
    return word === word.split("").reverse().join("")
  }
  // console.log(palindrome('radar'))

  module.exports = palindrome;

  //old way
  // let word = "candy";
  // console.log(word === word.split("").reverse().join(""));
})();
