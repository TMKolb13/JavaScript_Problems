var tallestMountain = require('../tallestMountain');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('tallestMountain', function() {
    context('given mountain heights of [1,2,3]', function() {
      it('returns 3 as the tallest mountain', function() {
        var tallest = tallestMountain([1,2,3])
        expect(tallest).to.equal(3);
      });
    });
});


