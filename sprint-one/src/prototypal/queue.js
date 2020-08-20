var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function (value) {
    var keys = Object.keys(this);
    var newKey = keys.length;

    this[newKey] = value;
    return this;
  },

  dequeue: function () {
    var result;
    var keys = Object.keys(this);

    console.log('before dequeue: ', JSON.stringify(this));

    if (keys.length > 0) {
      result = this[0];
      delete this[0];
      for (var index in this) {
        newKey = parseInt(index) - 1;
        newKey = JSON.stringify(newKey);
        this[newKey] = this[index];
        delete this[index];
      }
    }
    console.log('after dequeue: ', JSON.stringify(this));
    return result;
  },

  size: function () {
    return Object.keys(this).length;
  }
};


