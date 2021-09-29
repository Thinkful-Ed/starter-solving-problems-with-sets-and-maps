const sameLetters = require("./index");

describe("Same Letters", () => {
  it("should return an empty Map for empty array", () => {
    expect(sameLetters([])).toEqual(new Map());
  });

  it("should sort keys alphabetically", () => {
    expect(sameLetters(["word"])).toEqual(new Map([["dorw", ["word"]]]));
  });

  it("should find multiple words with same letters", () => {
    expect(
      sameLetters(["pair", "per", "pole", "pear", "peer", "reap", "lope"])
    ).toEqual(
      new Map([
        ["aipr", ["pair"]],
        ["elop", ["pole", "lope"]],
        ["aepr", ["pear", "reap"]],
        ["epr", ["per", "peer"]],
      ])
    );
  });

  it("should remove duplicate letters", () => {
    expect(sameLetters(["aaaa"])).toEqual(new Map([["a", ["aaaa"]]]));
  });
});
