const BasicRule = require('./BasicRule.js');
class DetectATagWithoutRel extends BasicRule {
  // Constructor

  constructor() {
    // always initialize all instance properties
    super();
  }

  processRule(content) {
    var regex = /(<a(?!.*?rel=(['"]).*?\2)[^>]*)(>)/gi;
    var match;
    var count = 0;

    do {
      match = regex.exec(content);
      if (match) {
        count++;
      }
    } while (match);

    var result = '';
    if (count >= 1) {
      result = 'There are ' + count + ' <a> tag without rel attribute';
      this.resultInfo(result);
    }

    return result;
  }
}
// export the class
module.exports = DetectATagWithoutRel;
