describe('dropdowns', () => {
  before(() => {
    browser.setViewportSize({
      width: 420,
      height: 420,
    });

    // Go to url
    browser.goToComponent('ec-component-dropdown');

    browser.injectAxeCore();

    browser.pause(500);
  });

  // Only continue with Chrome
  // see https://github.com/webdriverio/webdriverio/issues/2212
  if (browser.desiredCapabilities.browserName !== 'chrome') {
    return;
  }

  context('collapsed dropdowns', () => {
    before(() => {
      // Reload
      browser.goToComponent('ec-component-dropdown');
      browser.injectAxeCore();
      browser.pause(500);

      // Click the input
      browser.moveToObject('#example-expandable-button1');
      browser.buttonPress(0); // press left button
    });

    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'dropdowns',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
