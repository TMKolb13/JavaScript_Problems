var secondLargest = require('../secondLargest');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('secondLargest', function() {
    context('given numbers 10, 12, 25, 20', function() {
      it('returns 20', function() {
        var result = secondLargest([10,12,25,20])
        expect(result).to.equal(20);
      });
    });
});