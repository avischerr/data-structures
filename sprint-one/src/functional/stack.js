var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var newKey;
    var keys = Object.keys(storage);

    if (keys.length === 0) {
      newKey = 0;
    } else {
      newKey = parseInt(keys[keys.length - 1]);
      newKey += 1;
    }

    JSON.stringify(newKey);
    storage[newKey] = value;

    return someInstance;
  };

  someInstance.pop = function() {
    var result;
    var keys = Object.keys(storage);

    if (keys.length === 0) {
      return {};

    } else if (keys[keys.length - 1]) {
      result = storage[keys[keys.length - 1]];
      delete storage[keys[keys.length - 1]];
      return result;
    }

  };

  someInstance.size = function() {
    if (!Object.keys(storage)) {
      return 0;
    } else {
      return Object.keys(storage).length;
    }
  };

  return someInstance;
};
