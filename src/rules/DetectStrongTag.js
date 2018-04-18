class DetectStrongTag {
  // Constructor

  constructor(num) {
    // always initialize all instance properties
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
    if (count > this.num) {
      console.log('This HTML have more than ' + this.num + ' <strong> tag');
    }
  }
}
// export the class
module.exports = DetectStrongTag;
