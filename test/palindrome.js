var palindrome = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('palindrome', function() {
    context('given word is radar', function() {
      it('returns true', function() {
        var word = palindrome('radar')
        expect(word).to.equal(true);
      });
    });

    context('given word is candy', function() {
      it('returns false', function() {
        var word2 = palindrome('candy')
        expect(word2).to.equal(false);
      });
    });
});