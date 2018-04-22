const expect = require('chai').expect;
var testModule = require('../../src/rules/DetectImgTagWithoutAlt');

describe('Detect how many img tag without alt.', () => {
  it('Detect 1 img tag without alt', () => {
    var content =
      '<img src="https://cdn.engoo.com/assets/shared/icon-calendar-af1ae8e2380ebef9d38a3ed33572dc04.png">';
    var module = new testModule();
    expect(module.processRule(content)).to.equal(
      'There are 1 <img> tag without alt attribute'
    );
  });

  it('Detect 2 img tag without alt', () => {
    var content =
      '<img class="pull-left" src="https://cdn.engoo.com/assets/shared/icon-calendar-af1ae8e2380ebef9d38a3ed33572dc04.png"><img class="pull-left" src="https://cdn.engoo.com/assets/shared/icon-calendar-af1ae8e2380ebef9d38a3ed33572dc04.png">';
    var module = new testModule();
    expect(module.processRule(content)).to.equal(
      'There are 2 <img> tag without alt attribute'
    );
  });

  it('Detect 0 img tag without alt', () => {
    var content =
      '<img alt="llll" class="pull-left" src="https://cdn.engoo.com/assets/shared/icon-calendar-af1ae8e2380ebef9d38a3ed33572dc04.png">';
    var module = new testModule();
    expect(module.processRule(content)).to.equal('');
  });
});
