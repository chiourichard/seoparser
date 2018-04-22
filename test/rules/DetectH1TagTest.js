const expect = require('chai').expect;
var testModule = require('../../src/rules/DetectH1Tag');

describe('Detect if a HTML have more than one <H1> tag.', () => {
  it('Detect 2 h1 tag', () => {
    var content = '<h1>aaa</h1> <h1>bbb</h1>';
    var module = new testModule();
    expect(module.processRule(content)).to.equal(
      'This HTML have more than one <h1> tag'
    );
  });

  it('Detect 1 h1 tag', () => {
    var content = '<h1>aaa</h1>';
    var module = new testModule();
    expect(module.processRule(content)).to.equal('');
  });

  it('Detect 0 h1 tag', () => {
    var content =
      '<a data-toggle="tab" href="#teacher-show-pane-1">課程出席</a>';
    var module = new testModule();
    expect(module.processRule(content)).to.equal('');
  });
});
