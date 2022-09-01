const bruteForce = require("./bruteForce");

test("expect brute force with nums [7,2,13,11] and target 9 to be [0,1]", () => {
  expect(bruteForce([7, 2, 13, 11], 9)).toStrictEqual([0, 1]);
});
