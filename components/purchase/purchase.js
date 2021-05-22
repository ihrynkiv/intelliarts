const { primaryColorMsg, errorMsg } = require('../../utils/text-styles.js');
const {
  loadSnacks,
  loadHistory,
  saveSnacks,
  saveHistory,
  isCategoryMatch,
} = require('../../utils/utils.js');

const pushDate = (arr, name, date) => {
  arr.forEach(item => {
    if (item.categoryName === name) item.dates.push(date);
  });
};

const purchase = (categoryName, date) => {
  const history = loadHistory();
  let snacks = loadSnacks();
  if (!isCategoryMatch(snacks, categoryName)) {
    console.log(errorMsg(`We have no ${categoryName}`));
    return;
  }

  snacks.forEach(snack => {
    if (snack.categoryName === categoryName && snack.amount >= 1) {
      snack.amount--;
      if (!isCategoryMatch(history, categoryName)) {
        history.push({ categoryName, price: snack.price, dates: [] });
      }
      pushDate(history, categoryName, date);
      console.log(primaryColorMsg(`${date} \n${categoryName} ${snack.price}`));

      saveHistory(history);
    }
  });

  saveSnacks(snacks);
};

module.exports = purchase;
