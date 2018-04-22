const BasicRule = require('./BasicRule.js');
var cheerio = require('cheerio');
class DetectHead extends BasicRule {
  // Constructor

  constructor() {
    // always initialize all instance properties
    super();
  }

  processRule(content) {
    var $ = cheerio.load(content);
    var head_content = $('head');
    if (head_content == '') {
      return false;
    }

    this.checkTitleTagExist(head_content);
    this.checkMetaTagExist(head_content, 'descriptions');
    this.checkMetaTagExist(head_content, 'keywords');

    return true;
  }

  checkTitleTagExist(head_content) {
    var result = '';
    var title_exist = head_content.find('title').length;
    if (title_exist < 1) {
      result = 'There is no <title> tag in header';
      this.resultInfo(result);
    }
    return result;
  }

  checkMetaTagExist(head_content, tag) {
    var result = '';
    var meta_tag_exist = head_content.find('meta[name=' + tag + ']').length;
    if (meta_tag_exist < 1) {
      result = 'There is no <meta name=“' + tag + '” ... /> tag in header';
      this.resultInfo(result);
    }
    return result;
  }
}
// export the class
module.exports = DetectHead;
