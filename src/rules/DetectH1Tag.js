class DetectH1Tag {
  // Constructor

  constructor() {
    // always initialize all instance properties
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
    if (count > 1) {
      console.log('This HTML have more than one <h1> tag');
    }
  }
}
// export the class
module.exports = DetectH1Tag;
