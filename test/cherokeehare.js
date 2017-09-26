var finalNumberOfHares = require('../cherokeehare');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('finalNumberOfHares', function() {
    context('given starting population of 200, birth rate of 10%/week, and 5 weeks', function() {
      it('returns 300 as the final population of hares', function() {
        var hares = finalNumberOfHares(200, .1, 5)
        expect(hares).to.equal(300);
      });
    });
});