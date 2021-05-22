const { primaryColorMsg, successMsg } = require('../../utils/text-styles.js');
const { loadHistory } = require('../../utils/utils.js');

const useReport = (reportDate, conditionCallback) => {
  const history = loadHistory();
  let total = 0;
  const output = [];
  history.forEach(item => {
    const { categoryName, price, dates } = item;
    let count = 0;

    dates.forEach(date => {
      const historyDate = new Date(date);

      if (conditionCallback(historyDate, reportDate)) {
        count++;
        total += +price;
      }
    });

    count && output.push({ categoryName, price, count });
  });

  output.sort((prev, next) => (prev.categoryName > next.categoryName ? 1 : -1));
  output.forEach(data =>
    console.log(
      primaryColorMsg(`${data.categoryName} ${data.price} ${data.count}`)
    )
  );

  console.log(successMsg(`>Total: ${total.toFixed(2)}`));
};

const report = date => {
  const dateArr = date.replace(/\D/g, ' ').split(' ');

  dateArr.length == 2 &&
    useReport(date, (historyDate, reportDate) => {
      const requestDate = new Date(reportDate);
      return (
        historyDate.getFullYear() === requestDate.getFullYear() &&
        historyDate.getMonth() === requestDate.getMonth()
      );
    });

  dateArr.length == 3 &&
    useReport(date, (historyDate, reportDate) => {
      const requestDate = new Date(reportDate);
      return historyDate >= requestDate;
    });
};

module.exports = report;
