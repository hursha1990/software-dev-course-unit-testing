const { calculateDiscount } = require("../discount.js");

describe("calculate discount tests ", () => {
  // calculateDiscount
  // positive test
  test("calculate discount with valid price and discount ", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
  });
  // negative test
  test("calculate discount with invalid discount rate ", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
  });

  // edge case
  test("calculate discount with invalid price ", () => {
    expect(calculateDiscount(0, 0.1)).toBe(0);
  });
});
