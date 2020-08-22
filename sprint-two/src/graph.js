// undirected graph (symmetrical relationship between nodes)
// pseudoclassical instantiation (this.properties inside function, methods assigned to protoype, create new instance using new)

// what does the data structure look like? an object with node objects inside?
/*
storage: {
  node1: {
    node2: true,
    node3: true
  },
  node2: {
    node1: true
  }
}
*/

// Instantiate a new graph
var Graph = function() {
  // use this.properties if needed
  this.storage = {};
  this.size = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
  this.size++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  this.size--;
  for (var key in this.storage) {
    if (this.storage[key][node]) {
      delete this.storage[key][node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add node: constant
 contains: linear
 remove node: quadratic ?
 has edge: quadratic
 add edge: constant
 remove edge: constant
 for each node: linear
 */


