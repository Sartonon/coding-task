const { getKeys } = require("../codeTask");
const assert = require("assert");

const tests = [
  {
    input: [1, 2, { foo: "bar" }],
    return: ["foo"],
  },
  {
    input: [{ foo: "bar" }, { baz: { quux: "buux" } }],
    return: ["foo", "quux", "baz"],
  },
  {
    input: { title: { fi: "moi", sv: "hej", en: "hello" } },
    return: ["fi", "sv", "en", "title"],
  },
  {
    input: "moikka",
    return: [],
  },
  {
    input: {
      1: {
        2: "bar",
        3: "bar",
        4: {
          5: {
            6: {
              7: "bar",
              8: "bar",
              9: [
                {
                  10: "bar",
                  11: "bar",
                },
                {
                  12: {
                    13: "bar",
                    14: "bar",
                  },
                },
              ],
            },
          },
        },
        15: "bar",
        16: "bar",
        17: ["asd", "ASD", "ASD"],
      },
    },
    return: [2, 3, 7, 8, 10, 11, 13, 14, 12, 9, 6, 5, 4, 15, 16, 17, 1],
  },
];

describe("getKeys()", () => {
  it("should return object keys in correct order when JSON is given", () => {
    tests.forEach(({ input, return: returnValue }) => {
      assert.deepEqual(getKeys(input), returnValue);
    });
  });
});
