var FreqStack = function () {
  this.stacks = {};
  this.maxCount = 0;
  this.count = {};
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  let valCount = (this.count[val] || 0) + 1;
  this.count[val] = valCount;
  if (valCount > this.maxCount) {
    this.maxCount = valCount;
    this.stacks[valCount] = [];
  }
  this.stacks[valCount].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let res = this.stacks[this.maxCount].pop();
  this.count[res] -= 1;
  if (this.stacks[this.maxCount].length === 0) {
    this.maxCount -= 1;
  }
  return res;
};

let freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop(); // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();
