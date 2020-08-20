var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);

  return instance;
};

var stackMethods = {

  //push
  push: function(value) {
    var newKey = Object.keys(this).length;

    this[newKey] = value;

    return this;
  },
  //pop
  pop: function() {
    var result;
    var keys = Object.keys(this);

    if (keys.length === 0) {
      result = null;
    } else {
      result = this[keys.length - 1];
      delete this[keys.length - 1];
    }

    return result;
  },
  //size
  size: function() {
    return Object.keys(this).length;
  }
};


