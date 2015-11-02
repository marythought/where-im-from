var expect = require('chai').expect;
var Poem = require('../lib/poem');
//required file must have a module.exports tag at the bottom

describe("The poem", function() {
  it('should have a name', function() {
    var poem = new Poem('The Great Pumpkin Patch');
    expect(farm.name).to.equal('The Great Pumpkin Patch');
  });

  it('should report correct number of Pumpkins', function() {
    var farm = new PumpkinPatch('The Great Pumpkin Patch', 100);
    expect(farm.pumpkinsLeft()).to.equal(100);
  });
})

//go look at chaijs.com documentation for more BDD language
//don't forget to require chai

// this would also work:

//var chai = require('chai');
//...
//chai.expect(farm.name)...
