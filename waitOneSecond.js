const waitOneSecond = (randNum, callback) => {
  setTimeout(() => {
    callback(null, randNum);
  }, 1000)
}

module.exports = waitOneSecond;
