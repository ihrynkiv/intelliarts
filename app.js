const yargs = require('yargs');

//import functions
const addCategory = require('./components/add-category/addCategory');
const addItem = require('./components/add-item/addItem');
const purchase = require('./components/purchase/purchase');
const list = require('./components/list/list.js');
const clear = require('./components/clear/clear.js');
const report = require('./components/report/report.js');

const argStart = 3;

// Create addCategory command
yargs.command({
  command: 'addCategory',
  describe: 'Register a snack category in the system.',
  handler: () => addCategory(...process.argv.slice(argStart)),
});

// Create addItem command
yargs.command({
  command: 'addItem',
  describe: 'Register provided amount of snack items to sell',
  handler: () => addItem(...process.argv.slice(argStart)),
});

// Create purchase  command
yargs.command({
  command: 'purchase',
  describe: 'Purchase a single snack item.',
  handler: () => purchase(...process.argv.slice(argStart)),
});

// Create list command
yargs.command({
  command: 'list',
  describe:
    'Show list of served categories with amount of items available for sale sorted by amount',
  handler: () => list(),
});

// Create clear command
yargs.command({
  command: 'clear',
  describe: 'Stop serving all snack categories that don’t have items for sale',
  handler: () => clear(),
});

// Create report command
yargs.command({
  command: 'report',
  describe: 'Show earnings by category sorted by category name.',
  handler: () => report(...process.argv.slice(argStart)),
});

yargs.parse();
