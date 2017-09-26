var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('sum', function() {
    context('given you have the numbers 3 and 5', function() {
      it('returns 8 as the sum', function() {
        var number = sum(3,5)
        expect(number).to.equal(8);
      });
    });
});