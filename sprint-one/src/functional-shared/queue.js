var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.storage = {};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  // use "this"

  // enqueue: add a string to the back of the queue
  enqueue: function (value) {
    var keys = Object.keys(this.storage);
    var newKey;

    if (keys.length === 0) {
      newKey = 0;
    } else {
      newKey = keys.length;
    }

    this.storage[newKey] = value;
    return this.storage;
  },

  // Remove and return the string at the front of the queue
  dequeue: function () {
    var result;
    var keys = Object.keys(this.storage);

    if (keys.length > 0) {
      result = this.storage[0];
      delete this.storage[0];

      for (var index in this.storage) {
        var newKey = parseInt(index) - 1;
        newKey = JSON.stringify(newKey);
        this.storage[newKey] = this.storage[index];
        delete this.storage[index];
      }

    } else {
      result = null;
    }

    return result;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }
};