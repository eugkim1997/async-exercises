const waitOneSecond = (randNum, callback) => {
  setTimeout(() => {
    callback(null, 'waited one second!');
  }, 1000)
}

module.exports = waitOneSecond;
