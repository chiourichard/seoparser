class DetectImgTagWithoutAlt {
  // Constructor

  constructor() {
    // always initialize all instance properties
  }

  processRule(content) {
    var regex = /(<img(?!.*?alt=(['"]).*?\2)[^>]*)(>)/gi;
    var match;
    var count = 0;

    do {
      match = regex.exec(content);
      if (match) {
        count++;
      }
    } while (match);
    if (count > 1) {
      console.log('There are ' + count + ' <img> tag without alt attribute');
    }
  }
}
// export the class
module.exports = DetectImgTagWithoutAlt;
