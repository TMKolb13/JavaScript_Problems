var hangman = require('../hangmanlite');
var chai = require('chai');
var expect = chai.expect;

//duplicate this describe section if you want to add another test on another method/object
describe('hangman', function() {
    context('given you pass in word chocolate and the letter o', function() {
      it('returns Yeah, the letter o exists 2 times in the word chocolate', function() {
        let result = hangman('chocolate', 'o')
        expect(result).to.equal('Yeah, the letter o exists 2 times in my word');
      });
    });
    context('given you pass in word chocolate and the letter x', function() {
      it('returns Nope, that letter doesn\'t exist in my word', function() {
        let result2 = hangman('chocolate', 'x')
        expect(result2).to.equal("Nope, that letter doesn't exist in my word")
      });
    });
});