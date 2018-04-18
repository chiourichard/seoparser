var helloworldInstance = (function() {
  var name = 'Seo Parser';
  return {
    sayHi: function(theName) {
      return 'This is' + (theName || name);
    }
  };
})();

exports = module.exports = helloworldInstance;
