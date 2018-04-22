class BasicRule {
  // Constructor

  constructor() {
    // always initialize all instance properties
  }

  resultInfo(info) {
    if (info == null || info == '') {
      return false;
    } else {
      console.log(info);
      return true;
    }
  }
}
// export the class
module.exports = BasicRule;
