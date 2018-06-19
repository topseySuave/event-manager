import Helpers from '../../src/helpers/';

describe('Helpers', () => {
  let helpers;
  beforeAll(() => {
    helpers = new Helpers();
  });

  it('equals function checks if two values are the same', () => {
    expect(helpers.equals(5, 5)).toBe(true);
    expect(helpers.equals('gabriel', 'gabriel')).toBe(true);
  });

  it('sanitizeString function: format a string to be URL friendly', () => {
    let inputValue = 'this is a title of an event';
    let outputValue = 'this-is-a-title-of-an-event';
    expect(helpers.sanitizeString(inputValue)).toBe(outputValue);
  });

  it(
    'numberWithCommas: format number string to comma seperated currency',
    () => {
      let inputValue = '50000';
      let outputValue = '50,000';
      expect(helpers.numberWithCommas(inputValue)).toBe(outputValue);
    }
  );
});
