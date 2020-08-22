// unique values, unordered
// prototypal style

/*
Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.

Note: Until the advanced section, your sets should handle only string values.

Note: This is a rather simple data structure. Take a look at the Wikipedia entry. Which native Javascript type fits the requirements best?
*/

var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

// takes any string and adds it to the set
// only accepts value if it doesn't already exist in the bucket
setPrototype.add = function(item) {
  //if this item doesnt exist in this.storage
  if (!this.storage.includes(item)) {
    //add item to this.storage
    this.storage.push(item);
  }
  //return this.storage
  return this.storage;
};

// takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  return this.storage.includes(item);
};

// takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  if (this.storage.includes(item)) {
    for (var i = 0; i < this.storage.length; i++) {
      if (this.storage[i] === item) {
        this.storage.splice(i, 1);
      }
    }
  }
  return this.storage;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
