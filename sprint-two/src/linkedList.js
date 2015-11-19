var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var hold = list.head.value;
    list.head = list.head.next;
    return hold;
  };

  list.contains = function(target){  
    for(var node = list.head ; node !== null; node = node.next){
      if(node.value === target){
        return true;
      }
    }
    return false;  
  }
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


