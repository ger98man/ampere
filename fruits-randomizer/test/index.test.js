const { getRandomFruit } = require("../srv/index");

describe("Fruits Randomizer", () => {
  it("should pick mango", () => {
    const data = {
      apple: 0,
      pear: 0,
      orange: 0,
      peach: 0,
      mango: 100,
    };
    expect(getRandomFruit(data)).toBe("mango");
  });

  it("should pick orange", () => {
    const data = {
      apple: 0,
      pear: 0,
      orange: 100,
      peach: 0,
      mango: 0,
    };
    expect(getRandomFruit(data)).toBe("orange");
  });

  it("should pick avokado", () => {
    const data = {
      apple: 0,
      pear: 0,
      orange: 0,
      peach: 0,
      mango: 0,
      avokado: 100,
    };
    expect(getRandomFruit(data)).toBe("avokado");
  });

  it("should raise an error regarding total probability", () => {
    const data = {
      apple: 0,
      pear: 0,
      orange: 0,
      peach: 0,
      mango: 100,
      avokado: 100,
    };

    try {
      getRandomFruit(data);
    } catch (e) {
      expect(e.message).toBe("Total probability must be 100!");
    }
  });
});
