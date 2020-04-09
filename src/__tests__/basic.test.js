const assert = require('assert');

/**
 * Main input selector.
 */
const selector = '[data-test="entrada"]';

/**
 * Retrieve main page input.
 */
const getInput = async () => {
  try {
    await page.waitForSelector(selector);
    
    const input = await page.$(selector);

    if (! input) {
      throw null;
    }
  
    return input;
  } catch (e) {
    assert(false, 'Could not find the input');
  }
};

/**
 * Load page recursive.
 */
const load = async () => {
  try {
    await page.goto('http://localhost:1337');
  } catch (e) {
    await load();
  }
};

describe('Palindrome', () => {
  beforeEach(load);

  it('should have a global vue instance', async () => {
    assert(await page.evaluate(() => typeof window.Vue !== 'undefined'), 'Vue instance not found in page');

    await getInput();
  });
});
