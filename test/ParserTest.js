const expect = require('chai').expect;
var testModule = require('../src/Parser');

describe('Test add rule modules.', () => {
  it('Add DetectImgTagWithoutAlt module', () => {
    var module = new testModule();
    module.addDetectImgTagWithoutAlt();
    var RuleModule = require('../src/rules/DetectImgTagWithoutAlt.js');
    var ruleModule = new RuleModule();
    var resultArray = new Array();
    resultArray.push(ruleModule);
    expect(module.showRule()).to.deep.equal(resultArray);
  });

  it('Add DetectH1Tag module', () => {
    var module = new testModule();
    module.addDetectH1Tag();
    var RuleModule = require('../src/rules/DetectH1Tag.js');
    var ruleModule = new RuleModule();
    var resultArray = new Array();
    resultArray.push(ruleModule);
    expect(module.showRule()).to.deep.equal(resultArray);
  });

  it('Add DetectATagWithoutRel module', () => {
    var module = new testModule();
    module.addDetectATagWithoutRel();
    var RuleModule = require('../src/rules/DetectATagWithoutRel.js');
    var ruleModule = new RuleModule();
    var resultArray = new Array();
    resultArray.push(ruleModule);
    expect(module.showRule()).to.deep.equal(resultArray);
  });

  it('Add DetectHead module', () => {
    var module = new testModule();
    module.addDetectHead();
    var RuleModule = require('../src/rules/DetectHead.js');
    var ruleModule = new RuleModule();
    var resultArray = new Array();
    resultArray.push(ruleModule);
    expect(module.showRule()).to.deep.equal(resultArray);
  });

  it('Add DetectStrongTag module', () => {
    var module = new testModule();
    module.addDetectStrongTag(3);
    var RuleModule = require('../src/rules/DetectStrongTag.js');
    var ruleModule = new RuleModule(3);
    var resultArray = new Array();
    resultArray.push(ruleModule);
    expect(module.showRule()).to.deep.equal(resultArray);
  });

  it('process rules', () => {
    var module = new testModule();
    var module = new testModule();
    module.addDetectHead();
    module.addDetectATagWithoutRel();

    expect(module.process()).to.equal(true);
  });
});
