const terminusEnv = process.env.TERMINUS_ENV;
const terminusSite = process.env.TERMINUS_SITE;
const testUrl = `http://${terminusEnv}-${terminusSite}.pantheonsite.io/`;

module.exports = {
  after(browser) {
    // Close down the browser session.
    browser.end();
  },

  afterEach(browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Homepage': function(browser) {
    browser.url(testUrl).waitForElementVisible('body', 2000);
    browser.percySnapshot();
  }
};
