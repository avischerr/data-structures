var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.storage = {};
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value) {
    var newKey = Object.keys(this.storage).length;

    if (Object.keys(this.storage).length === 0) {
      newKey = 0;
    }

    this.storage[newKey] = value;
    return this.storage;
  },

  pop: function() {
    var result;
    var keys = Object.keys(this.storage);
    if (keys.length === 0) {
      return null;
    } else {
      result = this.storage[keys.length - 1];
      delete this.storage[keys.length - 1];
    }
    return result;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};