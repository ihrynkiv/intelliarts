const {
  errorMsg,
  successMsg,
  primaryColorMsg,
} = require('../../utils/text-styles.js');
const {
  loadSnacks,
  saveSnacks,
  isCategoryMatch,
} = require('../../utils/utils.js');

const addCategory = (categoryName, price, amount = 0) => {
  const snacks = loadSnacks();
  const isDuplicate = isCategoryMatch(snacks, categoryName);
  if (isDuplicate) {
    console.log(errorMsg('Category title taken'));
    return;
  }

  const fixedPrice = (+price).toFixed(2);

  snacks.push({
    categoryName,
    price: fixedPrice,
    amount,
  });

  saveSnacks(snacks);
  console.log(successMsg('New snack category added'));
  console.log(primaryColorMsg(`${categoryName} ${fixedPrice} ${amount}`));
};

module.exports = addCategory;
