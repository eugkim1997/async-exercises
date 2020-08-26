const fs = require('fs');

const writeToFile = (data, callback) => {
  fs.writeFile('numFile.txt', data, 'utf8', (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, 'wrote to file!');
    }
  });
};

const asyncWriteToFile = (data) => {
  return new Promise((resolve, reject) => {
    WriteToFile(data, (err, res) => {
      if (err) => {
        reject(err);
      } else {
        resolve(res);
      }
    })
  })
}

module.exports = writeToFile;
