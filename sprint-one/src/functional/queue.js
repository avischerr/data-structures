var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add a string to the back of the queue
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

  someInstance.dequeue = function() {
    // Remove and return the string at the front of the queue
    var result;
    var keys = Object.keys(storage);

    if (keys.length === 0) {
      return {};

    } else if (keys[0]) {
      result = storage[keys[0]];
      delete storage[keys[0]];
      return result;
    }
  };

  someInstance.size = function() {
    // Return the number of items in the queue
    if (!Object.keys(storage)) {
      return 0;
    } else {
      return Object.keys(storage).length;
    }
  };

  return someInstance;
};
