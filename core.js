const path = require('path');
const { url } = require('./logger');
const fs = require('fs');
const os = require('os');

//console.log(path.basename(url)); // output : log

// console.log(__dirname);
// console.log(__filename);

// console.log(path.join(__dirname, 'test', 'text.txt'));

// Methode asynchrone
// fs.readFile(path.join(__dirname, 'testt', 'text.txt'), 'utf8', (err, data) => {
// if (err) {
//   console.log(err);
// } else {
//   console.log(data);
// }
//   try {
//     if (err) throw err;
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log('next step');
// });

// Methode synchrone
// try {
//   const data = fs.readFileSync(
//     path.join(__dirname, 'test', 'text.txt'),
//     'utf-8'
//   );
//   console.log(data);
// } catch (error) {
//   console.log(error.message);
// }

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log('total memory:' + Math.floor(totalMemory / 1e9) + ' GB');
console.log('free memory:' + Math.floor(freeMemory / 1e9) + ' GB');
