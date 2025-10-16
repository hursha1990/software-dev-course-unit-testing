const { calculateDiscount } = require("../discount.js");

describe("calculate discount tests ", () => {
  // calculateDiscount
  // positive test
  test("calculate discount with valid price and discount ", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
  });
  
});

