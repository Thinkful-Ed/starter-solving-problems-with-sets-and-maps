const sumPairs = require("./index");

describe("Sum Pairs", () => {
  it("should return [] for []", () => {
    expect(sumPairs([], 10)).toEqual([]);
  });

  it("should return [] when no pairs found", () => {
    expect(sumPairs([1, 2, 3, 4], 10)).toEqual([]);
  });

  it("should not return duplicates", () => {
    expect(sumPairs([5, 2, 3], 10)).toEqual([]);
  });

  it("should find distinct pairs", () => {
    expect(
      sumPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 10).sort(
        (a, b) => a.sort()[0] - b.sort()[0]
      )
    ).toEqual([
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6],
    ]);
  });
});
