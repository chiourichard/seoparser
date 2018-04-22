const expect = require('chai').expect;
var testModule = require('../../src/rules/DetectStrongTag');

let content;

before(function() {
  content =
    '<strong>a</strong><strong>b</strong><strong>c</strong><strong>d</strong>';
  let module;
});

describe('Detect if there’re more than (num) <strong> tag in HTML.', () => {
  it('if num = 2', () => {
    module = new testModule(2);
    expect(module.processRule(content)).to.equal(
      'This HTML have more than 2 <strong> tag'
    );
  });

  it('if num = 15', () => {
    module = new testModule(15);
    expect(module.processRule(content)).to.equal('');
  });

  it('if num = 0', () => {
    module = new testModule(0);
    expect(module.processRule(content)).to.equal(
      'This HTML have more than 0 <strong> tag'
    );
  });
});
