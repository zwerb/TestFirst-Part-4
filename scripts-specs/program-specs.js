/* Jasmine Test Suite and Specs */

// Function: add
describe('whatIsthis Function', function () {
  it('is a function', function () {
    expect(whatIsthis).toBeDefined();
    expect(typeof whatIsthis).toBe('function');
  });

  it('does not return an object, unless new is used', function () {
    expect(typeof whatIsthis()).toBe('undefined');
  });

});

