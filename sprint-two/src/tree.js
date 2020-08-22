var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

//takes any value, sets that as the target of a node, and adds that node as a child of the tree
// tree = { value: Daniel, children: [add here]}
// myTree.addChild(val)
treeMethods.addChild = function(value) {
  //add object to newTree.children ({})
  var node = Tree(value);
  this.children.push(node);
};

//takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  // edge case: root node is target
  if (this.value === target) {
    return true;
  }

  // iterate over the children array, recursively
  for (var i = 0; i < this.children.length; i++) {
    //if the target is in obj
    var child = this.children[i];
    if (child.contains(target) === true) {
      return true;
    }
  }

  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 add child: constant
 contains: exponential
 */
