module.exports = {
    'Search Test': function (browser) {
      const homePage = browser.page.homePageSearch();
      
      homePage
        .navigate()
        .setValue('@searchBox', 'dress')
        .click('@searchButton');
      
      browser.assert.visible(homePage.elements.searchResults.selector);
    }
  };
  