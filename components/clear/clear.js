const { primaryColorMsg } = require('../../utils/text-styles.js');
const { loadSnacks, saveSnacks } = require('../../utils/utils.js');

const clear = () => {
  let snacks = loadSnacks();

  snacks = snacks.filter(snack => {
    if (+snack.amount !== 0) return snack;
    console.log(primaryColorMsg(`${snack.categoryName} ${snack.price}`));
  });

  saveSnacks(snacks);
};

module.exports = clear;
