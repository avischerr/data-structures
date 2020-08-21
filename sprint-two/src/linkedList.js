var LinkedList = function() {
  var list = {};
  list.head = null; //Points to the first node
  list.tail = null; //Points to the last node
  list.length = 0;

  // takes a value and adds it to the end of the list (push)
  list.addToTail = function(value) {
    // creates a new node set to value
    const node = new Node(value);

    // if head doesn't exist
    if (!this.head) {
      // set head = tail = new node
      this.head = this.tail = node;
    // else
    } else {
      // set tail.next to new node
      this.tail.next = node;
      // set tail to new node
      this.tail = node;
    }
    // increment length ++
    this.length++;
  };

  // removes the first node from the list and returns its value (shift)
  list.removeHead = function() {
    // if length is 0
    if (this.length === 0) {
      // return undefined
      return undefined;
    }
    // set var to current head
    const currentHead = this.head;
    // reassign head to next node in line
    this.head = this.head.next;
    // decrease length --
    this.length--;
    // return current head
    return currentHead.value;
  };

  // returns boolean reflecting whether or not the passed-in value is in the linked list (similar to search)
  list.contains = function(target) {
    // establish vars
    var current = this.head;
    var found = false;

    // iterate over list
    while (current) {
      // if current value equals target
      if (current.value === target) {
        // found = true;
        found = true;
        // break
        break;
      }
      //set current value, to the next node
      current = current.next;
    }

    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 add to tail: linear
 remove head: constant
 contains: linear
 */
