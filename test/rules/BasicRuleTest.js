const expect = require('chai').expect;
var testModule = require('../../src/rules/BasicRule');

describe('Detect info printf.', () => {
  it('if info = null', () => {
    var content = '';
    var module = new testModule();
    expect(module.resultInfo(content)).to.equal(false);
  });

  it('if info not null', () => {
    var content = 'ABC TEST';
    var module = new testModule();
    expect(module.resultInfo(content)).to.equal(true);
  });
});
