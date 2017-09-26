function secondLargest(array){
    array.sort(function(a,b){
      return a - b;
    })
    return array[array.length - 2]
  }
  
  module.exports = secondLargest;