const { primaryColorMsg } = require('../../utils/text-styles.js');
const { loadSnacks } = require('../../utils/utils.js');

const list = () => {
  const snacks = loadSnacks();

  //sort by amount
  snacks.sort(
    (prevSnack, currentSnack) => prevSnack.amount - currentSnack.amount
  );

  snacks.forEach(snack => {
    console.log(
      primaryColorMsg(`${snack.categoryName} ${snack.price} ${snack.amount}`)
    );
  });
};

module.exports = list;
