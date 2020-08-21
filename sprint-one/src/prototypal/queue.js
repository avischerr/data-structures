var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function (value) {
    var keys = Object.keys(this.storage);
    var newKey = keys.length;

    this.storage[newKey] = value;
    return this.storage;
  },

  dequeue: function () {
    var result;
    var keys = Object.keys(this.storage);

    if (keys.length === 0) {
      result = null;
    } else {
      result = this.storage['0'];
      delete this.storage['0'];
      for (var index in this.storage) {
        var newKey = parseInt(index) - 1;
        newKey = JSON.stringify(newKey);
        this.storage[newKey] = this.storage[index];
        delete this.storage[index];
      }
    }
    return result;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }
};


