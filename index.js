  /**
   * Gets value with time.
   * @returns {Number}
   */
  function time(seconds) {
    let value = 3;
    let count = value + 1;
    for (let index = 1; index <= seconds; index++) {
        if (count === 1) {
            value *= 2;
            count = value;
        } else {
            count-=1; 
        }
    }
    return count;
  }
  
  module.exports = {
    time
  };