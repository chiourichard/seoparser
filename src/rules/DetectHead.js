var cheerio = require('cheerio');
class DetectHead {
  // Constructor

  constructor() {
    // always initialize all instance properties
  }

  processRule(content) {
    var $ = cheerio.load(content);
    var head_content = $('head');
    this.checkTitleTagExist(head_content);
    this.checkMetaTagExist(head_content, 'descriptions');
    this.checkMetaTagExist(head_content, 'keywords');
  }

  checkTitleTagExist(head_content) {
    var title_exist = head_content.find('title').length;
    if (title_exist < 1) {
      console.log('There is no <title> tag in header');
    }
  }

  checkMetaTagExist(head_content, tag) {
    var meta_tag_exist = head_content.find('meta[name=' + tag + ']').length;
    if (meta_tag_exist < 1) {
      console.log('There is no <meta name=“' + tag + '” ... /> tag in header');
    }
  }
}
// export the class
module.exports = DetectHead;
