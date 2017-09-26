function tallestMountain(mountainArray){
  mountainArray.sort(function(a,b){
    return a - b;
  });
  return mountainArray[mountainArray.length - 1]
}

module.exports = tallestMountain;

//old solution
// let mountainArray = [500,10000,4000,6000,15000,7000];

// mountainArray.sort(function(a,b){
//   return a - b;
// });

// console.log(mountainArray[mountainArray.length - 1]);

