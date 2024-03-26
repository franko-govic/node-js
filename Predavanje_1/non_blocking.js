const fs = require('fs');

console.log("Početak programa");


fs.readFile('non_blocking.txt', 'utf8', (err, data) => {
  if(err) throw err;
  console.log("Sadržaj datoteke:", data);
});

console.log('Kraj programa');