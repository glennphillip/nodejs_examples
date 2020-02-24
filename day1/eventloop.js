const fs = require('fs');

fs.writeFile('./names.txt', 'Miss Xing', function (err) {
    if (err) throw err;
    console.log('fs....');
});

setImmediate(() => console.log('Immediate'));
setTimeout(() => console.log('timeout'), 0);



