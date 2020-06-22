/* global test expect */

const { sum } = require("./something");

test("sum test", () => {
  expect(sum(10, 20)).toBe(30);
});
