var containsVowel = require('../containsVowel');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('containsVowel', function() {
    context('given the word chocolate', function() {
      it('returns true', function() {
        var result = containsVowel('chocolate')
        expect(result).to.equal(true);
      });
    });
    context('given the word nth', function() {
        it('returns false', function() {
          var result = containsVowel('nth')
          expect(result).to.equal(false);
        });
      });
});