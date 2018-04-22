const BasicRule = require('./BasicRule.js');
class DetectStrongTag extends BasicRule {
  // Constructor

  constructor(num) {
    // always initialize all instance properties
    super();
    this.num = num;
  }

  processRule(content) {
    var regex = /<[sS]trong>/gi;
    var match;
    var count = 0;

    do {
      match = regex.exec(content);
      if (match) {
        count++;
      }
    } while (match);

    var result = '';
    if (count > this.num) {
      result = 'This HTML have more than ' + this.num + ' <strong> tag';
      this.resultInfo(result);
    }

    return result;
  }
}
// export the class
module.exports = DetectStrongTag;
