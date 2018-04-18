var Parser = require('./Parser.js');
var argv = require('minimist')(process.argv.slice(2));

var seoparser = new Parser(argv.file);
//rule
for (var item in argv) {
  switch (item || '') {
    case 'a':
      seoparser.addDetectImgTagWithoutAlt();
      break;
    case 'b':
      seoparser.addDetectATagWithoutRel();
      break;
    case 'c':
      seoparser.addDetectHead();
      break;
    case 'd':
      seoparser.addDetectStrongTag(argv[item]);
      break;
    case 'e':
      seoparser.addDetectH1Tag();
      break;
    case 'h':
      helpInfo();
      break;
    default:
      break;
  }
}

// html file
if (argv.file == null) {
  console.log('There is no input file');
  return;
} else {
  var fs = require('fs');
  if (!fs.existsSync(argv.file)) {
    console.log('The file path is wrong');
    return;
  }
}

seoparser.process();

function helpInfo() {
  console.log(' --file=filepath: Detect file input');
  console.log(' -a: Detect if any <img /> tag without alt attribute');
  console.log(' -b: Detect if any <a /> tag without rel attribute');
  console.log(' -c: In <head> tag');
  console.log('    i. Detect if header doesn’t have <title> tag');
  console.log(
    '    ii. Detect if header doesn’t have <meta name=“descriptions” ... /> tag'
  );
  console.log(
    '    iii. Detect if header doesn’t have <meta name=“keywords” ... /> tag'
  );
  console.log(
    ' -d num: Detect if there’re more than 15 <strong> tag in HTML (15 is a value should be configurable by user)'
  );
  console.log(' -e: Detect if a HTML have more than one <H1> tag.');
}
