const { test } = require('node:test');
const assert = require('node:assert/strict');
const { categorize } = require('../categorise.js');

/** @type {[string, string][]} */
const CASES = [
  // Owner report
  ['pork mince.', 'Meat & Fish'],
  ['squash', 'Drinks'],
  ['Wrap', 'Bakery'],
  ['cling wrap', 'Household'],
  ['clingfilm', 'Household'],
  ['butternut squash', 'Fruit & Vegetables'],
  // Owner's other items
  ['agurkas', 'Fruit & Vegetables'],
  ['garlic', 'Fruit & Vegetables'],
  ['potatoes', 'Fruit & Vegetables'],
  ['svogunai', 'Fruit & Vegetables'],
  ['Butter', 'Dairy'],
  ['Pienas', 'Dairy'],
  ['Yogurt', 'Dairy'],
  ['Duona', 'Bakery'],
  ['Makaronai', 'Pasta & Rice'],
  ['beer', 'Drinks'],
  ['sultys', 'Drinks'],
  // UK grocery senses
  ['biscuits', 'Bakery'],
  ['courgette', 'Fruit & Vegetables'],
  ['aubergine', 'Fruit & Vegetables'],
  ['orange squash', 'Drinks'],
  ['beef mince', 'Meat & Fish'],
  ['chicken mince', 'Meat & Fish'],
  ['tortilla wrap', 'Bakery'],
  ['plastic wrap', 'Household'],
  // EN / LT variety
  ['obuoliai', 'Fruit & Vegetables'],
  ['vištiena', 'Meat & Fish'],
  ['faršas', 'Meat & Fish'],
  ['pienas', 'Dairy'],
  ['duona', 'Bakery'],
  ['makaronai', 'Pasta & Rice'],
  ['alus', 'Drinks'],
  ['muilas', 'Household'],
  ['obuolių sultys', 'Drinks'],
  // Avoid false positives
  ['pork chops', 'Meat & Fish'],
  ['leek', 'Fruit & Vegetables'],
  ['poras', 'Fruit & Vegetables'],
];

for (const [input, expected] of CASES) {
  test(`${JSON.stringify(input)} → ${expected}`, () => {
    assert.equal(categorize(input), expected);
  });
}
