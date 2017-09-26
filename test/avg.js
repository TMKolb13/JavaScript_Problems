var avg = require('../avg');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('avg', function() {
    context('given you have the numbers 3, 4, 5', function() {
      it('returns 4 as the average', function() {
        var number = avg(3,4,5)
        expect(number).to.equal(4);
      });
    });
});