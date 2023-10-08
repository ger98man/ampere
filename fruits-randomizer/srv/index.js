const { FRUITS_WITH_PROBABILITIES } = require("../data/constant");

function checkTotalProbability(probabilities) {
  const totalProbability = probabilities.reduce((acc, prob) => {
    acc += prob;
    return acc;
  }, 0);

  if (totalProbability !== 100)
    throw new Error("Total probability must be 100!");
}

function generateBigArrayOfFruits(fruitsWithProb) {
  return Object.keys(fruitsWithProb).reduce((acc, fruit) => {
    acc = acc.concat(Array(fruitsWithProb[fruit]).fill(fruit));
    return acc;
  }, []);
}

function getRandomFruit(fruitsWithProb) {
  const probabilities = Object.values(fruitsWithProb);
  checkTotalProbability(probabilities);

  const bigArray = generateBigArrayOfFruits(fruitsWithProb);
  const randomIndex = Math.floor(Math.random() * 99);

  return bigArray[randomIndex];
}

console.log(`Random fruit is: ${getRandomFruit(FRUITS_WITH_PROBABILITIES)}.`);

module.exports = { getRandomFruit };
