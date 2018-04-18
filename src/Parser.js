var fs = require('fs');
var ruleModules = new Array();
class Parser {
  // Constructor
  constructor(file) {
    // always initialize all instance properties
    this.file = file;
  }

  addDetectImgTagWithoutAlt() {
    var RuleModule = require('./rules/DetectImgTagWithoutAlt.js');
    this.addRule(RuleModule);
  }

  addDetectATagWithoutRel() {
    var RuleModule = require('./rules/DetectATagWithoutRel.js');
    this.addRule(RuleModule);
  }

  addDetectHead() {
    var RuleModule = require('./rules/DetectHead.js');
    this.addRule(RuleModule);
  }

  addDetectStrongTag(num) {
    var RuleModule = require('./rules/DetectStrongTag.js');
    this.addRule(RuleModule, num);
  }

  addDetectH1Tag() {
    var RuleModule = require('./rules/DetectH1Tag.js');
    this.addRule(RuleModule);
  }

  addRule(ruleModule, para = null) {
    var ruleModule = new ruleModule(para);
    ruleModules.push(ruleModule);
  }

  process() {
    fs.readFile(this.file, 'utf8', function(err, data) {
      var htmlContent = data;
      for (var ruleModule of ruleModules) {
        ruleModule.processRule(htmlContent);
      }
    });
  }
}
// export the class
module.exports = Parser;
