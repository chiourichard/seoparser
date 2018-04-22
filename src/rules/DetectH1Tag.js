const BasicRule = require('./BasicRule.js');
class DetectH1Tag extends BasicRule {
  // Constructor

  constructor() {
    // always initialize all instance properties
    super();
  }

  processRule(content) {
    var regex = /<[hH]1*>/gi;
    var match;
    var count = 0;

    do {
      match = regex.exec(content);
      if (match) {
        count++;
      }
    } while (match);

    var result = '';
    if (count > 1) {
      result = 'This HTML have more than one <h1> tag';
      this.resultInfo(result);
    }

    return result;
  }
}
// export the class
module.exports = DetectH1Tag;
