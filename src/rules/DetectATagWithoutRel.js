class DetectATagWithoutRel {
  // Constructor

  constructor() {
    // always initialize all instance properties
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
    if (count > 1) {
      console.log('There are ' + count + ' <a> tag without rel attribute');
    }
  }
}
// export the class
module.exports = DetectATagWithoutRel;
