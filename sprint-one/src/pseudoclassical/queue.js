var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  //adding to the back of this.storage
  //if keys.length===0
  if (Object.keys(this.storage).length === 0) {
    //add value to storage[0]
    this.storage['0'] = value;
    //else
  } else {
    //if keys !== 0, adding the value to end + 1
    this.storage[this.end + 1] = value;
    //this.end++
    this.end++;
  }
  //return this.storage
  return this.storage;
},

Queue.prototype.dequeue = function() {
  var result;

  //if length === 0
  if (Object.keys(this.storage).length === 0) {
    //return null
    return null;
    //else
  } else {
    //saving the first element to result
    result = this.storage[this.start];
    //removing the first element
    delete this.storage[this.start];
    // if length !== 0
    if (Object.keys(this.storage).length !== 0) {
      //incrementing start++
      this.start++;
    }
  }

  //return result
  return result;

},

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var instance = new Queue();
