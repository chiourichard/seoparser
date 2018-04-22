const expect = require('chai').expect;
var cheerio = require('cheerio');
var testModule = require('../../src/rules/DetectHead');

describe('Detect in <head> tag.', () => {
  it('Detect head tag exist', () => {
    var content =
      '<head><title>(Liya) 老師資料 | Engoo《線上英文家教》便宜一對一外籍老師英語口說課！免費試聽、教材下載</title><meta charset="utf-8"></head>';
    var module = new testModule();
    expect(module.processRule(content)).to.equal(true);
  });
});

describe('Detect header content.', () => {
  it('Detect there is no title tag in head tag', () => {
    var content = '<head><meta charset="utf-8"></head>';
    var $ = cheerio.load(content);
    var head_content = $('head');
    var module = new testModule();
    expect(module.checkTitleTagExist(head_content)).to.equal(
      'There is no <title> tag in header'
    );
  });

  it('Detect there is title tag in head tag', () => {
    var content =
      '<head><title>(Liya) 老師資料 | Engoo《線上英文家教》便宜一對一外籍老師英語口說課！免費試聽、教材下載</title><meta charset="utf-8"></head>';
    var $ = cheerio.load(content);
    var head_content = $('head');
    var module = new testModule();
    expect(module.checkTitleTagExist(head_content)).to.equal('');
  });

  it('Detect there is no <meta name=“descriptions” ... /> tag', () => {
    var content = '<head><meta charset="utf-8"></head>';
    var $ = cheerio.load(content);
    var head_content = $('head');
    var module = new testModule();
    expect(module.checkMetaTagExist(head_content, 'descriptions')).to.equal(
      'There is no <meta name=“descriptions” ... /> tag in header'
    );
  });

  it('Detect there is <meta name=“descriptions” ... /> tag', () => {
    var content =
      '<head><meta name="descriptions" content="作为前端开发者，node和npm安装必不可少。然而有时会因为安装新的app（如MacPorts，慎装，它会修改基本环境变量以及npm的全局设置等）导致版本环境混乱，有2种方式有效管理： 特别推荐安装安装nvm来管理Node版本； 其次推荐brew来对node和npm版本进行管理。 （首选）nvm管理Node 目前我更多的使用nvm来进行node版本管理，它会安装相应版本的npm。执行如下命令..."></head>';
    var $ = cheerio.load(content);
    var head_content = $('head');
    var module = new testModule();
    expect(module.checkMetaTagExist(head_content, 'descriptions')).to.equal('');
  });

  it('Detect there is no <meta name=“keywords” ... /> tag', () => {
    var content = '<head><meta charset="utf-8"></head>';
    var $ = cheerio.load(content);
    var head_content = $('head');
    var module = new testModule();
    expect(module.checkMetaTagExist(head_content, 'keywords')).to.equal(
      'There is no <meta name=“keywords” ... /> tag in header'
    );
  });

  it('Detect there is <meta name=“keywords” ... /> tag', () => {
    var content =
      '<head><meta name="keywords" content="作为前端开发者，node和npm安装必不可少。然而有时会因为安装新的app（如MacPorts，慎装，它会修改基本环境变量以及npm的全局设置等）导致版本环境混乱，有2种方式有效管理： 特别推荐安装安装nvm来管理Node版本； 其次推荐brew来对node和npm版本进行管理。 （首选）nvm管理Node 目前我更多的使用nvm来进行node版本管理，它会安装相应版本的npm。执行如下命令..."></head>';
    var $ = cheerio.load(content);
    var head_content = $('head');
    var module = new testModule();
    expect(module.checkMetaTagExist(head_content, 'keywords')).to.equal('');
  });
});
