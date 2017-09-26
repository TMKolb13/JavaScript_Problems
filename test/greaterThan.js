var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('greaterThan', function() {
    context('given two numbers of 10 and 12', function() {
      it('returns true', function() {
        var result = greaterThan(10,12)
        expect(result).to.equal(true);
      });
    });
    context('given two numbers of 20 and 12', function() {
        it('returns false', function() {
          var result = greaterThan(20,12)
          expect(result).to.equal(false);
        });
      });
});