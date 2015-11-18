var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var front = 0;
  var end = 0;
  someInstance.enqueue = function(value){
    end += 1;
    storage[end] = value;
  };

  someInstance.dequeue = function(){
    if(front <= end){
      front += 1;
      var hold = storage[front];
      delete storage[front];
      return hold;
    }
  };

  someInstance.size = function(){
    return end-front >=0 ? end - front : 0;
  };

  return someInstance;
};
