const intersection = require("./index");

describe("Intersection", () => {
  it("should return [] for empty arrays", () => {
    expect(intersection([], [])).toEqual([]);
  });
  it("should return [] if first array is empty", () => {
    expect(intersection([1, 2, 3], [])).toEqual([]);
  });
  it("should return [] if second array is empty", () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
  });
  it("should return [] if no elements in common", () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });
  it("should return full array if both are the same", () => {
    expect(intersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]).sort()).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });
  it("should eliminate duplicates from results", () => {
    expect(
      intersection([1, 2, 2, 3, 4, 4, 5], [1, 2, 2, 3, 4, 5]).sort()
    ).toEqual([1, 2, 3, 4, 5]);
  });
  it("should only return common elements", () => {
    expect(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]).sort()).toEqual([
      3, 4, 5,
    ]);
  });
});
