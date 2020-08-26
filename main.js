var getNumLessThanTen = require ('./getNumLessThan.js');
var waitOneSecond = require('./waitOneSecond.js');
var writeToFile = require('./writeToFile.js');
/*
get a random number less than 10,
then, wait three seconds
then, write the number to the hard drive
Then, once all that is done, console log "I'm done!"
CONSTRAINTS
- You must use "getNumLessThan.js" to generate your random number. Note: the "getNumLessThan.js" file is just an overly complicated way to make getting a random number asynchronous (there is no reason for it to be asynchronous, other than as an exercise).
- No editing any file except main.js (comments are the exception)
*/

var threeSecondDelay = () => {
  getNumLessThanTen((err, num) => {
    if (err) {
      console.log('error getting number: ', err);
    } else {
      console.log('got number: ', num);
      waitOneSecond(num, (err, res1) => {
        if (err) {
          console.log('error(sec1): ', err);
        } else {
          console.log('delay1: ', res1)
          waitOneSecond(res1, (err, res2) => {
            if (err) {
              console.log('error(sec2): ', err);
            } else {
              console.log('delay2: ', res2)
              waitOneSecond(res2, (err, res3) => {
                if (err) {
                  console.log('error(sec3): ', err);
                } else {
                  console.log('delay3: ', res3)
                  writeToFile(res3, (err, res) => {
                    if (err) {
                      console.log('error writing to file: ', err);
                    } else {
                      console.log('success: ', res);
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
}

threeSecondDelay();