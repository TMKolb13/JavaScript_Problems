var changeMachine = require('../changemachine');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('changeMachine', function() {
    context('given a user has 68 dollars', function() {
      it('returns [3,0,1,3]', function() {
        var money = changeMachine(68)
        expect(money).to.eql([ 3, 0, 1, 3]);
      });
    });
});