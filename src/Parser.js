var fs = require('fs');
var ruleModules = new Array();
class Parser {
  // Constructor
  constructor(file) {
    // always initialize all instance properties
    this.file = file;
    ruleModules = [];
  }

  addDetectImgTagWithoutAlt() {
    var RuleModule = require('./rules/DetectImgTagWithoutAlt.js');
    this.addRule(RuleModule);

    return true;
  }

  addDetectATagWithoutRel() {
    var RuleModule = require('./rules/DetectATagWithoutRel.js');
    this.addRule(RuleModule);

    return true;
  }

  addDetectHead() {
    var RuleModule = require('./rules/DetectHead.js');
    this.addRule(RuleModule);

    return true;
  }

  addDetectStrongTag(num) {
    var RuleModule = require('./rules/DetectStrongTag.js');
    this.addRule(RuleModule, num);

    return true;
  }

  addDetectH1Tag() {
    var RuleModule = require('./rules/DetectH1Tag.js');
    this.addRule(RuleModule);

    return true;
  }

  addRule(ruleModule, para = null) {
    var ruleModule = new ruleModule(para);
    ruleModules.push(ruleModule);

    return true;
  }

  showRule() {
    return ruleModules;
  }

  process() {
    fs.readFile(this.file, 'utf8', function(err, data) {
      var htmlContent = data;
      for (var ruleModule of ruleModules) {
        ruleModule.processRule(htmlContent);
      }
    });

    return true;
  }
}
// export the class
module.exports = Parser;
