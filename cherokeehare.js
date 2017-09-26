  function finalNumberOfHares(startingPopulation, birthRate, numberOfWeeks){
    return (startingPopulation + ((startingPopulation*birthRate)*numberOfWeeks)) 
  }

  module.exports = finalNumberOfHares;

// (function(){
//   //list all variables
//   var startingPopulation = 200 //initial population of hares
//   var birthRate = 0.1 //birth rate percentage per week
//   var numberOfWeeks = 5 //how long we're trying to simulate

//   var finalNumberOfHares = (startingPopulation + ((startingPopulation*birthRate)*numberOfWeeks)) //how many are born after numberOfWeeks

//   console.log("There will be " + finalNumberOfHares + " after " + numberOfWeeks + " weeks")

// })()
