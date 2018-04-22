const expect = require('chai').expect;
var testModule = require('../../src/rules/DetectATagWithoutRel');

describe('Detect how many a tag without rel', () => {
  it('Detect 1 a tag without rel', () => {
    var content =
      '<a data-toggle="tab" href="#teacher-show-pane-1">課程出席</a>';
    var module = new testModule();
    expect(module.processRule(content)).to.equal(
      'There are 1 <a> tag without rel attribute'
    );
  });

  it('Detect 2 a tag without rel', () => {
    var content =
      '<a data-toggle="tab" href="#teacher-show-pane-1">課程出席</a> <a data-toggle="tab" href="#teacher-show-pane-1">TTT</a>';
    var module = new testModule();
    expect(module.processRule(content)).to.equal(
      'There are 2 <a> tag without rel attribute'
    );
  });

  it('Detect 0 a tag without rel', () => {
    var content =
      '<a rel="vvv" data-toggle="tab" href="#teacher-show-pane-1">課程出席</a>';
    var module = new testModule();
    expect(module.processRule(content)).to.equal('');
  });
});
