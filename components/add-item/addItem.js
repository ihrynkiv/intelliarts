const {
  successMsg,
  primaryColorMsg,
  errorMsg,
} = require('../../utils/text-styles.js');
const {
  loadSnacks,
  saveSnacks,
  isCategoryMatch,
} = require('../../utils/utils.js');

const addItem = (categoryName, amount) => {
  if (Number.isNaN(+amount)) {
    console.log(errorMsg('arguments are invalid, please try again'));
    return;
  }

  const snacks = loadSnacks();

  if (!isCategoryMatch(snacks, categoryName)) {
    console.log(errorMsg(`${categoryName} not found`));
    return;
  }

  snacks.forEach(snack => {
    if (snack.categoryName === categoryName) {
      snack.amount = +snack.amount + +amount;
      console.log(successMsg(`${categoryName} added`));
      console.log(
        primaryColorMsg(`${categoryName} ${snack.price} ${snack.amount}`)
      );
    }
  });
  saveSnacks(snacks);
};

module.exports = addItem;
