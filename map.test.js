const map = require("./map");

test("expect map with nums [7,2,13,11] and target 9 to be [0,1]", () => {
  expect(map([7, 2, 13, 11], 9)).toStrictEqual([0, 1]);
});
